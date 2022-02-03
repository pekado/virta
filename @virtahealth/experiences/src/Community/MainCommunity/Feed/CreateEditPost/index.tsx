import * as React from "react";
import {
  Button,
  CameraIcon,
  Form,
  InputField,
  BodySmall,
  SubmitButton,
  styled,
  ThemeContext,
} from "@virtahealth/components";
import { CommunityTopicByCategoryId } from "../../../types";
import { TopicsPicker } from "./TopicsPicker";

interface Props {
  topics: CommunityTopicByCategoryId;
  handleSubmit: (values: { postText: string; postTopic: string }) => void;
}

const Container = styled.View`
  flex-direction: column;
  padding: ${({ theme }) => theme.standardSpacingSmall}px;
  padding-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  background-color: ${({ theme }) => theme.communityBackgroundWhite};
`;

const ButtonsContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  padding-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const StyledBodySmall = styled(BodySmall)`
  color: ${({ theme }) => theme.textCommunityColorSecondary};
  font-weight: ${({ theme }) => theme.textCommunityThinFontWeight};
  margin-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  margin-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  font-size: ${({ theme }) => theme.textBodySpacedFontSize}px;
`;

export const CreateEditPost: React.FC<Props> = ({ topics, handleSubmit }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Container>
      <Form
        initialValues={{ postText: "", postTopic: "" }}
        onSubmit={handleSubmit}
      >
        <InputField
          multiline
          numberOfLines={3}
          name="postText"
          placeholderMessage={{
            id: "postPlaceholder",
            defaultMessage: "Share your thoughts",
          }}
        />

        <StyledBodySmall
          message={{
            id: "topicsPickerDescription",
            defaultMessage: "Post this under",
          }}
        />

        <TopicsPicker name="postTopic" topics={topics} />

        <ButtonsContainer>
          <Button
            labelMessage={{
              id: "createEditPost.action.addImage",
              defaultMessage: "Add Image",
            }}
            labelStyle={{
              fontSize: theme.textBodySpacedFontSize,
              color: theme.textCommunityColorPrimary,
              fontWeight: theme.textCommunityThinFontWeight,
            }}
            intent="secondary"
            appearance="link"
            size="small"
            iconBefore={<CameraIcon color="#45535E" width={28} height={22} />}
          />

          <SubmitButton
            labelMessage={{
              id: "createEditPost.action.submitPost",
              defaultMessage: `Add Post`,
            }}
            intent="primary"
            appearance="solid"
            size="medium"
          />
        </ButtonsContainer>
      </Form>
    </Container>
  );
};
