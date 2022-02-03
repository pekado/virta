import * as React from "react";
import { TouchableHighlight } from "react-native";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { Hoverable } from "react-native-web-hooks";
import { useIntl, MessageDescriptor } from "react-intl";
import { IconButton, MoreIcon } from "..";
import styled, { ThemeContext } from "../styled-components";

const MenuWrapper = styled.View`
  display: flex;
`;

const EditMenuContainer = styled.View`
  width: 126px;
  background-color: ${({ theme }) => theme.editMenuOptionBackgroundColor};
  border-style: ${({ theme }) => theme.sectionTableBorderStyle};
  border-width: ${({ theme }) => theme.sectionTableBorderWidth}px;
  border-color: ${({ theme }) => theme.sectionTableBorderColor};
  overflow: hidden;
  position: absolute;
  top: 10px;
  right: 6px;
  z-index: 999;
`;

const EditMenuOptionContainer = styled.View<{ isSelected: boolean }>`
  width: 100%;
  height: 34px;
  justify-content: center;
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.editMenuOptionHighlightColor
      : theme.editMenuOptionBackgroundColor};
  border-bottom-color: ${({ theme }) => theme.sectionTableBorderColor};
  border-bottom-width: ${({ theme }) => theme.sectionTableBorderWidth}px;
`;

const EditMenuOptionText = styled.Text`
  padding-left: 20px;
  font-size: ${({ theme }) => theme.editMenuOptionFontSize}px;
  color: ${({ theme }) => theme.editMenuOptionFontColor};
  ${() => getFontFamilyAndWeight("Whitney", "bold")}
`;

export interface EditMenuOption {
  id: string;
  label: MessageDescriptor;
}

const defaultMenuOptions = [
  {
    id: "1",
    label: {
      id: "editMenu.defaultOption.editOrResolve",
      defaultMessage: "Edit Or Resolve",
    },
  },
  {
    id: "2",
    label: { id: "editMenu.defaultOption.delete", defaultMessage: "Delete" },
  },
];

export const MenuOption: React.FC<{
  value: EditMenuOption;
  onSelect: (selectedOption: EditMenuOption) => void;
}> = ({ value, onSelect }) => {
  const [isSelected, setIsSelected] = React.useState(false);
  const intl = useIntl();
  const theme = React.useContext(ThemeContext);
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
          underlayColor={theme.editMenuOptionUnderlayColor}
          testID={`${value.id}-menu-button`}
          onPress={() => {
            onSelect(value);
          }}
        >
          <EditMenuOptionContainer
            isSelected={isSelected}
            testID={`${value.id}-container`}
            key={`${value.id}-container`}
          >
            <EditMenuOptionText key={`${value.id}-text`}>
              {intl.formatMessage(value.label)}
            </EditMenuOptionText>
          </EditMenuOptionContainer>
        </TouchableHighlight>
      )}
    </Hoverable>
  );
};

export interface EditMenuProps {
  options?: EditMenuOption[];
  onSelect: (selectedOption: EditMenuOption) => void;
}

export const EditMenu: React.FC<EditMenuProps> = ({
  options = defaultMenuOptions,
  onSelect,
}: EditMenuProps) => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  return (
    <>
      <IconButton
        appearance="link"
        intent="secondary"
        labelMessage={{
          id: "sectiontable.action.menu",
          defaultMessage: "Edit menu",
        }}
        icon={<MoreIcon />}
        onPress={() => {
          setIsMenuVisible(!isMenuVisible);
        }}
        size="medium"
        testID="edit-menu-button"
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
              <EditMenuContainer testID="edit-menu">
                {options.map((option: EditMenuOption) => {
                  return (
                    <MenuOption
                      value={option}
                      key={`menu-option-${option.id}`}
                      onSelect={(selectedOption: EditMenuOption) => {
                        setIsMenuVisible(false);
                        onSelect(selectedOption);
                      }}
                    />
                  );
                })}
              </EditMenuContainer>
            )}
          </Hoverable>
        </MenuWrapper>
      )}
    </>
  );
};
