import { useState, useCallback } from "react";
import { Keyboard } from "react-native";
import { debounce } from "@virtahealth/utils";
import { AlgoliaClient, SearchIndex } from "@virtahealth/components";

import { deserializeTimeToComplete } from "./serializers";
import { Content } from ".";

const CARE_PROTOCOLS_FACET_NAME = "care_protocols.name";
const REVERSAL = "reversal";
const DIABETES_MANAGEMENT_NON_CLINICAL = "diabetes-management-non-clinical";
const PREFERRED_LANGUAGE_FACET_NAME = "__i18n_lang";
const ENGLISH_US = "en-US";

function buildCareProtocolFacetFilter(userCareProtocol: string) {
  // we only want results where care_protocols includes the user's care protocol
  const baseFilter = `${CARE_PROTOCOLS_FACET_NAME}:${userCareProtocol}`;

  // 'reversal' is treated as a default care protocol in our content,
  // so we can't always rely on it being populated.
  // the filter generated here is
  //     [[ 'care_protocols.name:reversal', 'care_protocols.name:-diabetes-mangement-non-clinical' ]]
  //  this translates to "reversal in care_protocols OR NOT diabetes-management-non-clinical in care_protocols"
  if (userCareProtocol.toLowerCase() === REVERSAL) {
    const negationFilter = `${CARE_PROTOCOLS_FACET_NAME}:-${DIABETES_MANAGEMENT_NON_CLINICAL}`;
    return [baseFilter, negationFilter];
  }
  if (userCareProtocol.toLowerCase() === DIABETES_MANAGEMENT_NON_CLINICAL) {
    return [baseFilter];
  }
  return undefined;
}

function buildPreferredLanguageFilter(preferredLanguage: string) {
  // All users should see English content regardless of preferred language
  const baseFilter = `${PREFERRED_LANGUAGE_FACET_NAME}:${ENGLISH_US}`;

  // Users with other preferred languages should be able to see content for their language
  if (preferredLanguage.toLowerCase() !== ENGLISH_US.toLowerCase()) {
    const preferredLanguageFilter = `${PREFERRED_LANGUAGE_FACET_NAME}:${preferredLanguage}`;
    return [baseFilter, preferredLanguageFilter];
  }

  return [baseFilter];
}

function useSearch(
  algoliaClient: AlgoliaClient,
  userCareProtocol: string = REVERSAL,
  preferredLanguage: string = ENGLISH_US
) {
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingSearchResults, setIsLoadingSearchResults] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Content[]>([]);

  const runSearch = useCallback(
    debounce((search: string) => {
      if (search === "") {
        setSearchResults([]);
        setIsLoadingSearchResults(false);
        return;
      }

      const careProtocolFacetFilters =
        buildCareProtocolFacetFilter(userCareProtocol);
      const preferredLanguageFacetFilters =
        buildPreferredLanguageFilter(preferredLanguage);
      const facetFilters = [preferredLanguageFacetFilters];
      if (careProtocolFacetFilters) {
        facetFilters.push(careProtocolFacetFilters);
      }

      algoliaClient
        .search(SearchIndex.PaExploreContent, search, { facetFilters })
        .then((results) => {
          setIsLoadingSearchResults(false);
          setSearchResults(
            results.hits.map((hit: any) => ({
              id: hit.objectID,
              type: hit._type,
              title: hit.title || hit.name,
              previewText: hit.preview_text,
              heroImage: hit.hero_image?.image_url,
              timeToComplete: deserializeTimeToComplete(hit.time_to_complete),
            }))
          );
        });
    }, 500),
    [algoliaClient]
  );

  const onSearchChange = useCallback((search) => {
    setSearch(search);
    setIsLoadingSearchResults(true);
    runSearch(search);
  }, []);

  const onSearchInputFocus = useCallback(() => {
    setIsSearching(true);
  }, []);

  const onSearchCancelPress = useCallback(() => {
    setIsSearching(false);
    setSearch("");
    setSearchResults([]);
    Keyboard.dismiss();
  }, []);

  return {
    isSearching,
    isLoadingSearchResults,
    search,
    searchResults,
    onSearchChange,
    onSearchInputFocus,
    onSearchCancelPress,
  };
}

export default useSearch;
