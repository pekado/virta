import * as React from "react";
import { FlatList, ViewProps } from "react-native";
import { styled } from "@virtahealth/components";
import { PostPreview } from "../PostPreview";
import { Comment } from "../Comment";
import { CommunityPost } from "../../../types";
import { CreateEditComment } from "../CreateEditComment";
import { ExpandableProps } from "../../../CommunityShared";
import { useCommunityContext } from "../../CommunityContext";
import { selectCommentById } from "../../CommunityContext/selectors";

interface Props
  extends Pick<ViewProps, "style">,
    Pick<ExpandableProps, "onCondense"> {
  post: CommunityPost;
  hasLimitedInteractionAndInfo?: boolean;
}

const Container = styled.View`
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

export const ExpandedPost: React.FC<Props> = ({
  post,
  style,
  hasLimitedInteractionAndInfo,
  onCondense,
}) => {
  const { communityState } = useCommunityContext();
  const comments = post.comments.map((cId) =>
    selectCommentById(cId, communityState)
  );

  return (
    <Container style={style}>
      <PostPreview
        post={post}
        onCondense={onCondense}
        hasLimitedInteractionAndInfo={hasLimitedInteractionAndInfo}
      />

      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment comment={item} />}
        keyExtractor={(item) => String(item?.id)}
      />

      <CreateEditComment />
    </Container>
  );
};
