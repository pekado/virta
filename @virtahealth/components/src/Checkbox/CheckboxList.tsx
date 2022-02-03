import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useField } from "formik";
import { useIntl } from "react-intl";
import {
  VirtaIntlMessage,
  formatVirtaMessageOrString,
} from "@virtahealth/utils";

import styled from "../styled-components";
import { LabeledFormElement } from "../LabeledFormElement";
import { Body } from "../SubstrateText";
import { Checkbox, CheckboxProps, CheckboxStyledProps } from ".";

export interface CheckboxOption {
  label: VirtaIntlMessage;
  value: string;
  description?: VirtaIntlMessage;
}

export interface CheckboxListProps
  extends Omit<CheckboxProps, "isChecked" | "onPress" | "multiple"> {
  /**
   * Options list for checkboxes
   */
  options: CheckboxOption[];

  helperText?: VirtaIntlMessage;

  isLarge?: boolean;

  direction?: "column" | "row";

  optionStyle?: StyleProp<ViewStyle>;

  multiple?: boolean;

  exclusiveWith?: string;

  value: (string | number)[];

  onChange: (value: (string | number)[]) => void;
}
export interface CheckboxListFieldProps
  extends Omit<CheckboxListProps, "onChange" | "value"> {
  /**
   * Name of the Formik field
   */
  name: string;
}

interface CheckboxListStyledProps
  extends Omit<CheckboxStyledProps, "isChecked"> {
  isLarge?: boolean;
  direction?: "column" | "row";
  isLastOption?: boolean;
}

interface CheckboxListContainerStyledProps {
  direction?: "column" | "row";
}

const StyledListContainer = styled.View<CheckboxListContainerStyledProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  width: 100%;
`;

const StyledCheckbox = styled(Checkbox)<CheckboxListStyledProps>`
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

export const CheckboxList: React.FC<CheckboxListProps> = ({
  labelMessage,
  options,
  value = [],
  isLarge,
  direction = "column",
  onChange,
  errorText,
  style,
  exclusiveWith,
  helperText,
  testID,
  ...rest
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const handleChange = (optionValue: string, isChecked: boolean) => {
    let newValues = Array.isArray(value) ? value : []; // should be an array
    if (exclusiveWith && isChecked) {
      if (exclusiveWith === optionValue) {
        onChange([optionValue]);
        return;
      } else if (exclusiveWith !== optionValue) {
        newValues = newValues.filter((v) => v !== exclusiveWith);
      }
    }
    if (!isChecked) {
      // If not checked, then remove it
      newValues = newValues?.filter((v: string | number) => v !== optionValue);
    } else {
      newValues = [...newValues, optionValue];
    }

    onChange(newValues);
  };

  return (
    <LabeledFormElement
      labelMessage={labelMessage!}
      isLarge={isLarge}
      style={style}
      helperText={helperText}
    >
      <StyledFormElementWrapper>
        <StyledListContainer testID={testID} direction={direction}>
          {options.map((o, i) => {
            const isChecked: boolean = value.includes(o.value);

            return (
              <StyledCheckbox
                {...rest}
                key={o.value}
                testID={`${testID}-value-${o.value}`}
                direction={direction}
                isChecked={isChecked}
                labelMessage={o.label}
                descriptionMessage={o.description}
                isLastOption={i === options.length - 1}
                onPress={() => handleChange(o.value, !isChecked)}
              />
            );
          })}
        </StyledListContainer>
        {!!errorText && (
          <StyledError color="Danger" size="xsmall" weight="light">
            {formatMessage(errorText)}
          </StyledError>
        )}
      </StyledFormElementWrapper>
    </LabeledFormElement>
  );
};

export const CheckboxListField: React.FC<CheckboxListFieldProps> = ({
  name,
  ...rest
}) => {
  const [field, meta, helpers] = useField(name);
  const error = meta.touched && meta.error ? meta.error : undefined;

  return (
    <CheckboxList
      {...rest}
      value={field.value}
      onChange={helpers.setValue}
      errorText={error}
    />
  );
};
