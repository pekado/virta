import * as React from "react";
import { ViewProps } from "react-native";
import { styled } from "@virtahealth/components";
import { CommunityPost } from "../../../types";
import { User } from "../User";
import { ExpandableProps } from "../../../CommunityShared";
import { useCommunityContext } from "../../CommunityContext";
import { selectAuthorById } from "../../CommunityContext/selectors";
import { PostBody } from "./PostBody";
import { PostInteraction } from "./PostInteraction";

interface Props extends Pick<ViewProps, "style">, ExpandableProps {
  post: CommunityPost;
  hasLimitedInteractionAndInfo?: boolean;
}

const Container = styled.View`
  flex-direction: column;
  margin-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  margin-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  background-color: ${({ theme }) => theme.communityBackgroundWhite};
`;

export const PostPreview: React.FC<Props> = ({
  post,
  hasLimitedInteractionAndInfo,
  style,
  ...expandableProps
}) => {
  const { communityState } = useCommunityContext();

  // in profile view we dont show interaction buttons or some user info
  return (
    <Container style={style}>
      <User
        user={selectAuthorById(post.author, communityState)}
        createdAt={new Date(post.created_at)}
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
        {...expandableProps}
      />

      <PostBody content={post.body} media={post.media} />

      {!hasLimitedInteractionAndInfo && <PostInteraction post={post} />}
    </Container>
  );
};
