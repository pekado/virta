import { PlatformOSType } from "react-native";
import * as constants from "./constants";

// returns a list containing all question LinkIds that have been responded to, plus the next available LinkId
export function getLinkIdsForAvailableQuestionItems(
  linkIds: fhir.QuestionnaireItem["linkId"][],
  questionnaireResponse: fhir.QuestionnaireResponse
) {
  if (!linkIds.length) {
    return [];
  }

  if (questionnaireResponse.item && questionnaireResponse.item.length) {
    const responses = questionnaireResponse.item;
    const lastAnswerLinkId = responses[responses.length - 1].linkId;
    const nextQuestionIndex =
      linkIds.findIndex((linkId) => linkId === lastAnswerLinkId) + 1;
    return nextQuestionIndex <= linkIds.length
      ? linkIds.slice(0, nextQuestionIndex + 1).map((item) => item)
      : [];
  }
  return [linkIds[0]];
}

// Flattens up to 2 levels of depth. Consider using recursion if more depth is desired.
export function getFlattenedQuestionnaireItemLinkIds(
  questionnaire: fhir.Questionnaire
): fhir.QuestionnaireItem["linkId"][] {
  const items: fhir.QuestionnaireItem[] = [];
  if (questionnaire.item) {
    questionnaire.item.forEach((item) => {
      if (item.type === "group") {
        item.item?.forEach((subItem) => {
          items.push(subItem);
        });
      } else {
        items.push(item);
      }
    });
  }
  return items.map((item) => item.linkId);
}

export function getQuestionnaireTitle(
  questionnaire: fhir.Questionnaire | undefined
) {
  if (!questionnaire) {
    return "";
  }
  return questionnaire.title || "";
}

// new questions appear from bottom on mobile and narrow displays
export function calculateFlexDirection(width: number) {
  return width > constants.MOBILE_WIDTH_STANDARD_BREAKPOINT
    ? "column"
    : "column-reverse";
}

export function calculateHeaderSizeInPixels(height: number) {
  if (height >= constants.MOBILE_HEIGHT_LANDSCAPE_BREAKPOINT) {
    return 80;
  }
  return 30;
}

export function calculateFollowUpViewBodyHeightInPixels(
  height: number,
  platform: PlatformOSType
) {
  const headerHeight = calculateHeaderSizeInPixels(height);
  return platform === "web"
    ? height -
        (headerHeight +
          constants.PA_MOBILE_WEB_APP_INSTALL_BAR_HEIGHT +
          constants.PA_WEB_NAVBAR_HEIGHT)
    : height - headerHeight;
}

export function calculateQuestionnaireBodyHeightInPixels(
  height: number,
  platform: PlatformOSType
) {
  const headerHeight = calculateHeaderSizeInPixels(height);
  return platform === "web"
    ? height -
        (headerHeight +
          constants.PA_MOBILE_WEB_APP_INSTALL_BAR_HEIGHT +
          constants.PA_WEB_NAVBAR_HEIGHT)
    : height - (headerHeight + constants.PA_WEB_NAVBAR_HEIGHT);
}

export function calculateImageDimensionsInPixels({
  screenHeight,
  screenWidth,
}: {
  screenHeight: number;
  screenWidth: number;
}): {
  height: number;
  width: number;
} {
  const [actualImageHeight, actualImageWidth] = [772, 1166];
  const maxImageWidth = 500;

  let scale = 0.9;
  const screenWidthRatio = screenWidth / actualImageWidth;

  if (screenHeight < screenWidth) {
    scale = 0.4;
  }
  if (screenHeight >= 1000) {
    scale = 0.6;
  }

  const scaledWidth = Math.min(maxImageWidth, scale * screenWidth);
  const scaledHeight = Math.min(
    (actualImageHeight * maxImageWidth) / actualImageWidth, // scale height based on ratio of maxWidth / actualWidth
    scale * actualImageHeight * screenWidthRatio // scale height normally
  );
  return { height: scaledHeight, width: scaledWidth };
}

export function deserializeQuestionnaire(fhirQuestionnaireJson: any) {
  const questionnaire: fhir.Questionnaire = {
    status: fhirQuestionnaireJson.status?.value,
    meta: {
      lastUpdated: fhirQuestionnaireJson.meta?.lastUpdated,
      profile: fhirQuestionnaireJson.meta?.profile?.value,
      versionId: fhirQuestionnaireJson.meta?.profile?.value,
    },
    title: fhirQuestionnaireJson.title?.value,
    publisher: fhirQuestionnaireJson.publisher?.value,
    id: fhirQuestionnaireJson.id?.value,
    item: deserializeQuestionItem(fhirQuestionnaireJson.item),
    contained:
      fhirQuestionnaireJson.contained &&
      fhirQuestionnaireJson.contained.length > 0
        ? deserializeContainedValueSets(fhirQuestionnaireJson.contained)
        : [],
  };

  return questionnaire;
}

