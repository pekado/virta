/* eslint-disable max-lines */
import * as React from "react";

import {
  styled,
  Spinner,
  Heading2,
  Toast,
  Heading3,
  Base,
  Heading4,
  withVirta,
  VirtaClient,
} from "@virtahealth/components";
import { View, Platform } from "react-native";
import { FormikValues } from "formik";
import { Ineligible } from "./Ineligible";
import { Eligible } from "./Eligible";
import { Polling } from "./Polling";
import { CoverageForm } from "./CoverageForm";
import { ImageUpload } from "./ImageUpload";
import { TroubleShootingInput } from "./TroubleShootingInput";
import { TroubleShooting } from "./TroubleShooting";
import { CorrectedInformation } from "./CorrectedInformation";
import { Timeout } from "./Timeout";
import {
  DEFAULT_INTERVAL,
  TIMEOUT,
  ELIGIBILTY_STATUS_URI,
  ELIGIBLE,
  COVERAGE_ENDPOINT,
  HEALTH_HISTORY_ENDPOINT,
  DOCUMENT_REFERENCE_ENDPOINT,
  HH_APPLICATION_LOCATION,
  TOAST_MESSAGES,
  Deployment,
  DeploymentPayor,
  Payor,
  Stage,
  ToastContent,
  Discrepancies,
  Grouping,
  Subscriber,
  User,
  Coverage,
  EligibilityResponse,
  getDeploymentByKey,
  getOrganizationIdByName,
  getCarrierDropdownOptions,
  getDiscrepancies,
  fetchCoverages,
  fetchEligibilityResponses,
  fetchUser,
  pollEligibilityResponse,
  fetchDeployments,
  fetchDeploymentPayors,
} from "./utils";

export interface EligibilityCheckProps {
  shouldUploadImage: boolean;
  shouldShowCorrectedInfo: boolean;
  trackPageViewed: (pathname: string) => void;
  trackButtonClicked: (pathname: string, descriptor: string) => void;
  client: VirtaClient;
  headerComponent?: React.ReactNode;
  onError?: (e: Error) => void;
  onContinue?: () => void;
  onSkip?: () => void;
  virtaId: string;
  isDTP: boolean;
  deploymentKey?: string;
  structuredPayersEnabled?: boolean;
  insurerOptions: Array<string>; // list of insurers for insurer dropdown values
  epLocation: string;
  hideInsuranceGroupId?: boolean;
  aobAccepted?: boolean;
  planName?: string;
}

interface IsWebStyleProps {
  isWeb?: boolean;
}

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

export const StyledView = styled(View)`
  width: "100%";
  align-items: "center";
`;

export const InsuranceHeadingContainer = styled(View)`
  justify-content: ${isMobile ? "flex-start" : "left"};
  text-align: ${isMobile ? "flex-start" : "left"};
`;

const CenteredHeading4 = styled(Heading4)`
  text-align: center;
`;
const MobileHeading2 = styled(Heading2)`
  font-size: 24px;
  line-height: 34px;
  color: ${({ theme }) => theme.textCommunityColorSecondary};
`;
const MobileHeading3 = styled(Heading3)`
  font-size: 16px;
  line-height: 24px;
`;
const MobileHeading4 = styled(Heading4)`
  font-size: 16px;
  line-height: 24px;
`;

const SpinnerContainer = styled.View`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledToastText = styled(Base)`
  text-align: center;
  color: white;
  text-decoration-color: white;
`;

const FormWrapper = styled.View<IsWebStyleProps>`
  background-color: #fff;
  padding: 20px;
  border-radius: ${({ isWeb }) => (isWeb ? 10 : 0)}px;
  position: relative;
  margin-bottom: 20px;
