import * as React from "react";
import {
  ImageSourcePropType,
  LayoutChangeEvent,
  Linking,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import {
  AnimatedHeight,
  BodySmall,
  FhirQuestionItem,
  FhirQuestionnaireUtils,
  Spinner,
  styled,
  VirtaAnalyticsClient,
  VirtaClient,
  withVirta,
} from "@virtahealth/components";
import {
  trackScreenerAnswerClicked,
  trackScreenerCompletionScreenViewed,
  trackScreenerFollowUpViewed,
} from "./analytics";
import { SCREENER_ITEM_MAX_WIDTH } from "./constants";
import {
  calculateQuestionnaireBodyHeightInPixels,
  deserializeQuestionnaire,
  getFlattenedQuestionnaireItemLinkIds,
  getLinkIdsForAvailableQuestionItems,
  getQuestionnaireTitle,
  groupQuestionnaireItemsBySection,
  serializeQuestionnaireResponse,
} from "./utils";
import { DoneView } from "./DoneView";
import { FollowUpView } from "./FollowUpView";
import { Header } from "./Header";

export interface BehavioralHealthScreenerProps {
  virtaId: string;
  patientActionId: string;
  fhirQuestionnaireId: string;
  imageMap: Record<string, ImageSourcePropType>;
  navigationFn?(url: string): void;
  dismissFn?: () => void;
  followUpActionsEnabled?: boolean;
}

interface InnerProps extends BehavioralHealthScreenerProps {
  analyticsClient?: VirtaAnalyticsClient;
  client?: VirtaClient;
}

export interface DimensionProps {
  height: number;
  width: number;
}

const defaultQuestionnaireResponse = {
  status: "in-progress",
  item: [],
};

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  margin-top: ${Platform.OS === "web" ? 0 : 25}px;
`;

const SpinnerContainer = styled.View<Pick<DimensionProps, "height">>`
  height: ${({ height }) =>
    calculateQuestionnaireBodyHeightInPixels(height, Platform.OS)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledScrollView = styled.ScrollView<DimensionProps>`
  display: flex;
  height: ${({ height: screenHeight }) =>
    calculateQuestionnaireBodyHeightInPixels(screenHeight, Platform.OS)}px;
  width: 90%;
  padding: 10px;
`;

const QuestionnaireContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;

interface MarginProps {
  marginTop: number;
  marginBottom: number;
}
const QuestionItemWrapper = styled.View<
  Pick<DimensionProps, "width"> & MarginProps
>`
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  width: ${({ width }) => Math.min(0.8 * width, SCREENER_ITEM_MAX_WIDTH)}px;
  max-width: ${SCREENER_ITEM_MAX_WIDTH}px;
`;

export interface FollowUpActivity {
  actionTitle: string;
  activityTitle: string;
  activityUrl: string;
  description?: string;
}

export const InnerBehavioralHealthScreener: React.FC<InnerProps> = ({
  client,
  analyticsClient,
  fhirQuestionnaireId,
  virtaId,
  imageMap,
  patientActionId,
  navigationFn,
  dismissFn = () => Linking.openURL("/"),
  followUpActionsEnabled = false,
}) => {
  const [questionnaire, setQuestionnaire] =
    React.useState<fhir.Questionnaire>();
  const [questionnaireResponse, setQuestionnaireResponse] =
    React.useState<any>();
  const [isQuestionnaireComplete, setIsQuestionnaireComplete] =
    React.useState<boolean>(false);
  const [followUpActivity, setFollowUpActivity] =
    React.useState<FollowUpActivity>();
  const [showFollowUpView, setShowFollowUpView] =
    React.useState<boolean>(false);
  const scrollViewRef = React.useRef() as React.RefObject<ScrollView>;
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();
  const [isLoading, setIsLoading] = React.useState(true);
  const analyticsBaseProperties = {
    analyticsClient: analyticsClient!,
    patientActionId,
  };
  React.useEffect(() => {
    const abortController = new AbortController();
    const fetchQuestionnaire = async () => {
      const questionnairesUrl = `/api/v1/screeners/${fhirQuestionnaireId}?patientActionId=${patientActionId}`;
      try {
        const fetchedQuestionnaire = (await client!.get(
          questionnairesUrl
        )) as fhir.Questionnaire;
        setQuestionnaire(deserializeQuestionnaire(fetchedQuestionnaire));
      } catch (e) {
        dismissFn();
      }
    };
    if (!questionnaire) {
      fetchQuestionnaire();
      setIsLoading(false);
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }

    return () => {
      abortController.abort();
    };
  }, []);

  const initializedQuestionnaireResponse = questionnaireResponse
    ? questionnaireResponse
    : defaultQuestionnaireResponse;

  const flattenedQuestionItems =
    questionnaire && questionnaire.item
      ? getFlattenedQuestionnaireItemLinkIds(questionnaire)
      : [];
  const availableLinkIds =
    questionnaire && questionnaire.item
      ? getLinkIdsForAvailableQuestionItems(
          flattenedQuestionItems,
          initializedQuestionnaireResponse
        )
      : [];

  const questionnaireSections = groupQuestionnaireItemsBySection(
    questionnaire?.item,
    availableLinkIds
  );
  const title = getQuestionnaireTitle(questionnaire);

  const handlePostScreenerStep = () => {
    if (followUpActionsEnabled) {
      setShowFollowUpView(true);
      trackScreenerFollowUpViewed({
        ...analyticsBaseProperties,
        skillName: followUpActivity?.actionTitle || "",
      });
    } else {
      dismissFn();
    }
  };

  React.useEffect(() => {
    if (
      initializedQuestionnaireResponse.item &&
      initializedQuestionnaireResponse.item.length > 0 &&
      initializedQuestionnaireResponse.item.length ===
        flattenedQuestionItems.length &&
      !isQuestionnaireComplete
    ) {
      const saveQuestionnaireResponse = async () => {
        setIsLoading(true);
        const questionnaireResponseUrl = `/api/v1/screeners/${fhirQuestionnaireId}/response?patientActionId=${patientActionId}`;
        const questionnaireResponseData = serializeQuestionnaireResponse(
          initializedQuestionnaireResponse,
          questionnaire!,
          virtaId
        );
        const followUpActivityResponse = (await client!.post(
          questionnaireResponseUrl,
          questionnaireResponseData
        )) as FollowUpActivity;
        setFollowUpActivity(followUpActivityResponse);
      };

      // setting isQuestionnaireComplete will cause the Done view to render
      setTimeout(() => {
        setIsQuestionnaireComplete(true);
        trackScreenerCompletionScreenViewed({
          analyticsClient: analyticsClient!,
          patientActionId,
        });
        saveQuestionnaireResponse();
        setIsLoading(false);
      }, 400);

      // show the Done view for 4 seconds and then move to the next step
      // show the FollowUp screen if enabled, otherwise dismiss the screener modal & return to the Today screen
      setTimeout(handlePostScreenerStep, 4000);
    }
  }, [
    isQuestionnaireComplete,
    initializedQuestionnaireResponse,
    flattenedQuestionItems,
    setShowFollowUpView,
  ]);

  const renderInstructionsText = (text: string) => (
    <QuestionItemWrapper
      onStartShouldSetResponder={() => true}
      width={screenWidth}
      marginTop={20}
      marginBottom={0}
    >
      <BodySmall>{text}</BodySmall>
    </QuestionItemWrapper>
  );

  const renderQuestionnaireSections = () => {
    if (!questionnaireSections || questionnaireSections.length === 0) {
      return null;
    }
    return questionnaireSections.map((section, index) => (
      <React.Fragment key={index + section.title}>
        {renderInstructionsText(section.title)}
        {section.data.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <Question
            analyticsClient={analyticsClient!}
            completionCallback={() => {
              scrollViewRef.current?.scrollToEnd();
            }}
            patientActionId={patientActionId}
            questionnaire={questionnaire as fhir.Questionnaire}
            questionItem={item}
            initializedQuestionnaireResponse={initializedQuestionnaireResponse}
            setQuestionnaireResponse={setQuestionnaireResponse}
          />
        ))}
      </React.Fragment>
    ));
  };

  const bodyHeight = calculateQuestionnaireBodyHeightInPixels(
    screenHeight,
    Platform.OS
  );

  return (
    <Wrapper>
      {isLoading ? (
        <SpinnerContainer height={screenHeight}>
          <Spinner size="large" />
        </SpinnerContainer>
      ) : showFollowUpView && followUpActivity ? (
        <FollowUpView
          analyticsClient={analyticsClient!}
          dismissFn={dismissFn}
          followUpActivity={followUpActivity}
          height={screenHeight}
          imageMap={imageMap}
          navigationFn={navigationFn}
          patientActionId={patientActionId}
          width={screenWidth}
        />
      ) : (
        <>
          <Header
            title={title}
            total={flattenedQuestionItems.length}
            current={initializedQuestionnaireResponse.item.length}
            height={screenHeight}
            width={screenWidth}
          />
          {isQuestionnaireComplete ? (
            <DoneView height={bodyHeight} width={screenWidth} />
          ) : (
            <StyledScrollView
              height={screenHeight}
              width={screenWidth}
              contentContainerStyle={{
                alignItems: "center",
                flexDirection: "column-reverse",
                paddingBottom: 72,
              }}
              ref={scrollViewRef}
            >
              {/* On mobile, ScrollViews only work in a Modal with swipe actions with this wrapper view. */}
              <QuestionnaireContainer onStartShouldSetResponder={() => true}>
                {renderQuestionnaireSections()}
              </QuestionnaireContainer>
            </StyledScrollView>
          )}
        </>
      )}
    </Wrapper>
  );
};

