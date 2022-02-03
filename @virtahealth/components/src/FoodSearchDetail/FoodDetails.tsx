import * as React from "react";
import { useWindowDimensions } from "react-native";
import { MessageDescriptor } from "react-intl";
import {
  getPlatformFontFamilySuffix,
  addSearchParam,
  decimalToFractionString,
  messages,
} from "@virtahealth/utils";
import { BaseTheme } from "@virtahealth/styles";
import styled, { css } from "../styled-components";
import { Spacer } from "../Spacer";
import { Heading2, Body, HelperText } from "../Text";
import { ProgressiveImage } from "../ProgressiveImage";
import { FoodDetailTypes } from "./types";

export interface FoodProps {
  data: FoodDetailTypes.FoodItem;
  isMobile: boolean;
}

const StyledBody = styled(Body)`
  font-size: ${({ theme }) => theme.foodStandardBodyTextFontSize}px;
  font-weight: ${({ theme }) => theme.foodStandardBodyTextFontWeight};
`;
const StyledFood = styled.View`
  width: 100%;
`;
const StyledImage = styled(ProgressiveImage)<{ isMobile: boolean }>`
  ${({ isMobile }) => (isMobile ? "" : "max-width: 39rem;")}
`;
const StyledHeading = styled(Heading2)`
  line-height: ${({ theme }) => theme.richtextHeadingLineHeight}px;
  font-family: "${({ theme }) =>
    theme[
      `richtextHeadingFontFamily${getPlatformFontFamilySuffix()}` as keyof BaseTheme
    ]}";
`;
const StyledSubHeader = styled(Body)`
  font-size: ${({ theme }) => theme.articleSubheaderSize}px;
  font-weight: ${({ theme }) => theme.articleSubheaderWeight};
  line-height: ${({ theme }) => theme.articleSubheaderLineHeight}px;
`;
const StyledHeadingArea = styled.View`
  align-items: center;
`;
const StyledImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const BodyBold = styled(StyledBody)`
  font-weight: ${({ theme }) => theme.foodBoldBodyTextFontWeight};
`;
const StyledInfoRow = styled.View<{ indent?: boolean; first?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ first, theme }) =>
    first
      ? 2 * theme.foodInfoRowVerticalMargin
      : theme.foodInfoRowVerticalMargin}px;
  margin-bottom: ${({ theme }) => theme.foodInfoRowVerticalMargin}px;
  margin-left: ${({ indent, theme }) =>
    indent ? theme.foodInfoRowIndentMargin : 0}px;
`;

const FoodInfo = styled.View<{ isMobile: boolean }>`
  margin: ${({ theme }) => theme.foodInfoSectionSpace}px;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
`;
const InfoSection = styled.View<{ isMobile: boolean }>`
  ${({ isMobile }) => {
    if (!isMobile) {
      return css`
        flex: 1;
      `;
    }
  }}
`;

const StyledInfoContainer = styled.View`
  flex-direction: column;
  padding: 5px 0;
  flex: 0;
  min-width: 70%;
`;
const InfoLabel = styled(StyledBody)`
  text-transform: capitalize;
`;
const IngredientNotes = styled(HelperText)``;

/*
 * Converts a Quantity object to a string, while taking into consideration whether to use
 * a plural or abbreviated label as necessary
 */
function quantityToString(
  { amount, unit }: FoodDetailTypes.Quantity,
  useFractions = false
): string {
  const { label, abbreviation, labelPlural } = unit ?? {};
  const amountStr = useFractions ? decimalToFractionString(amount) : amount;
  if (amount === 0) {
    return "";
  }

  if (!label?.length) {
    return `${amountStr}`;
  }

  //  if an abbreviation exists, use it
  //    otherwise, check if the amount is plural or singular
  //      if plural, use the plural label or "pluralify" the label
  //      if singular, use the singular label
  const unitString = abbreviation?.length
    ? abbreviation
    : amount > 1
    ? labelPlural?.length
      ? labelPlural
      : `${label}s`
    : label;
  return `${amountStr}${unitString}`;
}

interface InfoRowProps {
  label: MessageDescriptor;
  notes?: MessageDescriptor | null;
  quantity: FoodDetailTypes.Quantity;
  indent?: boolean;
  first?: boolean;
}
export const InfoRow: React.FC<InfoRowProps> = ({
  label,
  notes,
  quantity,
  indent = false,
  first = false,
}) => {
  if (!quantity || quantity?.amount === 0) {
    return null;
  }

  // in some cases, it seemed like the label & notes ids were objects instead of strings
  const hasLabel =
    Boolean(label) && typeof label.id === "string" && Boolean(label.id);
  const hasNotes =
    Boolean(notes) && typeof notes!.id === "string" && Boolean(notes!.id);

  return (
    <StyledInfoRow indent={indent} first={first}>
      <StyledInfoContainer>
        {hasLabel && <InfoLabel message={label} />}
        {hasNotes && <IngredientNotes message={notes as MessageDescriptor} />}
      </StyledInfoContainer>
      <BodyBold>
        {typeof quantity === "number"
          ? quantity
          : quantityToString(quantity, true)}
      </BodyBold>
    </StyledInfoRow>
  );
};

const ImageWrapper: React.FC<{
  children: React.ReactElement;
  isMobile: boolean;
}> = ({ children, isMobile }) =>
  isMobile ? <StyledImageContainer>{children}</StyledImageContainer> : children;

const Image: React.FC<{ isMobile: boolean; imageUrl?: string }> = ({
  isMobile,
  imageUrl,
}) => {
  const { width: windowWidth } = useWindowDimensions();

  if (!imageUrl || !imageUrl?.length) {
    return null;
  }
  const thumbnailSourceUrl = addSearchParam(imageUrl, "w", "50");
  return (
    <ImageWrapper isMobile={isMobile}>
      <StyledImage
        isMobile={isMobile}
        imageProps={{
          source: { uri: imageUrl },
          resizeMode: "contain",
          themeHeightProp: "articleHeaderImageHeight",
          width: windowWidth,
        }}
        thumbnailSource={{ uri: thumbnailSourceUrl }}
      />
    </ImageWrapper>
  );
};

export const FoodDetails: React.FC<FoodProps> = ({
  data: { nutritionalInformation, baseFoodData, brandData },
  isMobile,
}) => {
  return (
    <StyledFood>
      <StyledHeadingArea>
        <StyledHeading>{baseFoodData.name}</StyledHeading>
        <Spacer height={8} />
        <StyledSubHeader>{brandData?.brandName}</StyledSubHeader>
        <Spacer height={13} />
      </StyledHeadingArea>
      <Image isMobile={isMobile} imageUrl={baseFoodData.picture} />
      <Spacer height={16} />
      <FoodInfo isMobile={isMobile}>
        <InfoSection isMobile={isMobile}>
          <BodyBold message={messages.nutritionFacts} />
          <InfoRow
            label={messages.servingSize}
            quantity={nutritionalInformation.servingSize}
            first
          />
          <InfoRow
            label={messages.calorieCount}
            quantity={{
              amount: nutritionalInformation.calories,
              unit: { label: "" },
            }}
          />
          <InfoRow label={messages.fat} quantity={nutritionalInformation.fat} />
          <InfoRow
            label={messages.carbohydrates}
            quantity={nutritionalInformation.carbohydrate}
          />
          <InfoRow
            label={messages.protein}
            quantity={nutritionalInformation.protein}
          />
        </InfoSection>
      </FoodInfo>
    </StyledFood>
  );
};
