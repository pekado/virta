import {
  Attachment,
  VirtaDiagnosticReport,
  findRegexExtension,
} from "@virtahealth/components";
import { compact } from "@virtahealth/utils";
import { isZero } from "../../PatientLabResults/common";
import {
  antiGadQuestionnaire,
  biometricQuestionnaire,
  clinicalTrialQuestionnaire,
  cmpQuestionnaire,
  cPeptideQuestionnaire,
  hbA1cQuestionnaire,
  hsCrpQuestionnaire,
  lipidQuestionnaire,
  microalbuminCreatinineQuestionnaire,
  nmrLipoprofileQuestionnaire,
  serumInsulinQuestionnaire,
  tshQuestionnaire,
} from "../questionnaires";

export const labCategory = {
  coding: [
    {
      code: "LAB",
      display: "Laboratory",
      system: "http://hl7.org/fhir/v2/0074",
    },
  ],
};

function buildPerformer(
  vendor?: fhir.Organization
): fhir.Reference | undefined {
  if (!vendor || !vendor.id) {
    return;
  }

  return {
    display: vendor.name,
    reference: `/Organization/${vendor.id}`,
  };
}

function buildContainedRequestGroup(
  orderingPhysician?: fhir.Practitioner
): fhir.RequestGroup[] | undefined {
  if (!orderingPhysician || !orderingPhysician.id) {
    return;
  }

  return [
    {
      author: {
        reference: `Practitioner/${orderingPhysician.id}`,
      },
      intent: "order",
      resourceType: "RequestGroup",
      status: "completed",
    },
  ];
}

export function validateDiagnosticReport({
  collectionDate,
  observationQuestionnaires,
  observationResponses,
}: {
  collectionDate?: Date;
  observationQuestionnaires?: fhir.Questionnaire[];
  observationResponses?: fhir.QuestionnaireResponse[];
}) {
  let isValid = false;
  const errors: string[] = [];

  if (!collectionDate) {
    errors.push("Missing collection date");
  }

  if (!observationQuestionnaires || !observationResponses) {
    errors.push("Must select a panel");
  }

  if (
    observationQuestionnaires &&
    observationResponses &&
    observationQuestionnaires.length > 0 &&
    !(observationResponses.length === observationQuestionnaires.length)
  ) {
    errors.push("Error mapping field values with panels");
  }

  if (errors.length === 0) {
    isValid = true;
  }

  return { isValid, errors };
}

export function transformFormToDiagnosticReport({
  diagnosticReportId,
  collectionDate,
  virtaId,
  vendor,
  observationQuestionnaires,
  observationResponses,
  orderingPhysician,
  presentedForm,
}: {
  diagnosticReportId?: string;
  collectionDate?: Date;
  virtaId: string;
  vendor?: fhir.Organization;
  orderingPhysician?: fhir.Practitioner;
  observationQuestionnaires: fhir.Questionnaire[];
  observationResponses: fhir.QuestionnaireResponse[];
  presentedForm?: Attachment[];
}) {
  const performerReference = buildPerformer(vendor);
  const performer = performerReference
    ? [{ actor: performerReference }]
    : undefined;

  const contained = buildContainedRequestGroup(orderingPhysician);

  const { result, unansweredQuestions } = zipQuestionnairesAndResponses(
    observationQuestionnaires,
    observationResponses,
    virtaId,
    collectionDate!,
    performerReference
  );

  const cleanResult = compact(result);

  // If no responses are filled in
  if (!cleanResult.length) {
    return { diagnosticReport: null };
  }

  return {
    diagnosticReport: {
      category: labCategory,
      code: { coding: [] },
      contained,
      issued: collectionDate,
      id: diagnosticReportId,
      effective: collectionDate,
      resourceType: "DiagnosticReport",
      performer,
      result: cleanResult,
      status: "final",
      subject: subjectResource(virtaId),
      presentedForm: presentedForm
        ? presentedForm.map((attachment) => {
            return {
              data: attachment.file,
              url: attachment.url,
              title: attachment.title,
              contentType: attachment.contentType,
            };
          })
        : undefined,
    },
    unansweredQuestions,
  };
}

