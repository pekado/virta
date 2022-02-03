import * as React from "react";
import { MessageDescriptor } from "react-intl";
import { ComboBox } from "../ComboBox";
import { Body } from "../Text";
import styled from "../styled-components";

export interface AutoCompleteProps {
  data: Array<string>;
  onChangeText: (value?: string) => void;
  value: string;
  emptyResultsMessage: MessageDescriptor;
  onSubmitText?: (val?: string) => void;
  placeholderMessage?: MessageDescriptor;
  hasError?: boolean;
}

const ListElement = styled(Body)`
  padding: ${({ theme }) => theme.autocompletePadding}px;
  font-weight: ${({ theme }) => theme.autocompleteFontWeight};
  border-bottom-width: ${({ theme }) => theme.dividerDefaultThickness}px;
  border-color: ${({ theme }) => theme.dividerColor};
`;

export const AutoComplete: React.FunctionComponent<AutoCompleteProps> = ({
  data,
  onChangeText,
  value,
  placeholderMessage,
  emptyResultsMessage,
  hasError,
}) => {
  const dataToShow = data.filter((tz) =>
    tz.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <ComboBox
      isThick={true}
      value={value}
      onChangeText={onChangeText}
      onSelectOption={onChangeText}
      emptyResultsMessage={emptyResultsMessage}
      placeholderMessage={placeholderMessage}
      hasError={hasError}
      limitDropdownHeight={true}
    >
      {dataToShow.map((item, index) => (
        <ListElement key={index}>{item}</ListElement>
      ))}
    </ComboBox>
  );
};
