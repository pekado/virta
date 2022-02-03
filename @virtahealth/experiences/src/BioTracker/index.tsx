import {
  ThemeContext,
  Caption,
  Heading4,
  ProgressCircle,
  styled,
  BodySmall,
  BloodPressureIcon,
  KetonesIcon,
  WeightIcon,
  SymptomsIcon,
  GlucoseIcon,
  PlusIcon,
} from "@virtahealth/components";
import * as React from "react";
import { MessageDescriptor } from "react-intl";
import { ActivityIndicator, Dimensions, View, Platform } from "react-native";
import { messages } from "@virtahealth/utils";
import { DefaultTheme } from "styled-components/native";

interface BiotrackerProps {
  description: MessageDescriptor;
  onPress: () => void;
  biomarker: FullListBiomarker;
  maxReadings: number;
  currentReadings: number;
  loading: boolean;
  viewportSize?: number;
}

type FullListBiomarker =
  | "BloodPressure"
  | "blood_pressure"
  | "blood pressure"
  | "blood_pressure_measurement"
  | "Glucose"
  | "fasting blood glucose"
  | "post-meal glucose"
  | "pre-meal glucose"
  | "glucose_measurement"
  | "glucose"
  | "Ketones"
  | "ketone"
  | "Ketone-Measure"
  | "ketone_measurement"
  | "Symptoms"
  | "symptoms"
  | "symptom"
  | "Weight"
  | "weight"
  | "weight_measurement";

type NormalizedBiomarker =
  | "blood pressure"
  | "ketone"
  | "glucose"
  | "symptom"
  | "weight"
  | "";

type ContainerProps = {
  width: number;
  height: number;
};

const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-style: solid;
  border-width: ${({ theme }) => theme.cardBorderThickness}px;
  border-color: ${({ theme }) => theme.cardBorderColor};
  border-radius: ${({ theme }) => theme.roundedContainerBorderRadius}px;
  background-color: ${({ theme }) => theme.defaultBackground};
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Heading4)`
  font-size: ${({ theme }) => theme.biotrackerTitleFontSize}px;
  font-weight: ${({ theme }) => theme.textHeading1FontWeight};
  margin-top: ${({ theme }) => theme.standardSpacingSmall}px;
`;

const Subtitle = styled(Caption)`
  color: ${({ theme }) => theme.textColorSubtitle};
  font-size: ${({ theme }) => theme.biotrackerSubtitleFontSize}px;
  font-weight: ${({ theme }) => theme.textBodySpacedFontWeight};
`;

const ProgressText = styled(BodySmall)`
  font-size: ${({ theme }) => theme.biotrackerTitleFontSize}px;
  font-weight: ${({ theme }) => theme.textHeading1FontWeight};
  color: ${({ theme }) => theme.biotrackerProgressFontColor};
`;

const BlackText = styled(ProgressText)`
  color: ${({ theme }) => theme.textHeading1Color};
`;

export const BioTracker: React.FC<BiotrackerProps> = ({
  description,
  onPress,
  biomarker,
  maxReadings,
  currentReadings,
  loading,
  viewportSize,
}) => {
  const theme = React.useContext(ThemeContext);
  let readingsPercent;
  if (maxReadings) {
    readingsPercent = (currentReadings / maxReadings) * 100;
  } else {
    readingsPercent = 100;
  }
  if (readingsPercent > 100) {
    readingsPercent = 100;
  }
  const icon = getIcon(biomarker, theme);
  const title = getTitle(biomarker);
  const color = getColor(biomarker, theme);
  const iconPadding = getIconPadding(biomarker, theme);

  // dynamic width/height to make sure the card overflows the carrossel
  const ratio = (viewportSize || Dimensions.get("window").width) / 360;
  let width = ratio * 120;
  let height = ratio * 140;
  if (width > 240) {
    width = 200;
  }
  if (height > 234) {
    height = 280;
  }
  if (width < 120) {
    width = 120;
  }
  if (height < 140) {
    height = 140;
  }

  return (
    <Container
      onPress={onPress}
      height={height}
      width={width}
      activeOpacity={Platform.OS === "android" ? 1 : 0.2}
    >
      <ProgressCircle
        percent={readingsPercent}
        radius={width / 3}
        color={color}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color="black"
            animating={true}
            style={{
              width: 44,
              height: 44,
            }}
          />
        ) : (
          <>
            <Row>
              <View style={{ paddingRight: iconPadding }}>
                <PlusIcon color={color} />
              </View>
              {icon}
            </Row>
            <ProgressText>
              <BlackText>{currentReadings}</BlackText>/{maxReadings}
            </ProgressText>
          </>
        )}
      </ProgressCircle>
      <Title message={title} />
      <Subtitle message={description} />
    </Container>
  );
};

