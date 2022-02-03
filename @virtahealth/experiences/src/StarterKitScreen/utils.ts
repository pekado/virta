import { get, set } from "lodash";
// Disabling for now. It is because this file is a .d.ts. We probably don't want it to be a .d.ts
// eslint-disable-next-line import/no-unresolved
import { GoogleHealthCare } from "./types";
import { FormValues } from ".";

const stringToBoolean = (value: string) => {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  }
  return value;
};

const extractItemAnswers = (
  item: GoogleHealthCare.Questionnaire.Item[] = [],
  values: FormValues
): GoogleHealthCare.ItemResponse[] => {
  const results = item.reduce<GoogleHealthCare.ItemResponse[]>(
    (result, current) => {
      const {
        type: { value: typeValue },
        linkId: { value: linkId },
        item,
      } = current;

      let type = typeValue?.toLowerCase();
      if (type === "group") {
        return [
          ...result,
          { linkId: { value: linkId }, item: extractItemAnswers(item, values) },
        ];
      } else {
        const answer: GoogleHealthCare.ItemAnswer[] = [];
        let currentValue = get(values, linkId);
        if (type === "boolean") {
          currentValue = stringToBoolean(currentValue);
        }

        if (type === "choice") {
          type = "string";
        }

        if (currentValue !== undefined) {
          const key = type as keyof GoogleHealthCare.DataTypes;
          answer.push({ value: { [key]: { value: currentValue } } });
        }

        return [
          ...result,
          {
            linkId: { value: linkId },
            answer,
          },
        ];
      }
    },
    []
  );
  return results;
};

export const generateQuestionnaireResponse = (
  questionnaire: GoogleHealthCare.Questionnaire.FhirQuestionnaire,
  values: FormValues,
  { virtaId, responseId }: { virtaId: string; responseId?: string }
): GoogleHealthCare.Questionnaire.FhirResponse => {
  const {
    id: { value: id = "" },
    item = [],
  } = questionnaire;
  const ptRef = `Patient/${virtaId}`;
  const questionnaireRef = `Questionnaire/${id}`;

  return {
    author: {
      uri: { value: ptRef },
    },
    id: responseId,
    item: extractItemAnswers(item, values),
    questionnaire: {
      uri: { value: questionnaireRef },
    },
    source: {
      uri: { value: ptRef },
    },
    status: { value: "COMPLETED" },
    subject: {
      uri: { value: ptRef },
    },
  };
};

const iterateItems = (
  item: GoogleHealthCare.Questionnaire.Item[] = [],
  callBack: (currentItem: GoogleHealthCare.Questionnaire.Item) => void
) => {
  item?.forEach((currentItem) => {
    if (currentItem.type.value?.toLowerCase() === "group") {
      iterateItems(currentItem.item, callBack);
    } else {
      callBack(currentItem);
    }
  });
};

export const initialAnswersToValues = (
  initialAnswers: GoogleHealthCare.InitialAnswer[] = [],
  questionnaire: GoogleHealthCare.Questionnaire.FhirQuestionnaire
) => {
  const results = initialAnswers.reduce(
    (prev: any, cur: { linkId: string; answer: any }) => {
      set(prev, cur.linkId, cur.answer);
      return prev;
    },
    {}
  );

  iterateItems(questionnaire.item, (currentItem) => {
    const currentValue = get(results, currentItem.linkId.value);
    const hasValue = currentValue !== undefined;
    const type = currentItem.type.value?.toLowerCase();
    if (type === "boolean") {
      set(results, currentItem.linkId.value, stringToBoolean(currentValue));
    }
    // set string and choice types to empty string for validation to work correctly for formik
    if (!hasValue && (type === "string" || type === "choice")) {
      set(results, currentItem.linkId.value, "");
    }
  });

  return results;
};
