import * as React from "react";
import {
  ListCard,
  styled,
  VirtaAnalyticsClient,
} from "@virtahealth/components";
import { FlatList, Platform } from "react-native";

import { Content } from "../../DiscoverTab";
import { mapContentToProps } from "../utils";
import { trackCollectionPageViewed } from "../analytics";

interface CategoryPageProps {
  content: Content[];
  isMobile?: boolean;
  category: string;
  handleOpenContent: (contentId: string) => void;
  analyticsClient: VirtaAnalyticsClient;
}

const StyledFlatList = styled(FlatList)<{ isMobile: boolean }>`
  margin-right: ${({ isMobile }) => (!isMobile ? 20 : 0)}px;
`;

const ListCardWrapper = styled.TouchableOpacity``;

export const CategoryPage: React.FC<CategoryPageProps> = ({
  content,
  isMobile = false,
  category,
  handleOpenContent,
  analyticsClient,
}) => {
  const renderListCard = React.useCallback(
    (item: Content, index: number) => {
      const listCardItem = mapContentToProps(
        category,
        item,
        analyticsClient,
        handleOpenContent,
        index
      );

      return (
        <ListCardWrapper onPress={listCardItem.onPress} key={listCardItem.key}>
          <ListCard isMobile={Platform.OS !== "web"} item={listCardItem} />
        </ListCardWrapper>
      );
    },
    [category, isMobile, analyticsClient]
  );

  // this allows each CategoryPage to keep a seperate scroll position
  const scrollPositions = React.useRef<{ [key: string]: number }>({}).current;
  const flatListRef = React.useRef<FlatList<unknown>>();
  React.useEffect(() => {
    flatListRef.current?.scrollToOffset({
      offset: scrollPositions[category] || 0,
      animated: false,
    });
  }, [category]);

  trackCollectionPageViewed({ analyticsClient, title: category });
  return (
    <StyledFlatList
      // @ts-ignore - ref types are slightly different
      ref={flatListRef}
      onScroll={(e) => {
        scrollPositions[category] = e.nativeEvent.contentOffset.y;
      }}
      isMobile={isMobile}
      renderItem={({ item, index }) => renderListCard(item as Content, index)}
      data={content}
      showsVerticalScrollIndicator={false}
    />
  );
};
