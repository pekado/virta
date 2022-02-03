import {
  Button,
  Body,
  styled,
  Spacer,
  PhoneEmailCircleIcon,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import * as React from "react";
import { useIntl } from "react-intl";
import { View } from "react-native";
import { Tips } from "../ManualInput";
import {
  InsuranceHeading2,
  InsuranceStyledBlueBox,
  InsuranceHeadingContainer,
} from "../index";
import { NoInsuranceCardLink } from "../shared";

interface InitialInsuranceProps {
  onContinue: () => void;
  onIssue: () => void;
}

const CenteredIconContainer = styled(View)`
  align-items: center;
  width: 100%;
`;

export const InitialInsurance: React.FC<InitialInsuranceProps> = ({
  onContinue,
  onIssue,
}) => {
  const intl = useIntl();
  return (
    <View>
      <InsuranceHeadingContainer>
        <InsuranceHeading2>
          {intl.formatMessage(messages.initialInsuranceHeader)}
        </InsuranceHeading2>
        <Spacer height={8} />
        <Body>{intl.formatMessage(messages.initialInsuranceText)}</Body>
        <Spacer height={16} />
      </InsuranceHeadingContainer>
      <InsuranceStyledBlueBox direction="column">
        <CenteredIconContainer>
          <PhoneEmailCircleIcon />
        </CenteredIconContainer>
        <Spacer height={16} />
        <Body>{intl.formatMessage(messages.getReadyText)}</Body>
      </InsuranceStyledBlueBox>
      <Spacer height={16} />
      <Tips />
      <Spacer height={16} />
      <Button
        testID="readySubmitButton"
        labelMessage={messages.readyButton}
        intent="secondary"
        onPress={onContinue}
      />
      <Spacer height={16} />
      {onIssue && <NoInsuranceCardLink onIssue={onIssue} />}
    </View>
  );
};
