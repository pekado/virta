import * as React from "react";
import {
  CheckboxField,
  InputField,
  Heading,
  LabeledBasicDropdownField,
  LabeledFormElement,
  Spacer,
  styled,
} from "@virtahealth/components";
import { labels, text } from "../messages";
import { STATE_OPTIONS } from "../../constants";

const SPACE = 16;

const AutoCompleteContainer = styled.View`
  width: 100%;
  z-index: 10;
`;

const StyledLabeledFormElement = styled(LabeledFormElement)`
  margin-bottom: 16px;
`;

export default function ShippingSection() {
  return (
    <>
      <Heading size={2}>{text.shippingTitle.defaultMessage}</Heading>
      <Spacer height={24} />
      <StyledLabeledFormElement isLarge labelMessage={labels.street}>
        <InputField name="shippingAddress.street" />
      </StyledLabeledFormElement>
      <StyledLabeledFormElement
        isLarge
        labelMessage={labels.aptUnit}
        helperText={labels.aptUnit.helperText}
      >
        <InputField name="shippingAddress.aptUnit" />
      </StyledLabeledFormElement>
      <StyledLabeledFormElement isLarge labelMessage={labels.city}>
        <InputField name="shippingAddress.city" />
      </StyledLabeledFormElement>
      <AutoCompleteContainer>
        <LabeledBasicDropdownField
          options={STATE_OPTIONS}
          name="shippingAddress.state"
          labelMessage={labels.state}
          fieldName="shippingAddress.state"
          searchable
          isLarge
          overlap
        />
      </AutoCompleteContainer>
      <Spacer height={SPACE} />
      <StyledLabeledFormElement isLarge labelMessage={labels.zip}>
        <InputField name="shippingAddress.zip" />
      </StyledLabeledFormElement>
      <CheckboxField
        labelMessage={labels.makeDefault}
        name="shippingAddress.isMain"
      />
    </>
  );
}
