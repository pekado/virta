import * as React from "react";
import { View } from "react-native";
import { Body, Spacer, Button, styled } from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { InsuranceHeading2 } from "../index";

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ScannerTrouble: React.FC<{
  onContinue: () => void;
  onBack: () => void;
}> = ({ onBack, onContinue }) => (
  <View>
    <InsuranceHeading2>Having Trouble?</InsuranceHeading2>
    <Spacer height={8} />
    <Body>
      Our insurance card scanner had a little trouble parsing your information.
    </Body>
    <Body>
      As a fallback, we offer the ability to manually submit your information.
      Click Continue to add your insurance information manually
    </Body>
    <Spacer height={16} />
    <ButtonContainer>
      <Button
        intent="tertiary"
        labelMessage={messages.scannerTroubleBackButton}
        onPress={onBack}
      />
      <Spacer width={16} />
      <Button
        intent="secondary"
        labelMessage={messages.scannerTroubleContinueButton}
        onPress={onContinue}
      />
    </ButtonContainer>
  </View>
);
