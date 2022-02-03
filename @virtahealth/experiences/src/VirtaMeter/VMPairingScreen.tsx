import {
  Button,
  Heading3,
  Heading2,
  HelperText,
} from "@virtahealth/components";
import * as React from "react";
import { Animated, Dimensions, View } from "react-native";
import styled from "styled-components/native";
import { messages } from "@virtahealth/utils";
import { VMCircle } from "./VMCircle";

interface VMPairingScreenProps {
  step: "looking" | "detected" | "confirm" | "success" | "error";
  // used when the user clicks "confirm" on the confirm step
  onConfirm: () => void;
  // used when the user clicks "cancel" on the confirm step or "done" on the success step
  onExit: () => void;
  // used when the user clicks "Read this support article"
  onSupport: () => void;
  // shows serial number on confirm screen
  serialNumber: string;
}

const Container = styled(View)`
  flex: 1;
`;

const StepTitle = styled(Heading2)`
  margin-top: 25px;
  text-align: center;
`;

const StepDescription = styled(HelperText)`
  margin-top: 18px;
  font-size: 18;
  color: grey;
  text-align: center;
`;

const SupportLink = styled(HelperText)`
  font-size: 18;
  color: ${({ theme }) => theme.textLinkColor};
  text-align: center;
  margin-top: 7px;
`;

const SerialNumber = styled(Heading3)`
  margin-top: 25px;
  margin-bottom: 3px;
  text-align: center;
`;

const FullButton = styled(Button)`
  width: 100%;
`;

const HalfButton = styled(Button)`
  width: 50%;
`;

const BottomContainer = styled(Animated.View)`
  justify-content: flex-end;
  flex: 1;
`;

const InnerContainer = styled(Animated.View)`
  align-items: center;
  padding-horizontal: 20px;
`;

const TitleContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
`;

const Ellipses = styled(Heading2)`
  position: absolute;
  bottom: 0;
`;

const TextContainer = styled(Animated.View)``;

const BottomButtons = styled(View)`
  flex-direction: row;
  padding-vertical: 15px;
  padding-horizontal: 20px;
  border-top-width: 2px
  border-top-color: ${({ theme }) => theme.dividerColor};
