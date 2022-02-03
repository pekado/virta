import * as React from "react";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { View } from "react-native";
import { useIntl } from "react-intl";
import styled from "../styled-components";

const Description = styled.Text`
  width: 100%;
  font-size: ${({ theme }) => theme.sectionRowTextFontSize}px;
  color: ${({ theme }) => theme.sectionRowTextFontColor};
  line-height: ${({ theme }) => theme.sectionRowTextLineHeight}px;
  ${() => getFontFamilyAndWeight("Whitney", "300")}
`;

const ShowMore = styled.Text`
  font-size: ${({ theme }) => theme.showMoreFontSize}px;
  color: ${({ theme }) => theme.showMoreFontColor};
  ${() => getFontFamilyAndWeight("Whitney", "bold")}
`;

export interface ShowMoreTextProps {
  value: string;
}

const getClippedText = (value: string, length: number): string => {
  // return the empty text to trigger onLayout method on container
  return length
    ? `${value.substring(0, length - 1)}${".".repeat(10)}`
    : " ".repeat(200);
};

const showMoreMessage = {
  id: "sectionTable.sectionRow.showMore",
  defaultMessage: "Show More",
};

export const ShowMoreText: React.FC<ShowMoreTextProps> = ({
  value,
}: ShowMoreTextProps) => {
  // State variables to adjust thresholdTextLength as per width of the component
  const [thresholdLength, setThresholdLength] = React.useState<number | null>(
    null
  );
  const [isFullTextShown, setIsFullTextShown] = React.useState(false);

  React.useEffect(() => {
    if (thresholdLength) {
      setIsFullTextShown(value.length < thresholdLength);
    }
  }, [thresholdLength]);

  const intl = useIntl();

  return (
    <View
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        if (thresholdLength) {
          return;
        }
        setThresholdLength(width / 7);
      }}
    >
      <Description>
        {isFullTextShown ? value : getClippedText(value, thresholdLength!)}
        {isFullTextShown ? null : (
          <ShowMore
            testID={"show-more-button"}
            onPress={() => {
              setIsFullTextShown(true);
            }}
          >
            {intl.formatMessage(showMoreMessage)}
          </ShowMore>
        )}
      </Description>
    </View>
  );
};
