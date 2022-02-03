import * as React from "react";
import {
  BodySmall,
  HelperText,
  Button,
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

type Address = {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zip?: string;
};

interface Props {
  address: Address;
  firstName: string;
  lastName: string;
}

const isAddressComplete = (address: Address) => {
  return Boolean(
    address.street1 && address.city && address.state && address.zip
  );
};

const SPACE = 16;

const AutoCompleteContainer = styled.View`
  width: 100%;
  z-index: 10;
`;

const StyledAddressLine = styled(BodySmall)`
  margin-bottom: 16px;
`;

const StyledLabeledFormElement = styled(LabeledFormElement)`
  margin-bottom: 16px;
`;

const StyledHelperText = styled(HelperText)`
  font-size: 16px;
  line-height: 22px;
`;

export default function ShippingSection({
  address,
  firstName,
  lastName,
}: Props) {
  const initialAddressValue: Address = {
    street1: address.street1 ?? "",
    street2: address.street2 ?? "",
    city: address.city ?? "",
    state: address.state ?? "",
    zip: address.zip ?? "",
  };

  // Local state
  const [showEditAddress, setShowEditAddress] = React.useState(
    !isAddressComplete(initialAddressValue)
  );

  return (
    <>
      <Heading size={2}>{text.shippingTitle.defaultMessage}</Heading>
      <Spacer height={4} />
      <StyledHelperText>{text.shippingInfo.defaultMessage}</StyledHelperText>
      <Spacer height={24} />
      {showEditAddress ? (
        <>
          <StyledLabeledFormElement isLarge labelMessage={labels.name}>
            <InputField editable={false} name="name" />
          </StyledLabeledFormElement>
          <StyledLabeledFormElement isLarge labelMessage={labels.address1}>
            <InputField name="street1" />
          </StyledLabeledFormElement>
          <StyledLabeledFormElement isLarge labelMessage={labels.address2}>
            <InputField name="street2" />
          </StyledLabeledFormElement>
          <StyledLabeledFormElement isLarge labelMessage={labels.city}>
            <InputField name="city" />
          </StyledLabeledFormElement>
          <AutoCompleteContainer>
            <LabeledBasicDropdownField
              options={STATE_OPTIONS}
              name="state"
              labelMessage={labels.state}
              placeholderMessage={labels.statePlaceholderSearch}
              fieldName="state"
              searchable
              isLarge
              overlap
            />
          </AutoCompleteContainer>
          <Spacer height={SPACE} />
          <StyledLabeledFormElement isLarge labelMessage={labels.zip}>
            <InputField name="zip" />
          </StyledLabeledFormElement>
          <CheckboxField labelMessage={labels.makeDefault} name="makeDefault" />
        </>
      ) : (
        <>
          <StyledAddressLine>
            {firstName} {lastName}
          </StyledAddressLine>
          <StyledAddressLine>
            {address.street1} {address.street2}
          </StyledAddressLine>
          <StyledAddressLine>
            {address.city}, {address.state} {address.zip}
          </StyledAddressLine>
          <Button
            appearance="outline"
            intent="secondary"
            labelMessage={labels.changeAddressButton}
            onPress={() => {
              setShowEditAddress(true);
            }}
            size="small"
            width={80}
          />
        </>
      )}
    </>
  );
}
