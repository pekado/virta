import * as React from "react";
import { View, ViewProps } from "react-native";
import {
  VirtaClient,
  Heading2,
  Heading3,
  Heading4,
  withVirta,
  styled,
} from "@virtahealth/components";
import { MessageDescriptor } from "react-intl";
import { SendSMS } from "./SendSMS";
import { CaptureInsuranceCard } from "./CaptureInsuranceCard";
import { PrimaryInsurance } from "./PrimaryInsurance";
import { ManualInputInsurance } from "./ManualInput";
import { Confirmation } from "./Confirmation";
import { ScannerTrouble } from "./ScannerTrouble";
import { InitialInsurance } from "./InitialInsurance";
import { NonEmailConfirmation } from "./NonEmailConfirmation";
import { StyledBlueBox } from "./shared";

type ViewWithMobileProp = ViewProps & { matchesMobile: boolean };

const StyledView = styled(View)<ViewWithMobileProp>`
  width: ${({ matchesMobile }) => (matchesMobile ? "100%" : "425px")};
  align-items: "center";
`;

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

const CenteredHeading2 = styled(Heading2)`
  text-align: center;
`;
const CenteredHeading3 = styled(Heading3)`
  text-align: center;
`;
const CenteredHeading4 = styled(Heading4)`
  text-align: center;
`;

const MobileHeading2 = styled(Heading2)`
  font-size: 24px;
  line-height: 34px;
`;

const MobileHeading3 = styled(Heading3)`
  font-size: 16px;
  line-height: 24px;
`;
const MobileHeading4 = styled(Heading4)`
  font-size: 16px;
  line-height: 24px;
`;

export const InsuranceStyledBlueBox = styled(StyledBlueBox)`
  align-items: ${isMobile ? "flex-start" : "center"};
`;

export const InsuranceHeadingContainer = styled(View)`
  justify-content: ${isMobile ? "flex-start" : "center"};
  text-align: ${isMobile ? "flex-start" : "center"};
`;
// Logic to adjust exerience for mobile, mostly left aligns and decreases header size
export const InsuranceHeading2 = isMobile ? MobileHeading2 : CenteredHeading2;
export const InsuranceHeading3 = isMobile ? MobileHeading3 : CenteredHeading3;
export const InsuranceHeading4 = isMobile ? MobileHeading4 : CenteredHeading4;
export enum Stage {
  SMS = "sms",
  CAPTURE = "capture",
  PRIMARY = "primary",
  MANUAL = "manual",
  CONFIRMATION = "confirmation",
  NONEMAILCONFIRMATION = "nonemailconfirmation",
  INITIAL = "initial",
  SCANNERTROUBLE = "scannertrouble",
}

export interface User {
  virtaId: string;
  email: string;
}

interface InsuranceScannerProps {
  client: VirtaClient;
  forceManualInput: boolean; // change the experience to manual input only if true
  onCompletion: () => void; // hook that executes when insurance information is submitted
  initialInsurance?: InsuranceCard; // optional initial insurance values to use in form
  user?: User; // used primarily for email address on confirmation page
  insurerOptions: Array<string>; // list of insurers for insurer dropdown values
  isInHealthHistory?: boolean; // optional prop to change experience for health history in EP
  onEditInsuranceForm?: (
    updates: InsuranceCard,
    existing: InsuranceCard
  ) => void;
  onSwitchToManualInsurance?: () => void;
  onSkipInsurance?: () => void;
  hideInsuranceGroupId?: boolean;
  isDtp?: boolean;
}

export interface InsuranceCard {
  insuranceCarrier: string;
  insuranceGroupId: string;
  insuranceMemberId: string;
  issueDate?: string;
}

const emptyInsuranceCardState = {
  insuranceGroupId: "",
  insuranceMemberId: "",
  issueDate: "",
  insuranceCarrier: "",
};

export class HttpError extends Error {
  messageDescriptor: MessageDescriptor;

  constructor(message: string, messageDescriptor: MessageDescriptor) {
    super(message);
    this.name = "HttpError";
    this.message = message;
    this.messageDescriptor = messageDescriptor;
    this.stack = new Error().stack;
  }
}

