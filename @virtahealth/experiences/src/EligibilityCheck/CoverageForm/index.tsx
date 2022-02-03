import * as React from "react";
import { View } from "react-native";
import * as Yup from "yup";
import {
  styled,
  Spacer,
  Form,
  Button,
  SubmitButton,
  Body,
} from "@virtahealth/components";
import { isEmpty } from "lodash";
import { useIntl } from "react-intl";
import { messages, getPlatformFontFamilySuffix } from "@virtahealth/utils";
import { DefaultTheme } from "styled-components/native";
import { FormikValues } from "formik";
import { CoverageInput } from "../CoverageInput";
import {
  User,
  Coverage,
  BI_APPLICATION_LOCATION,
  STAND_ALONE_LOCATION,
} from "../utils";
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

const Disclaimer = styled(View)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "${({ theme }) =>
    theme[
      `avatarBaseFontFamily${getPlatformFontFamilySuffix()}` as keyof DefaultTheme
    ]}";
`;

export const CoverageForm: React.FC<CoverageFormProps> = ({
  onSubmit,
  isDTP,
  insurerOptions,
  onSkip,
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
    if (coverage && !isEmpty(coverage)) {
      return coverage.grouping!.plan!.value;
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

  const showSkipButton = () => {
    return (
      ((coverage && coverage.id && coverage.meta) ||
        isDTP ||
        epLocation === BI_APPLICATION_LOCATION) &&
      epLocation !== STAND_ALONE_LOCATION
    );
  };

  const InsuranceSchema = Yup.object().shape({
    plan: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    subscriberId: Yup.string()
      .min(1)
      .required(intl.formatMessage(messages.requiredErrorText)),
    groupId: Yup.string().min(1).notRequired(),
  });

  return (
    <InsuranceHeadingContainer>
      <InsuranceHeading2>
        {intl.formatMessage(messages.insuranceFormHeader)}
      </InsuranceHeading2>
      <Spacer height={8} />
      <Body style={{ width: "90%" }}>
        {intl.formatMessage(messages.primaryInsuranceEntry)}
      </Body>
      <Spacer height={24} />
      <StyledForm
        enableReinitialize={true}
        initialValues={{
          plan: getPlanName(),
          groupId: getGroupId(),
          subscriberId: getSubscriberId(),
        }}
        validationSchema={InsuranceSchema}
        onSubmit={(values) => {
          trackButtonClicked(PATHNAME, "Submit");
          onSubmit(values);
        }}
      >
        <CoverageInput insurerOptions={insurerOptions} />
        <Spacer height={16} />
        {isDTP && (
          <>
            <Disclaimer>
              {intl.formatMessage(messages.newInsuranceCoverage)}
              <Spacer height={8} />
              {intl.formatMessage(messages.insuranceDisclaimer)}
            </Disclaimer>
            <Spacer height={16} />
          </>
        )}
        <StyledButtons>
          <SubmitButton
            intent="primary"
            testID="primaryInsuranceSubmitButton"
            labelMessage={messages.next}
          />
          {onSkip && showSkipButton() && (
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
