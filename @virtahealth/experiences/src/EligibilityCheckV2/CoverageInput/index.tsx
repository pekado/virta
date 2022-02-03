import * as React from "react";
import {
  styled,
  Row,
  InputField,
  LabeledCreatableDropdownField,
  DropdownOptionProps,
} from "@virtahealth/components";
import { formatVirtaMessageOrString, messages } from "@virtahealth/utils";
import { useIntl } from "react-intl";

interface CoverageInputProps {
  insurerOptions: string[];
}

const StyledRow = styled(Row)`
  margin-bottom: 30px;
  width: 100%;
  z-index: auto;
`;

const StyledLabeledCreatableDropdownField = styled(
  LabeledCreatableDropdownField
)`
  width: 100%;
`;

export const CoverageInput: React.FC<CoverageInputProps> = ({
  insurerOptions,
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const mapped_insurers = insurerOptions.map((option) => ({
    label: { id: option, defaultMessage: option },
    value: option,
  }));

  return (
    <>
      <StyledRow alignItems={"flex-start"}>
        {insurerOptions.length > 0 ? (
          <StyledLabeledCreatableDropdownField
            labelMessage={messages.insuranceProviderInput}
            name="plan"
            fieldName="plan"
            filterFunction={(
              item: DropdownOptionProps<unknown>,
              inputValue: unknown
            ) => {
              return (formatMessage(item.label) as string)
                .toLowerCase()
                .includes((inputValue as string).toLowerCase());
            }}
            testID="planInputField"
            placeholderMessage={messages.insuranceProviderInputPlaceholder}
            options={mapped_insurers}
          />
        ) : (
          <InputField
            isLarge={true}
            testID="planInputField"
            name="plan"
            labelMessage={messages.insuranceProviderInput}
            placeholderMessage={messages.insuranceProviderInputPlaceholder}
          />
        )}
      </StyledRow>
      <StyledRow alignItems={"flex-start"}>
        <InputField
          isLarge={true}
          testID="subscriberId"
          name="subscriberId"
          labelMessage={messages.insuranceMemberInput}
          placeholderMessage={messages.insuranceMemberInputPlaceholder}
        />
      </StyledRow>
      <StyledRow alignItems={"flex-start"}>
        <InputField
          isLarge={true}
          helperText={messages.insuranceGroupInputHelperText}
          name={"groupId"}
          testID="groupId"
          labelMessage={messages.insuranceGroupInput}
          placeholderMessage={messages.insuranceGroupInputPlaceholder}
        />
      </StyledRow>
    </>
  );
};
