import { useState, useCallback } from "react";
import { Keyboard } from "react-native";
import {
  ApolloClient as GraphQLClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { debounce } from "@virtahealth/utils";
import { discoverFoodContent } from "@virtahealth/utils/src/foodContentApi";

import { FoodContent } from ".";

function useSearchFood(gqlClient: GraphQLClient<NormalizedCacheObject>) {
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingSearchResults, setIsLoadingSearchResults] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<FoodContent[]>([]);

  const runSearch = useCallback(
    debounce(async (search: string) => {
      if (search === "") {
        setSearchResults([]);
        setIsLoadingSearchResults(false);
        return;
      }
      const fetechedContent = await discoverFoodContent(gqlClient, search);
      const results: FoodContent[] = fetechedContent.foodItems.map(
        (item: any) => ({
          id: `${Math.random()}`, // <------------------------------------ TODO: Unique ID
          type: "food",
          title: item.baseFoodData.name,
          previewText: item.baseFoodData.description,
          heroImage: item.baseFoodData.picture,
          protein: item.nutritionalInformation.protein.amount,
          fat: item.nutritionalInformation.fat.amount,
          carb: item.nutritionalInformation.carbohydrate.amount,
          calories: item.nutritionalInformation.calories,
          servingSize: `${item.nutritionalInformation.servingSize.amount}`,
        })
      );
      setSearchResults(results);
      setIsLoadingSearchResults(false);
    }, 500),
    []
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

export default useSearchFood;
