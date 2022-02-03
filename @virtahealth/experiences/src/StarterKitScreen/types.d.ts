// (11/11/21 Richard) This file probably needs to get updated to fix this rule. Avoiding for now
/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
export module GoogleHealthCare {
  type DataTypes = {
    string: string;
    boolean: boolean;
    number: number;
  };

  interface ValueObject<T = string> {
    value: T;
  }

  interface ItemAnswer {
    value?: {
      [Property in keyof DataTypes]?: {
        value?: DataTypes[Property];
      };
    };
  }

  interface CodingConceptExtensionItem {
    value?: {
      codingConcepts: Partial<CodableConcept>;
    };
  }

  interface CodableConcept {
    coding?: Code[];
    text?: ValueObject;
  }

  interface Code {
    code?: ValueObject;
    system?: ValueObject;
    display?: ValueObject;
  }

  type ExtensionItemType = ItemAnswer | CodingConceptExtensionItem;

  interface ExtensionItem {
    url: ValueObject;
    // this needs a value that can be either a ItemAnswer or CodingConceptExtensionItem
    // leaving it as empty for now because ive wasted enough time trying to get the or logic working correctly.
  }

  interface ItemResponse {
    linkId: { value: string };
    answer?: ItemAnswer[];
    item?: ItemResponse[];
  }

  interface InitialAnswer {
    linkId: string;
    answer: string | boolean | number;
  }

  interface Reference {
    uri: {
      value: string;
    };
  }

  interface EnableWhen {
    question: ValueObject;
    answer: {
      [Property in keyof DataTypes]?: {
        value: DataTypes[Property];
      };
    };
  }

  module Questionnaire {
    interface Item {
      code?: Code[];
      extension?: ExtensionItem[];
      item?: Item[];
      linkId: ValueObject;
      required?: { value?: boolean };
      text?: ValueObject;
      type: ValueObject;
      enableWhen?: EnableWhen[];
    }

    interface FhirQuestionnaire {
      id: ValueObject;
      item: Item[];
      meta: {
        versionId: ValueObject;
        tag: { code: ValueObject }[];
        profile: ValueObject[];
        lastUpdated: {
          valueUs: string;
          timezone: string;
          precision: string;
        };
      };
      name: ValueObject;
      status: ValueObject;
      title: ValueObject;
    }

    interface FhirResponse {
      author: Reference;
      id: string | undefined;
      item: ItemResponse[];
      questionnaire: Reference;
      source: Reference;
      subject: Reference;
      status: { value: string };
    }
  }
}

/* eslint-enable @typescript-eslint/prefer-namespace-keyword */
