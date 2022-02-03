export function findResponse(
  linkId: string,
  itemArray?: fhir.QuestionnaireResponseItem[]
) {
  if (!itemArray) {
    return undefined;
  }
  const responseIndex = itemArray.findIndex((item) => item.linkId === linkId);
  return responseIndex > -1 ? itemArray[responseIndex] : undefined;
}

export function setSubItemResponse(
  item: fhir.QuestionnaireResponseItem,
  baseResponse: fhir.QuestionnaireResponseItem,
  setBaseResponse: (item: fhir.QuestionnaireResponseItem) => void
) {
  const result = deepCopy(baseResponse);
  const itemIndex = result!.item!.findIndex(
    (responseItem) => responseItem.linkId === item.linkId
  );
  itemIndex > -1 ? (result!.item![itemIndex] = item) : result!.item!.push(item);
  setBaseResponse(result!);
}

function deepCopy<T>(object?: T): T | undefined {
  if (object === undefined) {
    return undefined;
  }
  return JSON.parse(JSON.stringify(object));
}

export const FhirQuestionnaireUtils = {
  findResponse,
  setSubItemResponse,
};
