import { ViewProps, TouchableHighlight } from "react-native";
import * as React from "react";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { primitives } from "@virtahealth/styles";
import { Hoverable } from "react-native-web-hooks";
import { Button, PlusIcon, ChevronDown } from "..";
import styled from "../styled-components";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MenuWrapper = styled.View`
  display: flex;
`;

const MenuContainer = styled.View<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  background-color: ${({ theme }) => theme.menubuttonBodyBackgroundColor};
  border-style: ${({ theme }) => theme.menubuttonMainBorderStyle};
  border-width: ${({ theme }) => theme.menubuttonMainBorderWidth}px;
  border-color: ${({ theme }) => theme.menubuttonMainBorderColor};
  border-radius: 5px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: absolute;
  left: 14px;
`;

const MenuOptionContainer = styled.View<{ isSelected: boolean }>`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.menubuttonHighlightColor
      : theme.menubuttonBodyBackgroundColor};
  border-bottom-color: ${({ theme }) => theme.menubuttonMainBorderColor};
  border-bottom-width: ${({ theme }) => theme.menubuttonMainBorderWidth}px;
`;

const MenuOptionText = styled.Text`
  padding-left: 20px;
  font-size: ${({ theme }) => theme.menubuttonTextSize}px;
  color: ${({ theme }) => theme.menubuttonTextColor};
  ${() => getFontFamilyAndWeight("Whitney", "400")}
`;

// ChevronDownIcon - wrapper around ChevronDown is needed with fillOpacity 0 otherwise ▼ shows up instead of ⌄
const ChevronDownIcon = () => {
  return (
    <div style={{ fillOpacity: 0 }}>
      <ChevronDown width={12} height={12} color={"#FFF"} />
    </div>
  );
};

export interface MenuOptionProps {
  id: string;
  label: string;
}

export const MenuOption: React.FC<{
  value: MenuOptionProps;
  onSelect: (selectedOption: MenuOptionProps) => void;
}> = ({ value, onSelect }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <Hoverable
      onHoverIn={() => {
        setIsSelected(true);
      }}
      onHoverOut={() => {
        setIsSelected(false);
      }}
    >
      {() => (
        <TouchableHighlight
          key={value.id}
          underlayColor={primitives.color.oxygenBlue100}
          onPress={() => {
            onSelect(value);
          }}
        >
          <MenuOptionContainer
            isSelected={isSelected}
            key={`${value.id}-container`}
          >
            <MenuOptionText key={`${value.id}-text`}>
              {value.label}
            </MenuOptionText>
          </MenuOptionContainer>
        </TouchableHighlight>
      )}
    </Hoverable>
  );
};

export interface DropdownMenuProps extends Pick<ViewProps, "style"> {
  width?: number;
  trigger: {
    labelMessage: {
      id: string;
      defaultMessage: string;
    };
    width?: number;
    fontSize?: number;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
  };
  options: (MenuOptionProps | null)[];
  onSelect: (selectedOption: MenuOptionProps) => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  width = 259,
  trigger: {
    labelMessage,
    width: triggerWidth = 144,
    fontSize = 14,
    leftIcon = <PlusIcon width={12} height={12} color={"#FFF"} />,
    rightIcon = <ChevronDownIcon />,
  },
  options,
  onSelect,
}) => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  return (
    <Container>
      <Button
        key="dropdownmenu-button-selector"
        labelMessage={labelMessage}
        style={{ width: triggerWidth }}
        labelStyle={{ fontSize: fontSize }}
        appearance={"solid"}
        size={"medium"}
        intent={"primary"}
        iconBefore={leftIcon}
        iconAfter={rightIcon}
        onPress={() => {
          setIsMenuVisible(!isMenuVisible);
        }}
        testID="dropdownmenu-button-selector"
        disabled={undefined}
        onLayout={undefined}
      />
      {isMenuVisible && (
        <MenuWrapper>
          <Hoverable
            onHoverIn={() => {
              setIsMenuVisible(true);
            }}
            onHoverOut={() => {
              setIsMenuVisible(false);
            }}
          >
            {() => (
              <MenuContainer width={width} testID="options-menu">
                {options.map((option) => {
                  return option ? (
                    <MenuOption
                      value={option}
                      key={`menu-option-${option.id}`}
                      onSelect={(selectedOption: MenuOptionProps) => {
                        setIsMenuVisible(false);
                        onSelect(selectedOption);
                      }}
                    />
                  ) : null;
                })}
              </MenuContainer>
            )}
          </Hoverable>
        </MenuWrapper>
      )}
    </Container>
  );
};
