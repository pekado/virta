import * as React from "react";
import { FlexStyle, View, ViewProps } from "react-native";
import styled from "../../styled-components";
import { Heading4 } from "../../Text";
import { FhirQuestionItemInput } from "../FhirQuestionItemInput";
import { findResponse, setSubItemResponse } from "../utils";

const QuestionItemHeading = styled(Heading4)`
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.questionItemHeadingBorderColor};
  line-height: 28px;
  margin-bottom: 32px;
  font-weight: 600;
`;

type QuestionnaireItemContainerProps = Pick<
  FlexStyle,
  "alignItems" | "justifyContent" | "flexDirection"
>;

const QuestionnaireItemContainer = styled.View<QuestionnaireItemContainerProps>`
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  flex-wrap: wrap;
`;

// The top-level item on the questionnaire
export interface FhirQuestionItemProps {
  onLayout?: ViewProps["onLayout"];
  questionItem: fhir.QuestionnaireItem;
  setQuestionnaireResponseItem: (item: fhir.QuestionnaireResponseItem) => void;
  questionnaireResponseItem?: fhir.QuestionnaireResponseItem;
  contained?: fhir.Resource[];
  style?: QuestionnaireItemContainerProps;
}

const QuestionItem: React.FC<FhirQuestionItemProps> = ({
  questionItem,
  setQuestionnaireResponseItem,
  questionnaireResponseItem,
  contained,
  onLayout,
}) => {
  return (
    <QuestionnaireItemContainer onLayout={onLayout}>
      <FhirQuestionItemInput
        key={questionItem.linkId}
        itemData={questionItem}
        setQuestionnaireResponseItem={setQuestionnaireResponseItem}
        questionnaireResponseItem={questionnaireResponseItem}
        contained={contained}
      />
      {/* If there are child items, create input fields for those too */}
      {questionItem.item &&
        questionItem.item.map((item) => (
          <FhirQuestionItemInput
            key={item.linkId}
            itemData={item}
            setQuestionnaireResponseItem={(item) =>
              setSubItemResponse(
                item,
                // @ts-ignore this is optional for this component but required for the function
                questionnaireResponseItem,
                setQuestionnaireResponseItem
              )
            }
            questionnaireResponseItem={item}
            contained={contained}
          />
        ))}
    </QuestionnaireItemContainer>
  );
};

const GroupItem: React.FC<FhirQuestionItemProps> = ({
  questionItem,
  setQuestionnaireResponseItem,
  questionnaireResponseItem,
  contained,
  onLayout,
  style,
}) => {
  const itemCode =
    questionItem.code && questionItem.code[0] && questionItem.code[0].code;
  const itemDisplayName =
    questionItem.code &&
    ((questionItem.code[0] && questionItem.code[0].display) ||
      questionItem.text);
  const itemLinkId = questionItem.linkId;
  const itemArray = questionItem.item!;

  React.useEffect(() => {
    if (
      !(
        questionnaireResponseItem &&
        questionnaireResponseItem.linkId === itemLinkId
      )
    ) {
      setQuestionnaireResponseItem({
        linkId: itemLinkId,
        item: [],
      });
    }
  }, [questionnaireResponseItem]);

  return (
    <View onLayout={onLayout}>
      <QuestionItemHeading key={itemCode || itemLinkId}>
        {itemDisplayName}
      </QuestionItemHeading>
      <QuestionnaireItemContainer
        flexDirection={style?.flexDirection}
        alignItems={style?.alignItems}
        justifyContent={style?.justifyContent}
      >
        {itemArray.map((item) => {
          if (item.type === "group") {
            return item.item!.map((nestedItem) => (
              <FhirQuestionItemInput
                key={nestedItem.linkId}
                itemData={nestedItem}
                setQuestionnaireResponseItem={(item) =>
                  setSubItemResponse(
                    item,
                    // @ts-ignore this is optional for this component but required for the function
                    questionnaireResponseItem,
                    setQuestionnaireResponseItem
                  )
                }
                questionnaireResponseItem={findResponse(
                  nestedItem.linkId,
                  questionnaireResponseItem && questionnaireResponseItem.item
                )}
                contained={contained}
              />
            ));
          }
          return (
            <FhirQuestionItemInput
              key={item.linkId}
              itemData={item}
              setQuestionnaireResponseItem={(item) =>
                setSubItemResponse(
                  item,
                  // @ts-ignore this is optional for this component but required for the function
                  questionnaireResponseItem,
                  setQuestionnaireResponseItem
                )
              }
              questionnaireResponseItem={findResponse(
                item.linkId,
                questionnaireResponseItem && questionnaireResponseItem.item
              )}
              contained={contained}
            />
          );
        })}
      </QuestionnaireItemContainer>
    </View>
  );
};

export const FhirQuestionItem: React.FC<FhirQuestionItemProps> = ({
  questionItem,
  setQuestionnaireResponseItem,
  questionnaireResponseItem,
  contained,
  onLayout,
  style,
}) => {
  if (questionItem.type === "group") {
    return (
      <GroupItem
        questionItem={questionItem}
        setQuestionnaireResponseItem={setQuestionnaireResponseItem}
        questionnaireResponseItem={questionnaireResponseItem}
        contained={contained}
        style={style}
      />
    );
  }

  return (
    <QuestionItem
      onLayout={onLayout}
      questionItem={questionItem}
      setQuestionnaireResponseItem={setQuestionnaireResponseItem}
      questionnaireResponseItem={questionnaireResponseItem}
      contained={contained}
      style={style}
    />
  );
};
