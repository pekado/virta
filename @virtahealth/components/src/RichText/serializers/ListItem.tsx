import * as React from "react";
import { textColors, ArticleCalloutColors } from "../../ArticleCallout";
import { Spacer } from "../../Spacer";
import styled from "../../styled-components";
import { Body } from "../../Text";

interface ListItemProps {
  level: number;
  index: number;
  itemNumber?: number;
  isInCalloutBlock?: boolean;
  color: string;
}

const ListItemBaseText = styled(Body)`
  font-size: ${({ theme }) => theme.standardStyledBodyFontSize}px;
  font-weight: ${({ theme }) => theme.standardStyledBodyFontWeight};
  line-height: ${({ theme }) => theme.standardStyledBodyLineHeight}px;
`;

const CalloutListItemBaseText = styled(ListItemBaseText)<{
  color?: ArticleCalloutColors;
}>`
  line-height: ${({ theme }) => theme.calloutStyledBodyLineHeight}px;
  font-size: ${({ theme }) => theme.calloutStyledBodyFontSize}px;
  color: ${({ theme, color }) => textColors(theme, color)};
`;

const StyledListItem = styled.View<{ index: number }>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ index }) => (index > 0 ? 8 : 0)}px;
`;

const StyledContentWrapper = styled.View`
  flex: 1;
`;

const StyledListItemRow = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SanityListItem: React.FC<ListItemProps> = ({
  children,
  level,
  itemNumber,
  index,
  isInCalloutBlock = false,
}) => {
  const bulletTextCode = level % 2 === 0 ? "\u25E6" : "\u2022";

  /**
   * For lists with nested bullets/numbers, all values are passed in as "children"
   * The current level item has a 'level' prop, while the nested bullets do not at this point
   * because they haven't been serialized yet
   * To render the nested items on the next line, we must filter out those children and render them separately
   * using flex-direction: column;
   */

  // This should contain the current list item
  const currentLevelChildren = React.Children.toArray(children).filter(
    (item: any) => item.props && !("level" in item.props)
  );

  // Nested items are also passed in as "children" but do not contain a level prop yet.
  // They will need to be rendered separately.
  const nextLevelChildren = React.Children.toArray(children).filter(
    (item: any) => item.props?.level
  );

  const BaseText = isInCalloutBlock
    ? CalloutListItemBaseText
    : ListItemBaseText;
  return (
    <StyledListItem index={index} style={level === 1 && { marginBottom: 8 }}>
      <StyledListItemRow>
        <Spacer width={16 * (level - 1)} />
        <BaseText>{itemNumber || bulletTextCode}</BaseText>
        <Spacer width={8} />
        <StyledContentWrapper>
          <BaseText>
            {currentLevelChildren.length ? currentLevelChildren : null}
          </BaseText>
        </StyledContentWrapper>
      </StyledListItemRow>
      {Boolean(nextLevelChildren.length) && (
        <>
          <Spacer height={8} />
          {nextLevelChildren}
        </>
      )}
    </StyledListItem>
  );
};
