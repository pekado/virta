import { uniqBy } from "@virtahealth/utils";
import { Content, ContentCollectionProps } from "./index";

export type ContentType =
  | "article"
  | "recipe"
  | "podcast"
  | "video"
  | "restaurant"
  | "grocery"
  | "food";

export interface CollectionResponseItem {
  _id: string;
  name: string;
  __i18n_lang: "en-US" | "es-US";
  content_items: ContentResponseItem[];
  care_protocols: CareProtocol[];
  description?: string;
}

interface CareProtocol {
  name: string;
  fhir_reference: "";
  ref: "";
}

export interface ContentResponseItem {
  _id: string;
  _type: ContentType;
  image_source_url: string;
  title: string;
  preview_text?: string;
  timeToComplete?: {
    amount: number;
    unit: {
      label: string;
      label_plural?: string;
      abbreviation?: string;
    };
  };
}

export interface CollectionResponse {
  collections: CollectionResponseItem[];
}

export function deserializeTimeToComplete(
  timeToComplete: ContentResponseItem["timeToComplete"]
): string {
  if (!timeToComplete) {
    return "";
  }
  const { amount, unit } = timeToComplete;
  const { label, label_plural: labelPlural, abbreviation } = unit;

  if (amount === 0 || !label || label.length === 0) {
    return "";
  }

  // prefer the abbreviation if it exists
  // otherwise, use the plural label as necessary if that exists, or compute a plural label
  // finally, fall back to the default label
  const unitString =
    abbreviation ?? (amount > 1 ? labelPlural ?? `${label}s` : label);
  return `${amount} ${unitString}`;
}

export function deserializeContentResponseItem(
  item: ContentResponseItem
): Content {
  return {
    id: item._id,
    title: item.title,
    heroImage: item.image_source_url,
    type: item._type,
    previewText: item.preview_text || "",
    timeToComplete: deserializeTimeToComplete(item.timeToComplete),
  };
}

export function deserializeCollectionItem(
  collection: CollectionResponseItem
): ContentCollectionProps {
  return {
    name: collection.name,
    title: collection.name,
    id: collection._id,
    description: collection.description || "",
    contents: uniqBy(
      collection.content_items.map((item) =>
        deserializeContentResponseItem(item)
      ),
      "id"
    ),
  };
}

export function deserializeCollectionsResponse(
  data: CollectionResponse
): ContentCollectionProps[] {
  return data.collections.map((collection) =>
    deserializeCollectionItem(collection)
  );
}
