import * as React from "react";
import { View } from "react-native";
import * as Yup from "yup";
import {
  styled,
  Spacer,
  Form,
  Button,
  SubmitButton,
  SubstrateBody,
} from "@virtahealth/components";
import { MessageDescriptor, useIntl } from "react-intl";
import { messages } from "@virtahealth/utils";
import { FormikValues } from "formik";

import { CoverageInput } from "../CoverageInput";
import { UserInput } from "../UserInput";
import { User, Coverage, STAND_ALONE_LOCATION } from "../utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const PATHNAME = "/troubleshooting/input";

interface TroubleShootingInputProps {
  user: User; // EP Patient
  coverage?: Coverage; // FHIR Coverage
  onSubmit: (values: FormikValues) => void;
  epLocation: string;
  onSkip?: () => void;
  error?: MessageDescriptor;
  insurerOptions: Array<string>; // list of insurers for insurer dropdown values
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
}

const StyledForm = styled(Form)`
  min-width: 300px;
`;

const StyledButtons = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  min-width: 150px;
`;

export const TroubleShootingInput: React.FC<TroubleShootingInputProps> = ({
  onSkip,
  onSubmit,
  insurerOptions,
  user,
  coverage,
  trackPageViewed,
  epLocation,
  trackButtonClicked,
}) => {
  const intl = useIntl();
  React.useEffect(() => {
    trackPageViewed(PATHNAME);
  }, [trackPageViewed]);

  const getPlanName = () => {
    if (coverage) {
      return coverage.grouping!.plan!.value;
    } else {
      return "";
    }
  };
  const getGroupId = () => {
    if (coverage && coverage.grouping!.group) {
      return coverage.grouping!.group.value;
    } else {
      return "";
    }
  };
  const getSubscriberId = () => {
    if (coverage) {
      return coverage.subscriberId!.value;
    } else {
      return "";
    }
  };

  const InsuranceSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    lastName: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    groupId: Yup.string().min(1).notRequired(),
    plan: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    subscriberId: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    gender: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    sexAtBirth: Yup.string().min(1).notRequired(),
  });

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.insuranceFormHeader)}
      </InsuranceHeading2>
      <Spacer height={8} />
      <SubstrateBody size={"small"}>
        {intl.formatMessage(messages.primaryInsuranceEntry)}
      </SubstrateBody>
      <Spacer height={24} />
      <StyledForm
        enableReinitialize={true}
        initialValues={{
          plan: getPlanName(),
          groupId: getGroupId(),
          subscriberId: getSubscriberId(),
          gender: user.gender,
          sexAtBirth: user.sexAtBirth,
          firstName: user.firstName,
          lastName: user.lastName,
          dateOfBirth: user.dateOfBirth,
        }}
        validationSchema={InsuranceSchema}
        onSubmit={(values) => {
          trackButtonClicked(PATHNAME, "Submit");
          onSubmit(values);
        }}
      >
        <UserInput />
        <Spacer height={16} />
        <CoverageInput insurerOptions={insurerOptions} />
        <Spacer height={16} />
        <StyledButtons>
          <SubmitButton
            intent="secondary"
            testID="primaryInsuranceBackButton"
            labelMessage={messages.next}
          />
          {onSkip && epLocation !== STAND_ALONE_LOCATION && (
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
      </StyledForm>
    </InsuranceHeadingContainer>
  );
};
