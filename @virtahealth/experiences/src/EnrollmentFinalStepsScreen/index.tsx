import {
  Callout,
  Heading,
  styled,
  SubstrateBody,
  SupportEmailLink,
} from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import * as React from "react";
import { useIntl } from "react-intl";

interface Props {
  preferredName?: string;
  isIntakeCallComplete: boolean;
  hasUpcomingIntakeCall: boolean;
}

const Details = styled(SubstrateBody).attrs({
  weight: "regular",
  size: "small",
  lineHeightMultiplier: 1.2,
})`
  margin-top: 16px;
`;

const IntakeCallCallout = styled(Callout)`
  margin-top: 16px;
`;

export const EnrollmentFinalStepsScreen: React.FC<Props> = ({
  preferredName,
  hasUpcomingIntakeCall,
  isIntakeCallComplete,
}) => {
  const intl = useIntl();
  return (
    <>
      <Heading>
        {preferredName
          ? intl.formatMessage(messages.thanksForSubmittingInfo, {
              name: preferredName,
            })
          : intl.formatMessage(messages.thanksForSubmittingYourInfoNoName)}
      </Heading>
      <Details>{intl.formatMessage(messages.currentlyReviewing)}</Details>
      <Details>
        {isIntakeCallComplete
          ? intl.formatMessage(messages.weWillBeInTouch)
          : intl.formatMessage(messages.mayRequireVideoVisit)}
      </Details>
      {isIntakeCallComplete ? null : hasUpcomingIntakeCall ? (
        <IntakeCallCallout
          intent="success"
          title={messages.intakeIsScheduled}
          description={messages.haveQuestionsGetAnswered}
        />
      ) : (
        <IntakeCallCallout
          intent="warning"
          title={messages.intakeNotScheduled}
          description={messages.haveQuestionsGetAnswered}
        />
      )}
      <Details>
        {intl.formatMessage(messages.emailSupportWithQuestions, {
          supportEmailLink: (
            <SupportEmailLink size={"small"} weight={"regular"} />
          ),
        })}
      </Details>
    </>
  );
};

export default EnrollmentFinalStepsScreen;
