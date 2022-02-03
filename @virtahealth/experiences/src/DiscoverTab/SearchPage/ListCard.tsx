import * as React from "react";
import {
  ListCardProps,
  ListCard as VirtaListCard,
  VirtaAnalyticsClient,
  styled,
} from "@virtahealth/components";

import { getIcon, generateThumbnailUrl } from "../utils";
import { trackContentClicked } from "../analytics";
import { Content } from "..";

interface Props {
  item: Content;
  // the 0-based index of the card in the array of items
  index: number;
  isCompact: boolean;
  onOpenContent: (id: string) => void;
  analyticsClient: VirtaAnalyticsClient;
}

const ListCardWrapper = styled.TouchableOpacity``;

export function ListCard({
  item,
  index,
  isCompact,
  onOpenContent,
  analyticsClient,
}: Props) {
  const imageUrl = item.heroImage.length
    ? { uri: generateThumbnailUrl(item.heroImage) }
    : undefined;
  const listCardItem: ListCardProps = {
    title: item.title,
    description: item.previewText,
    typeIcon: getIcon(item.type),
    typeInfo: item.timeToComplete || "",
    imageUrl,
    onPress: () => {
      trackContentClicked({
        analyticsClient,
        title: item.title,
        path: item.id,
        origin: item.title,
        rank: index + 1,
      });
      onOpenContent(item.id);
    },
  };

  return (
    <ListCardWrapper onPress={listCardItem.onPress} key={index}>
      <VirtaListCard isMobile={isCompact} item={listCardItem} />
    </ListCardWrapper>
  );
}
