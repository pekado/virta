import * as React from "react";
import { ScrollView } from "react-native";
import { useIntl } from "react-intl";
import {
  SubstrateBody,
  styled,
  Heading,
  SupportEmailLink,
} from "@virtahealth/components";
import { messageTree } from "@virtahealth/utils";

const Wrapper = styled.View`
  justify-content: center;
  margin: 10px 15px;
`;

const HeadingWrapper = styled.View`
  align-items: center;
  padding-bottom: 15px;
`;

const DirectionsWrapper = styled.View`
  align-items: center;
  padding-bottom: 35px;
`;

export const ErrorView: React.FC = () => {
  const intl = useIntl();

  return (
    <ScrollView>
      <Wrapper>
        <HeadingWrapper>
          <Heading>
            {intl.formatMessage(messageTree.common.navigation.whoops)}
          </Heading>
        </HeadingWrapper>
        <DirectionsWrapper>
          <SubstrateBody weight="regular">
            {intl.formatMessage(messageTree.common.navigation.pageError, {
              supportEmailLink: <SupportEmailLink />,
            })}
          </SubstrateBody>
        </DirectionsWrapper>
      </Wrapper>
    </ScrollView>
  );
};
