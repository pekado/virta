import * as React from "react";
import { FlatList } from "react-native";
import { VirtaAnalyticsClient } from "@virtahealth/components";

import { ContentCollectionProps } from "../../DiscoverTab";
import { trackExplorePageViewed } from "../analytics";
import { CarouselRow } from "./CarouselRow";

interface ExplorePageProps {
  collections: ContentCollectionProps[];
  handleSeeAllPressed: (id: any) => void;
  handleOpenContent: (contentId: string) => void;
  analyticsClient: VirtaAnalyticsClient;
  addTopPadding: boolean;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  collections,
  handleSeeAllPressed,
  handleOpenContent,
  analyticsClient,
  addTopPadding,
}) => {
  const renderCarouselRow = React.useCallback(
    ({ item, index }) => (
      <CarouselRow
        item={item}
        index={index}
        key={index}
        analyticsClient={analyticsClient}
        handleOpenContent={handleOpenContent}
        handleSeeAllPressed={handleSeeAllPressed}
      />
    ),
    [analyticsClient, handleOpenContent, handleSeeAllPressed]
  );

  trackExplorePageViewed({ analyticsClient });

  return (
    <FlatList
      data={collections}
      renderItem={renderCarouselRow}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        paddingTop: addTopPadding ? 8 : 0,
        paddingBottom: 32,
      }}
    />
  );
};
