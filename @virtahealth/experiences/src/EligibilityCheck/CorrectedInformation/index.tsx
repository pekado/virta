import * as React from "react";
import { ViewProps, View } from "react-native";
import { DefaultTheme } from "styled-components/native";
import {
  styled,
  Spacer,
  List,
  Button,
  Body,
  Checkbox,
} from "@virtahealth/components";
import { useIntl } from "react-intl";
import { messages, getPlatformFontFamilySuffix } from "@virtahealth/utils";
import {
  STAND_ALONE_LOCATION,
  Discrepancies,
  getGroupId,
  User,
  Coverage,
  getPlanName,
} from "../utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";
const PATHNAME = "/correct-information";

interface CorrectedInformationProps {
  epLocation: string;
  discrepancies?: Discrepancies;
  onContinue: () => void;
  onSkip: () => void;
  user: User;
  coverage: Coverage;
  patchDiscrepancies: () => void;
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
}

interface BlueBoxProps extends ViewProps {
  direction: string;
}

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
  color: #ba2829;
`;

const StyledBox = styled.View<BlueBoxProps>`
  padding: 16px;
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
  border-color: ${({ theme }) => theme.carouselCardBorderColor};
  border-width: ${({ theme }) => theme.carouselCardBorderWidth}px;
`;
const StyledBlueBox = styled.View<BlueBoxProps>`
  background-color: #dff2ff;
  padding: 16px;
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
  border-color: ${({ theme }) => theme.carouselCardBorderColor};
  border-width: ${({ theme }) => theme.carouselCardBorderWidth}px;
`;

const BodyCopy = styled(View)`
  margin-left: 24px;
  font-family: "${({ theme }) =>
    theme[
      `textSmallcapsFontFamily${getPlatformFontFamilySuffix()}` as keyof DefaultTheme
    ]}";
