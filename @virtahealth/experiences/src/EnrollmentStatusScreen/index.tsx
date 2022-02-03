import {
  Callout,
  ChicletCard,
  Heading,
  Row,
  styled,
  SubstrateBody,
  SupportEmailLink,
} from "@virtahealth/components";
import { intersection, messages } from "@virtahealth/utils";
import * as React from "react";
import { useIntl } from "react-intl";
import { View } from "react-native";

const UNEDITABLE_DISQUALIFIERS = ["dqAgeLowerLimit", "dqAgeUpperLimit"];

export type EnrollmentStatus =
  | "prelaunch"
  | "waitlisted"
  | "disqualified"
  | "not_qualified";

interface Props {
  status: EnrollmentStatus;
  deployment?: string;
  disqualifications: string[];
  nonQualifications: string[];
  onPressInfoCalloutButton: () => void;
}

// FYI: Difference between "disqualifications" and "non-qualifications":
// (i.e. why we have these two props)
// "Disqualifications" are reasons that a patient would not be able participate in the Virta treatment.
// These are often for medical and/or safety reasons.
// "Non-qualifcations" are criteria NOT met that are needed for a patient to participate in the Virta treatment
// under a specific payer or insurer.

const getHeaderForEnrollmentStatus = (status: EnrollmentStatus) => {
  switch (status) {
    case "prelaunch":
    case "waitlisted":
      return messages.addedToWaitlist;
    case "not_qualified":
      return messages.youAreNotCovered;
    case "disqualified":
    default:
      return messages.sorryVirtaNotReady;
  }
};

const EnrollmentStatusDetails = styled(SubstrateBody).attrs({
  weight: "regular",
  size: "small",
})`
  margin-top: 16px;
`;

const ReasonCard = styled(ChicletCard)`
  margin-top: 16px;
  margin-right: 16px;
`;

const EnrollmentStatusReasons: React.FC<{ reasons: string[] }> = ({
  reasons,
}) => {
  const intl = useIntl();
  return (
    <Row justifyContent="center" style={{ flexWrap: "wrap" }}>
      {reasons.map((reason) => (
        <ReasonCard key={reason}>
          {messages[reason] !== undefined
            ? intl.formatMessage(messages[reason])
            : reason}
        </ReasonCard>
      ))}
    </Row>
  );
};

export const EnrollmentStatusScreen: React.FC<Props> = ({
  status,
  deployment,
  disqualifications,
  nonQualifications,
  onPressInfoCalloutButton,
}) => {
  const hideInfoCalloutToEditApplication =
    intersection(disqualifications, UNEDITABLE_DISQUALIFIERS).length > 0;
  const intl = useIntl();
  return (
    <View>
      <Heading>
        {intl.formatMessage(getHeaderForEnrollmentStatus(status))}
      </Heading>
      <EnrollmentStatusDetails>
        {intl.formatMessage(messages.thankYouForInterest)}
      </EnrollmentStatusDetails>
      {status === "waitlisted" && deployment ? (
        <EnrollmentStatusDetails>
          {intl.formatMessage(
            messages.deploymentLimitedAllSpotsHaveBeenFilled,
            { deployment }
          )}
        </EnrollmentStatusDetails>
      ) : null}
      {status === "waitlisted" || status === "prelaunch" ? (
        <EnrollmentStatusDetails>
          {intl.formatMessage(messages.unableToOfferCoverage)}
        </EnrollmentStatusDetails>
      ) : null}
      {(status === "waitlisted" && !deployment) || status === "prelaunch" ? (
        <EnrollmentStatusDetails>
          {intl.formatMessage(messages.weWillReachOutWaitlist)}
        </EnrollmentStatusDetails>
      ) : null}
      {status === "waitlisted" && deployment ? (
        <EnrollmentStatusDetails>
          {intl.formatMessage(messages.ifYouStillWantToProceedWaitlisted)}
        </EnrollmentStatusDetails>
      ) : null}
      {status === "not_qualified" &&
      deployment &&
      nonQualifications.length > 0 ? (
        <>
          <EnrollmentStatusDetails>
            {intl.formatMessage(messages.criteriaHeader, {
              payerName: deployment, // May need to map deployment to payer name
            })}
          </EnrollmentStatusDetails>
          <EnrollmentStatusReasons reasons={nonQualifications} />
        </>
      ) : null}
      {status === "disqualified" && disqualifications.length > 0 ? (
        <>
          <EnrollmentStatusDetails>
            {intl.formatMessage(messages.receivedInfoAndDisqualifying)}
          </EnrollmentStatusDetails>
          <EnrollmentStatusReasons reasons={disqualifications} />
        </>
      ) : null}
      {status === "disqualified" ? (
        <>
          <EnrollmentStatusDetails>
            {intl.formatMessage(messages.disqualifiedWeApologize)}
          </EnrollmentStatusDetails>
          <EnrollmentStatusDetails>
            {intl.formatMessage(messages.thankYouWellWishes)}
          </EnrollmentStatusDetails>
        </>
      ) : null}
      {!hideInfoCalloutToEditApplication && status === "disqualified" ? (
        <Callout
          intent={"info"}
          title={messages.madeAMistakeQuestion}
          description={messages.ifYouBelieve}
          secondaryActionProps={{
            labelMessage: messages.editApplication,
            onPress: onPressInfoCalloutButton,
            testID: "enrollment-status-Edit Application-button",
          }}
          style={{
            flexBasis: "auto", // We do this in a lot of places... should we consider making this default behavior?
            alignItems: "center",
            marginTop: 16,
          }}
        />
      ) : null}
      {status === "not_qualified" ? (
        <Callout
          intent={"info"}
          title={messages.whatShouldIDo}
          description={messages.criteriaFooter}
          secondaryActionProps={{
            labelMessage: messages.continue,
            onPress: onPressInfoCalloutButton,
            testID: "enrollment-status-Continue-button",
          }}
          style={{
            flexBasis: "auto", // We do this in a lot of places... should we consider making this default behavior?
            alignItems: "center",
            marginTop: 16,
          }}
        />
      ) : null}
      <EnrollmentStatusDetails>
        {intl.formatMessage(messages.emailSupportWithQuestions, {
          supportEmailLink: (
            <SupportEmailLink size={"small"} weight={"regular"} />
          ),
        })}
      </EnrollmentStatusDetails>
    </View>
  );
};

export default EnrollmentStatusScreen;
