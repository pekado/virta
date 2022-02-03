import { ViewStyle, StyleProp } from "react-native";
import * as React from "react";
import { useField, FieldArray, FormikValues } from "formik";
import { getMessageFromTreeOrKey } from "@virtahealth/utils";
import {
  Button,
  styled,
  SubstrateBody,
  PlusIcon,
  ThemeContext,
} from "@virtahealth/components";

import { generateInitialValuesFromQuestions } from "../../utils";
import { QuestionObjectListProps } from "../../types";
import DynamicFormQuestion from "../Question";

const StyledContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const StyledItemContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.dynamicFormsQuestionSubitemBackground};
  border-radius: ${({ theme }) =>
    theme.dynamicFormsQuestionSubitemBorderRadius};
  border: ${({ theme }) =>
    `solid ${theme.dynamicFormsQuestionSubitemBorderWidth}px ${theme.dynamicFormsQuestionSubitemBorderColor}`};
  margin-bottom: ${({ theme }) => theme.dynamicFormsQuestionSpacing}px;
`;

const StyledButton = styled(Button).attrs({
  intent: "secondary",
  appearance: "minimal",
})``;

const RemoveButton = styled(StyledButton)`
  align-self: flex-end;
`;

const StyledErrorText = styled(SubstrateBody)`
  margin-top: 10px;
`;

interface Props
  extends Pick<QuestionObjectListProps, "optionsSchema" | "addLabel"> {
  name: string;
  style?: StyleProp<ViewStyle>;
}

export const ObjectListQuestionField: React.FC<Props> = ({
  name,
  optionsSchema,
  style,
  addLabel,
}) => {
  const [field, meta] = useField<FormikValues[]>({ name });
  const error = meta.touched && meta.error ? meta.error : undefined;
  const initialNewValue = generateInitialValuesFromQuestions(optionsSchema);
  const theme = React.useContext(ThemeContext);

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => {
        return (
          <StyledContainer style={style}>
            {field.value?.map((_, index) => (
              <StyledItemContainer key={index}>
                {optionsSchema.map((o) => {
                  return (
                    <DynamicFormQuestion
                      {...o}
                      key={o.key}
                      id={`${name}.${index}.${o.key}`}
                    />
                  );
                })}
                <RemoveButton
                  labelMessage={getMessageFromTreeOrKey("remove")}
                  onPress={() => arrayHelpers.remove(index)}
                />
              </StyledItemContainer>
            ))}
            {error && typeof error === "string" && (
              <StyledErrorText size="xsmall" color="Danger" weight="light">
                {error}
              </StyledErrorText>
            )}
            <StyledButton
              iconBefore={
                <PlusIcon color={theme.buttonSecondaryBackgroundColor} />
              }
              labelMessage={getMessageFromTreeOrKey(addLabel)}
              onPress={() => arrayHelpers.push(initialNewValue)}
            />
          </StyledContainer>
        );
      }}
    />
  );
};
