import { View } from "react-native";
import * as React from "react";
import { useIntl, MessageDescriptor } from "react-intl";
import { useField } from "formik";
import { RadioInputField } from "../RadioInput";
import { Label, Heading4 } from "../Text";
import styled from "../styled-components";

const StyledRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-color: ${({ theme }) => theme.radioChooserPrimaryBorderColor};
`;

const StyledRadioChooser = styled(View)`
  border-style: solid;
  border-color: ${({ theme }) => theme.radioChooserPrimaryBorderColor};
`;

const StyledOptions: any = styled(View)`
  display: flex;
  height: ${({ theme }) => theme.radioChooserRowHeight}px;
  flex-direction: row;
  justify-content: center;
  border-color: ${({ theme }) => theme.radioChooserPrimaryBorderColor};
  border-right-width: ${({ theme }) => theme.radioChooserBorderWidth}px;
  border-left-width: ${({ theme }) => theme.radioChooserBorderWidth}px;
  border-bottom-width: ${({ theme }) => theme.radioChooserBorderWidth}px;
`;

const ErrorWrapper = styled(View)`
  border-width: ${({ theme }) => theme.radioChooserErrorBorderWidth}px;
  border-color: ${({ theme }) => theme.radioChooserWarningColor};
  position: relative;
  left: ${({ theme }) => theme.radioChooserErrorBorderWidth}px;
`;

const WrappedLabel = styled(View)`
  border-bottom-width: ${({ theme }) => theme.radioChooserBorderWidth}px;
  height: ${({ theme }) => theme.radioChooserRowHeight}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  flex-grow: 1;
  border-color: ${({ theme }) => theme.radioChooserPrimaryBorderColor};
`;

const StyledLabel = styled(Label)`
  font-weight: ${({ theme }) => theme.radioInputLabelFontWeight};
`;

const Header = styled(Heading4)``;

const BorderedColumn: any = styled(View)`
  width: ${({ theme }) => theme.radioChooserOptionWidth}px;
  align-items: center;
  justify-content: center;
  border-left-width: ${(props: any) =>
    props.isFirstChild ? 0 : props.theme.radioChooserBorderWidth}px;
  border-color: ${({ theme }) => theme.radioChooserPrimaryBorderColor};
`;

export interface RadioChooserProps {
  /**
   * Array of option radio buttons to generate for radio chooser rows
   * */
  options?: string[];
  /**
   * Array of option radio buttons to generate for radio chooser rows
   * */
  optionLabelMessages?: MessageDescriptor[];
  /**
   * Array of RadioChooserRow elements
   * */
  children?: React.ReactElement[];
  /**
   * Name of RadioChooser, used for key purposes
   * */
  name: string;
  /**
   * Label for the radio chooser
   */
  header: MessageDescriptor;
  /**
   * Test ID
   */
  testID?: string;
}

interface RadioChooserRowProps {
  /**
   * Message Descriptor to answer with radio button option
   * */
  labelMessage: MessageDescriptor;
  /**
   * Values generally supplied by parent RadioChooser
   * */
  options?: string[];
  /**
   * Formik field name
   * */
  name: string;
  /**
   * Test ID
   */
  testID?: string;
}

export const RadioChooserRowField: React.FunctionComponent<RadioChooserRowProps> =
  ({ labelMessage, options, name, testID }) => {
    const intl = useIntl();
    const [, { error, touched }] = useField({ name: name });

    const row = (
      <StyledRow nativeID={name} testID={testID}>
        <WrappedLabel>
          <StyledLabel testID={`${testID}-label`}>
            {intl.formatMessage(labelMessage)}
          </StyledLabel>
        </WrappedLabel>
        <StyledOptions>
          {options &&
            options.map((option, idx) => (
              <BorderedColumn
                isFirstChild={idx === 0}
                testID={`${testID}-input-column`}
                key={`${name}-row-${option}-input-column`}
              >
                <RadioInputField
                  testID={`${testID}-row-value`}
                  value={option}
                  name={name}
                />
              </BorderedColumn>
            ))}
        </StyledOptions>
      </StyledRow>
    );
    return touched && error ? <ErrorWrapper>{row}</ErrorWrapper> : row;
  };

export const RadioChooser: React.FC<RadioChooserProps> = ({
  options,
  optionLabelMessages,
  children,
  name,
  header,
  testID,
}) => {
  const intl = useIntl();
  return (
    <StyledRadioChooser>
      <StyledRow>
        <WrappedLabel>
          <Header testID={`${testID}-header`}>
            {intl.formatMessage(header)}
          </Header>
        </WrappedLabel>
        <StyledOptions>
          {optionLabelMessages &&
            optionLabelMessages.map((optionLabelMessage, idx) => (
              <BorderedColumn isFirstChild={idx === 0} key={`${idx}-header`}>
                <Header testID={`chooser-${testID}-header`}>
                  {intl.formatMessage(optionLabelMessage)}
                </Header>
              </BorderedColumn>
            ))}
        </StyledOptions>
      </StyledRow>
      {children &&
        React.Children.map(children, (child: React.ReactElement, idx) =>
          React.cloneElement(child, {
            options,
            key: `${name}-chooser-row-${idx}`,
          })
        )}
    </StyledRadioChooser>
  );
};
