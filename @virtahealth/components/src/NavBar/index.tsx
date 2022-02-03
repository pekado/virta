import * as React from "react";
import {
  FlatList,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { MessageDescriptor, useIntl } from "react-intl";
import {
  VirtaIntlMessage,
  formatVirtaMessageOrString,
  getMessageId,
  getFontFamilyAndWeight,
} from "@virtahealth/utils";
import styled from "../styled-components";
import { ListProps } from "../List";
import { Base } from "../Text";
import { Button } from "../Button";

interface NavBarProps extends Omit<ListProps, "direction" | "spacer"> {
  spacer: React.FC | React.ComponentClass;
  onChangeTab: (id?: string | number) => void;
  navItems: VirtaIntlMessage[];
  initialSelectedTabId?: string | number;
  selectedTabStyle?: StyleProp<ViewStyle>;
  selectedTabTextStyle?: StyleProp<TextStyle>;
  showScrollButtons?: boolean;
  intent?: "primary" | "default";
  padSides?: boolean;
}

interface NavBarItemProps {
  selected: boolean;
  selectedTabStyle?: StyleProp<ViewStyle>;
  selectedTabTextStyle?: StyleProp<TextStyle>;
  item: VirtaIntlMessage;
  index: number;
  setSelectedTabId: (id?: string | number) => void;
  onChangeTab: (id?: string | number) => void;
  intent?: "primary" | "default";
  length: number;
  padFirstAndLast?: boolean;
}

type NavBarItemStyleProps = Pick<NavBarItemProps, "selected" | "intent">;

const StyledNavBar = styled.FlatList`
  display: flex;
  flex-direction: row;
`;

const StyledNavBarItem = styled.View<NavBarItemStyleProps>`
  padding: 12px 0px;
  margin: 0px 5px;
  align-items: center;
  border-bottom-width: ${({ theme, selected }) =>
    selected ? theme.navbarSelectedTabBottomBorderWidth : 0}px;
  border-bottom-color: ${({ theme, selected, intent }) =>
    selected
      ? intent === "primary"
        ? theme.navbarSelectedTabBottomBorderColorPrimary
        : theme.navbarSelectedTabBottomBorderColor
      : "transparent"};
`;

const StyledItemText = styled(Base)<NavBarItemStyleProps>`
  font-size: ${({ theme }) => theme.navbarSelectedTabFontSize}px;
  color: ${({ theme, selected, intent }) => {
    if (selected) {
      return intent === "primary"
        ? theme.navbarTabFontColorPrimary
        : theme.navbarSelectedTabFontColor;
    }

    return theme.navbarTabFontColor;
  }};
  ${({ theme, selected }) =>
    getFontFamilyAndWeight(
      "Whitney",
      selected ? theme.navbarSelectedTabFontWeight : theme.navbarTabFontWeight
    )}
`;

const StyledNavButton = styled(Button)`
  max-width: 10px;
`;

export const NavBarItem: React.FC<NavBarItemProps> = ({
  item,
  index,
  selected,
  setSelectedTabId,
  onChangeTab,
  selectedTabStyle,
  selectedTabTextStyle,
  intent = "default",
  length,
  padFirstAndLast = false,
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  return (
    <TouchableOpacity
      key={`tab-${index}`}
      style={[
        { alignItems: "center" },
        index === 0 && padFirstAndLast
          ? { paddingLeft: 15 }
          : index === length - 1 && padFirstAndLast
          ? { paddingRight: 15 }
          : {},
      ]}
      accessibilityRole="tab"
      accessibilityState={{ selected }}
      onPress={() => {
        setSelectedTabId(getMessageId(item));
        onChangeTab(getMessageId(item));
      }}
    >
      <StyledNavBarItem
        selected={selected}
        style={selected && selectedTabStyle}
        intent={intent}
      >
        <StyledItemText
          selected={selected}
          intent={intent}
          style={selected && selectedTabTextStyle}
        >
          {formatMessage(item)}
        </StyledItemText>
      </StyledNavBarItem>
    </TouchableOpacity>
  );
};

export const NavBar: React.FC<NavBarProps> = ({
  spacer,
  navItems,
  selectedTabStyle,
  selectedTabTextStyle,
  onChangeTab,
  initialSelectedTabId,
  showScrollButtons = true,
  intent = "default",
  padSides = false,
}) => {
  const [selectedTabId, setSelectedTabId] = React.useState(
    initialSelectedTabId ?? getMessageId(navItems[0])
  );

  // Scrolling
  const [isScrollable, setIsScrollable] = React.useState(false);
  const flatListRef = React.useRef() as React.RefObject<FlatList>;
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0); // Keep track of which item has been scrolled to
  const [disableNextBtn, setDisableNextBtn] = React.useState(false);
  const [disablePrevBtn, setDisablePrevBtn] = React.useState(true);
  const [contentWidth, setContentWidth] = React.useState(0);
  const [viewportWidth, setViewportWidth] = React.useState(0);

  React.useEffect(() => {
    if (initialSelectedTabId) {
      setSelectedTabId(initialSelectedTabId);
      const index = navItems.findIndex(
        (item) => getMessageId(item) === initialSelectedTabId
      );
      if (index > -1) {
        setCurrentItemIndex(index);
      }
    }
  }, [initialSelectedTabId, navItems]);

  const handleScrollClick = (scrollDirection: 1 | -1) => {
    const newIndex = currentItemIndex + scrollDirection;
    if (newIndex < 0 || newIndex > navItems.length - 1) {
      return;
    }
    setCurrentItemIndex(newIndex);
  };

  const handleOnScroll = (
    nativeEvent: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const {
      nativeEvent: { layoutMeasurement, contentOffset, contentSize },
    } = nativeEvent;
    if (layoutMeasurement.width + contentOffset.x === contentSize.width) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }

    if (contentOffset.x === 0) {
      setDisablePrevBtn(true);
      setCurrentItemIndex(0);
    } else {
      setDisablePrevBtn(false);
    }
  };

  React.useEffect(() => {
    flatListRef.current?.scrollToIndex({ index: currentItemIndex });
  }, [currentItemIndex]);

  React.useEffect(() => {
    setIsScrollable(contentWidth > viewportWidth);
  }, [contentWidth, viewportWidth]);

  const scrollableNavigation = (event: LayoutChangeEvent) => {
    const {
      nativeEvent: {
        layout: { width },
      },
    } = event;
    setViewportWidth(width);
  };

  return (
    <View style={isScrollable && { display: "flex", flexDirection: "row" }}>
      {isScrollable && showScrollButtons && (
        <StyledNavButton
          disabled={disablePrevBtn}
          appearance="minimal"
          labelMessage={{
            id: "next",
            defaultMessage: String.fromCharCode(0x2190),
          }}
          onPress={() => handleScrollClick(-1)}
        />
      )}
      <StyledNavBar
        ref={flatListRef}
        scrollEnabled={isScrollable}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={setContentWidth}
        onLayout={scrollableNavigation}
        onScroll={handleOnScroll}
        data={navItems}
        ItemSeparatorComponent={spacer}
        scrollEventThrottle={50} // NOTE: Test with iOS simulator and adjust as needed
        renderItem={({ item, index }) => {
          const navItem = item as MessageDescriptor;
          return (
            <NavBarItem
              item={navItem}
              index={index}
              onChangeTab={onChangeTab}
              selected={selectedTabId === navItem.id}
              setSelectedTabId={setSelectedTabId}
              selectedTabStyle={selectedTabStyle}
              selectedTabTextStyle={selectedTabTextStyle}
              intent={intent}
              length={navItems.length}
              padFirstAndLast={padSides}
            />
          );
        }}
      ></StyledNavBar>
      {isScrollable && showScrollButtons && (
        <StyledNavButton
          disabled={disableNextBtn}
          appearance="minimal"
          labelMessage={{
            id: "previous",
            defaultMessage: String.fromCharCode(0x2192),
          }}
          onPress={() => handleScrollClick(1)}
        />
      )}
    </View>
  );
};
