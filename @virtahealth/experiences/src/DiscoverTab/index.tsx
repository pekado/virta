import * as React from "react";
import {
  useWindowDimensions,
  ScaledSize,
  Text,
  Linking,
  Keyboard,
} from "react-native";
import {
  withVirta,
  styled,
  VirtaClient,
  VirtaAnalyticsClient,
  Spacer,
  Spinner,
  Interpose,
  AlgoliaClient,
} from "@virtahealth/components";
import {
  intlFormatMessage,
  messages,
  isWindowLg,
  isWindowXL,
  noop,
  GraphQLClient,
  MessageDescriptorObject,
} from "@virtahealth/utils";
import { MessageDescriptor } from "react-intl";
import { primitives } from "@virtahealth/styles";
import { NormalizedCacheObject } from "@apollo/client";

import { FetchingStatus } from "../types";

import { CategoryPage } from "./CategoryPage";
import { ExplorePage } from "./ExplorePage";
import { SearchInput } from "./SearchInput";
import { SearchPage } from "./SearchPage";
import { NavControls } from "./NavControls";
import {
  ContentType,
  CollectionResponse,
  deserializeCollectionsResponse,
  ContentResponseItem,
  deserializeCollectionItem,
  CollectionResponseItem,
} from "./serializers";
import useSearch from "./useSearch";
import useSearchFood from "./useSearchFood";

export interface DiscoverTabProps {
  virtaId: string;
  handleOpenContent?: (contentId: string) => void;
  captureException?: (error: Error) => void;
  showSearch: boolean;
  showContentRecommendations: boolean;
  omnisearch: boolean;
  careProtocol?: string;
  preferredLanguage?: string;
  // callback so component can say it has started loading data
  onLoadStart?: () => void;
  // callback so component can say data has finished loading successfully or with an error
  onLoadEnd?: () => void;
}

interface InnerProps extends DiscoverTabProps {
  algoliaClient?: AlgoliaClient;
  analyticsClient?: VirtaAnalyticsClient;
  client?: VirtaClient;
  gqlClient?: GraphQLClient<NormalizedCacheObject>;
}

export interface Content {
  id: string;
  type: ContentType;
  title: string;
  heroImage: string;
  previewText: string;
  timeToComplete?: string;
}

export interface FoodContent extends Content {
  protein: number;
  fat: number;
  carb: number;
  servingSize: string;
}

export interface ContentCollectionProps {
  name: string;
  title: string;
  id: string;
  description: string;
  contents: Content[];
}

export type DimensionProps = Pick<ScaledSize, "width" | "height">;

type NavItemProps = MessageDescriptor;
type OmniNavItemProps = MessageDescriptorObject;

export interface ScreenSizeProps {
  isCompact: boolean;
}

enum PageUiState {
  Searching,
  Explore,
  Category,
}

const Wrapper = styled.View<ScreenSizeProps>`
  flex: 1;
  margin-top: ${({ isCompact }) => (isCompact ? 0 : 12)}px;
  padding-bottom: 5px;
`;
const Header = styled.View<ScreenSizeProps>`
  border-bottom-width: ${({ isCompact }) => (isCompact ? 2 : 0)}px;
  border-bottom-color: ${() => primitives.color.carbonGray200};
`;
const ContentContainer = styled.View`
  flex: 1;
`;
const CenteredContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// Original NavBar
const COLLECTIONS_URL = "/api/v1/collections";
const RECOMMENDED_CONTENT_URL = "/api/v1/content_recommendations";
const MINIMUM_CONTENT_RECOMMENDATIONS_THRESHOLD = 3;

const EXPLORE_NAVBAR_ITEM_ID = "explore";
const exploreNavBarItem: NavItemProps = {
  defaultMessage: "Explore",
  id: EXPLORE_NAVBAR_ITEM_ID,
};
const defaultNavBarItems: NavItemProps[] = [exploreNavBarItem];

// Omnisearch NavBar
const OMNI_NAVBAR_FOOD_ID = "foodTab";
const OMNI_NAVBAR_ARTICLES_ID = "articlesTab";
const buildNavBarItem = (
  id: string,
  defaultMessage: string,
  postMessage: string
): OmniNavItemProps => ({
  message: {
    id,
    defaultMessage: `${defaultMessage}{postMessage}`,
  },
  values: { postMessage },
});

const foodNavBarItem = (postMessage: string): OmniNavItemProps =>
  buildNavBarItem(OMNI_NAVBAR_FOOD_ID, "Food", postMessage);

const articlesNavBarItem = (postMessage: string): OmniNavItemProps =>
  buildNavBarItem(OMNI_NAVBAR_ARTICLES_ID, "Articles", postMessage);

const errorMessageDescriptor: MessageDescriptor = {
  id: "discoverTab.fetching.error",
  defaultMessage: "An unexpected error occurred. Please try again later.",
};

