import * as React from "react";
import { useIntl, MessageDescriptor } from "react-intl";
import styled, { ThemeContext } from "../styled-components";
import { BodySpaced } from "../PatientProfileText";
import { ArrowRight } from "../Icons";

export interface MenuItemProps {
  icon?: React.ReactElement;
  title: MessageDescriptor;
  onPress: () => void;
  subtitleValue?: string;
  subtitleDefaultAction?: MessageDescriptor;
  subElement?: React.ReactNode;
  noIndent?: boolean;
  textSize?: "Large" | "Medium" | "Small";
  hasStrike?: boolean;
  colorfulArrow?: boolean;
  lightSubtitleValue?: boolean;
  smallPadding?: boolean;
  omitBorder?: boolean;
  disabled?: boolean;
}

const StyledRow = styled.TouchableOpacity<
  Pick<MenuItemProps, "noIndent" | "smallPadding" | "omitBorder">
>`
  flex-direction: row;
  align-items: center;
  margin-left: ${({ theme, noIndent }) =>
    noIndent ? 0 : theme.standardSpacingMedium}px;
  padding-top: ${({ theme, smallPadding }) =>
    smallPadding
      ? theme.standardSpacingSmallMedium
      : theme.standardSpacingMedium}px;
  padding-bottom: ${({ theme, smallPadding }) =>
    smallPadding
      ? theme.standardSpacingSmallMedium
      : theme.standardSpacingMedium}px;
  padding-right: ${({ theme }) => theme.standardSpacingMedium}px;
  border-bottom-width: ${({ theme, omitBorder }) =>
    omitBorder ? 0 : theme.dividerDefaultThickness}px;
  border-color: ${({ theme }) => theme.dividerColor};
`;

type ColumnProps = Pick<MenuItemProps, "smallPadding"> & {
  noPadding?: boolean;
};

const StyledColumn = styled.View<ColumnProps>`
  flex-direction: column;
  padding-left: ${({ theme, smallPadding, noPadding }) =>
    noPadding
      ? 0
      : smallPadding
      ? theme.menuItemSmallSpacingHeadingAlignment
      : theme.standardSpacingMedium}px;
  padding-right: ${({ theme }) => theme.standardSpacingSmall}px;
  flex-shrink: 100000;
  flex-grow: 1;
`;

type TextProps = Pick<
  MenuItemProps,
  "textSize" | "hasStrike" | "lightSubtitleValue"
>;

export const MenuItemText = styled(BodySpaced)<TextProps>`
  ${({ hasStrike }) => (hasStrike ? `text-decoration-line: line-through;` : "")}
  ${({ theme, hasStrike, lightSubtitleValue }) =>
    hasStrike
      ? `color: ${theme.textColorDisabled};`
      : lightSubtitleValue
      ? `color: ${theme.textColorSubtitle};`
      : ""}
  ${({ theme, textSize, lightSubtitleValue }) =>
    lightSubtitleValue || textSize == "Small"
      ? `font-size: ${theme.textBodySpacedSmallFontSize}px;`
      : textSize == "Large"
      ? `font-size: ${theme.textLabelLargeFontSize}px;`
      : ""}
`;
export const MenuItemTextBold = styled(MenuItemText)`
  ${({ hasStrike }) => (hasStrike ? "" : `font-weight: bold;`)}
`;
const LinkBody = styled(MenuItemTextBold)`
  ${({ theme, hasStrike }) =>
    hasStrike ? "" : `color: ${theme.textLinkColor};`}
`;

export const MenuItem: React.FunctionComponent<MenuItemProps> = (props) => {
  const intl = useIntl();
  const theme = React.useContext(ThemeContext);
  return (
    <StyledRow
      onPress={props.onPress}
      noIndent={props.noIndent}
      smallPadding={props.smallPadding}
      omitBorder={props.omitBorder}
      disabled={props.disabled}
    >
      {props.icon}
      <StyledColumn smallPadding={props.smallPadding} noPadding={!props.icon}>
        <MenuItemTextBold hasStrike={props.hasStrike} textSize={props.textSize}>
          {intl.formatMessage(props.title)}
        </MenuItemTextBold>
        {props.subtitleValue ? (
          <MenuItemText
            hasStrike={props.hasStrike}
            textSize={props.textSize}
            lightSubtitleValue={props.lightSubtitleValue}
          >
            {props.subtitleValue}
          </MenuItemText>
        ) : props.subtitleDefaultAction ? (
          <LinkBody hasStrike={props.hasStrike} textSize={props.textSize}>
            {intl.formatMessage(props.subtitleDefaultAction)}
          </LinkBody>
        ) : null}
        {props.subElement}
      </StyledColumn>
      <ArrowRight
        color={
          props.colorfulArrow ? theme.buttonSecondaryBackgroundColor : undefined
        }
      />
    </StyledRow>
  );
};
