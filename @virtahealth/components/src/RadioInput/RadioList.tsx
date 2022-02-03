import { ViewStyle, StyleProp } from "react-native";
import * as React from "react";
import { useField } from "formik";
import { VirtaIntlMessageOrString, VirtaIntlMessage } from "@virtahealth/utils";
import styled from "../styled-components";
import { Body } from "../SubstrateText";
import { LabeledFormElement } from "../LabeledFormElement";
import { RadioInput, RadioInputProps, RadioButtonStyledProps } from ".";

export interface OptionProp {
  value: string | number;
  label: VirtaIntlMessage;
  description?: VirtaIntlMessage;
  data?: unknown;
}

export interface RadioInputListProps
  extends Omit<
    RadioInputProps,
    "isChecked" | "onPress" | "descriptionMessage"
  > {
  value: string | number | undefined;

  options: OptionProp[];

  onChange: (value: string | number, option: OptionProp) => void;

  isLarge?: boolean;

  direction?: "column" | "row";

  optionStyle?: StyleProp<ViewStyle>;

  error?: VirtaIntlMessageOrString;

  helperText?: VirtaIntlMessageOrString;
}

export interface RadioInputListFieldProps
  extends Omit<RadioInputListProps, "onChange" | "value"> {
  /**
   * Name of the Formik field
   */
  name: string;
}

interface RadioButtonListStyledProps
  extends Omit<RadioButtonStyledProps, "isChecked"> {
  isLarge?: boolean;
  direction?: "column" | "row";
  isLastOption?: boolean;
}

interface RadioButtonListContainerStyledProps {
  flexDirection: "column" | "row";
}

const StyledListContainer = styled.View<RadioButtonListContainerStyledProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: 100%;
`;

const StyledRadioInput = styled(RadioInput)<RadioButtonListStyledProps>`
  margin-bottom: ${({ direction, isLastOption }) =>
    direction === "column" && !isLastOption ? 10 : 0}px;
  margin-right: ${({ direction, isLastOption }) =>
    direction === "row" && !isLastOption ? 10 : 0}px;
`;

const StyledFormElementWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledError = styled(Body)`
  margin-top: ${({ theme }) => theme.errorTextTopMargin}px;
`;

export const RadioInputList: React.FC<RadioInputListProps> = ({
  labelMessage,
  options,
  value,
  isLarge,
  direction = "column",
  onChange,
  error,
  style,
  helperText,
  testID,
  ...rest
}) => {
  return (
    <LabeledFormElement
      labelMessage={labelMessage!}
      isLarge={isLarge}
      style={style}
      helperText={helperText}
    >
      <StyledFormElementWrapper>
        <StyledListContainer testID={testID} flexDirection={direction}>
          {options.map((o, i) => (
            <StyledRadioInput
              {...rest}
              descriptionMessage={o.description}
              key={o.value}
              direction={direction}
              isChecked={value === o.value}
              labelMessage={o.label}
              isLastOption={options.length === ++i}
              onPress={() => onChange(o.value, o)}
              testID={`${testID}-value-${o.value}`}
            />
          ))}
        </StyledListContainer>
        {!!error && (
          <StyledError color="Danger" size="xsmall" weight="light">
            {error}
          </StyledError>
        )}
      </StyledFormElementWrapper>
    </LabeledFormElement>
  );
};

export const RadioInputListField: React.FC<RadioInputListFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta, helpers] = useField<string | number>({ name });
  const error = meta.touched && meta.error ? meta.error : undefined;
  return (
    <RadioInputList
      {...rest}
      value={field.value}
      onChange={(value) => helpers.setValue(value)}
      error={error}
    />
  );
};
