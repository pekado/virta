import * as React from "react";
import { Platform } from "react-native";
import { MessageDescriptor } from "react-intl";
import { VirtaIntlMessage, getMessageId } from "@virtahealth/utils";
import { Button, css, NavBar, Spacer, styled } from "@virtahealth/components";
import { ScreenSizeProps } from "../index";

const isWeb = Platform.OS === "web";

interface NavControlProps extends ScreenSizeProps {
  onChangeTab: (id: string | number) => void;
  navItems: VirtaIntlMessage[];
  navValues?: { [key: string]: { [value: string]: string } };
  selectedNavItem: MessageDescriptor;
}

const NavControlsContainer = styled.View<ScreenSizeProps>`
  flex-shrink: 0;
  margin-bottom: ${({ isCompact }) => (isCompact ? -2 : 0)}px;
`;

const VerticalNavBarContainer = styled.View`
  margin-left: 14px;
`;
const NavButtonWrapper = styled.View`
  width: 95px;
`;

const StyledButton = styled(Button)`
  ${() => {
    if (isWeb) {
      return css`
        min-height: unset;
      `;
    }
  }}
  padding: 4px 12px;
  margin-bottom: 4px;
`;

const VerticalNav: React.FC<Omit<NavControlProps, "isCompact">> = ({
  onChangeTab,
  navItems,
  selectedNavItem,
}) => (
  <VerticalNavBarContainer>
    {navItems.map((virtaItem) => {
      const itemId = getMessageId(virtaItem);
      const isSelected = itemId === selectedNavItem.id;
      return (
        <NavButtonWrapper key={itemId}>
          <StyledButton
            intent="secondary"
            appearance={isSelected ? "solid" : "minimal"}
            onPress={() => {
              if (itemId && !isSelected) {
                onChangeTab(itemId);
              }
            }}
            labelMessage={virtaItem}
            size="small"
            alignLabel="left"
            labelStyle={{
              lineHeight: 16,
            }}
          />
        </NavButtonWrapper>
      );
    })}
  </VerticalNavBarContainer>
);

export const NavControls: React.FC<NavControlProps> = ({
  onChangeTab,
  navItems,
  selectedNavItem,
  isCompact,
}) => {
  return (
    <NavControlsContainer isCompact={isCompact}>
      {isCompact ? (
        <NavBar
          onChangeTab={(id) => onChangeTab(id!)}
          navItems={navItems}
          initialSelectedTabId={selectedNavItem.id}
          spacer={() => <Spacer width={6} />}
          showScrollButtons={false}
          intent={"primary"}
          padSides={true}
        />
      ) : (
        <VerticalNav
          onChangeTab={(id) => onChangeTab(id)}
          navItems={navItems}
          selectedNavItem={selectedNavItem}
        />
      )}
    </NavControlsContainer>
  );
};
