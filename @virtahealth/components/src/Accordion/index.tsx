import * as React from "react";
import { View, ViewStyle } from "react-native";
import { MessageDescriptor, useIntl } from "react-intl";
import { Link } from "../Link";
import styled from "../styled-components";
import { Base, Body } from "../Text";
import { ChevronDown, ChevronUp } from "../Icons";
import { Row } from "../Row";
import { Spacer } from "../Spacer";

const AccordionBar = styled(Link)`
  background-color: ${({ theme }) => theme.accordionHeaderBackgrounddColor};
  display: flex;
  height: ${({ theme }) => theme.accordionHeaderHeight}px;
  justify-content: space-between;

  border: ${({ theme }) => theme.accordionMainBorderStyle};
  border-width: ${({ theme }) => theme.accordionBorderWidth}px;
  border-color: ${({ theme }) => theme.accordionMainBorderColor};

  /* Styled components don't do well with some shorthand properties
  https://github.com/styled-components/styled-components/issues/2048#issuecomment-426151984
  */
  border-top-right-radius: ${({ theme }) => theme.accordionBorderRadius}px;
  border-top-left-radius: ${({ theme }) => theme.accordionBorderRadius}px;

  border-bottom-color: ${({ theme }) => theme.accordionDividerBorderColor};

  align-items: center;
`;

const AccordionBody = styled(View)`
  background-color: ${({ theme }) => theme.accordionBodyBackgrounddColor};
  border-bottom-right-radius: ${({ theme }) => theme.accordionBorderRadius}px;
  border-bottom-left-radius: ${({ theme }) => theme.accordionBorderRadius}px;

  border: ${({ theme }) => theme.accordionMainBorderStyle};
  border-width: ${({ theme }) => theme.accordionBorderWidth}px;
  border-color: ${({ theme }) => theme.accordionMainBorderColor};
  border-top-width: 0px;
`;

const AccordionLink = styled(Body)`
  display: flex;
  align-items: center;
`;

const Chevron = styled(Base)`
  margin-right: ${({ theme }) => theme.accordionHeaderRightMargin}px;
`;

const Heading = styled(Body)`
  font-size: ${({ theme }) => theme.accordionHeaderTitleFontSize}px;
  margin-left: ${({ theme }) => theme.accordionHeaderLeftMargin}px;
  color: ${({ theme }) => theme.accordionHeaderTitleColor};
`;

const SubTitle = styled(Body)`
  font-size: ${({ theme }) => theme.accordionHeaderSubtitleFontSize}px;
  margin-left: ${({ theme }) => theme.accordionHeaderSubtitleMarginLeft}px;
  color: ${({ theme }) => theme.accordionHeaderSubtitleColor};
`;

const AdditionalText = styled(Body)`
  font-size: ${({ theme }) => theme.accordionHeaderSubtitleFontSize}px;
  font-weight: ${({ theme }) => theme.accordionHeaderAdditionalTextFontWeight};
  color: ${({ theme }) => theme.accordionHeaderAdditionalTextColor};
`;

export const Accordion: React.FC<{
  title: string | MessageDescriptor;
  subtitle?: string | MessageDescriptor;
  addlHeaderText?: string | MessageDescriptor;
  containerStyle?: ViewStyle | ViewStyle[];
}> = ({ title, subtitle, containerStyle, addlHeaderText, children }) => {
  const intl = useIntl();
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(true);
  return (
    <View style={containerStyle}>
      <AccordionBar onPress={() => setIsAccordionOpen(!isAccordionOpen)}>
        <AccordionLink>
          <Heading>
            {typeof title === "string" ? title : intl.formatMessage(title)}
          </Heading>
          {subtitle && (
            <SubTitle>
              {typeof subtitle === "string"
                ? subtitle
                : intl.formatMessage(subtitle)}
            </SubTitle>
          )}
        </AccordionLink>
        <Row>
          {addlHeaderText && (
            <>
              <AdditionalText>
                {typeof addlHeaderText === "string"
                  ? addlHeaderText
                  : intl.formatMessage(addlHeaderText)}
              </AdditionalText>
              <Spacer width={24} />
            </>
          )}
          <Chevron>
            {isAccordionOpen && <ChevronUp />}
            {!isAccordionOpen && <ChevronDown />}
          </Chevron>
        </Row>
      </AccordionBar>
      {isAccordionOpen && <AccordionBody>{children}</AccordionBody>}
    </View>
  );
};
