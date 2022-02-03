import * as React from "react";
import { Animated, Linking, Platform, View } from "react-native";
import {
  BodySmall,
  Button,
  Heading2,
  styled,
  VirtaAnalyticsClient,
} from "@virtahealth/components";
import {
  trackScreenerFollowUpDismissButtonClicked,
  trackScreenerFollowUpLearnButtonClicked,
} from "../analytics";
import {
  DimensionProps,
  FollowUpActivity,
  BehavioralHealthScreenerProps,
} from "../index";
import {
  calculateFollowUpViewBodyHeightInPixels,
  calculateImageDimensionsInPixels,
} from "../utils";

interface FollowUpProps
  extends Pick<
    BehavioralHealthScreenerProps,
    "imageMap" | "navigationFn" | "dismissFn" | "patientActionId"
  > {
  analyticsClient: VirtaAnalyticsClient;
  followUpActivity: FollowUpActivity;
}

type Props = FollowUpProps & DimensionProps;

const FollowUp = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FollowUpHeading = styled(Heading2)`
  margin-bottom: 10px;
`;
const FollowUpImage = styled.Image<DimensionProps>`
  border-radius: 20px;
  overflow: hidden;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;
const ImageWrapper = styled.View`
  margin: 20px 0;
  align-self: center;
`;
const FollowUpFooter = styled.View`
  border-top-width: 2px;
  border-top-color: #e6e8eb;
  width: 100%;
  background-color: white;
`;
const FooterButtons = styled.View`
  display: flex;
  justify-content: space-around;
  padding: 0 5%;
`;
const ButtonViewActivity = styled(Button)`
  margin: 10px 0 5px 0;
`;
const ButtonDismiss = styled(Button)`
  margin: 5px 0 10px 0;
`;
const FollowUpBody = styled.ScrollView<DimensionProps>`
  flex: 1;
  width: 100%;
  display: flex;
  padding: 0 5%;
  height: ${({ height }) =>
    calculateFollowUpViewBodyHeightInPixels(height, Platform.OS)}px;
`;
const BodyText = styled(BodySmall)`
  line-height: 24px;
`;

const virtalifeResourceLink = "/resources/3716";

export const FollowUpView: React.FC<Props> = ({
  analyticsClient,
  dismissFn = () => Linking.openURL("/"),
  followUpActivity,
  height: screenHeight,
  imageMap,
  navigationFn,
  patientActionId,
  width: screenWidth,
}) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const analyticsProperties = {
    analyticsClient,
    patientActionId,
    skillName: followUpActivity.actionTitle,
  };

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const imageSource =
    imageMap[followUpActivity.activityTitle] || imageMap["placeholder"];
  const { height, width } = calculateImageDimensionsInPixels({
    screenHeight,
    screenWidth,
  });
  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        height: calculateFollowUpViewBodyHeightInPixels(
          screenHeight,
          Platform.OS
        ),
        width: "100%",
      }}
    >
      <FollowUp>
        <FollowUpBody
          height={screenHeight}
          width={screenWidth}
          contentContainerStyle={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <View onStartShouldSetResponder={() => true}>
            {imageSource && (
              <ImageWrapper>
                <FollowUpImage
                  source={imageSource}
                  resizeMode="contain"
                  height={height}
                  width={width}
                />
              </ImageWrapper>
            )}
            <FollowUpHeading>Learn About VirtaLife (5 min)</FollowUpHeading>
            <BodyText>
              We know challenges can arise that disrupt your routine, which is
              why self-reflection is important. Learning skills in VirtaLife can
              support your long-term success by helping you navigate these
              challenges. Click below to review an intro to VirtaLife and check
              your Action List for your new VirtaLife skill.
            </BodyText>
          </View>
        </FollowUpBody>
      </FollowUp>
      <FollowUpFooter>
        <FooterButtons>
          <ButtonViewActivity
            labelMessage={{
              id: `behavioralHealthScreener.labelMessage.openLearnAboutVirtaLifeActivity`,
              description: `Opens the activity: Learn About VirtaLife`,
              defaultMessage: `Learn about VirtaLife`,
            }}
            intent="secondary"
            appearance="solid"
            onPress={() => {
              trackScreenerFollowUpLearnButtonClicked({
                ...analyticsProperties,
              });
              navigationFn
                ? navigationFn(virtalifeResourceLink)
                : Linking.openURL(virtalifeResourceLink);
            }}
          />
          <ButtonDismiss
            labelMessage={{
              id: "behavioralHealthScreener.labelMessage.dismissActivity",
              description: "Dismisses the activity",
              defaultMessage: "Not right now",
            }}
            intent="secondary"
            appearance="outline"
            onPress={() => {
              trackScreenerFollowUpDismissButtonClicked({
                ...analyticsProperties,
              });
              dismissFn();
            }}
          />
        </FooterButtons>
      </FollowUpFooter>
    </Animated.View>
  );
};