function deserializeQuestionItem(questionItemsJson: any[]): any {
  return questionItemsJson.map(
    (item: any) =>
      ({
        code: [
          {
            code: item.code[0]?.code?.value,
            display: item.code[0]?.display?.value,
            system: item.code[0]?.system?.value,
          },
        ],
        linkId: item.linkId?.value,
        required: item.required?.value,
        text: item.text?.value,
        type: item.type?.value?.toLowerCase(),
        options: {
          reference: `#${item.options?.fragment?.value || ""}`,
        },
        item:
          item.item && item.item.length > 0
            ? deserializeQuestionItem(item.item)
            : [],
      } as fhir.QuestionnaireItem)
  );
}

function deserializeContainedValueSets(contained: any[]) {
  return contained.map((containedResource) => {
    const { valueSet } = containedResource;
    return {
      resourceType: "ValueSet",
      description: valueSet?.description?.value,
      id: valueSet?.id?.value,
      name: valueSet?.name?.value,
      status: valueSet?.status?.value,
      immutable: valueSet?.immutable.value,
      compose: {
        include: [
          {
            concept: valueSet.compose?.include[0]?.concept?.map(
              (concept: any) =>
                ({
                  code: concept?.code?.value,
                  display: concept?.display?.value,
                } as fhir.ValueSetComposeIncludeConcept)
            ),
          },
        ],
      },
    } as fhir.Resource;
  });
}

export function serializeQuestionnaireResponse(
  questionnaireResponse: fhir.QuestionnaireResponse,
  questionnaire: fhir.Questionnaire,
  virtaId: string
): fhir.QuestionnaireResponse | undefined {
  if (!questionnaireResponse.item || !questionnaire.item) {
    return;
  }

  const patientReference: fhir.Reference = {
    reference: `Patient/${virtaId}`,
  };

  const linkIdToResponses = getLinkIdToQuestionnaireResponseItemMap(
    questionnaireResponse.item
  );

  //  questionnaireResponse.item is a flat list of response items
  //  when creating a QuestionnaireResponse that is linked to a Questionnaire,
  //  the structure must be the same (i.e. Questionnaire.item nesting must be
  //  reflected in QuestionnaireResponse.item)
  const mapResponseItemsToQuestionItems = (
    questionItems: fhir.QuestionnaireItem[]
  ): fhir.QuestionnaireResponseItem[] => {
    return questionItems.map((item) => {
      const responseItem: fhir.QuestionnaireResponseItem = {
        linkId: item.linkId,
      };
      if (item.type === "group") {
        return {
          ...responseItem,
          item:
            item.item && item.item.length
              ? mapResponseItemsToQuestionItems(item.item)
              : [],
        };
      } else {
        return item.linkId in linkIdToResponses
          ? linkIdToResponses[item.linkId]
          : { ...responseItem, answer: [] };
      }
    });
  };

  const questionnaireResponseData: fhir.QuestionnaireResponse = {
    resourceType: "QuestionnaireResponse",
    status: "completed",
    source: patientReference,
    subject: patientReference,
    author: patientReference,
    questionnaire: {
      reference: `Questionnaire/${questionnaire.id}`,
    },
    item: mapResponseItemsToQuestionItems(questionnaire.item),
  };
  return questionnaireResponseData;
}

export function getLinkIdToQuestionnaireResponseItemMap(
  responseItems: fhir.QuestionnaireResponseItem[]
): Record<string, fhir.QuestionnaireResponseItem> {
  return responseItems.reduce<Record<string, fhir.QuestionnaireResponseItem>>(
    (linkIdToQuestionnaireResponseItem, questionnaireResponseItem) => {
      linkIdToQuestionnaireResponseItem[questionnaireResponseItem.linkId] = {
        ...questionnaireResponseItem,
      };
      return linkIdToQuestionnaireResponseItem;
    },
    {}
  );
}

interface QuestionnaireSection {
  title: string;
  data: fhir.QuestionnaireItem[];
}
export function groupQuestionnaireItemsBySection(
  items: fhir.QuestionnaireItem[] | undefined,
  availableLinkIds: fhir.QuestionnaireItem["linkId"][]
): QuestionnaireSection[] {
  if (!items) {
    return [];
  }
  const instructionLabels = new Set<string>();
  const itemsMappedByInstruction: Record<string, QuestionnaireSection> =
    items.reduce((mappedItems, currentItem) => {
      const instruction = currentItem.text!;
      instructionLabels.add(instruction);
      const filteredItems = currentItem.item!.filter(
        (item) => availableLinkIds.indexOf(item.linkId) > -1
      );
      if (!(instruction in mappedItems)) {
        mappedItems[instruction] = {
          title: instruction,
          data: [...filteredItems],
        };
      } else {
        mappedItems[instruction].data = [
          ...mappedItems[instruction].data,
          ...filteredItems,
        ];
      }
      return mappedItems;
    }, {} as Record<string, QuestionnaireSection>);

  return Array.from(instructionLabels.values())
    .filter((label) => itemsMappedByInstruction[label].data.length > 0)
    .map((label) => itemsMappedByInstruction[label]);
}
