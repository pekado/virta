import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import { SubstrateBody, ThemeContext, styled } from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { useIntl } from "react-intl";

const CenteredText = styled(SubstrateBody)`
  text-align: center;
`;

const DescriptionContainer = styled(View)`
  flex: 0;
  flex-direction: row;
  align-self: center;
  margin-top: 4px;
  display: flex;
`;

interface Props {
  onPressContactSupport: () => void;
}

export const ChatSLABanner: React.FC<Props> = ({ onPressContactSupport }) => {
  const intl = useIntl();
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <CenteredText size="xsmall" weight="bold">
        {intl.formatMessage(messages.chatSLABannerTitle)}
      </CenteredText>
      <DescriptionContainer>
        <SubstrateBody size="xsmall" weight="regular" color="subdued">
          {intl.formatMessage(messages.chatSLABannerDescription)}{" "}
        </SubstrateBody>
        <TouchableOpacity onPress={onPressContactSupport}>
          <SubstrateBody
            size="xsmall"
            weight="regular"
            color={theme.textLinkColor}
          >
            {intl.formatMessage(messages.chatSLABannerLink)}
          </SubstrateBody>
        </TouchableOpacity>
      </DescriptionContainer>
    </>
  );
};
