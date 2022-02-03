import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Body, Caption, styled } from "@virtahealth/components";
import { formatDistance } from "date-fns";
import { useIntl } from "react-intl";
import { CommunityUser } from "../../../types";
import { PostMoreMenu, MoreMenuProps } from "../PostMoreMenu";
import { ExpandableProps } from "../../../CommunityShared";

interface Props extends Omit<MoreMenuProps, "postUser">, ExpandableProps {
  user: CommunityUser | null;
  createdAt: Date;
  hasLimitedInteractionAndInfo?: boolean;
}

const Row = styled.View`
  flex-direction: row;
  z-index: 999;
  padding-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  padding-bottom: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  padding-left: ${({ theme }) => theme.standardSpacingMedium}px;
  padding-right: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const UserInfo = styled.View`
  flex-direction: column;
  padding-left: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  align-self: center;
`;

const BoldName = styled(Body)`
  font-size: ${({ theme }) => theme.textBodySpacedFontSize}px;
  font-weight: ${({ theme }) => theme.textHeading1FontWeight};
`;

const LimitedInfoText = styled(Body)`
  font-size: ${({ theme }) => theme.textBodySpacedSmallFontSize}px;
  font-weight: ${({ theme }) => theme.textCommunityThinFontWeight};
  color: ${({ theme }) => theme.textCommunityColorPrimaryMuted};
`;

const SmallDetails = styled(Caption)`
  line-height: ${({ theme }) => theme.textBodySmallLineHeight}px;
  color: ${({ theme }) => theme.textCommunityColorPrimaryMuted};
  font-weight: ${({ theme }) => theme.textCommunityThinFontWeight};
`;

export const User: React.FC<Props> = ({
  user,
  createdAt,
  hasLimitedInteractionAndInfo,
  onExpand,
  onCondense,
  ...moreMenuProps
}) => {
  const intl = useIntl();

  if (!user) {
    return null;
  }

  // in profile view we only show the post date
  return hasLimitedInteractionAndInfo ? (
    <Row>
      <LimitedInfoText>
        {intl.formatMessage({
          id: "userPosted",
          defaultMessage: "Posted",
        })}{" "}
        {formatDistance(createdAt, new Date())}
      </LimitedInfoText>

      {onExpand && (
        <TouchableOpacity onPress={onExpand}>
          <LimitedInfoText>
            {" "}
            •{" "}
            {intl.formatMessage({
              id: "seeFullPost",
              defaultMessage: "See full post",
            })}
          </LimitedInfoText>
        </TouchableOpacity>
      )}
      {onCondense && (
        <TouchableOpacity onPress={onCondense}>
          <LimitedInfoText>
            {" "}
            •{" "}
            {intl.formatMessage({
              id: "hideFullPost",
              defaultMessage: "Hide full post",
            })}
          </LimitedInfoText>
        </TouchableOpacity>
      )}

      <PostMoreMenu {...moreMenuProps} postUser={user.id} />
    </Row>
  ) : (
    // otherwise show name, picture, days on virta, and date
    <Row>
      <Avatar
        username={user.display_name || ""}
        size="lg"
        imageUrl={user.profile_picture_url || ""}
      />
      <UserInfo>
        <BoldName>{user.display_name || ""}</BoldName>

        <SmallDetails>
          {user.role === "Patient"
            ? `${user.days_on_virta} ${intl.formatMessage({
                id: "daysOnVirta",
                defaultMessage: "days on Virta",
              })}`
            : user.role}
        </SmallDetails>

        <SmallDetails>
          {intl.formatMessage({
            id: "postedDate",
            defaultMessage: "Posted",
          })}{" "}
          {formatDistance(createdAt, new Date())}
        </SmallDetails>
      </UserInfo>

      <PostMoreMenu {...moreMenuProps} postUser={user.id} />
    </Row>
  );
};