const InsuranceScanner: React.FC<InsuranceScannerProps> = ({
  client,
  forceManualInput = false,
  onCompletion,
  initialInsurance,
  user,
  insurerOptions,
  isInHealthHistory = false,
  onSwitchToManualInsurance,
  onSkipInsurance,
  onEditInsuranceForm,
  hideInsuranceGroupId = false,
  isDtp = false,
}) => {
  const [insurance, setInsurance] = React.useState<InsuranceCard>(
    initialInsurance ?? emptyInsuranceCardState
  );
  const [isSMSSent, setIsSMSSent] = React.useState(false);
  const [skipInsurance, setSkipInsurance] = React.useState(false);
  const [isPrimaryInsurance, setIsPrimaryInsurance] = React.useState("yes");
  const [stage, setStage] = React.useState(
    forceManualInput ? Stage.MANUAL : Stage.INITIAL
  );
  const [frontImageSrc, setFrontImageSrc] = React.useState("");
  const [backImageSrc, setBackImageSrc] = React.useState("");
  const [failureCount, setFailureCount] = React.useState(0);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<MessageDescriptor | undefined>();
  const [isSubmittingManualInsurance, setIsSubmittingManualInsurance] =
    React.useState(forceManualInput);

  React.useEffect(() => {
    // run the backend function to parse this stuff
    if (frontImageSrc !== "" && backImageSrc !== "") {
      parseInsuraceCard();
      setIsProcessing(true);
    }
  }, [frontImageSrc, backImageSrc]);

  React.useEffect(() => {
    if (error || insurance) {
      setIsProcessing(false);
    }
  }, [error, insurance]);

  React.useEffect(() => {
    if (stage === Stage.SMS && isMobile) {
      // go ahead and switch the stage to capture
      setStage(Stage.CAPTURE);
    }
  }, [stage]);

  React.useEffect(() => {
    if (failureCount >= 3) {
      // go ahead and switch the stage to capture
      setStage(Stage.SCANNERTROUBLE);
    }
  }, [failureCount]);

  React.useEffect(() => {
    setError(undefined);
  }, [stage]);

  React.useEffect(() => {
    setStage(forceManualInput ? Stage.MANUAL : Stage.INITIAL);
  }, [forceManualInput]);

  // method to fetch image via stored uri and then convert it into a Filetype for http call
  const getFileFromDataUri = async (uri: string, fileName: string) => {
    return fetch(uri)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], fileName, { type: "image/png" }));
  };

  const parseInsuraceCard = async () => {
    const formData = new FormData();

    const frontFile = await getFileFromDataUri(frontImageSrc, "front.png");
    formData.append("front", frontFile);

    const backFile = await getFileFromDataUri(backImageSrc, "back.png");
    formData.append("back", backFile);

    try {
      // clear any API errors
      setError(undefined);
      const scannedInsuranceCard = (await client.post(
        "/insurance_card",
        formData
      )) as InsuranceCard;
      setInsurance(scannedInsuranceCard);
    } catch (e: any) {
      // start counter to automatically redirect people after 3 attempts
      setFailureCount(failureCount + 1);
      setError(e.messageDescriptor);
    }
  };

  // scroll to top of page if we switch components
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const handleSMS = async (phoneNumber: string) => {
    // post to client
    try {
      // clear any API errors
      setError(undefined);
      await client.post("/insurance_collection_sms", {
        phoneNumber: phoneNumber,
      });
      setIsSMSSent(true);
    } catch (e: any) {
      setError(e.messageDescriptor);
    }
  };

  const handleInsuranceSubmit = async (values?: InsuranceCard) => {
    const formData = new FormData();
    const valuesToUse = values ? values : insurance;

    if (frontImageSrc != "") {
      const frontFile = await getFileFromDataUri(frontImageSrc, "front.png");
      formData.append("front", frontFile);
    }

    if (backImageSrc != "") {
      const backFile = await getFileFromDataUri(backImageSrc, "back.png");
      formData.append("back", backFile);
    }

    formData.append("insurance_carrier", valuesToUse.insuranceCarrier);
    formData.append("insurance_group_id", valuesToUse.insuranceGroupId);
    formData.append("insurance_member_id", valuesToUse.insuranceMemberId);
    // formData.append("issue_date", insurance.issueDate);
    // formData.append("is_submitting_primary_insurance", isPrimaryInsurance);

    try {
      // clear any API errors
      setError(undefined);
      setIsSubmitting(true);
      await client.post("/insurance_info", formData);
      isInHealthHistory
        ? setStage(Stage.NONEMAILCONFIRMATION)
        : setStage(Stage.CONFIRMATION);
      setIsSubmitting(false);
      // run on completion hook
      onCompletion();
    } catch (e: any) {
      setError(e.messageDescriptor);
    }
  };

  const handleInsurancePreSubmit = (values: any) => {
    setInsurance(values);
    handleInsuranceSubmit(values);
  };

  const handleInsuranceUpdate = (values: any) => {
    setInsurance(values);
    setStage(Stage.PRIMARY);
  };

  const shouldAllowSMS = !isMobile && !forceManualInput;
  const shouldAllowCapture = isMobile && !forceManualInput;

  const displaySMS = stage === Stage.SMS && shouldAllowSMS;
  const displayCapture = stage === Stage.CAPTURE && shouldAllowCapture;

  const initialRedirect = () =>
    setStage(
      shouldAllowSMS
        ? Stage.SMS
        : shouldAllowCapture
        ? Stage.CAPTURE
        : Stage.MANUAL
    );

  return (
    <StyledView matchesMobile={isMobile}>
      {displaySMS ? (
        <SendSMS
          isSMSSent={isSMSSent}
          onSendSMS={handleSMS}
          error={error}
          onIssue={() => setStage(Stage.MANUAL)}
        />
      ) : displayCapture ? (
        <CaptureInsuranceCard
          card={insurance}
          insurerOptions={insurerOptions}
          onRetry={() => setInsurance(emptyInsuranceCardState)}
          onIssue={() => {
            setStage(Stage.MANUAL);
            setIsSubmittingManualInsurance(true);
            onSwitchToManualInsurance && onSwitchToManualInsurance();
          }}
          onEditForm={onEditInsuranceForm}
          error={error}
          onContinue={handleInsuranceUpdate}
          setFrontImage={setFrontImageSrc}
          setBackImage={setBackImageSrc}
          frontImage={frontImageSrc}
          backImage={backImageSrc}
          isProcessing={isProcessing}
          hideInsuranceGroupId={hideInsuranceGroupId}
          isDtp={isDtp}
          isSubmitting={isSubmitting}
        />
      ) : stage === Stage.MANUAL ? (
        <ManualInputInsurance
          card={insurance}
          insurerOptions={insurerOptions}
          onSkipManualInput={
            !isInHealthHistory
              ? () => {
                  setSkipInsurance(true);
                  setStage(Stage.CONFIRMATION);
                  onCompletion();
                  onSkipInsurance && onSkipInsurance();
                }
              : undefined
          }
          onContinue={handleInsurancePreSubmit}
          displayHelpScreen={false}
          hideInsuranceGroupId={hideInsuranceGroupId}
          isDtp={isDtp}
          isSubmitting={isSubmitting}
        />
      ) : stage === Stage.PRIMARY ? (
        <PrimaryInsurance
          isPrimaryInsurance={isPrimaryInsurance}
          onSelectPrimary={setIsPrimaryInsurance}
          onBack={() =>
            setStage(isSubmittingManualInsurance ? Stage.MANUAL : Stage.CAPTURE)
          }
          onSubmit={handleInsuranceSubmit}
          error={error}
        />
      ) : stage === Stage.NONEMAILCONFIRMATION ? (
        <NonEmailConfirmation />
      ) : stage === Stage.CONFIRMATION ? (
        <Confirmation user={user} useNonSubmitMessage={skipInsurance} />
      ) : stage === Stage.SCANNERTROUBLE ? (
        <ScannerTrouble
          onBack={() => setStage(Stage.CAPTURE)}
          onContinue={() => {
            onSwitchToManualInsurance && onSwitchToManualInsurance();
            setStage(Stage.MANUAL);
          }}
        />
      ) : (
        <InitialInsurance
          onContinue={initialRedirect}
          onIssue={() => {
            setStage(Stage.MANUAL);
            setIsSubmittingManualInsurance(true);
            onSwitchToManualInsurance && onSwitchToManualInsurance();
          }}
        />
      )}
    </StyledView>
  );
};

export const InsuranceScannerExperience = withVirta(InsuranceScanner);
