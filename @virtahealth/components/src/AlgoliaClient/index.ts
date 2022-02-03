import {
  SearchClient,
  SearchIndex as AlgoliaSearchIndex,
} from "algoliasearch/lite";
import algoliaSearch from "algoliasearch";
import type { RequestOptions } from "@algolia/transporter";
import type { SearchOptions } from "@algolia/client-search";

const APP_ID = "J1EYLMQCT6";
const SEARCH_API = "df8659b6dae7e7ba9384281b02077619";

export enum SearchIndex {
  PaExploreContent,
}

const INDEX_ENV_MAP = {
  [SearchIndex.PaExploreContent]: {
    prod: "prod_pa_explore_content",
    stage: "stage_pa_explore_content",
    dev: "stage_pa_explore_content",
    // Mobile Environments
    PRODUCTION: "prod_pa_explore_content",
    DEVELOPMENT: "stage_pa_explore_content",
    STAGING: "stage_pa_explore_content",
    LOCALHOST: "stage_pa_explore_content",
    GCP_PROD: "prod_pa_explore_content",
  },
};

type Environments = keyof typeof INDEX_ENV_MAP[keyof typeof INDEX_ENV_MAP];

interface Indexes {
  [key: string]: AlgoliaSearchIndex;
}

export class AlgoliaClient {
  // Leaving public so if someone needs to get to the baremetal client they can...
  client: SearchClient;
  private indexes: Indexes = {};
  private environment: Environments;

  constructor(environment: Environments) {
    this.environment = environment || "dev";
    this.client = algoliaSearch(APP_ID, SEARCH_API);
  }

  search<T>(
    indexName: SearchIndex,
    query: string,
    requestOptions?: RequestOptions & SearchOptions
  ) {
    return this.getIndex(indexName).search<T>(query, requestOptions);
  }

  private getIndex(indexName: SearchIndex) {
    if (!this.indexes[indexName]) {
      const environmentalIndexName = INDEX_ENV_MAP[indexName][this.environment];
      this.indexes[indexName] = this.client.initIndex(environmentalIndexName);
    }

    return this.indexes[indexName];
  }
}
