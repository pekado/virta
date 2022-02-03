import { ListCardProps, VirtaAnalyticsClient } from "@virtahealth/components";
import { addSearchParam } from "@virtahealth/utils";
import { trackContentClicked } from "./analytics";
import { Content } from "./index";

export function getIcon(
  contentType: Content["type"]
): ListCardProps["typeIcon"] {
  switch (contentType) {
    case "article":
      return "read";
    case "podcast":
      return "listen";
    case "video":
      return "watch";
    case "recipe":
      return "recipe";
  }
}

export const generateThumbnailUrl = (url: string) =>
  addSearchParam(url, "w", "200");

export function mapContentToProps(
  origin: string,
  content: Content,
  analyticsClient: VirtaAnalyticsClient,
  handleOpenContent: (id: string) => void,
  // the 0-based index of the card in the array of items
  index: number
) {
  const imageUrl = content.heroImage.length
    ? {
        uri: generateThumbnailUrl(content.heroImage),
      }
    : undefined;
  return {
    key: content.id,
    title: content.title,
    description: content.previewText,
    typeInfo: content.timeToComplete || "",
    typeIcon: getIcon(content.type),
    imageUrl,
    onPress: () => {
      trackContentClicked({
        analyticsClient,
        title: content.title,
        path: content.id,
        origin,
        rank: index + 1,
      });
      handleOpenContent(content.id);
    },
  };
}
