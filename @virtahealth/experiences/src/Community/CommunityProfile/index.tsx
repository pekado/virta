import {
  Body,
  Button,
  styled,
  PencilIcon,
  BellIcon,
  ThemeContext,
  Interpose,
  Spacer,
} from "@virtahealth/components";
import * as React from "react";
import { View } from "react-native";
import { Container, CircleView, StyledImage } from "../CommunityShared";
import { CommunityComment, CommunityPost, CommunityUser } from "../types";
import { Comment } from "../MainCommunity/Feed/Comment";
import { PostPreview } from "../MainCommunity/Feed/PostPreview";
import { ExpandedPost } from "../MainCommunity/Feed/ExpandedPost";
import { useCommunityContext } from "../MainCommunity/CommunityContext";
import {
  selectCommentsByAuthorId,
  selectPostsByAuthorId,
} from "../MainCommunity/CommunityContext/selectors";

interface Props {
  authToken: string;
  onClickProfileSettings: () => void;
  onClickNotificationSettings: () => void;
  user: CommunityUser;
}

const CenterView = styled.View`
  align-items: center;
`;

const StyledCircleView = styled(CircleView)`
  margin-bottom: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-right: ${({ theme }) => theme.standardSpacingMedium / 2}px;
  margin-left: ${({ theme }) => theme.standardSpacingMedium / 2}px;
`;

const StyledBody = styled(Body)`
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-bottom: ${({ theme }) => theme.standardSpacingMedium}px;
  color: ${({ theme }) => theme.textCommunityColorSecondary};
`;

const StyledName = styled(Body)`
  color: ${({ theme }) => theme.textCommunityColorPrimary};
`;

const BackgroundSpacer = styled(Spacer)`
  z-index: -999;
  border-bottom: solid;
  border-bottom-width: ${({ theme }) => theme.dividerDefaultThickness}px;
  border-bottom-color: ${({ theme }) => theme.dividerColor};
`;

const editProfileDescriptor = {
  id: "communityProfileEditProfile",
  defaultMessage: "Edit Photo & Name",
  description: "Button text for editing name and photo for community profile",
};

const editNotificationsDescriptor = {
  id: "communityProfileEditNotifications",
  defaultMessage: "Notification Settings",
  description:
    "Button text for editing notification settings for community profile",
};

const guidelinesDescriptor = {
  id: "communityProfileReviewGuidelines",
  defaultMessage: "Review Community Guidelines",
  description: "Link to review community guidelines on the user profile",
};

const myActivityDescriptor = {
  id: "communityProfileMyActivity",
  defaultMessage: "My Activity",
  description: "Title for My Activity section of community user profile",
};

export const CommunityProfile: React.FC<Props> = ({
  authToken,
  onClickProfileSettings,
  onClickNotificationSettings,
  user,
}) => {
  const theme = React.useContext(ThemeContext);
  const [expandedPosts, setExpandedPosts] = React.useState<any[]>([]);
  const { communityState } = useCommunityContext();

  const posts = React.useMemo(
    () => selectPostsByAuthorId(user.id, communityState),
    [communityState]
  );
  const comments = React.useMemo(
    () => selectCommentsByAuthorId(user.id, communityState),
    [communityState]
  );

  const postsAndCommentComponents = React.useMemo(
    () => getPostsComments(comments, posts, expandedPosts, setExpandedPosts),
    [comments, posts, expandedPosts, setExpandedPosts]
  );

  return (
    <Container>
      <CenterView>
        <StyledCircleView>
          <StyledImage
            source={{
              uri: user.profile_picture_url,
              headers: {
                Authorization: authToken,
              },
            }}
          />
        </StyledCircleView>

        <StyledName>{user.display_name}</StyledName>

        <Row>
          <StyledButton
            onPress={onClickProfileSettings}
            labelMessage={editProfileDescriptor}
            intent="none"
            labelStyle={{
              color: theme.textCommunityColorPrimary,
            }}
            appearance="outline"
            size="medium"
            iconBefore={
              <PencilIcon color={theme.textCommunityColorSecondary} />
            }
          />
          <StyledButton
            onPress={onClickNotificationSettings}
            labelMessage={editNotificationsDescriptor}
            intent="none"
            labelStyle={{
              color: theme.textCommunityColorPrimary,
            }}
            appearance="outline"
            size="medium"
            iconBefore={<BellIcon color={theme.textCommunityColorSecondary} />}
          />
        </Row>

        <Button
          labelMessage={guidelinesDescriptor}
          intent="secondary"
          appearance="link"
          size="medium"
          labelStyle={{
            fontWeight: theme.textCommunityThinFontWeight,
          }}
        />
      </CenterView>

      <StyledBody message={myActivityDescriptor} />

      <Interpose
        with={<BackgroundSpacer height={theme.standardSpacingMedium} />}
        flexDirection="column"
      >
        {postsAndCommentComponents}
      </Interpose>
    </Container>
  );
};

/**
 * helper function to get the React Node version of all posts/comments in date-sorted order (most recent first
 * @param props the component props containing comment and post arrays
 * @param expandedPosts the state prop designating which posts are expanded
 * @param setExpandedPosts the set state action to re-render when expandedPosts changes
 */
const getPostsComments = (
  comments: Array<CommunityComment> | null,
  posts: Array<CommunityPost> | null,
  expandedPosts: Array<string>,
  setExpandedPosts: React.Dispatch<React.SetStateAction<string[]>>
) => {
  const presortList = new Array<{ node: React.ReactNode; date: Date }>();

  if (comments) {
    // go through all comments and make an object for each with the React Node and date
    for (const comment of comments) {
      presortList.push({
        node: <Comment comment={comment} hasLimitedInteractionAndInfo={true} />,
        date: new Date(comment.created_at),
      });
    }
  }
  // go through all posts and make an object for each with the React Node and date
  for (const index in posts) {
    const post = posts[index as keyof typeof posts] as CommunityPost;
    let node;
    // if we've expanded this post previously, show the expanded version
    if (expandedPosts.includes(index)) {
      node = (
        <ExpandedPost
          post={post}
          hasLimitedInteractionAndInfo={true}
          onCondense={() => {
            // make a copy of the array so we can re-render properly
            const arrayCopy = expandedPosts.slice();
            // remove this post's index from our expandedPosts list
            arrayCopy.splice(arrayCopy.indexOf(index), 1);
            // tell the state to rerender
            setExpandedPosts(arrayCopy);
          }}
        />
      );
    }
    // not expanded yet
    else {
      node = (
        <PostPreview
          post={post}
          hasLimitedInteractionAndInfo={true}
          onExpand={() => {
            // make a copy of the array so we can re-render properly
            const arrayCopy = expandedPosts.slice();
            // add this post's index to our expandedPosts list
            arrayCopy.push(index);
            // tell the state to rerender
            setExpandedPosts(arrayCopy);
          }}
        />
      );
    }
    presortList.push({
      node,
      date: new Date(post.created_at),
    });
  }
  // sort the list of objects based on their dates, most recent date is now first in array
  presortList.sort((item1, item2) => (item1.date < item2.date ? 1 : -1));
  // now extract all React Nodes in the date-sorted list
  return presortList.map((item, index) => {
    // we need to wrap each one with decending z-index so that the more menus cascade correctly
    return (
      <View key={index} style={{ zIndex: 99999 - index }}>
        {" "}
        {item.node}{" "}
      </View>
    );
  });
};
