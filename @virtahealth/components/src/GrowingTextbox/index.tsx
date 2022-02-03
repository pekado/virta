import { ViewProps, Platform } from "react-native";
import * as React from "react";
import { getFontFamilyAndWeight } from "@virtahealth/utils";
import { useField } from "formik";
import { BaseTheme } from "@virtahealth/styles";
import styled, { css } from "../styled-components";

// Styled Components
const Container = styled.View<{ width: number }>`
  width: ${({ width }) => `${width}px`};
`;

const StyledTextInput = styled.TextInput<{ isFocused: boolean }>`
  width: 100%;
  min-height: 110px;
  font-size: ${({ theme }) => theme.growingTextboxFontSize}px;
  border-style: ${({ theme }) => theme.growingTextboxBorderStyle};
  border-width: ${({ theme }) => theme.growingTextboxBorderWidth}px;
  border-color: ${({ theme }) => theme.growingTextboxBorderColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.growingTextboxBackgroundColor};
  ${() => getFontFamilyAndWeight("Whitney", "300")}
  ${({ isFocused, theme }) => (isFocused ? getFocusedStyles(theme) : "")}
`;
const getFocusedStyles = (theme: BaseTheme) => {
  return Platform.select({
    web: css`
      outline-width: 0;
      padding: 7px 11px;
      border-color: ${theme.inputFocusColor};
      border-width: 2px;
    `,
  });
};

const CharacterCount = styled.Text<{ exceedsCount: boolean }>`
  color: ${({ exceedsCount, theme }) =>
    exceedsCount
      ? theme.characterCountWarningTextColor
      : theme.characterCountTextColor};
  font-size: ${({ theme }) => theme.characterCountFontSize}px;
  margin-top: 8px;
  ${() => getFontFamilyAndWeight("Whitney", "100")}
`;

export interface GrowingTextboxProps
  extends Pick<ViewProps, "style" | "testID"> {
  name: string; // name of the field
  width?: number;
  minHeight?: number;
  maxLength?: number;
  hideCharacterCountLabel?: boolean;
}

export const GrowingTextbox: React.FC<GrowingTextboxProps> = (props) => {
  const {
    name,
    width = 389,
    maxLength = 1200,
    minHeight = 110,
    testID = "notes",
    hideCharacterCountLabel,
    style,
  } = props;
  const [field, , helpers] = useField(name);
  const [length, setLength] = React.useState(field.value?.length ?? 0);
  const [height, setHeight] = React.useState(minHeight);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <Container width={width}>
      <StyledTextInput
        value={field.value}
        testID={testID}
        multiline
        scrollEnabled={false}
        maxLength={maxLength}
        style={[{ padding: 8 }, style, { height }]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsFocused(false);
          }, 150);
        }}
        onChangeText={(text: string) => {
          helpers.setValue(text);
          setLength(text.length);
        }}
        onContentSizeChange={({
          nativeEvent: {
            contentSize: { height },
          },
        }) => {
          /**
           * If we don't do it async then the state updates
           * get stuck in an infinite loop especially
           * when a huge block of text is pasted/deleted
           */
          (async () => {
            setHeight(Math.max(height, minHeight));
          })();
        }}
        isFocused={isFocused}
      />
      {!hideCharacterCountLabel && (
        <CharacterCount exceedsCount={length >= maxLength}>
          {length}/{maxLength} characters
        </CharacterCount>
      )}
    </Container>
  );
};
