import * as React from "react";
import {
  styled,
  Carousel,
  BodySmall,
  Button,
  HelperText,
  VirtaAnalyticsClient,
} from "@virtahealth/components";
import { getFontFamilyAndWeight } from "@virtahealth/utils";

import { ContentCollectionProps } from "../../DiscoverTab";
import { mapContentToProps } from "../utils";
import { CarouselCard } from "./CarouselCard";

interface Props {
  item: ContentCollectionProps;
  index: number;
  analyticsClient: VirtaAnalyticsClient;
  handleOpenContent: (id: string) => void;
  handleSeeAllPressed: (id: string) => void;
}

const CollectionRow = styled.View<{ index: number }>`
  margin-top: ${({ index }) => (index === 0 ? 0 : 32)}px;
`;
const CollectionRowHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 16px;
`;

const CollectionRowInfo = styled.View`
  flex: 1;
`;

const CollectionTitle = styled(BodySmall)`
  ${() => getFontFamilyAndWeight("Whitney", "700")}
`;
const CollectionDescription = styled(HelperText)`
  padding: 5px 0 5px;
`;
const CollectionSeeAll = styled.View``;

const seeAllDescriptor = {
  id: "explorePageSeeAll",
  defaultMessage: "See all",
  description: "See all button text in Explore page",
};

export function CarouselRow({
  item,
  index,
  analyticsClient,
  handleOpenContent,
  handleSeeAllPressed,
}: Props) {
  const carouselItems = item.contents.map((content, index) =>
    mapContentToProps(
      item.title,
      content,
      analyticsClient,
      handleOpenContent,
      index
    )
  );

  return (
    <CollectionRow index={index} key={`${item.id}-${index}`}>
      <CollectionRowHeader>
        <CollectionRowInfo>
          <CollectionTitle>{item.title}</CollectionTitle>
          {item.description?.length > 0 && (
            <CollectionDescription>{item.description}</CollectionDescription>
          )}
        </CollectionRowInfo>
        <CollectionSeeAll>
          <Button
            intent="none"
            appearance="solid"
            labelMessage={seeAllDescriptor}
            size="small"
            onPress={() => handleSeeAllPressed(item.id)}
          />
        </CollectionSeeAll>
      </CollectionRowHeader>
      <Carousel
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        carouselItems={carouselItems}
        renderFunction={CarouselCard}
      />
    </CollectionRow>
  );
}
