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
import { ContentTypes } from "./types";

export interface RecipeProps {
  data: ContentTypes.RecipeType;
  isMobile: boolean;
}

const StyledBody = styled(Body)`
  font-size: ${({ theme }) => theme.recipeStandardBodyTextFontSize}px;
  font-weight: ${({ theme }) => theme.recipeStandardBodyTextFontWeight};
`;
const StyledRecipe = styled.View`
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
  font-weight: ${({ theme }) => theme.recipeBoldBodyTextFontWeight};
`;
const StyledInfoRow = styled.View<{ indent?: boolean; first?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ first, theme }) =>
    first
      ? 2 * theme.recipeInfoRowVerticalMargin
      : theme.recipeInfoRowVerticalMargin}px;
  margin-bottom: ${({ theme }) => theme.recipeInfoRowVerticalMargin}px;
  margin-left: ${({ indent, theme }) =>
    indent ? theme.recipeInfoRowIndentMargin : 0}px;
`;
const NutritionNote = styled(HelperText)`
  margin-top: 10px;
`;
const PreparationInfo = styled.View`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${({ theme }) => theme.recipePrepInfoBackgroundColor};
  margin: ${({ theme }) => theme.recipeInfoSectionSpace}px 0;
  padding: ${({ theme }) => theme.recipeInfoSectionSpace}px 0;
`;
const PrepInfoItem = styled.View`
  display: flex;
  text-align: center;
`;
const RecipeInfo = styled.View<{ isMobile: boolean }>`
  margin: ${({ theme }) => theme.recipeInfoSectionSpace}px;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
`;
const InfoSection = styled.View<{ isMobile: boolean; index: 0 | 1 }>`
  margin: ${({ theme }) => theme.recipeInfoSectionSpace}px 0;
  padding-right: ${({ isMobile, index, theme }) =>
    !isMobile && index === 0 ? theme.recipeInfoSectionSpace : 0}px;
  padding-left: ${({ isMobile, index, theme }) =>
    !isMobile && index === 1 ? theme.recipeInfoSectionSpace : 0}px;
  border-right-width: ${({ isMobile, index }) =>
    !isMobile && index === 0 ? 1 : 0}px;
  border-right-color: #e6e8eb;
  ${({ isMobile }) => {
    if (!isMobile) {
      return css`
        flex: 1;
      `;
    }
  }}
`;
const PrepInfoHeader = styled(StyledBody)`
  font-weight: ${({ theme }) => theme.recipePrepInfoHeadingFontWeight};
  font-size: ${({ theme }) => theme.recipePrepInfoHeadingFontSize}px;
  text-transform: uppercase;
  text-align: center;
`;
const PrepInfoBase = styled(StyledBody)`
  font-size: ${({ theme }) => theme.recipePrepInfoHeadingFontSize}px;
  text-align: center;
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
const Instructions = styled.View`
  margin: ${({ theme }) => theme.recipeInfoSectionSpace}px;
`;
const InstructionRow = styled.View`
  margin: ${({ theme }) => theme.recipeInstructionRowSpace}px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const InstructionCircle = styled.View`
  height: ${({ theme }) => theme.recipeInstructionCircleSize}px;
  width: ${({ theme }) => theme.recipeInstructionCircleSize}px;
  background-color: ${({ theme }) =>
    theme.recipeInstructionCircleBackgroundColor};
  border-radius: ${({ theme }) => theme.recipeInstructionCircleSize}px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.recipeInstructionCircleMarginRight}px; ;
`;
const InstructionNumber = styled(StyledBody)`
  color: ${({ theme }) => theme.recipeInstructionCircleTextColor};
  font-size: ${({ theme }) => theme.recipePrepInfoHeadingFontSize}px;
`;
const InstructionText = styled(StyledBody)`
  line-height: ${({ theme }) => theme.recipeInstructionTextLineHeight}px;
  flex: 1;
  flex-wrap: wrap;