const DEFAULT_MAX_HEIGHT = 330;

const Question: React.FC<{
  analyticsClient: VirtaAnalyticsClient;
  completionCallback: () => void;
  initializedQuestionnaireResponse: fhir.QuestionnaireResponseItem;
  patientActionId: string;
  questionnaire: fhir.Questionnaire;
  questionItem: fhir.QuestionnaireItem;
  setQuestionnaireResponse: (item: fhir.QuestionnaireResponseItem) => void;
}> = ({
  analyticsClient,
  completionCallback,
  initializedQuestionnaireResponse,
  patientActionId,
  questionnaire,
  questionItem,
  setQuestionnaireResponse,
}) => {
  const { width: screenWidth } = useWindowDimensions();
  const [maxHeight, setMaxHeight] = React.useState(DEFAULT_MAX_HEIGHT);

  const setResponseItem = (item: fhir.QuestionnaireResponseItem) => {
    FhirQuestionnaireUtils.setSubItemResponse(
      item,
      initializedQuestionnaireResponse,
      setQuestionnaireResponse
    );
    trackScreenerAnswerClicked({
      analyticsClient,
      patientActionId,
      questionDisplay: questionItem.text || "",
      answerDisplay:
        item.answer && item.answer.length
          ? item.answer[0].valueCoding!.display!
          : "",
    });
  };
  return (
    <QuestionItemWrapper
      width={screenWidth}
      marginTop={20}
      marginBottom={20}
      key={questionItem.linkId}
      onStartShouldSetResponder={() => true}
    >
      <AnimatedHeight
        minHeight={275}
        maxHeight={maxHeight}
        completionCallback={completionCallback}
      >
        <FhirQuestionItem
          onLayout={(event: LayoutChangeEvent) =>
            setMaxHeight(
              event.nativeEvent?.layout?.height || DEFAULT_MAX_HEIGHT
            )
          }
          questionItem={questionItem}
          setQuestionnaireResponseItem={(item) => setResponseItem(item)}
          questionnaireResponseItem={FhirQuestionnaireUtils.findResponse(
            questionItem.linkId,
            initializedQuestionnaireResponse.item
          )}
          contained={questionnaire!.contained}
        />
      </AnimatedHeight>
    </QuestionItemWrapper>
  );
};

export const BehavioralHealthScreener =
  withVirta<BehavioralHealthScreenerProps>(InnerBehavioralHealthScreener);
