import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { styled } from "@virtahealth/components";
import { CommunityComment } from "../../../types";
import { User } from "../User";
import { useCommunityContext } from "../../CommunityContext";
import { selectAuthorById } from "../../CommunityContext/selectors";
import { PostBody } from "../PostPreview/PostBody";
import { CommentInteraction } from "./CommentInteraction";

interface Props {
  comment: CommunityComment | null;
  hasLimitedInteractionAndInfo?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Container = styled.View`
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  background-color: ${({ theme }) => theme.semiTransparentBrightContainer};
`;

export const Comment: React.FC<Props> = ({
  comment,
  hasLimitedInteractionAndInfo,
  style,
}) => {
  const { communityState } = useCommunityContext();

  if (!comment) {
    return null;
  }

  // in profile view we dont show interaction buttons or some user info
  return (
    <Container style={style}>
      <User
        user={selectAuthorById(comment.author, communityState)}
        createdAt={new Date(comment.created_at)}
        hasLimitedInteractionAndInfo={hasLimitedInteractionAndInfo}
        onDelete={() => {
          /* TODO */
        }}
        onEdit={() => {
          /* TODO */
        }}
        onReport={() => {
          /* TODO */
        }}
      />

      <PostBody content={comment.body} media={comment.media} />

      {!hasLimitedInteractionAndInfo && (
        <CommentInteraction comment={comment} />
      )}
    </Container>
  );
};
