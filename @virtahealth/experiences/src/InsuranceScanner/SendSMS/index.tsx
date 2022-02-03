import * as React from "react";
import {
  Button,
  styled,
  Input,
  Spacer,
  Heading4,
  Body,
  ErrorText,
  CircularPhoneActionEmailIcon,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { MessageDescriptor, useIntl } from "react-intl";
import { View } from "react-native";
import { StyledBlueBox, NoInsuranceCardLink } from "../shared";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const InputBlock = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;
const StyledInput = styled(Input)``;
const StyledButton = styled(Button)`
  min-width: 100px;
  min-height: 44px;
`;

const StyledBody = styled(Body)`
  width: 450px;
`;

const StyledInnerBody = styled(Body)`
  width: 350px;
`;

interface SendSMSProps {
  onIssue: () => void;
  onSendSMS: (phoneNumber: string) => Promise<void>;
  isSMSSent: boolean;
  error?: MessageDescriptor;
}

export const HintBox: React.FC<{
  messageText: string;
  headingText: string;
}> = ({ messageText, headingText }) => (
  <StyledBlueBox direction="row">
    <View>
      <CircularPhoneActionEmailIcon />
    </View>
    <Spacer width={12} />
    <View style={{ width: 300 }}>
      <Heading4>{headingText}</Heading4>
      <Spacer width={12} />
      <StyledInnerBody>{messageText}</StyledInnerBody>
    </View>
  </StyledBlueBox>
);

export const SendSMS: React.FC<SendSMSProps> = ({
  onIssue,
  isSMSSent,
  onSendSMS,
  error,
}) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [sendingSMS, setSendingSMS] = React.useState(false);
  const intl = useIntl();

  React.useEffect(() => {
    if (isSMSSent) {
      setSendingSMS(false);
    }
  }, [isSMSSent]);

  const SendSMSDisplay = (
    <View style={{ alignItems: "center" }}>
      <InputBlock>
        <StyledInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          labelMessage={messages.insuranceInput}
          placeholderMessage={messages.insuranceInputPlaceholder}
        />
        <Spacer width={24} />
        <StyledButton
          intent="secondary"
          onPress={() => {
            setSendingSMS(true);
            onSendSMS(phoneNumber);
          }}
          size="small"
          labelMessage={
            isSMSSent
              ? messages.insuranceSMSSentButton
              : messages.insuranceSMSButton
          }
          loading={sendingSMS}
        />
      </InputBlock>
      {error && <ErrorText message={error} />}
      <Spacer height={24} />
      <NoInsuranceCardLink onIssue={onIssue} />
    </View>
  );

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.insuranceHeader)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <StyledBody>
        {intl.formatMessage(messages.insuranceDescription)}
      </StyledBody>
      <Spacer height={16} />
      <HintBox
        messageText={intl.formatMessage(messages.hintBoxMessage)}
        headingText={intl.formatMessage(messages.hintBoxHeader)}
      />
      <Spacer height={24} />
      <Heading4>
        {intl.formatMessage(
          isSMSSent
            ? messages.insuranceSmsSentSubHeader
            : messages.insuranceSubHeader
        )}
      </Heading4>
      <Spacer height={16} />
      <StyledBody>
        {intl.formatMessage(
          isSMSSent
            ? messages.insuranceSMSSentDescription
            : messages.insuranceSMSDescription
        )}
      </StyledBody>
      <Spacer height={16} />
      {SendSMSDisplay}
    </InsuranceHeadingContainer>
  );
};
