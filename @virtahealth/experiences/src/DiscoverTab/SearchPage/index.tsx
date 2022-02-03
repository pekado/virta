import * as React from "react";
import { FlatList, ListRenderItemInfo, Platform } from "react-native";
import {
  styled,
  Body,
  Spinner,
  VirtaContextComponents,
  Heading,
  ThemeContext,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";

import { useIntl } from "react-intl";
import { Content } from "../../DiscoverTab";
import {
  trackPopularSearchOptionClicked,
  trackSearchResultClicked,
  trackSearchResultsPageViewed,
} from "../analytics";
import { PopularSearchOption } from "./PopularSearchOption";
import { ListCard } from "./ListCard";

interface SearchPageProps {
  isCompact?: boolean;
  isLoadingSearchResults: boolean;
  search: string;
  searchResults: Content[];
  onSearchChange: (search: string) => void;
  handleOpenContent: (contentId: string) => void;
  omnisearch: boolean;
}

const DISCOVER_SEARCH_PAGE_NAME = "Discover Search Page";
const DISCOVER_SEARCH_RESULTS_PAGE_NAME = "Discover Search Results Page";

const StyledSearchPage = styled.View``;

const StyledFlatList = styled(FlatList)``;

const NoResultsText = styled(Heading).attrs(
  (): React.ComponentProps<typeof Heading> => ({
    size: 3,
    color: "subdued",
    weight: 500,
  })
)`
  text-align: center;
  padding: 15px 0;
`;

const PopularSearchesText = styled(Body)`
  text-align: center;
  padding: 47px 0 7px 0;
`;

const SpinnerWrapper = styled.View`
  margin-top: 15px;
`;

export const SearchPage: React.FC<SearchPageProps> = ({
  isCompact = false,
  isLoadingSearchResults,
  search,
  searchResults,
  onSearchChange,
  handleOpenContent,
  omnisearch,
}) => {
  const { analyticsClient } = React.useContext(VirtaContextComponents);
  const intl = useIntl();
  const theme = React.useContext(ThemeContext);

  const renderListCard = React.useCallback(
    ({ item, index }: ListRenderItemInfo<Content>) => {
      return (
        <ListCard
          item={item}
          index={index}
          isCompact={Platform.OS !== "web"}
          onOpenContent={(contentId) => {
            if (analyticsClient) {
              trackSearchResultClicked({
                analyticsClient,
                title: item.title,
                path: item.id,
                origin: DISCOVER_SEARCH_RESULTS_PAGE_NAME,
                searchTerm: search,
                numberOfHits: searchResults.length,
                rank: index + 1,
              });
            }
            handleOpenContent(contentId);
          }}
          analyticsClient={analyticsClient!}
        />
      );
    },
    [isCompact, handleOpenContent, analyticsClient, search]
  );

  React.useEffect(() => {
    if (analyticsClient && search.length && !isLoadingSearchResults) {
      trackSearchResultsPageViewed({
        analyticsClient,
        title: DISCOVER_SEARCH_RESULTS_PAGE_NAME,
        searchTerm: search,
        numberOfHits: searchResults.length,
      });
    }
  }, [search, analyticsClient, searchResults, isLoadingSearchResults]);

  const handlePopularSearchItemClicked = (search: string) => {
    if (analyticsClient) {
      trackPopularSearchOptionClicked({
        analyticsClient,
        title: DISCOVER_SEARCH_PAGE_NAME,
        origin: DISCOVER_SEARCH_PAGE_NAME,
        searchTerm: search,
      });
    }
    onSearchChange(search);
  };

  if (isLoadingSearchResults) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (searchResults.length === 0) {
    return (
      <StyledSearchPage>
        {search !== "" && (
          <NoResultsText>
            {intl.formatMessage(messages.noSearchResults)}
          </NoResultsText>
        )}
        {omnisearch && (
          <>
            <PopularSearchesText message={messages.recentSearches} />
            <PopularSearchesText message={messages.tryPopularFoodSearches} />
            {[messages.cucumber, messages.greenSalad].map((m) => (
              <PopularSearchOption
                message={m}
                onSearchChange={handlePopularSearchItemClicked}
              />
            ))}
            <PopularSearchesText message={messages.tryPopularSearches} />
            {[
              messages.mealPlan,
              messages.snacks,
              messages.ketones,
              messages.breakfast,
            ].map((m) => (
              <PopularSearchOption
                message={m}
                onSearchChange={handlePopularSearchItemClicked}
              />
            ))}
          </>
        )}
        {!omnisearch && (
          <>
            <PopularSearchesText message={messages.tryPopularSearches} />
            <PopularSearchOption
              message={messages.mealPlan}
              onSearchChange={handlePopularSearchItemClicked}
            />
            <PopularSearchOption
              message={messages.snacks}
              onSearchChange={handlePopularSearchItemClicked}
            />
            <PopularSearchOption
              message={messages.vegetables}
              onSearchChange={handlePopularSearchItemClicked}
            />
            <PopularSearchOption
              message={messages.ketones}
              onSearchChange={handlePopularSearchItemClicked}
            />
            <PopularSearchOption
              message={messages.breakfast}
              onSearchChange={handlePopularSearchItemClicked}
            />
          </>
        )}
      </StyledSearchPage>
    );
  }
  return (
    <StyledFlatList
      // @ts-ignore - types are slightly off
      renderItem={renderListCard}
      data={searchResults}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginLeft: 8,
        borderTopColor: theme.listCardBorderColor,
        borderTopWidth: theme.listCardBorderWidth,
        borderStyle: "solid",
      }}
    />
  );
};