`;

// Logic to adjust exerience for mobile, mostly left aligns and decreases header size
export const InsuranceHeading2 = isMobile ? MobileHeading2 : Heading2;
export const InsuranceHeading3 = isMobile ? MobileHeading3 : Heading3;
export const InsuranceHeading4 = isMobile ? MobileHeading4 : CenteredHeading4;

export const EligibilityCheck: React.FC<EligibilityCheckProps> = ({
  virtaId,
  client,
  structuredPayersEnabled,
  insurerOptions,
  isDTP,
  deploymentKey,
  onContinue,
  epLocation,
  trackButtonClicked,
  trackPageViewed,
  onSkip,
  shouldUploadImage,
  shouldShowCorrectedInfo,
  aobAccepted,
  planName,
}) => {
  const isWeb = Platform.OS === "web";

  const [stage, setStage] = React.useState(Stage.LOADING);
  const [discrepancies, setDiscrepancies] = React.useState<Discrepancies>({});
  const [coverage, setCoverage] = React.useState<Coverage>();
  const [toastContent, setToastContent] = React.useState<
    ToastContent | undefined
  >();
  const [showToast, setShowToast] = React.useState(false);
  const [isUploadingImages, setIsUploadingImages] = React.useState(false);
  const [imageUploadCount, setImageUploadCount] = React.useState(0);
  const [correctedInfoAttempt, setCorrectedInfoAttempt] = React.useState(0);
  const [eligibilityResponse, setEligibilityResponse] =
    React.useState<EligibilityResponse>({ id: { value: "temp_id" } });
  const [coverages, setCoverages] = React.useState<Coverage[]>();
  const [eligibilityResponses, setEligibilityResponses] =
    React.useState<EligibilityResponse[]>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState<User>();
  const [deployments, setDeployments] = React.useState<Deployment[]>();
  const [deploymentPayors, setDeploymentPayors] =
    React.useState<DeploymentPayor[]>();

  React.useEffect(() => {
    fetchCoverages(client, setCoverages);
    fetchUser(client, setUser);
    fetchDeployments(client, setDeployments);
    fetchDeploymentPayors(client, setDeploymentPayors);
  }, [client]);

  const fhirDropdownOptions = getCarrierDropdownOptions(
    deploymentPayors,
    getDeploymentByKey(deploymentKey, deployments)
  );

  const dropdownOptions = structuredPayersEnabled
    ? fhirDropdownOptions
    : insurerOptions;

  React.useEffect(() => {
    if (user && coverages) {
      fetchEligibilityResponses(client, setEligibilityResponses);
    }
  }, [user, coverages, client]);

  React.useEffect(() => {
    if (toastContent && !showToast) {
      setShowToast(true);
    }
  }, [showToast, toastContent]);

  React.useEffect(() => {
    if (!showToast && toastContent) {
      setToastContent(undefined); // Clear the message if not showing toast anymore
    }
  }, [showToast, toastContent]);

  const stageRef = React.useRef(stage);
  React.useEffect(() => {
    stageRef.current = stage;
  }, [stage]);

  React.useEffect(() => {
    setIsLoading(true);
    if (eligibilityResponses && eligibilityResponses.length > 0) {
      eligibilityResponses.sort(
        (a, b) => b.meta!.lastUpdated.valueUs - a.meta!.lastUpdated.valueUs
      );
      const newResponse = eligibilityResponses[0];
      const coding = newResponse!.outcome!.coding;
      const codeStatus = coding.find((code) => {
        return code.system.value === ELIGIBILTY_STATUS_URI;
      });
      const isEligible =
        codeStatus!.code.value.toLowerCase() === ELIGIBLE.toLowerCase();

      if (
        eligibilityResponse &&
        eligibilityResponse.id &&
        newResponse.id!.value !== eligibilityResponse.id.value
      ) {
        const discrepancies: Discrepancies = getDiscrepancies(
          newResponse,
          user!,
          coverage!
        );
        setDiscrepancies(discrepancies);
        if (
          shouldShowCorrectedInfo &&
          isEligible &&
          Object.keys(discrepancies).length > 0 &&
          correctedInfoAttempt < 1
        ) {
          setStage(Stage.CORRECT_INFORMATION);
        } else if (isEligible) {
          setStage(Stage.ELIGIBLE);
        } else if (isDTP) {
          setStage(Stage.ELIGIBLE);
        } else if (stage === Stage.POLLING || stage === Stage.LOADING) {
          setStage(Stage.TROUBLESHOOTING);
        } else if (stage === Stage.POLLING_TWO && shouldUploadImage) {
          setStage(Stage.UPLOAD);
        } else if (stage === Stage.POLLING_TWO && !shouldUploadImage) {
          setStage(Stage.INELIGIBLE);
        }
      }

      setEligibilityResponse(newResponse);
    } else if (eligibilityResponses !== undefined) {
      if (
        stage !== Stage.POLLING_TWO &&
        stage !== Stage.POLLING &&
        stage !== Stage.TIMEOUT
      ) {
        setStage(Stage.INPUT);
      }
    }

    setIsLoading(false);
  }, [
    correctedInfoAttempt,
    coverage,
    eligibilityResponse,
    eligibilityResponses,
    isDTP,
    shouldShowCorrectedInfo,
    shouldUploadImage,
    stage,
    user,
  ]);

  React.useEffect(() => {
    setIsLoading(true);
    if (coverages && coverages.length > 0) {
      coverages.sort(
        (a, b) => b.meta!.lastUpdated.valueUs - a.meta!.lastUpdated.valueUs
      );
      coverages.sort((a, b) => a.order!.value - b.order!.value);
      setCoverage(coverages[0]);
    } else {
      const newCoverage: Coverage = {};
      setCoverage(newCoverage);
    }
    setIsLoading(false);
  }, [coverages]);

  const uploadImages = async (front: File, back?: File) => {
    setIsUploadingImages(true);
    const formData = new FormData();
    formData.append("front", front);
    if (back) {
      formData.append("back", back);
    }
    formData.append("coverage_id", coverage!.id!.value);
    try {
      await client.post(DOCUMENT_REFERENCE_ENDPOINT, formData);
      setStage(Stage.INELIGIBLE);
    } catch (e) {
      if (imageUploadCount >= 2) {
        setStage(Stage.INELIGIBLE);
      } else {
        setImageUploadCount(imageUploadCount + 1);
        setToastContent({
          type: "error",
          message: TOAST_MESSAGES.uploadImage,
        });
        setShowToast(true);
      }
    }
    setIsUploadingImages(false);
  };

  const patchDiscrepancies = async () => {
    setCorrectedInfoAttempt(correctedInfoAttempt + 1);
    if (
      discrepancies.firstName ||
      discrepancies.lastName ||
      discrepancies.dateOfBirth
    ) {
      // todo - see if this is right type
      const newUser: Discrepancies = {};
      if (discrepancies.firstName) {
        newUser["firstName"] = discrepancies.firstName;
      }
      if (discrepancies.lastName) {
        newUser["lastName"] = discrepancies.lastName;
      }
      if (discrepancies.dateOfBirth) {
        newUser["dateOfBirth"] = discrepancies.dateOfBirth;
      }
      setUser(user);
      try {
        await client.patch(`/users/self`, newUser);
      } catch (e) {
        console.log(e, "error patching EP patient");
      }
    }
    if (
      coverage &&
      coverage.grouping &&
      (discrepancies.groupId ||
        discrepancies.plan ||
        discrepancies.subscriberId)
    ) {
      const newCoverage: Coverage = Object.assign({}, coverage);
      const newGrouping: Grouping = {};

      if (discrepancies.groupId || coverage!.grouping!.group) {
        const groupId = discrepancies.groupId
          ? discrepancies.groupId
          : coverage!.grouping!.group!.value;
        newGrouping.group = { value: groupId };
      }

      const plan = discrepancies.plan
        ? discrepancies.plan
        : coverage.grouping.plan!.value;

      newGrouping.plan = { value: plan };
      newCoverage.grouping = newGrouping;

      const newSubscriberId = discrepancies.subscriberId
        ? discrepancies.subscriberId
        : coverage.subscriberId!.value;
      newCoverage.subscriberId = { value: newSubscriberId };

      const subscriber: Subscriber = {};
      subscriber.uri = { value: "Patient/" + virtaId };
      newCoverage.subscriber = subscriber;
      try {
        const patchedCoverage = (await client.patch(
          COVERAGE_ENDPOINT,
          newCoverage
        )) as Coverage;
        setCoverage(patchedCoverage);
      } catch (e) {
        console.log(e, "error patching coverage resource");
      }
    }
  };

  const onSubmit = async (values: FormikValues) => {
    if (user && values.firstName && values.lastName && values.dateOfBirth) {
      // todo - this should probably have a better type
      const newUser: FormikValues = {};
      newUser["firstName"] = values.firstName;
      newUser["lastName"] = values.lastName;
      newUser["dateOfBirth"] = values.dateOfBirth;
      newUser["gender"] = values.gender;
      newUser["sexAtBirth"] = values.sexAtBirth;
      if (values.sexAtBirth) {
        newUser["sexAtBirth"] = values.sexAtBirth;
      }
      setUser(user);
      try {
        await client.patch(`/users/self`, newUser);
      } catch (e) {
        console.log(e, "error patching EP patient");
      }
    }

    const organizationId = getOrganizationIdByName(
      deploymentPayors,
      values.plan
    );
    if (coverage && coverage.id && coverage.meta) {
      const newCoverage: Coverage = Object.assign({}, coverage);
      const newGrouping: Grouping = {};
      const groupId = values.groupId ? values.groupId : "";
      newGrouping.group = { value: groupId };
      newGrouping.plan = { value: values.plan };
      newCoverage.grouping = newGrouping;

      const newSubscriberId = { value: values.subscriberId };
      newCoverage.subscriberId = newSubscriberId;

      const subscriber: Subscriber = {};
      subscriber.uri = { value: "Patient/" + virtaId };
      newCoverage.subscriber = subscriber;

      if (structuredPayersEnabled) {
        const payor: Payor = {
          display: { value: values.plan },
        };
        if (organizationId) {
          payor.uri = { value: "Organization/" + organizationId };
        }
        newCoverage.payor = [payor];
      }

      try {
        const patchedCoverage = (await client.patch(
          COVERAGE_ENDPOINT,
          newCoverage
        )) as Coverage;
        setCoverage(patchedCoverage);
      } catch (e) {
        console.log(e, "error patching coverage resource");
      }
    } else {
      const formData = new FormData();
      formData.append("member_id", values.subscriberId);
      formData.append("plan_name", values.plan);

      if (values.groupId) {
        formData.append("group_id", values.groupId);
      }

      if (structuredPayersEnabled && organizationId) {
        formData.append("organization_id", organizationId);
      }

      try {
        const newCoverage = (await client.post(
          COVERAGE_ENDPOINT,
          formData
        )) as Coverage;
        setCoverage(newCoverage);
      } catch (e) {
        console.log(e, "error creating coverage resource");
      }
    }

    // update health history for AOB accepted
    if (values["aobAccepted"]) {
      await client.patch(HEALTH_HISTORY_ENDPOINT, {
        aob_accepted: values["aobAccepted"],
        is_complete: false,
      });
    }
    pollEligibilityResponse(
      client,
      fetchEligibilityResponses,
      setEligibilityResponses,
      stageRef,
      setStage,
      TIMEOUT,
      DEFAULT_INTERVAL
    );
  };

  if (!user) {
    return (
      <SpinnerContainer>
        <Spinner size="large" />
      </SpinnerContainer>
    );
  }
  return (
    <StyledView>
      {toastContent && (
        <Toast
          isOpen={showToast}
          handleClose={() => setShowToast(false)}
          height={50}
          positionValues={{ top: 10 }}
          slideEndPosition={10}
          notificationType="error"
          timeoutDuration={200000}
          style={{ padding: 15 }}
        >
          <StyledToastText message={toastContent.message} />
        </Toast>
      )}
      <FormWrapper isWeb={isWeb}>
        {(() => {
          switch (stage) {
            case Stage.INPUT:
              return (
                <CoverageForm
                  aobAccepted={aobAccepted}
                  epLocation={epLocation}
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  onSkip={() => {
                    epLocation === HH_APPLICATION_LOCATION
                      ? onSkip && onSkip()
                      : onContinue && onContinue();
                  }}
                  isLoading={isLoading}
                  user={user}
                  coverage={coverage}
                  insurerOptions={dropdownOptions}
                  isDTP={isDTP}
                  onSubmit={(values) => {
                    onSubmit(values);
                    if (isDTP) {
                      onContinue && onContinue();
                    } else {
                      setStage(Stage.POLLING);
                    }
                  }}
                  planName={planName}
                />
              );

            case Stage.LOADING:
              return (
                <SpinnerContainer>
                  <Spinner size="large" />
                </SpinnerContainer>
              );
            case Stage.CORRECT_INFORMATION:
              return (
                <CorrectedInformation
                  user={user}
                  patchDiscrepancies={patchDiscrepancies}
                  discrepancies={discrepancies}
                  epLocation={epLocation}
                  coverage={coverage!}
                  onContinue={() => {
                    onContinue && onContinue();
                    setStage(Stage.ELIGIBLE);
                  }}
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  onSkip={() => {
                    setStage(Stage.ELIGIBLE);
                  }}
                />
              );
            case Stage.POLLING:
              return <Polling trackPageViewed={trackPageViewed} />;
            case Stage.UPLOAD:
              return (
                <ImageUpload
                  isUploadingImages={isUploadingImages}
                  onSkip={() => {
                    epLocation === HH_APPLICATION_LOCATION
                      ? onSkip && onSkip()
                      : onContinue && onContinue();
                  }}
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  postImages={uploadImages}
                />
              );
            case Stage.POLLING_TWO:
              return <Polling trackPageViewed={trackPageViewed} />;
            case Stage.ELIGIBLE:
              return (
                <Eligible
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  epLocation={epLocation}
                  onContinue={onContinue}
                />
              );
            case Stage.INELIGIBLE:
              return (
                <Ineligible
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  epLocation={epLocation}
                  onContinue={onContinue}
                />
              );
            case Stage.TROUBLESHOOTING:
              return (
                <TroubleShooting
                  trackButtonClicked={trackButtonClicked}
                  epLocation={epLocation}
                  trackPageViewed={trackPageViewed}
                  onEdit={() => setStage(Stage.TROUBLESHOOT_INPUT)}
                  onSkip={() => {
                    epLocation === HH_APPLICATION_LOCATION
                      ? onSkip && onSkip()
                      : onContinue && onContinue();
                  }}
                  user={user}
                  coverage={coverage}
                />
              );
            case Stage.TROUBLESHOOT_INPUT:
              return (
                <TroubleShootingInput
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  epLocation={epLocation}
                  insurerOptions={dropdownOptions}
                  onSubmit={(values) => {
                    setStage(Stage.POLLING_TWO);
                    onSubmit(values);
                  }}
                  onSkip={() => {
                    epLocation === HH_APPLICATION_LOCATION
                      ? onSkip && onSkip()
                      : onContinue && onContinue();
                  }}
                  user={user}
                  coverage={coverage}
                />
              );
            case Stage.TIMEOUT:
              return (
                <Timeout
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  epLocation={epLocation}
                  onContinue={onContinue}
                />
              );
            default:
              return (
                <CoverageForm
                  epLocation={epLocation}
                  trackButtonClicked={trackButtonClicked}
                  trackPageViewed={trackPageViewed}
                  onSkip={onContinue}
                  isLoading={isLoading}
                  user={user}
                  coverage={coverage}
                  insurerOptions={dropdownOptions}
                  isDTP={isDTP}
                  onSubmit={(values) => {
                    setStage(Stage.POLLING);
                    onSubmit(values);
                  }}
                />
              );
          }
        })()}
      </FormWrapper>
    </StyledView>
  );
};

export const EligibilityCheckExperienceV2 = withVirta(EligibilityCheck);
/* eslint-enable max-lines */
