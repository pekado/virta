import * as React from "react";
import { ViewProps, View } from "react-native";
import { styled, Spacer, List, Button, Body } from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import { User, Coverage, STAND_ALONE_LOCATION } from "../utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";
const PATHNAME = "/troubleshooting";

const StyledButtons = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const StyledButton = styled(Button)`
  min-width: 150px;
`;

const Bold = styled(View)`
  font-weight: ${({ theme }) => theme.strongBaseFontWeight};
`;

interface TroubleShootingProps {
  epLocation: string;
  onEdit: () => void;
  onSkip: () => void;
  user: User;
  coverage?: Coverage;
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
}

interface BlueBoxProps extends ViewProps {
  direction: string;
}

const StyledBlueBox = styled.View<BlueBoxProps>`
  background-color: #dff2ff;
  padding: 16px;
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
`;

export const TroubleShooting: React.FC<TroubleShootingProps> = ({
  onEdit,
  onSkip,
  user,
  coverage,
  epLocation,
  trackPageViewed,
  trackButtonClicked,
}) => {
  const intl = useIntl();

  React.useEffect(() => {
    trackPageViewed(PATHNAME);
  }, []);

  const getPlanName = () => {
    if (coverage) {
      return coverage.grouping!.plan!.value;
    } else {
      return "";
    }
  };
  const getGroupId = () => {
    if (
      coverage &&
      coverage.grouping!.group &&
      Object.keys(coverage.grouping!.group).length !== 0
    ) {
      return coverage.grouping!.group.value;
    } else {
      return "";
    }
  };
  const genderMap = {
    m: "Male",
    o: "Other",
    f: "Female",
  };

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.somethingsNotRight)}
      </InsuranceHeading2>
      <Spacer height={8} />
      <Body style={{ width: "90%" }}>
        {intl.formatMessage(messages.troubleShootingCoverage)}
      </Body>
      <Spacer height={16} />
      <StyledBlueBox direction="column">
        <List direction="column">
          <Body>
            <Bold>{intl.formatMessage(messages.firstName)}:</Bold>{" "}
            {user.firstName}{" "}
          </Body>
          <Spacer height={16} />
          <Body>
            <Bold>{intl.formatMessage(messages.lastName)}:</Bold>{" "}
            {user.lastName}{" "}
          </Body>
          <Spacer height={16} />
          <Body>
            <Bold>{intl.formatMessage(messages.dob)}:</Bold> {user.dateOfBirth}{" "}
          </Body>
          <Spacer height={16} />
          <Body>
            <Bold>{intl.formatMessage(messages.gender)}:</Bold>{" "}
            {genderMap[user.gender as keyof typeof genderMap]}{" "}
          </Body>
          <Spacer height={16} />
          {user.gender === "o" && user.sexAtBirth && (
            <>
              <Body>
                <Bold>{intl.formatMessage(messages.sexAtBirth)}:</Bold>{" "}
                {genderMap[user.sexAtBirth as keyof typeof genderMap]}{" "}
              </Body>
              <Spacer height={16} />
            </>
          )}
          <Body>
            <Bold>{intl.formatMessage(messages.insuranceProviderInput)}:</Bold>{" "}
            {getPlanName()}{" "}
          </Body>
          <Spacer height={16} />
          {getGroupId() !== "" && (
            <>
              <Body>
                <Bold>{intl.formatMessage(messages.groupId)}:</Bold>{" "}
                {getGroupId()}{" "}
              </Body>
              <Spacer height={16} />
            </>
          )}
          <Body>
            <Bold>{intl.formatMessage(messages.memberId)}:</Bold>{" "}
            {coverage ? coverage.subscriberId!.value : ""}
          </Body>
        </List>
      </StyledBlueBox>
      <Spacer height={16} />
      <StyledButtons>
        <StyledButton
          intent="primary"
          onPress={() => {
            trackButtonClicked(PATHNAME, "Edit Info");
            onEdit();
          }}
          testID="primaryInsuranceBackButton"
          labelMessage={messages.editInfo}
        />
        {epLocation !== STAND_ALONE_LOCATION && (
          <StyledButton
            intent="secondary"
            appearance="link"
            testID="primaryInsuranceSubmitButton"
            onPress={() => {
              trackButtonClicked(PATHNAME, "Skip");
              onSkip();
            }}
            labelMessage={messages.skip}
          />
        )}
      </StyledButtons>
    </InsuranceHeadingContainer>
  );
};
