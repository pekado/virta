import * as React from "react";
import { useIntl } from "react-intl";
import { View } from "react-native";
import {
  Body,
  Label,
  Spacer,
  PhoneEmailIcon,
  styled,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { StyledBlueBox } from "../shared";
import {
  User,
  InsuranceHeading2,
  InsuranceHeading3,
  InsuranceHeadingContainer,
} from "../index";

const StyledEmailContainer = styled(View)`
  display: flex;
  flex-direction: column;
`;

const CenteredStyledBlueBox = styled(StyledBlueBox)`
  align-items: center;
  text-align: center;
`;

export const Confirmation: React.FC<{
  user?: User;
  useNonSubmitMessage?: boolean;
}> = ({ user, useNonSubmitMessage = false }) => {
  const intl = useIntl();
  return (
    <View>
      <InsuranceHeadingContainer>
        <InsuranceHeading2>
          {intl.formatMessage(
            useNonSubmitMessage
              ? messages.confirmationHeaderHH
              : messages.confirmationHeader
          )}
        </InsuranceHeading2>
        <Spacer height={16} />
        <Body>
          {intl.formatMessage(
            useNonSubmitMessage
              ? messages.nonSubmitMessage
              : messages.nextStepDialogue
          )}
        </Body>
        <Spacer height={16} />
      </InsuranceHeadingContainer>
      <CenteredStyledBlueBox direction="column">
        <PhoneEmailIcon />
        <Spacer height={16} />
        <InsuranceHeading3>
          {intl.formatMessage(messages.nextStepSubheader)}
        </InsuranceHeading3>
        <Spacer height={32} />
        {user && (
          <StyledEmailContainer>
            <Body>{intl.formatMessage(messages.nextStepDirectionLink)}</Body>
            <Spacer height={8} />
            <Label>{user.email}</Label>
          </StyledEmailContainer>
        )}
      </CenteredStyledBlueBox>
      <Spacer height={16} />
      <InsuranceHeadingContainer>
        <Body>{intl.formatMessage(messages.nextStepDirectionContinue)}</Body>
      </InsuranceHeadingContainer>
    </View>
  );
};