`;

// these map our various steps to their corresponding text/percent done
const VMPairingScreenStepMap = {
  looking: {
    title: messages.meterLookingTitle,
    descriptionTop: messages.meterLookingDescription,
    descriptionBottom: messages.emptyString,
    percentDone: 0,
    flipMeter: false,
    statusIcon: undefined,
  },
  detected: {
    title: messages.meterDetectedTitle,
    descriptionTop: messages.meterDetectedDescription,
    descriptionBottom: messages.emptyString,
    percentDone: 33,
    flipMeter: false,
    statusIcon: undefined,
  },
  confirm: {
    title: messages.meterConfirmTitle,
    descriptionTop: messages.meterConfirmDescriptionTop,
    descriptionBottom: messages.meterConfirmDescriptionBottom,
    percentDone: 66,
    flipMeter: true,
    statusIcon: undefined,
  },
  success: {
    title: messages.meterSuccessTitle,
    descriptionTop: messages.meterSuccessDescriptionTop,
    descriptionBottom: messages.meterSuccessDescriptionBottom,
    percentDone: 100,
    flipMeter: false,
    statusIcon: "check",
  },
  error: {
    title: messages.meterErrorTitle,
    descriptionTop: messages.meterErrorDescriptionTop,
    descriptionBottom: messages.meterErrorDescriptionBottom,
    percentDone: 0,
    flipMeter: false,
    statusIcon: "error",
  },
};

export const VMPairingScreen: React.FC<VMPairingScreenProps> = ({
  step,
  onConfirm,
  onExit,
  onSupport,
  serialNumber,
}) => {
  // fade-in the whole screen when it first shows
  const animatedScreen: Animated.Value = React.useRef(
    new Animated.Value(0)
  ).current;
  React.useEffect(() => {
    Animated.timing(animatedScreen, {
      toValue: 1,
      duration: 550,
      useNativeDriver: true,
    }).start();
  }, []);

  // as our parent progresses through the steps, we update our percentage, fade out our text/buttons, change
  // the text/buttons, and then fade them back in
  const animatedTextButtons: Animated.Value = React.useRef(
    new Animated.Value(1)
  ).current;
  const [percentDone, setPercentDone] = React.useState(0);
  const [flipMeter, setFlipMeter] = React.useState(false);
  const [statusIcon, setStatusIcon]: [
    statusIcon: undefined | "check" | "error",
    setStatusIcon: Function
  ] = React.useState<undefined | "check" | "error">(undefined);
  const [title, setTitle] = React.useState(messages.meterLookingTitle);
  const [descriptionTop, setDescriptionTop] = React.useState(
    messages.meterLookingDescription
  );
  const [descriptionBottom, setDescriptionBottom] = React.useState(
    messages.emptyString
  );
  const [renderedStep, setRenderedStep] = React.useState(step);
  const firstRender = React.useRef(true);
  const [ellipsesAnimationText, setEllipsesAnimationText] = React.useState(" ");
  const ellipsesAnimationRef: { current: any } = React.useRef(-1);

  // whenever the step changes, update our screen
  React.useEffect(() => {
    // not on the first render, we already have everything setup how we like it
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // first update percent
    setPercentDone(VMPairingScreenStepMap[step].percentDone);
    // then fade out asynchronously
    Animated.timing(animatedTextButtons, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      // after fade out, switch text/buttons and flip the meter if needed
      setTitle(VMPairingScreenStepMap[step].title);
      setDescriptionTop(VMPairingScreenStepMap[step].descriptionTop);
      setDescriptionBottom(VMPairingScreenStepMap[step].descriptionBottom);
      setFlipMeter(VMPairingScreenStepMap[step].flipMeter);
      setRenderedStep(step);
      // then fade-in the new text/buttons
      Animated.timing(animatedTextButtons, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        // lastly, after fade-in, show the icon animating if needed
        setStatusIcon(VMPairingScreenStepMap[step].statusIcon);
      });
    });
  }, [step]);

  // animate the ellipses in the title
  React.useEffect(() => {
    // start the interval if we are on the 'looking' or 'detected' step and there isnt an interval already
    if (
      (renderedStep === "looking" || renderedStep === "detected") &&
      ellipsesAnimationRef.current === -1
    ) {
      // every 500ms, add "." to the title unless it has " ...", in that case set it back to " "
      ellipsesAnimationRef.current = setInterval(() => {
        setEllipsesAnimationText((text) =>
          text.length > 3 ? " " : "." + text
        );
      }, 500);
    }
    // clear interval if we're no longer on those steps and there is one
    else if (
      !(renderedStep === "looking" || renderedStep === "detected") &&
      ellipsesAnimationRef.current !== -1
    ) {
      clearInterval(ellipsesAnimationRef.current);
      ellipsesAnimationRef.current = -1;
    }
    return () => {
      clearInterval(ellipsesAnimationRef.current);
      ellipsesAnimationRef.current = -1;
    };
  }, [renderedStep]);

  // add () around first 2 characters in SN like it shows on the device
  let formattedSN = serialNumber;
  if (serialNumber.length > 2) {
    formattedSN = `(21) ${serialNumber.slice(2)}`;
  }

  // add ellipses to "looking" and "detected" step title
  let ellipses = messages.emptyString;
  if (renderedStep === "looking" || renderedStep === "detected") {
    ellipses = {
      id: "ellipsesTitleForLookingStepOfPairingVM",
      defaultMessage: ellipsesAnimationText,
    };
  }

  // modified 1/4th screen height to make our equations a little cleaner
  const quarterScreen = (Dimensions.get("window").height - 50) / 4;

  return (
    <Container>
      <InnerContainer
        style={{
          opacity: animatedScreen,
          paddingTop: quarterScreen - 85,
        }}
      >
        <VMCircle
          circleWidth={quarterScreen}
          percentDone={percentDone}
          flipMeter={flipMeter}
          statusIcon={statusIcon}
        />
        <TextContainer
          style={{
            opacity: animatedTextButtons,
          }}
        >
          <TitleContainer>
            <StepTitle message={title} />
            <View>
              <Ellipses message={ellipses} />
            </View>
          </TitleContainer>
          <StepDescription message={descriptionTop} />
          {renderedStep === "confirm" && (
            <SerialNumber>{formattedSN}</SerialNumber>
          )}
          <StepDescription message={descriptionBottom} />
          {(renderedStep === "confirm" || renderedStep === "error") && (
            <SupportLink
              message={messages.readSupportArticle}
              onPress={onSupport}
            />
          )}
        </TextContainer>
      </InnerContainer>
      <BottomContainer
        style={{
          opacity: animatedTextButtons,
        }}
      >
        {renderedStep === "confirm" && (
          <BottomButtons>
            <HalfButton
              labelMessage={messages.cancel}
              appearance="link"
              intent="secondary"
              onPress={onExit}
            />
            <HalfButton
              labelMessage={messages.confirm}
              intent="secondary"
              onPress={onConfirm}
            />
          </BottomButtons>
        )}
        {renderedStep === "success" && (
          <BottomButtons>
            <FullButton
              labelMessage={messages.done}
              intent="secondary"
              onPress={onExit}
            />
          </BottomButtons>
        )}
      </BottomContainer>
    </Container>
  );
};
