import * as React from "react";

import {
  FoodDetailTypes,
  Spinner,
  Spacer,
  FoodDetails,
  Body,
  withVirta,
} from "@virtahealth/components";
import { GraphQLClient, getFoodDetails, messages } from "@virtahealth/utils";
import { NormalizedCacheObject } from "@apollo/client";

interface Props {
  foodItem?: FoodDetailTypes.FoodItem;
  packagedFoodItem?: FoodDetailTypes.FoodItem;
  foodItemId?: string;
  foodItemName?: string;
  isMobile: boolean;
}

interface InnerProps extends Props {
  gqlClient: GraphQLClient<NormalizedCacheObject>;
}

export const FoodDetailsExperience: React.FC<InnerProps> = ({
  gqlClient,
  foodItem,
  packagedFoodItem,
  foodItemId,
  foodItemName,
  isMobile,
}) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [foodDetails, setFoodDetails] =
    React.useState<FoodDetailTypes.FoodItem>();
  const [showErrorMessage, setShowErrorMessage] = React.useState(false);

  React.useEffect(() => {
    try {
      if (foodItem) {
        setFoodDetails(foodItem);
      } else if (packagedFoodItem) {
        setFoodDetails(packagedFoodItem);
      } else {
        setIsFetching(true);
        getFoodDetails(gqlClient, foodItemName, foodItemId).then(
          (fetchedContent) => {
            setFoodDetails(fetchedContent as FoodDetailTypes.FoodItem);
          }
        );
      }
    } catch (e) {
      setShowErrorMessage(true);
    } finally {
      setIsFetching(false);
    }
  }, [foodItem, packagedFoodItem]);

  return (
    <>
      <Spacer height={30} />
      {isFetching ? <Spinner /> : null}
      {foodDetails ? (
        <FoodDetails data={foodDetails} isMobile={isMobile} />
      ) : null}
      {showErrorMessage ? (
        <Body message={messages.contentFetchErrorMessage} />
      ) : null}
    </>
  );
};

export const FoodDetailsPage = withVirta<InnerProps>(FoodDetailsExperience);
