import {
  ClickEventProperties,
  ViewEventProperties,
  VirtaAnalyticsClient,
  DiscoverSearchProperties,
} from "@virtahealth/components";

const ANALYTICS_EVENTS = {
  VIEW: {
    EXPLORE_PAGE: "Explore",
    COLLECTION: "Collection",
    SEARCH_RESULTS: "Discover Search Results",
  },
  CLICK: {
    CONTENT: "Content",
    SEARCH_RESULT: "Search Result",
    POPULAR_SEARCH_OPTION: "Popular Search Option",
  },
};

const COMMON_ANALYTICS_PROPERTIES = {
  screen_name: "Discover",
  screen_path: "/discover",
};

interface BaseAnalyticsProps {
  analyticsClient: VirtaAnalyticsClient;
}

interface ContentPageAnalyticsProps extends BaseAnalyticsProps {
  title: string;
  path: string;
  origin?: string;
  /**
   * `rank` represents the position within the page or carousel
   * of the content piece
   *
   * value should start at 1 (first piece of content is a "1")
   */
  rank: number;
}

interface CollectionPageAnalyticsProps extends BaseAnalyticsProps {
  title: string;
}

type SearchPageViewEventProps = CollectionPageAnalyticsProps &
  DiscoverSearchProperties;
type SearchPageClickEventProps = ContentPageAnalyticsProps &
  DiscoverSearchProperties;

export const trackExplorePageViewed = ({
  analyticsClient,
}: BaseAnalyticsProps) => {
  const properties: ViewEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
  };
  analyticsClient.logViewEvent(ANALYTICS_EVENTS.VIEW.EXPLORE_PAGE, properties);
};

export const trackCollectionPageViewed = ({
  analyticsClient,
  title,
}: CollectionPageAnalyticsProps) => {
  const properties: ViewEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    screen_name: title,
  };
  analyticsClient.logViewEvent(ANALYTICS_EVENTS.VIEW.COLLECTION, properties);
};

export const trackContentClicked = ({
  analyticsClient,
  title,
  path,
  origin,
  rank,
}: ContentPageAnalyticsProps) => {
  const properties: ClickEventProperties = {
    screen_name: title,
    screen_path: path,
    origin,
    rank,
  };
  analyticsClient.logClickEvent(ANALYTICS_EVENTS.CLICK.CONTENT, properties);
};

export const trackPopularSearchOptionClicked = ({
  analyticsClient,
  title,
  searchTerm,
  origin,
}: Omit<SearchPageClickEventProps, "rank" | "path">) => {
  const properties: ClickEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    screen_name: title,
    origin,
    searchTerm,
  };
  analyticsClient.logClickEvent(
    ANALYTICS_EVENTS.CLICK.POPULAR_SEARCH_OPTION,
    properties
  );
};

export const trackSearchResultClicked = ({
  analyticsClient,
  title,
  path,
  searchTerm,
  origin,
}: SearchPageClickEventProps) => {
  const properties: ClickEventProperties = {
    screen_name: title,
    screen_path: path,
    origin,
    searchTerm,
  };
  analyticsClient.logClickEvent(
    ANALYTICS_EVENTS.CLICK.SEARCH_RESULT,
    properties
  );
};

export const trackSearchResultsPageViewed = ({
  analyticsClient,
  searchTerm,
  numberOfHits,
  title,
}: SearchPageViewEventProps) => {
  const properties: ClickEventProperties = {
    ...COMMON_ANALYTICS_PROPERTIES,
    screen_name: title,
    searchTerm,
    numberOfHits,
  };
  analyticsClient.logViewEvent(
    ANALYTICS_EVENTS.VIEW.SEARCH_RESULTS,
    properties
  );
};
