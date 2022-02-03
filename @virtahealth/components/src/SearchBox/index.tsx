import * as React from "react";
import { MessageDescriptor, useIntl } from "react-intl";
import { Platform } from "react-native";
import { BaseTheme } from "@virtahealth/styles";
import { formatVirtaMessageOrString } from "@virtahealth/utils";

import { LabeledFormElement } from "../LabeledFormElement";
import { SearchIcon } from "../Icons";
import { Option, OptionsPane, OptionsPaneContainer } from "../OptionsPane";
import { Row } from "../Row";
import styled, { css } from "../styled-components";
import { VirtaInputProps } from "../properties";

export interface SearchBoxProps extends VirtaInputProps {
  /**
   * An event handler for when the integrated search button is pressed
   */
  onSubmitText?: (val?: string) => void;
  /**
   * A react-intl message for the search results pane empty state (default: "No results")
   */
  emptyResultsMessage?: MessageDescriptor;
  /**
   * Whether to show the search results pane
   */
  showSearchResults?: boolean;
  /**
   * An event handler for selecting a result
   */
  onSelectResult?: (option?: string) => void;
  /**
   * Whether the height of suggestions box should be fixed in order to enable scroll
   */
  limitHeight?: boolean;
}

const StyledInput = styled.TextInput<{ isFocused: boolean }>`
  flex: 1;
  min-height: 40px;
  padding: 8px 12px;
  border-width: 1px;
  border-left-color: transparent;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-color: ${({ theme, editable }) =>
    editable ? theme.inputBorderColor : theme.inputDisabledBorderColor};
  background-color: ${({ theme, editable }) =>
    editable ? theme.inputBackgroundColor : theme.inputDisabledBackgroundColor};
  color: ${({ theme }) => theme.inputColor};
  ${({ editable, isFocused, theme }) =>
    editable && isFocused ? getFocusedStyles(theme) : ""}
`;

const getFocusedStyles = (theme: BaseTheme) => {
  return Platform.select({
    web: css`
      outline-width: 0;
      padding: 7px 11px;
      border-left-color: ${theme.inputFocusColor};
      border-color: ${theme.inputFocusColor};
      border-width: 2px;
    `,
  });
};

const SearchButton = styled.TouchableOpacity`
  min-height: 40px;
  border-color: ${({ theme, disabled }) =>
    disabled
      ? theme.buttonDisabledBackgroundColor
      : theme.buttonPrimaryBackgroundColor};
  border-width: 1px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.buttonDisabledBackgroundColor
      : theme.buttonPrimaryBackgroundColor};
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
`;

export const SearchResult = Option;

const UnlabeledSearchBox: React.FC<React.PropsWithChildren<SearchBoxProps>> = ({
  labelMessage,
  helperText,
  spacerSize,
  placeholderMessage,
  value,
  editable,
  onSubmitText,
  onSelectResult,
  showSearchResults,
  emptyResultsMessage,
  limitHeight = false,
  style,
  children,
  ...inputProps
}) => {
  let placeholderText: string | undefined;
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  if (placeholderMessage) {
    placeholderText = formatMessage(placeholderMessage) as string;
  }

  // editable is true if not explicitly set to false
  editable = editable !== false;

  const handleSubmitText = onSubmitText && (() => onSubmitText(value));

  const [isFocused, setIsFocused] = React.useState(false);

  // we dont want to modify state after the component is unmounted
  let stillMounted = true;
  React.useEffect(() => {
    stillMounted = true;
    return () => {
      stillMounted = false;
    };
  }, []);

  return (
    <OptionsPaneContainer style={style}>
      <Row>
        <SearchButton onPress={handleSubmitText} disabled={!editable}>
          <SearchIcon />
        </SearchButton>
        <StyledInput
          {...inputProps}
          placeholder={placeholderText}
          value={value}
          editable={editable}
          onSubmitEditing={handleSubmitText}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            // Delay hiding so that our OptionsPane has time to respond
            setTimeout(() => {
              if (stillMounted) {
                setIsFocused(false);
              }

              // Since onBlur is a prop that a user can define,
              // call it here if it gets passed in
              if (inputProps.onBlur) {
                inputProps.onBlur(e);
              }
            }, 150);
          }}
          isFocused={isFocused}
        />
      </Row>
      {showSearchResults && (
        <OptionsPane limitHeight={limitHeight} onSelect={onSelectResult}>
          {children}
        </OptionsPane>
      )}
    </OptionsPaneContainer>
  );
};

const StyledUnlabeledSearchBox = styled(UnlabeledSearchBox)`
  flex: 1;
`;

export const SearchBox: React.FC<React.PropsWithChildren<SearchBoxProps>> = ({
  labelMessage,
  helperText,
  spacerSize,
  style,
  children,
  ...inputProps
}) => {
  if (labelMessage) {
    return (
      <LabeledFormElement
        style={style}
        labelMessage={labelMessage}
        helperText={helperText}
        spacerSize={spacerSize}
      >
        <StyledUnlabeledSearchBox {...inputProps}>
          {children}
        </StyledUnlabeledSearchBox>
      </LabeledFormElement>
    );
  }

  return (
    <UnlabeledSearchBox style={style} {...inputProps}>
      {children}
    </UnlabeledSearchBox>
  );
};
