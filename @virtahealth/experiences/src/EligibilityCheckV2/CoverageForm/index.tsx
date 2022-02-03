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
  CheckboxField,
} from "@virtahealth/components";
import { DefaultTheme } from "styled-components/native";
import { FormikValues } from "formik";
import { isEmpty } from "lodash";
import { useIntl } from "react-intl";
import { messages, getPlatformFontFamilySuffix } from "@virtahealth/utils";
import { CoverageInput } from "../CoverageInput";
import { User, Coverage } from "../utils";
import { InsuranceHeading2, InsuranceHeadingContainer } from "..";

const PATHNAME = "/input";

interface CoverageFormProps {
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
  user: User; // EP Patient
  coverage?: Coverage; // FHIR Coverage
  isLoading: boolean;
  onSubmit: (values: FormikValues) => void;
  onSkip?: () => void;
  isDTP: boolean;
  epLocation: string;
  editable?: boolean;
  insurerOptions: Array<string>; // list of insurers for insurer dropdown values
  aobAccepted?: boolean;
  planName?: string;
}

const StyledForm = styled(Form)`
  min-width: 100%;
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

const Disclaimer = styled(View)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9fafb;
  font-family: "${({ theme }) =>
    theme[
      `avatarBaseFontFamily${getPlatformFontFamilySuffix()}` as keyof DefaultTheme
    ]}";
`;

const Bold = styled(SubstrateBody)`
  font-weight: ${({ theme }) => theme.strongBaseFontWeight};
`;

export const CoverageForm: React.FC<CoverageFormProps> = ({
  onSubmit,
  isDTP,
  insurerOptions,
  onSkip,
  coverage,
  trackPageViewed,
  trackButtonClicked,
  aobAccepted,
  planName,
}) => {
  const intl = useIntl();

  React.useEffect(() => {
    trackPageViewed(PATHNAME);
  }, [trackPageViewed]);

  const getPlanName = () => {
    if (coverage && !isEmpty(coverage)) {
      return coverage.grouping!.plan!.value;
    } else if (planName) {
      return planName;
    } else {
      return "";
    }
  };
  const getGroupId = () => {
    if (
      coverage &&
      !isEmpty(coverage) &&
      coverage.grouping &&
      coverage.grouping.group
    ) {
      return coverage.grouping!.group!.value;
    } else {
      return "";
    }
  };

  const getSubscriberId = () => {
    if (coverage && !isEmpty(coverage)) {
      return coverage.subscriberId!.value;
    } else {
      return "";
    }
  };

  const InsuranceSchema = Yup.object().shape({
    plan: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    subscriberId: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    groupId: Yup.string().min(1).notRequired(),
    aobAccepted: Yup.bool().oneOf(
      [true],
      intl.formatMessage(messages.requiredErrorText)
    ),
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
          aobAccepted,
        }}
        validationSchema={InsuranceSchema}
        onSubmit={(values) => {
          trackButtonClicked(PATHNAME, "Submit");
          onSubmit(values);
        }}
      >
        <CoverageInput insurerOptions={insurerOptions} />
        <Spacer height={16} />
        <>
          <SubstrateBody size={"small"}>
            {intl.formatMessage(messages.assignBenefitConsent)}
          </SubstrateBody>
          <Spacer height={8} />
          <Disclaimer>
            <SubstrateBody>
              <Bold>{intl.formatMessage(messages.coordPayment)} </Bold>
              {intl.formatMessage(messages.workWithHIC)}
              <br />
              <br />
              <Bold>{intl.formatMessage(messages.auth)} </Bold>
              {intl.formatMessage(messages.directPaymentAuth)}
            </SubstrateBody>
          </Disclaimer>
          <Spacer height={16} />
          <CheckboxField
            name="aobAccepted"
            testID="lead-capture-agreeTerms-checkbox"
            labelMessage={messages.readAndAcknowledgeAOB}
          />
        </>
        <Spacer height={16} />
        <StyledButtons>
          <SubmitButton
            intent="secondary"
            testID="primaryInsuranceSubmitButton"
            style={!onSkip || !isDTP ? { width: "100%" } : { width: 150 }}
            labelMessage={messages.next}
          />
          {onSkip && isDTP && (
            <StyledButton
              intent="secondary"
              appearance="link"
              testID="primaryInsuranceBackButton"
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
