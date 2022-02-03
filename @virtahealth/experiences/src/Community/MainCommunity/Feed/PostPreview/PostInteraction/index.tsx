import * as React from "react";
import {
  styled,
  Button,
  HeartIcon,
  HeartOutlineIcon,
  SpeechBubbleIcon,
  ThemeContext,
} from "@virtahealth/components";
import { CommunityPost } from "../../../../types";
import { useUserContext } from "../../../../UserContext";

interface Props {
  post: CommunityPost;
}

const ActionContainer = styled.View`
  justify-content: space-around;
  flex-direction: row;
  padding-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  padding-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  border-top-style: solid;
  border-top-width: ${({ theme }) => theme.dividerDefaultThickness}px;
  border-top-color: ${({ theme }) => theme.dividerColor};
  margin-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const OuterContainer = styled.View`
  flex-direction: column;
`;

const Row = styled.View`
  flex-direction: row;
`;

interface SpacedButtonProps {
  count: number;
}
const SpacedButton = styled(Button)<SpacedButtonProps>`
  ${({ theme, count }) =>
    count ? `margin-right: ${theme.standardSpacingSmall}px;` : ""}
`;

export const PostInteraction: React.FC<Props> = ({ post }) => {
  const theme = React.useContext(ThemeContext);
  const currentUser = useUserContext();

  return (
    <OuterContainer>
      <ActionContainer>
        <Row>
          <SpacedButton
            count={post.like_count}
            labelMessage={
              post.like_count
                ? {
                    id: "post.interactions.likeCount",
                    defaultMessage: `${post.like_count}`,
                  }
                : null
            }
            labelStyle={
              post.liked
                ? {
                    fontWeight: theme.textCommunityThinFontWeight,
                    fontSize: theme.textBodySpacedSmallFontSize,
                    color: theme.buttonPrimaryBackgroundColor,
                  }
                : {
                    fontWeight: theme.textCommunityThinFontWeight,
                    fontSize: theme.textBodySpacedSmallFontSize,
                  }
            }
            intent="secondary"
            appearance="link"
            size="small"
            iconBefore={
              post.liked ? (
                <HeartIcon color={theme.buttonPrimaryBackgroundColor} />
              ) : (
                <HeartOutlineIcon color={theme.communityInteractionIconColor} />
              )
            }
          />
          {currentUser.id != post.author ? (
            <Button
              labelMessage={
                post.liked
                  ? {
                      id: "post.interactions.unlikeAction",
                      defaultMessage: "Unlike",
                    }
                  : {
                      id: "post.interactions.likeAction",
                      defaultMessage: "Like",
                    }
              }
              intent="secondary"
              appearance="link"
              size="small"
              labelStyle={
                post.liked
                  ? {
                      color: theme.buttonPrimaryBackgroundColor,
                      fontSize: theme.textBodySpacedSmallFontSize,
                    }
                  : {
                      fontSize: theme.textBodySpacedSmallFontSize,
                    }
              }
            />
          ) : null}
        </Row>

        <Row>
          <SpacedButton
            count={post.comment_count}
            labelMessage={
              post.comment_count
                ? {
                    id: "post.interactions.comments",
                    defaultMessage: `${post.comment_count}`,
                  }
                : null
            }
            labelStyle={{
              fontSize: theme.textBodySpacedSmallFontSize,
            }}
            intent="secondary"
            appearance="link"
            size="small"
            iconBefore={
              <SpeechBubbleIcon color={theme.communityInteractionIconColor} />
            }
          />
          <Button
            labelMessage={{
              id: "post.interactions.commentAction",
              defaultMessage: `Comment`,
            }}
            labelStyle={{
              fontSize: theme.textBodySpacedSmallFontSize,
            }}
            intent="secondary"
            appearance="link"
            size="small"
          />
        </Row>
      </ActionContainer>
    </OuterContainer>
  );
};