function getNormalizedBiomarker(
  biomarker: FullListBiomarker
): NormalizedBiomarker {
  switch (biomarker) {
    case "BloodPressure":
    case "blood_pressure":
    case "blood pressure":
    case "blood_pressure_measurement":
      return "blood pressure";
    case "Glucose":
    case "fasting blood glucose":
    case "post-meal glucose":
    case "pre-meal glucose":
    case "glucose_measurement":
    case "glucose":
      return "glucose";
    case "Ketones":
    case "ketone":
    case "Ketone-Measure":
    case "ketone_measurement":
      return "ketone";
    case "Symptoms":
    case "symptoms":
    case "symptom":
      return "symptom";
    case "Weight":
    case "weight":
    case "weight_measurement":
      return "weight";
    default:
      return "";
  }
}

function getIcon(biomarker: FullListBiomarker, theme: DefaultTheme) {
  switch (getNormalizedBiomarker(biomarker)) {
    case "blood pressure":
      return (
        <BloodPressureIcon
          color={theme.bloodPressureSolidColor}
          secondColor={theme.bloodPressureLightColor}
        />
      );
    case "glucose":
      return (
        <GlucoseIcon
          color={theme.glucoseSolidColor}
          secondColor={theme.glucoseLightColor}
        />
      );
    case "ketone":
      return (
        <KetonesIcon
          color={theme.ketonesSolidColor}
          secondColor={theme.ketonesLightColor}
        />
      );
    case "symptom":
      return (
        <SymptomsIcon
          color={theme.symptomsSolidColor}
          secondColor={theme.symptomsLightColor}
        />
      );
    case "weight":
      return (
        <WeightIcon
          color={theme.weightSolidColor}
          secondColor={theme.weightLightColor}
        />
      );
    default:
      return null;
  }
}
function getIconPadding(biomarker: FullListBiomarker, theme: DefaultTheme) {
  switch (getNormalizedBiomarker(biomarker)) {
    case "blood pressure":
      return 0;
    case "glucose":
      return theme.biotrackerIconSpacingMedium;
    case "ketone":
      return theme.biotrackerIconSpacingMedium;
    case "symptom":
      return theme.biotrackerIconSpacingSmall;
    case "weight":
      return 0;
    default:
      return 0;
  }
}

function getTitle(biomarker: FullListBiomarker): MessageDescriptor {
  switch (getNormalizedBiomarker(biomarker)) {
    case "blood pressure":
      return messages.bloodPressure;
    case "glucose":
      return messages.glucose;
    case "ketone":
      return messages.ketones;
    case "symptom":
      return messages.symptoms;
    case "weight":
      return messages.weight;
    default:
      return messages.emptyString;
  }
}

function getColor(biomarker: FullListBiomarker, theme: DefaultTheme) {
  switch (getNormalizedBiomarker(biomarker)) {
    case "blood pressure":
      return theme.bloodPressureSolidColor;
    case "glucose":
      return theme.glucoseSolidColor;
    case "ketone":
      return theme.ketonesSolidColor;
    case "symptom":
      return theme.symptomsSolidColor;
    case "weight":
      return theme.weightSolidColor;
    default:
      return "";
  }
}
