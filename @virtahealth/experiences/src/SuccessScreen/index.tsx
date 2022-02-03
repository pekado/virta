import * as React from "react";
import { MessageDescriptor } from "react-intl";
import { Linking } from "react-native";
import {
  SubstrateBody,
  Button,
  Heading,
  Spacer,
  styled,
  CheckmarkIcon,
} from "@virtahealth/components";
import { primitives } from "@virtahealth/styles";
import { text } from "./messages";

interface Props {
  onClose: () => void;
  title?: string;
  description?: string;
  onSecondaryAction?: () => void;
  secondaryActionText?: MessageDescriptor;
}

const CenterContainer = styled.View`
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const BodyText = styled(SubstrateBody)`
  line-height: 24px;
  max-width: 70%;
  text-align: center;
`;

const SupportEmailButton = styled(Button)`
  line-height: 24px;
  max-width: 70%;
  text-align: center;
`;

const ButtonContainer = styled.View`
  max-width: 400px;
  width: 100%;
`;

export const SuccessScreen = ({
  onClose,
  title = text.heading.defaultMessage,
  description = text.description.defaultMessage,
  secondaryActionText,
  onSecondaryAction,
}: Props) => (
  <>
    <CenterContainer>
      <Spacer height={72} />
      <CheckmarkIcon />
      <Spacer height={4} />
      <Heading>{title}</Heading>
      <Spacer height={12} />
      <BodyText color="subdued" weight="regular">
        {description}
      </BodyText>
      <Spacer height={120} />
      <BodyText color="subdued" weight="regular">
        {text.needHelp.defaultMessage}
      </BodyText>
      <Spacer height={4} />
      <SupportEmailButton
        onPress={() => {
          Linking.openURL(`mailto:${text.supportEmail.defaultMessage}`);
        }}
        labelMessage={text.supportEmail}
        intent="secondary"
        appearance="minimal"
        labelStyle={{
          fontWeight: primitives.font.fontWeight4,
        }}
      />
      <Spacer height={36} />
      <Spacer height={16} />
      <ButtonContainer>
        {secondaryActionText && onSecondaryAction && (
          <Button
            onPress={onSecondaryAction}
            labelMessage={secondaryActionText}
            intent="secondary"
            width="wide"
            size="medium"
            style={{ marginBottom: 12 }}
          />
        )}
        <Button
          onPress={onClose}
          labelMessage={text.close}
          intent="secondary"
          appearance="outline"
          width="wide"
          size="medium"
        />
      </ButtonContainer>
    </CenterContainer>
  </>
);