const questionnaireMap = {
  "/24331-1": lipidQuestionnaire,
  "/24323-8": cmpQuestionnaire,
  "/4548-4": hbA1cQuestionnaire,
  "/56540-8": antiGadQuestionnaire,
  "/95080-8": cPeptideQuestionnaire,
  "/30522-7": hsCrpQuestionnaire,
  "/34535-5": microalbuminCreatinineQuestionnaire,
  "/59062-0": nmrLipoprofileQuestionnaire,
  "/95110-3": serumInsulinQuestionnaire,
  "/11580-8": tshQuestionnaire,
  // Since these are individual observations
  // and not exactly ones from a panel with a specific code,
  // we'll also want to map using panel name / questionnaire item text
  HbA1c: hbA1cQuestionnaire,
  "Hemoglobin A1c": hbA1cQuestionnaire,
  hsCRP: hsCrpQuestionnaire,
  "GAD65 Ab Ser": antiGadQuestionnaire,
  "GAD65 Antibody": antiGadQuestionnaire,
  TSH: tshQuestionnaire,
  "Clinical Trial": clinicalTrialQuestionnaire,
  Biometric: biometricQuestionnaire,
};

export function mapDiagnosticReportToForm(
  diagnosticReport: VirtaDiagnosticReport
) {
  const panels = diagnosticReport.result;
  const questionnaires: fhir.Questionnaire[] = [];
  const responses: fhir.QuestionnaireResponse[] = [];
  const vendor = diagnosticReport.performer
    ? diagnosticReport.performer[0] || undefined
    : undefined;

  const requestGroup = diagnosticReport.contained
    ? (diagnosticReport.contained[0] as fhir.RequestGroup)
    : undefined;

  for (const panel of panels) {
    let panelIdentifier: string | undefined = "";
    if (panel.code.coding) {
      panelIdentifier = `/${panel.code.coding[0].code}`;
    } else {
      // This covers the special case with hbA1c/antiGad/TSH panels
      // or any other custom panels we have created.
      // Use the code text instead
      panelIdentifier = panel.code?.text;
    }

    if (!panelIdentifier) {
      continue; // If no identifier, move on to next panel
    }

    const panelQuestionnaire =
      questionnaireMap[panelIdentifier as keyof typeof questionnaireMap];

    if (!panelQuestionnaire) {
      continue; // If no matched questionnaire, move on to next panel
    }

    questionnaires.push(panelQuestionnaire);
    responses.push({
      status: "in-progress",
      item: [
        {
          linkId: panelQuestionnaire.item[0].linkId,
          item: panel.related
            ? compact(
                panel.related?.map((observation) => {
                  if (!observation.code.coding) {
                    return;
                  }

                  const linkId = `/${observation.code.coding[0].code}`;
                  // @ts-ignore - fix type
                  const question = panelQuestionnaire.item[0].item.find(
                    // @ts-ignore - fix type
                    (item) => item.linkId === linkId
                  );
                  // We save numeric values as `valueQuantity` to the observation,
                  // but the FHIR questions can differentiate between `quantity` or `decimal`
                  const mappedNumericValueKey =
                    question?.type === "quantity"
                      ? "valueQuantity"
                      : "valueDecimal";
                  const answer = observation.valueQuantity
                    ? {
                        [mappedNumericValueKey]:
                          mappedNumericValueKey === "valueQuantity"
                            ? { value: observation.valueQuantity.value }
                            : observation.valueQuantity.value,
                      }
                    : { valueString: observation.valueString };
                  return {
                    linkId,
                    answer: [answer],
                  };
                })
              )
            : [],
        },
      ],
    });
  }

  return {
    observationQuestionnaires: questionnaires,
    observationResponses: responses,
    vendor,
    attachments: diagnosticReport.presentedForm,
    orderingPhysician: requestGroup
      ? {
          id: getPractitionerIdFromReference(requestGroup.author?.reference),
        }
      : undefined,
  };
}

function getPractitionerIdFromReference(ref?: string) {
  if (!ref) {
    return;
  }

  return ref.split("Practitioner/")[1];
}