export const InnerDiscoverTab: React.FC<InnerProps> = ({
  showSearch,
  showContentRecommendations = false,
  omnisearch,
  algoliaClient,
  analyticsClient,
  client,
  gqlClient,
  handleOpenContent = (contentId) => {
    Linking.openURL(`/discover/content/${contentId}`);
  },
  captureException,
  careProtocol,
  preferredLanguage = "en-US",
  onLoadStart = noop,
  onLoadEnd = noop,
}) => {
  const [collections, setCollections] = React.useState<
    ContentCollectionProps[]
  >([]);

  const [statusLoadingCollections, setStatusLoadingCollections] =
    React.useState<FetchingStatus>(FetchingStatus.IDLE);
  const [
    statusLoadingContentRecommendations,
    setStatusLoadingContentRecommendations,
  ] = React.useState<FetchingStatus>(FetchingStatus.IDLE);
  const [selectedNavBarItem, setSelectedNavBarItem] =
    React.useState(exploreNavBarItem);

  // States used for omnisearch
  const [omniNavBarItems, setOmniNavBarItems] = React.useState([
    foodNavBarItem(""),
    articlesNavBarItem(""),
  ]);
  const [searchResults, setSearchResults] = React.useState<Content[]>([]);
  const [searchHasResults, setSearchHasResults] = React.useState(false);
  const [selectedOmniNavBarItem, setSelectedOmniNavBarItem] =
    React.useState<OmniNavItemProps>(foodNavBarItem(""));

  const { width: screenWidth } = useWindowDimensions();
  const isCompact = !(isWindowLg(screenWidth) || isWindowXL(screenWidth));

  const {
    isSearching,
    isLoadingSearchResults,
    search,
    searchResults: searchResultsContent,
    onSearchChange: onSearchChangeContent,
    onSearchInputFocus: onSearchInputFocusContent,
    onSearchCancelPress: onSearchCancelPressContent,
  } = useSearch(algoliaClient!, careProtocol, preferredLanguage);

  const {
    isSearching: isSearchingFood,
    isLoadingSearchResults: isLoadingSearchResultsFood,
    search: searchFood,
    searchResults: searchResultsFood,
    onSearchChange: onSearchChangeFood,
    onSearchInputFocus: onSearchInputFocusFood,
    onSearchCancelPress: onSearchCancelPressFood,
  } = useSearchFood(gqlClient!);

  React.useEffect(() => {
    onLoadStart();

    const abortController = new AbortController();
    const fetchExplorePage = async () => {
      try {
        setStatusLoadingCollections(FetchingStatus.LOADING);

        const collections = await client!.get(COLLECTIONS_URL);

        setCollections((currentCollections) => [
          ...currentCollections,
          ...deserializeCollectionsResponse(collections as CollectionResponse),
        ]);
        setStatusLoadingCollections(FetchingStatus.LOADED);
      } catch (e) {
        setStatusLoadingCollections(FetchingStatus.ERROR);
        captureException?.(e as Error);
      }
    };

    if (collections.length === 0) {
      fetchExplorePage();
    }

    return () => {
      abortController.abort();
    };
  }, []);

  // content recommendations are fetched separately from the collections
  // because showContentRecommendations is an async flag
  // once the feature is enabled for everyone, we can merge these `useEffect`s
  React.useEffect(() => {
    const abortController = new AbortController();
    const fetchContentRecommendations = async () => {
      try {
        if (showContentRecommendations) {
          setStatusLoadingContentRecommendations(FetchingStatus.LOADING);

          const recommended = await client!.get(RECOMMENDED_CONTENT_URL);

          setStatusLoadingContentRecommendations(FetchingStatus.LOADED);

          // PA Web appears to automatically destructure the `data` element
          // while PA Mobile needs this done manually
          // this ternary standardizes the response
          const recommendedContent = (
            Array.isArray(recommended)
              ? recommended
              : // @ts-ignore - need to type the response so it knows about `data`
              recommended?.data
              ? // @ts-ignore - need to type the response so it knows about `data`
                recommended.data
              : []
          ) as ContentResponseItem[];

          if (
            recommendedContent.length >=
            MINIMUM_CONTENT_RECOMMENDATIONS_THRESHOLD
          ) {
            const recommendedContentCollection = {
              _id: "recommended-content",
              name: intlFormatMessage(messages.contentRecommendationForYouName),
              __i18n_lang: preferredLanguage,
              content_items: recommendedContent,
              care_protocols: [],
              description: intlFormatMessage(
                messages.contentRecommendationForYouDescription
              ),
            } as CollectionResponseItem;

            setCollections((collections) => [
              deserializeCollectionItem(recommendedContentCollection),
              ...collections,
            ]);
          }
        }
      } catch (e) {
        setStatusLoadingContentRecommendations(FetchingStatus.ERROR);
        captureException?.(e as Error);
      }
    };

    fetchContentRecommendations();

    return () => {
      abortController.abort();
    };
  }, [showContentRecommendations]);

  React.useEffect(() => {
    function isLoadingDataComplete(): boolean {
      return (
        (statusLoadingCollections === FetchingStatus.LOADED ||
          statusLoadingCollections === FetchingStatus.ERROR) &&
        (statusLoadingContentRecommendations === FetchingStatus.LOADED ||
          statusLoadingContentRecommendations === FetchingStatus.ERROR)
      );
    }

    if (isLoadingDataComplete()) {
      onLoadEnd();
    }
  }, [
    onLoadEnd,
    statusLoadingCollections,
    statusLoadingContentRecommendations,
  ]);

  const navBarItems: NavItemProps[] = [
    ...defaultNavBarItems,
    ...(collections?.map(mapCollectionToNavItem) ?? []),
  ];

  const handleNavBarItemClicked = (selectedId: MessageDescriptor["id"]) => {
    const item = navBarItems.find((navBarItem) => navBarItem.id === selectedId);
    if (item) {
      setSelectedNavBarItem(item);
    }
    onSearchCancelPressContent();
  };

  const handleOmniNavBarItemClicked = (selectedId: MessageDescriptor["id"]) => {
    const item = omniNavBarItems.find(
      (navBarItem) => navBarItem.message.id === selectedId
    );
    if (item) {
      setSelectedOmniNavBarItem(item);
    }
  };

  const selectedCollection =
    selectedNavBarItem.id === EXPLORE_NAVBAR_ITEM_ID
      ? undefined
      : collections.find(
          (collection) => collection.id === selectedNavBarItem.id
        );

  const explorePageCollections = collections.map((collection) => ({
    ...collection,
    contents: collection.contents.slice(0, 5),
  }));

  const contentState = (
    omnisearch ? isSearching || isSearchingFood : isSearching
  )
    ? PageUiState.Searching
    : selectedNavBarItem.id === exploreNavBarItem.id
    ? PageUiState.Explore
    : PageUiState.Category;

  // Mergeing searches
  const onSearchChange = (search: string) => {
    onSearchChangeContent(search);
    if (omnisearch) {
      onSearchChangeFood(search);
    }
  };

  const onSearchCancelPress = () => {
    onSearchCancelPressContent();
    onSearchCancelPressFood();
  };

  const onSearchInputFocus = () => {
    onSearchInputFocusContent();
    onSearchInputFocusFood();
  };

  React.useEffect(() => {
    setSearchHasResults(
      searchResultsFood.length > 0 || searchResultsContent.length > 0
    );
    switch (selectedOmniNavBarItem.message.id) {
      case OMNI_NAVBAR_FOOD_ID:
        setSearchResults(searchResultsFood);
        break;
      case OMNI_NAVBAR_ARTICLES_ID:
        setSearchResults(searchResultsContent);
        break;
    }
    setOmniNavBarItems([
      foodNavBarItem(` (${searchResultsFood.length})`),
      articlesNavBarItem(` (${searchResultsContent.length})`),
    ]);
  }, [searchResultsFood, searchResultsContent, selectedOmniNavBarItem]);

  return (
    <Wrapper isCompact={isCompact}>
      {omnisearch && (
        <SearchInput
          isCompact={isCompact}
          isSearching={contentState === PageUiState.Searching}
          search={search}
          onSearchChange={onSearchChange}
          onSearchInputFocus={onSearchInputFocus}
          onSearchCancelPress={onSearchCancelPress}
        />
      )}
      {isLoadingData() ? (
        <CenteredContentContainer>
          <Spinner size={isCompact ? "small" : "large"} />
        </CenteredContentContainer>
      ) : hasErrorLoadingCollections() ? (
        <ContentContainer>
          <Text>{errorMessageDescriptor.defaultMessage}</Text>
        </ContentContainer>
      ) : (
        <>
          {omnisearch && (
            <Interpose
              with={<Spacer width={0} />}
              flexDirection={isCompact ? "column" : "row"}
              style={{
                width: "100%",
                flex: 1,
                height: "100%",
              }}
            >
              {!(contentState === PageUiState.Searching) && (
                <>
                  <Header isCompact={isCompact}>
                    <NavControls
                      onChangeTab={handleNavBarItemClicked}
                      navItems={navBarItems}
                      isCompact={isCompact}
                      selectedNavItem={selectedNavBarItem}
                    />
                  </Header>
                  <ContentContainer>
                    {contentState === PageUiState.Explore && (
                      <ExplorePage
                        collections={explorePageCollections}
                        handleOpenContent={handleOpenContent}
                        handleSeeAllPressed={handleNavBarItemClicked}
                        analyticsClient={analyticsClient!}
                        // Add top padding if the search bar is showing and we are on mobile.
                        addTopPadding={!showSearch && isCompact}
                      />
                    )}
                    {contentState === PageUiState.Category && (
                      <CategoryPage
                        content={selectedCollection?.contents || []}
                        handleOpenContent={handleOpenContent}
                        category={selectedNavBarItem.defaultMessage as string}
                        isMobile={isCompact}
                        analyticsClient={analyticsClient!}
                      />
                    )}
                  </ContentContainer>
                </>
              )}
              {contentState === PageUiState.Searching && !searchHasResults && (
                <ContentContainer>
                  <SearchPage
                    isLoadingSearchResults={
                      isLoadingSearchResults || isLoadingSearchResultsFood
                    }
                    search={searchFood}
                    searchResults={searchResults}
                    onSearchChange={(e) => {
                      Keyboard.dismiss();
                      onSearchChange(e);
                    }}
                    handleOpenContent={handleOpenContent}
                    isCompact={isCompact}
                    omnisearch={true}
                  />
                </ContentContainer>
              )}
              {contentState === PageUiState.Searching && searchHasResults && (
                <>
                  <Header isCompact={isCompact}>
                    <NavControls
                      onChangeTab={handleOmniNavBarItemClicked}
                      navItems={omniNavBarItems}
                      isCompact={isCompact}
                      selectedNavItem={selectedOmniNavBarItem.message}
                    />
                  </Header>
                  <ContentContainer>
                    <SearchPage
                      isLoadingSearchResults={isLoadingSearchResults}
                      search={searchFood}
                      searchResults={searchResults}
                      onSearchChange={(e) => {
                        Keyboard.dismiss();
                        onSearchChange(e);
                      }}
                      handleOpenContent={handleOpenContent}
                      isCompact={isCompact}
                      omnisearch={true}
                    />
                  </ContentContainer>
                </>
              )}
            </Interpose>
          )}
          {!omnisearch && (
            <Interpose
              with={<Spacer width={0} />}
              flexDirection={isCompact ? "column" : "row"}
              style={{
                width: "100%",
                flex: 1,
                height: "100%",
              }}
            >
              <Header isCompact={isCompact}>
                <NavControls
                  onChangeTab={handleNavBarItemClicked}
                  navItems={navBarItems}
                  isCompact={isCompact}
                  selectedNavItem={selectedNavBarItem}
                />
              </Header>
              <ContentContainer>
                {showSearch && contentState !== PageUiState.Category && (
                  <SearchInput
                    isCompact={isCompact}
                    isSearching={contentState === PageUiState.Searching}
                    search={search}
                    onSearchChange={onSearchChangeContent}
                    onSearchInputFocus={onSearchInputFocusContent}
                    onSearchCancelPress={onSearchCancelPressContent}
                  />
                )}
                {contentState === PageUiState.Searching && (
                  <SearchPage
                    isLoadingSearchResults={isLoadingSearchResults}
                    search={search}
                    searchResults={searchResultsContent}
                    onSearchChange={(e) => {
                      Keyboard.dismiss();
                      onSearchChangeContent(e);
                    }}
                    handleOpenContent={handleOpenContent}
                    isCompact={isCompact}
                    omnisearch={false}
                  />
                )}
                {contentState === PageUiState.Explore && (
                  <ExplorePage
                    collections={explorePageCollections}
                    handleOpenContent={handleOpenContent}
                    handleSeeAllPressed={handleNavBarItemClicked}
                    analyticsClient={analyticsClient!}
                    // Add top padding if the search bar is showing and we are on mobile.
                    addTopPadding={!showSearch && isCompact}
                  />
                )}
                {contentState === PageUiState.Category && (
                  <CategoryPage
                    content={selectedCollection?.contents || []}
                    handleOpenContent={handleOpenContent}
                    category={selectedNavBarItem.defaultMessage as string}
                    isMobile={isCompact}
                    analyticsClient={analyticsClient!}
                  />
                )}
              </ContentContainer>
            </Interpose>
          )}
        </>
      )}
    </Wrapper>
  );

  function isLoadingData(): boolean {
    return (
      statusLoadingCollections === FetchingStatus.IDLE ||
      statusLoadingCollections === FetchingStatus.LOADING
    );
  }

  // the error message is only displayed if collections fails
  //
  // if content recommendations fails, we don't display an error to the user
  // and we proceed to display the collections (assuming that was successful)
  function hasErrorLoadingCollections(): boolean {
    return statusLoadingCollections === FetchingStatus.ERROR;
  }
};

function mapCollectionToNavItem(
  collection: ContentCollectionProps
): NavItemProps {
  return {
    id: collection.id,
    defaultMessage: collection.title,
  };
}

export const DiscoverTab = withVirta<DiscoverTabProps>(InnerDiscoverTab);
