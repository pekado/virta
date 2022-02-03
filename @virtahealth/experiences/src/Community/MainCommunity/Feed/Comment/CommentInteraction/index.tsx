import * as React from "react";
import {
  Button,
  HeartOutlineIcon,
  styled,
  ThemeContext,
} from "@virtahealth/components";
import { CommunityComment } from "../../../../types";
import { useUserContext } from "../../../../UserContext";

interface Props {
  comment: CommunityComment;
}

const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  padding-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  padding-left: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const StyledButton = styled(Button)`
  padding-right: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

export const CommentInteraction: React.FC<Props> = ({ comment }) => {
  const theme = React.useContext(ThemeContext);
  const currentUser = useUserContext();

  return (
    <Container>
      {comment.like_count ? (
        <StyledButton
          labelMessage={{
            id: "comment.interactions.likeCount",
            defaultMessage: `${comment.like_count}`,
          }}
          labelStyle={{
            fontWeight: theme.textCommunityThinFontWeight,
          }}
          intent="secondary"
          appearance="link"
          size="small"
          iconBefore={
            <HeartOutlineIcon color={theme.communityInteractionIconColor} />
          }
        />
      ) : null}
      {currentUser.id != comment.author ? (
        <Button
          labelMessage={
            comment.liked
              ? {
                  id: "comment.interactions.unlikeAction",
                  defaultMessage: "Unlike",
                }
              : {
                  id: "comment.interactions.likeAction",
                  defaultMessage: "Like",
                }
          }
          labelStyle={{
            textDecorationLine: "underline",
          }}
          intent="secondary"
          appearance="link"
          size="small"
        />
      ) : null}
    </Container>
  );
};
