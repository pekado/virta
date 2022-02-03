import * as React from "react";
import {
  styled,
  Row,
  ComboBoxField,
  ComboBoxOption,
  InputField,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

interface CoverageInputProps {
  insurerOptions: Array<string>;
}

const StyledRow = styled(Row)`
  margin-bottom: 30px;
  width: ${isMobile ? "100%" : "675px"};
  z-index: auto;
`;

export const CoverageInput: React.FC<CoverageInputProps> = ({
  insurerOptions,
}) => {
  return (
    <>
      <StyledRow alignItems={"flex-start"}>
        {insurerOptions.length > 0 ? (
          <ComboBoxField
            testID="planInputField"
            name="plan"
            editable={true}
            limitDropdownHeight={true}
            labelMessage={messages.insuranceProviderInput}
            placeholderMessage={messages.insuranceProviderInputPlaceholder}
          >
            {insurerOptions.map((option, idx) => (
              <ComboBoxOption key={idx} value={option}>
                {option}
              </ComboBoxOption>
            ))}
          </ComboBoxField>
        ) : (
          <InputField
            testID="planInputField"
            name="plan"
            labelMessage={messages.insuranceProviderInput}
            placeholderMessage={messages.insuranceProviderInputPlaceholder}
          />
        )}
      </StyledRow>
      <StyledRow alignItems={"flex-start"}>
        <InputField
          testID="subscriberId"
          name="subscriberId"
          labelMessage={messages.insuranceMemberInput}
          placeholderMessage={messages.insuranceMemberInputPlaceholder}
        />
      </StyledRow>
      <StyledRow alignItems={"flex-start"}>
        <InputField
          helperText={messages.optional}
          name={"groupId"}
          testID="groupId"
          labelMessage={messages.insuranceGroupInput}
          placeholderMessage={messages.insuranceGroupInputPlaceholder}
        />
      </StyledRow>
    </>
  );
};
