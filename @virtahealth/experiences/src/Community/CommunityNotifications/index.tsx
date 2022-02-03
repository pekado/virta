import { Body, styled, Button, ToggleList } from "@virtahealth/components";
import * as React from "react";
import { useIntl } from "react-intl";
import { Container, saveDescriptor } from "../CommunityShared";

interface Props extends NotificationProps {
  onSave: (props: NotificationProps) => undefined;
}

export interface NotificationProps {
  likesEnabled: boolean;
  commentsEnabled: boolean;
  newPostEnabled: boolean;
  actionListRemindersEnabled: boolean;
}

const StyledBody = styled(Body)`
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-bottom: ${({ theme }) => theme.standardSpacingSmall}px;
  color: ${({ theme }) => theme.textCommunityColorPrimary};
`;

const StyledToggleList = styled(ToggleList)`
  margin-bottom: ${({ theme }) => theme.standardSpacingLarge}px;
`;

const communityNotificationsDescriptor = {
  id: "communityNotificationSettingsLabel",
  defaultMessage: "Send the following community notifications",
  description: "Label for various community notification toggles",
};

const actionListNotificationsDescriptor = {
  id: "communityActionListSettingsLabel",
  defaultMessage: "Send the following action list notifications",
  description: "Label for various action list notification toggles",
};

const actionListReminderDescriptor = {
  id: "communityActionListReminderNotificationSetting",
  defaultMessage: "Reminders to complete my action list",
  description: "Setting toggle for notification reminders on action list",
};

const newPostDescriptor = {
  id: "communityNewPostNotificationSetting",
  defaultMessage: "New post in my peer group",
  description: "Setting toggle for new post notifications",
};

const commentDescriptor = {
  id: "communityCommentsNotificationSetting",
  defaultMessage: "Comments on my post",
  description: "Setting toggle for comment notifications",
};

const likeDescriptor = {
  id: "communityLikesNotificationSetting",
  defaultMessage: "Likes on my posts and comments",
  description: "Setting toggle for like notifications",
};

export const CommunityNotifications: React.FC<Props> = (props) => {
  const intl = useIntl();

  // keep track of the notification settings here, then pass them all to our parent on save
  const [likes, setLikes] = React.useState(props.likesEnabled);
  const [comments, setComments] = React.useState(props.commentsEnabled);
  const [newPost, setNewPost] = React.useState(props.newPostEnabled);
  const [actionListReminders, setActionListReminders] = React.useState(
    props.actionListRemindersEnabled
  );
  const mutatorArray = [setLikes, setComments, setNewPost];
  const valueArray = [likes, comments, newPost];

  return (
    <Container>
      <StyledBody>
        {intl.formatMessage(communityNotificationsDescriptor)}
      </StyledBody>

      <ToggleList
        items={[
          { description: likeDescriptor, selected: likes },
          { description: commentDescriptor, selected: comments },
          { description: newPostDescriptor, selected: newPost },
        ]}
        onToggleIndex={(index) => {
          mutatorArray[index](!valueArray[index]);
        }}
      />

      <StyledBody>
        {intl.formatMessage(actionListNotificationsDescriptor)}
      </StyledBody>

      <StyledToggleList
        items={[
          {
            description: actionListReminderDescriptor,
            selected: actionListReminders,
          },
        ]}
        onToggleIndex={() => setActionListReminders(!actionListReminders)}
      />

      <Button
        onPress={() =>
          props.onSave({
            likesEnabled: likes,
            commentsEnabled: comments,
            newPostEnabled: newPost,
            actionListRemindersEnabled: actionListReminders,
          })
        }
        labelMessage={saveDescriptor}
        intent="primary"
        appearance="solid"
        width="wide"
        size="medium"
      />
    </Container>
  );
};