`;

const genderMap = {
  m: "Male",
  o: "Other",
  f: "Female",
};

export const CorrectedInformation: React.FC<CorrectedInformationProps> = ({
  onContinue,
  epLocation,
  trackPageViewed,
  trackButtonClicked,
  onSkip,
  user,
  coverage,
  patchDiscrepancies,
  discrepancies,
}) => {
  const intl = useIntl();
  const [discrepanciesItems, setDiscrepanciesItems] =
    React.useState<JSX.Element[]>();
  const [updateDiscrepancies, setUpdateDiscrepancies] =
    React.useState<boolean>(true);

  const handleUpdate = () => {
    if (updateDiscrepancies) {
      patchDiscrepancies();
    }
    onContinue();
  };

  const getDiscrepanciesItems = () => {
    if (!discrepancies) {
      return;
    }
    const items: Array<JSX.Element> = [];
    items.push(
      <BodyCopy>
        {discrepancies.firstName ? (
          <Bold>
            {intl.formatMessage(messages.firstName)}: {discrepancies.firstName}
          </Bold>
        ) : (
          <>
            {intl.formatMessage(messages.firstName)}: {user.firstName}
          </>
        )}
      </BodyCopy>
    );

    items.push(
      <BodyCopy>
        {discrepancies.lastName ? (
          <Bold>
            {intl.formatMessage(messages.lastName)}: {discrepancies.lastName}
          </Bold>
        ) : (
          <>
            {intl.formatMessage(messages.lastName)}: {user.lastName}
          </>
        )}
      </BodyCopy>
    );

    items.push(
      <BodyCopy>
        {discrepancies.dateOfBirth ? (
          <Bold>
            {intl.formatMessage(messages.dob)}: {discrepancies.dateOfBirth}
          </Bold>
        ) : (
          <>
            {intl.formatMessage(messages.dob)}: {user.dateOfBirth}
          </>
        )}
      </BodyCopy>
    );

    items.push(
      <BodyCopy>
        {discrepancies.groupId ? (
          <Bold>
            {intl.formatMessage(messages.groupId)}: {discrepancies.groupId}
          </Bold>
        ) : (
          <>
            {intl.formatMessage(messages.groupId)}: {getGroupId(coverage)}
          </>
        )}
      </BodyCopy>
    );
    items.push(
      <BodyCopy>
        {discrepancies.plan ? (
          <Bold>
            {intl.formatMessage(messages.insuranceProviderInput)}:{" "}
            {discrepancies.plan}
          </Bold>
        ) : (
          <>
            {intl.formatMessage(messages.insuranceProviderInput)}:{" "}
            {getPlanName(coverage)}
          </>
        )}
      </BodyCopy>
    );
    items.push(
      <BodyCopy>
        {discrepancies.subscriberId ? (
          <Bold>
            {intl.formatMessage(messages.memberId)}:{" "}
            {discrepancies.subscriberId}
          </Bold>
        ) : (
          <>
            {intl.formatMessage(messages.memberId)}:{" "}
            {coverage!.subscriberId!.value}
          </>
        )}
      </BodyCopy>
    );
    setDiscrepanciesItems(items);
  };

  React.useEffect(() => {
    trackPageViewed(PATHNAME);
    getDiscrepanciesItems();
  }, []);

  const getBox = () => {
    if (Array.isArray(discrepanciesItems) && discrepanciesItems.length > 0) {
      return discrepanciesItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <div>
          {item}
          <Spacer height={8} />
        </div>
      ));
    } else {
      return null;
    }
  };

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.possibleUpdates)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <Body style={{ width: "90%" }}>
        {intl.formatMessage(messages.correctEligibilityInformation)}{" "}
        <Bold>{intl.formatMessage(messages.red)}</Bold>
      </Body>
      <Spacer height={16} />
      <StyledBlueBox direction="column">
        <List direction="column">
          <Checkbox
            onPress={() => {
              setUpdateDiscrepancies(true);
            }}
            labelMessage={{
              id: messages.suggestedInformation.id,
              defaultMessage: intl.formatMessage(messages.suggestedInformation),
            }}
            isChecked={updateDiscrepancies}
          />
          <Spacer height={16} />
          {getBox()}
        </List>
      </StyledBlueBox>
      <Spacer height={16} />
      <StyledBox direction="column">
        <List direction="column">
          <Checkbox
            onPress={() => {
              setUpdateDiscrepancies(false);
            }}
            labelMessage={{
              id: messages.originalInformation.id,
              defaultMessage: intl.formatMessage(messages.originalInformation),
            }}
            isChecked={!updateDiscrepancies}
          />
          <Spacer height={16} />
          <BodyCopy>
            {intl.formatMessage(messages.firstName)}: {user.firstName}{" "}
          </BodyCopy>
          <Spacer height={8} />
          <BodyCopy>
            {intl.formatMessage(messages.lastName)}: {user.lastName}{" "}
          </BodyCopy>
          <Spacer height={8} />
          <BodyCopy>
            {intl.formatMessage(messages.dob)}: {user.dateOfBirth}{" "}
          </BodyCopy>
          <Spacer height={8} />
          <BodyCopy>
            {intl.formatMessage(messages.gender)}:{" "}
            {genderMap[user.gender as keyof typeof genderMap]}{" "}
          </BodyCopy>
          <Spacer height={8} />
          <BodyCopy>
            {intl.formatMessage(messages.insuranceProviderInput)}:{" "}
            {getPlanName(coverage)}{" "}
          </BodyCopy>
          <Spacer height={8} />
          {getGroupId(coverage) !== "" && (
            <>
              <BodyCopy>
                {intl.formatMessage(messages.groupId)}: {getGroupId(coverage)}{" "}
              </BodyCopy>
              <Spacer height={8} />
            </>
          )}
          <BodyCopy>
            {intl.formatMessage(messages.memberId)}:{" "}
            {coverage ? coverage.subscriberId!.value : ""}
          </BodyCopy>
        </List>
      </StyledBox>
      <Spacer height={16} />
      <StyledButtons>
        <StyledButton
          intent="primary"
          onPress={() => {
            trackButtonClicked(PATHNAME, "Continue");
            handleUpdate();
          }}
          testID="primaryInsuranceBackButton"
          labelMessage={messages.continue}
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
