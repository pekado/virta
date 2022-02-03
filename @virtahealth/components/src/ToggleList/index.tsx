import { View, ViewProps } from "react-native";
import * as React from "react";
import { MessageDescriptor, useIntl } from "react-intl";
import { BodySmall } from "../Text";
import styled from "../styled-components";
import { Checkbox } from "../Checkbox";

export interface ToggleListProps extends Pick<ViewProps, "style"> {
  items: Array<ToggleItem>;
  // parent gets notified when things are clicked and must keep track of selected values
  onToggleIndex: (index: number) => void;
}

export interface ToggleItem {
  selected: boolean;
  description: MessageDescriptor;
}

export interface InnerToggleProps extends ToggleItem {
  onPress: () => void;
}

const InnerTouchable = styled.TouchableOpacity<Pick<ToggleItem, "selected">>`
  width: 100%;
  padding: ${({ theme }) => theme.standardSpacingMedium}px;
  padding-right: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  flex-direction: row;
  ${({ theme, selected }) =>
    selected ? `backgroundColor: ${theme.toggleListBackgroundColor}` : ""}
`;

const Row = styled.View`
  border-color: ${({ theme }) => theme.toggleListBorderColor};
  border-width: ${({ theme }) => theme.toggleListBorderWidth}px;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-style: none;
  width: 100%;
  overflow: hidden;
`;

const TopRow = styled(Row)`
  border-top-right-radius: ${({ theme }) => theme.toggleListBorderRadius}px;
  border-top-left-radius: ${({ theme }) => theme.toggleListBorderRadius}px;
  border-top-style: solid;
`;

const BottomRow = styled(Row)`
  border-bottom-right-radius: ${({ theme }) => theme.toggleListBorderRadius}px;
  border-bottom-left-radius: ${({ theme }) => theme.toggleListBorderRadius}px;
`;

const SingleRow = styled(Row)`
  border-radius: ${({ theme }) => theme.toggleListBorderRadius}px;
  border-top-style: solid;
`;

const OptionText = styled(BodySmall)`
  color: ${({ theme }) => theme.toggleListTextColor};
  font-weight: ${({ theme }) => theme.textCommunityThinFontWeight};
`;

export const ToggleList: React.FC<ToggleListProps> = ({
  items,
  style,
  onToggleIndex,
}) => {
  const rows = new Array<React.ReactNode>();

  // if there's only one item in the toggle set, turn it into a single row and
  // make sure it has rounded borders on top and bottom
  if (items.length == 1) {
    rows.push(
      <SingleRow>
        <InnerToggle
          description={items[0].description}
          onPress={() => onToggleIndex(0)}
          selected={items[0].selected}
        />
      </SingleRow>
    );
  }
  // go through all items and turn them into rows
  else {
    for (let i = 0; i < items.length; i++) {
      // the first row has rounded borders on top
      if (i == 0) {
        rows.push(
          <TopRow>
            <InnerToggle
              description={items[i].description}
              onPress={() => onToggleIndex(i)}
              selected={items[i].selected}
            />
          </TopRow>
        );
      }
      // the last row has rounded borders on bottom
      else if (i == items.length - 1) {
        rows.push(
          <BottomRow>
            <InnerToggle
              description={items[i].description}
              onPress={() => onToggleIndex(i)}
              selected={items[i].selected}
            />
          </BottomRow>
        );
      }
      // middle rows dont have rounded borders
      else {
        rows.push(
          <Row>
            <InnerToggle
              description={items[i].description}
              onPress={() => onToggleIndex(i)}
              selected={items[i].selected}
            />
          </Row>
        );
      }
    }
  }

  return <View style={style}>{rows}</View>;
};

const InnerToggle: React.FC<InnerToggleProps> = ({
  onPress,
  description,
  selected,
}) => {
  const intl = useIntl();

  return (
    <InnerTouchable onPress={onPress} selected={selected}>
      <Checkbox isChecked={selected} onPress={onPress} />

      <OptionText>{intl.formatMessage(description)}</OptionText>
    </InnerTouchable>
  );
};