function zipQuestionnairesAndResponses(
  observationQuestionnaires: fhir.Questionnaire[],
  observationResponses: fhir.QuestionnaireResponse[],
  virtaId: string,
  collectionDate: Date,
  performerReference?: fhir.Reference
) {
  const unansweredQuestions: fhir.QuestionnaireItem[] = [];
  const result = observationQuestionnaires.map(
    (questionnaire, questionnaireIndex) => {
      if (questionnaire.item && questionnaire.item[0].type !== "group") {
        const response = observationResponses[questionnaireIndex].item![0];
        if (!response) {
          unansweredQuestions.push(questionnaire.item[0]);
          return;
        }

        return createObservationFromQuestionAndResponse(
          questionnaire.item[0],
          observationResponses[questionnaireIndex].item![0],
          virtaId,
          collectionDate,
          // @ts-ignore - fix type - possible undefined
          performerReference
        );
      }
      // @ts-ignore - fix types of reduce args
      const hasMember = questionnaire.item![0].item!.reduce((acc, question) => {
        if (question.type === "display") {
          return acc;
        }

        if (question.type === "group") {
          const nestedItems = question.item!.map((nestedItem) => {
            if (nestedItem.type !== "display") {
              const { linkId: nestedItemLinkId } = nestedItem;
              const nestedResponse = observationResponses[
                questionnaireIndex
              ].item![0].item!.find(
                (responseItem) => responseItem.linkId === nestedItemLinkId
              );

              const nestedObservation =
                createObservationFromQuestionAndResponse(
                  nestedItem,
                  // @ts-ignore - fix type - possible undefined
                  nestedResponse,
                  virtaId,
                  collectionDate,
                  performerReference
                );

              if (!nestedObservation) {
                unansweredQuestions.push(nestedItem);
                return;
              }

              return nestedObservation;
            }
          });

          const cleanNestedItems = compact(nestedItems);

          if (!cleanNestedItems.length) {
            return acc;
          }

          return [...acc, ...cleanNestedItems];
        }

        const response = observationResponses[
          questionnaireIndex
        ].item![0].item?.find((resp) => resp.linkId === question.linkId);

        const newItem = createObservationFromQuestionAndResponse(
          question,
          // @ts-ignore - fix type - possible undefined
          response,
          virtaId,
          collectionDate,
          performerReference
        );

        if (!newItem) {
          unansweredQuestions.push(question);
          return acc;
        }

        return [...acc, newItem];
      }, []);

      if (
        // @ts-ignore - fix type
        !hasMember.length
      ) {
        return;
      }

      return {
        status: "final",
        category: [labCategory],
        code: {
          coding: questionnaire.item![0].code,
          text: questionnaire.item![0].text,
        },
        resourceType: "Observation",
        subject: subjectResource(virtaId),
        issued: collectionDate,
        effectiveDateTime: collectionDate,
        performer: performerReference ? [performerReference] : undefined,
        hasMember,
      };
    }
  );
  return { result, unansweredQuestions };
}

function createObservationFromQuestionAndResponse(
  question: fhir.QuestionnaireItem,
  response: fhir.QuestionnaireResponseItem,
  virtaId: string,
  collectionDate: Date,
  performer: fhir.Reference
) {
  if (!response) {
    return;
  }

  // @ts-ignore - fix type
  const answer = response.answer![0];

  if (
    !answer.valueString &&
    !answer.valueDecimal &&
    !isZero(answer.valueDecimal) &&
    !answer.valueQuantity &&
    // @ts-ignore - fix type
    !isZero(answer.valueQuantity?.value)
  ) {
    return;
  }

  const answerKey = Object.keys(answer)[0];

  const answerValue =
    answerKey === "valueQuantity"
      ? answer[answerKey]!.value
      : answer[answerKey as keyof typeof answer];

  if (answerValue === undefined) {
    return;
  }

  const regexExtension = findRegexExtension(question);
  let value = {};

  if (regexExtension && isNaN(Number(answerValue))) {
    // These are the observations that accept `>` and `<` inputs
    value = { valueString: answerValue };
  } else {
    value = {
      valueQuantity: {
        // TODO - fix type
        value: parseFloat(answerValue as string),
        unit: question.extension![0].valueCoding!.display,
      },
    };
  }

  return {
    status: "final",
    category: [labCategory],
    code: {
      coding: question.code,
      text: question.text,
    },
    performer: performer ? [performer] : undefined,
    resourceType: "Observation",
    subject: subjectResource(virtaId),
    ...value,
    issued: collectionDate,
    effectiveDateTime: collectionDate,
  };
}

function subjectResource(virtaId: string) {
  return {
    reference: `Patient/${virtaId}`,
  };
}