`;

/*
 * Converts a Quantity object to a string, while taking into consideration whether to use
 * a plural or abbreviated label as necessary
 */
function quantityToString(
  { amount, unit }: ContentTypes.Quantity,
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
  return `${amountStr} ${unitString}`;
}

interface InfoRowProps {
  label: MessageDescriptor;
  notes?: MessageDescriptor | null;
  quantity: ContentTypes.Quantity;
  indent?: boolean;
  first?: boolean;
  showZeros?: boolean;
}
export const InfoRow: React.FC<InfoRowProps> = ({
  label,
  notes,
  quantity,
  indent = false,
  first = false,
  showZeros = false,
}) => {
  if (!showZeros && quantity?.amount === 0) {
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
      {quantity?.amount !== 0 && (
        <BodyBold>
          {typeof quantity === "number"
            ? quantity
            : quantityToString(quantity, true)}
        </BodyBold>
      )}
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

export const Recipe: React.FC<RecipeProps> = ({
  data: {
    nutritionFacts,
    name,
    previewText,
    prepTime,
    totalTime,
    nutritionNotes,
    ingredients,
    instructions,
    heroImage: { imageUrl },
  },
  isMobile,
}) => {
  return (
    <StyledRecipe>
      <StyledHeadingArea>
        <StyledHeading>{name}</StyledHeading>
        <Spacer height={8} />
        <StyledSubHeader>{previewText}</StyledSubHeader>
        <Spacer height={13} />
      </StyledHeadingArea>
      <Image isMobile={isMobile} imageUrl={imageUrl} />
      <Spacer height={16} />
      <PreparationInfo>
        <PrepInfoItem>
          <PrepInfoHeader message={messages.prepTime} />
          <PrepInfoBase>{quantityToString(prepTime)}</PrepInfoBase>
        </PrepInfoItem>
        <PrepInfoItem>
          <PrepInfoHeader message={messages.totalTime} />
          <PrepInfoBase>{quantityToString(totalTime)}</PrepInfoBase>
        </PrepInfoItem>
        <PrepInfoItem>
          <PrepInfoHeader message={messages.servingCount} />
          <PrepInfoBase>{`${nutritionFacts.servingCount} servings`}</PrepInfoBase>
        </PrepInfoItem>
      </PreparationInfo>
      <RecipeInfo isMobile={isMobile}>
        <InfoSection isMobile={isMobile} index={0}>
          <BodyBold message={messages.nutritionFacts} />
          <InfoRow
            label={messages.servingSize}
            quantity={nutritionFacts.servingSize}
            first
          />
          <InfoRow
            label={messages.calorieCount}
            quantity={{
              amount: nutritionFacts.calorieCount,
              unit: { label: "" },
            }}
          />
          <InfoRow label={messages.fat} quantity={nutritionFacts.fat} />
          <InfoRow
            label={messages.carbohydrates}
            quantity={nutritionFacts.carbohydrates}
          />
          {nutritionFacts.fiber && nutritionFacts.fiber.amount ? (
            <InfoRow
              label={messages.fiber}
              quantity={nutritionFacts.servingSize}
              indent
            />
          ) : null}
          {nutritionFacts.sugarAdded && nutritionFacts.sugarAdded.amount ? (
            <InfoRow
              label={messages.sugarAdded}
              quantity={nutritionFacts.sugarAdded}
              indent
            />
          ) : null}
          {nutritionFacts.sugarAlcohol && nutritionFacts.sugarAlcohol.amount ? (
            <InfoRow
              label={messages.sugarAlcohol}
              quantity={nutritionFacts.sugarAlcohol}
              indent
            />
          ) : null}
          <InfoRow label={messages.protein} quantity={nutritionFacts.protein} />
          {nutritionNotes?.length ? (
            <NutritionNote>{nutritionNotes}</NutritionNote>
          ) : null}
        </InfoSection>
        <InfoSection isMobile={isMobile} index={1}>
          <BodyBold message={messages.ingredients} />
          {ingredients.map((recipeIngredient, index) => (
            <InfoRow
              key={index}
              label={{
                id: recipeIngredient.ingredient,
                defaultMessage: recipeIngredient.ingredient,
              }}
              notes={
                recipeIngredient.notes
                  ? {
                      id: recipeIngredient.notes,
                      defaultMessage: recipeIngredient.notes,
                    }
                  : null
              }
              quantity={recipeIngredient.quantity}
              first={index === 0}
              showZeros={!!recipeIngredient.notes}
            />
          ))}
        </InfoSection>
      </RecipeInfo>
      <Instructions>
        <BodyBold message={messages.recipeInstructions} />
        {instructions.map((instruction, index) => (
          <InstructionRow key={index}>
            <InstructionCircle>
              <InstructionNumber>{index + 1}</InstructionNumber>
            </InstructionCircle>
            <InstructionText>{instruction}</InstructionText>
          </InstructionRow>
        ))}
      </Instructions>
    </StyledRecipe>
  );
};
