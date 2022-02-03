import * as React from "react";
import {
  styled,
  PhoneActionEmailIcon,
  CheckedInsuranceCardIcon,
  ImageCapture,
  Spacer,
  Label,
  Spinner,
} from "@virtahealth/components";
import { isEmpty, messages } from "@virtahealth/utils";
import { MessageDescriptor, useIntl } from "react-intl";
import { View } from "react-native";
import { FormikValues } from "formik";
import { InsuranceForm } from "../InsuranceForm";
import { InsuranceCard, InsuranceHeading2 } from "..";
import { NoInsuranceCardLink } from "../shared";
import { CameraButton } from "./CameraButton";

const CameraBox = styled(View)`
  display: flex;
  flex-direction: row;
`;

const StyledContainer = styled(View)`
  align-items: center;
`;

const LoadingContainer = styled(View)`
  height: 30vh;
  justify-content: center;
`;

enum CardDirection {
  FRONT = "front",
  BACK = "back",
}

const LoadingComponent: React.FC = () => (
  <LoadingContainer>
    <Spinner size={"large"} />
    <Spacer height={16} />
    <Label message={messages.loadingMessage} />
  </LoadingContainer>
);

interface CaptureProps {
  setFrontImage: (front: string) => void;
  setBackImage: (back: string) => void;
  frontImage: string;
  backImage: string;
  isProcessing: boolean;
  onContinue: (values: any) => void;
  onIssue: () => void;
  onRetry: () => void;
  card: InsuranceCard;
  error?: MessageDescriptor;
  insurerOptions: Array<string>;
  onEditForm?: (updates: InsuranceCard, existing: InsuranceCard) => void;
  hideInsuranceGroupId?: boolean;
  isDtp?: boolean;
  isSubmitting: boolean;
}

const cardIsValid = (card: InsuranceCard) => {
  return !isEmpty(card?.insuranceMemberId) || !isEmpty(card?.insuranceGroupId);
};

export const CaptureInsuranceCard: React.FC<CaptureProps> = ({
  card,
  onContinue,
  onIssue,
  onRetry,
  error,
  insurerOptions,
  onEditForm,
  setFrontImage,
  setBackImage,
  frontImage,
  backImage,
  isProcessing,
  hideInsuranceGroupId = false,
  isDtp = false,
  isSubmitting,
}) => {
  const intl = useIntl();

  const [allowContinue, setAllowContinue] = React.useState(false);
  const [allowRetry, setAllowRetry] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setAllowRetry(true);
      setAllowContinue(false);
    }
  }, [error]);

  React.useEffect(() => {
    setAllowContinue(false);
    if (cardIsValid(card)) {
      setAllowRetry(true);
      //check for member id to see if we're ready to go
      setAllowContinue(true);
    }
  }, [card]);

  const [isCapturing, setIsCapturing] = React.useState(false);
  const [capturingDirection, setCapturingDirection] = React.useState(
    CardDirection.FRONT
  );

  const onAcceptPhoto = (uri: string) => {
    const setImage =
      capturingDirection === CardDirection.FRONT ? setFrontImage : setBackImage;
    setImage(uri);
    setIsCapturing(false);
    setAllowRetry(true);
  };

  const turnOnCamera = async () => {
    try {
      const imageCaptureComponent = document.getElementById(
        "ImageCaptureComponent"
      );
      if (imageCaptureComponent) {
        if (imageCaptureComponent.requestFullscreen) {
          await imageCaptureComponent.requestFullscreen();
        }
      }
    } catch (e) {
      // ignore because landscape mode isn't possible on device
    }
  };

  React.useEffect(() => {
    if (isCapturing) {
      turnOnCamera();
    }
  }, [isCapturing]);

  const retry = () => {
    setFrontImage("");
    setBackImage("");
    setAllowRetry(false);
    onRetry();
  };

  return isCapturing ? (
    <ImageCapture
      id={"ImageCaptureComponent"}
      onExit={() => setIsCapturing(false)}
      onAcceptPhoto={(uri) => onAcceptPhoto(uri)}
    />
  ) : (
    <StyledContainer>
      <Spacer width={10} />
      {allowContinue ? <CheckedInsuranceCardIcon /> : <PhoneActionEmailIcon />}
      <Spacer height={24} />
      <InsuranceHeading2>
        {intl.formatMessage(messages.scanInsuranceHeader)}
      </InsuranceHeading2>
      <Spacer height={16} />
      <CameraBox>
        <CameraButton
          direction="front"
          onPress={() => {
            setIsCapturing(true);
            setCapturingDirection(CardDirection.FRONT);
          }}
          imageSrc={frontImage}
        />
        <Spacer width={16} />
        <CameraButton
          direction="back"
          onPress={() => {
            setIsCapturing(true);
            setCapturingDirection(CardDirection.BACK);
          }}
          imageSrc={backImage}
        />
      </CameraBox>
      <Spacer height={16} />
      {isProcessing ? (
        <LoadingComponent />
      ) : (
        <InsuranceForm
          editable={allowContinue}
          subheader={allowContinue ? messages.reviewInsuranceInfo : undefined}
          onContinue={allowContinue ? onContinue : undefined}
          card={card}
          insurerOptions={insurerOptions}
          onRetry={allowRetry ? retry : undefined}
          error={error}
          displayValidateButton={true}
          // todo: clarify the type of `updates`
          onEditForm={
            onEditForm as (
              updates: FormikValues,
              existing: InsuranceCard
            ) => void
          }
          hideInsuranceGroupId={hideInsuranceGroupId}
          isDtp={isDtp}
          isSubmitting={isSubmitting}
        />
      )}
      <Spacer height={24} />
      {!allowContinue && <NoInsuranceCardLink onIssue={onIssue} />}
    </StyledContainer>
  );
};
