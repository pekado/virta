import {
  styled,
  MarketingTargetBullseye,
  MenuItem,
  UserCircle,
  UserId,
  Email,
  Phone,
  CommentBubble,
  UserWarning,
  Clock,
  Heading3,
  BodySpacedSmall,
} from "@virtahealth/components";
import * as React from "react";
import { View, Image } from "react-native";
import { useIntl } from "react-intl";

interface ProfileProps {
  personalGoal: string;
  name: string;
  preferredName: string;
  email: string;
  phoneNumber: string;
  primaryLanguage: string;
  emergencyContact: string;
  timeZone: string;
  days: string;
  profilePicture: string;
  authToken: string;
  onSelectMenuItem: (navigation: string) => void;
  spanishLanguageEnabled?: boolean;
}

const StyledRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.standardSpacingMedium}px;
  border-bottom-width: ${({ theme }) => theme.dividerDefaultThickness}px;
  border-color: ${({ theme }) => theme.dividerColor};
`;

const StyledColumn = styled.View`
  flex-direction: column;
  padding-left: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const LinkText = styled(BodySpacedSmall)`
  color: ${({ theme }) => theme.textLinkColor};
  font-weight: bold;
  padding-top: 2px;
`;

const NameHeading = styled(Heading3)`
  font-weight: bold;
`;
const DaysText = styled(BodySpacedSmall)`
  color: ${({ theme }) => theme.textHelperTextColor};
  padding-top: ${({ theme }) => theme.standardSpacingSmall}px;
  text-transform: uppercase;
`;

const CircleView = styled.View`
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-radius: 999px;
  border-color: ${({ theme }) => theme.buttonSecondaryBackgroundColor};
`;

export const PatientProfileMenu: React.FC<ProfileProps> = ({
  personalGoal,
  name,
  preferredName,
  email,
  phoneNumber,
  primaryLanguage,
  emergencyContact,
  timeZone,
  days,
  profilePicture,
  authToken,
  onSelectMenuItem,
  spanishLanguageEnabled = false,
}) => {
  const intl = useIntl();
  return (
    <View>
      <StyledRow
        onPress={() => {
          onSelectMenuItem("ProfilePicture");
        }}
      >
        <CircleView>
          <Image
            source={{
              uri: profilePicture,
              headers: {
                Authorization: authToken,
              },
            }}
            style={{ width: 70, height: 70 }}
          />
        </CircleView>
        <StyledColumn>
          <NameHeading>{name}</NameHeading>
          <DaysText>
            {days}{" "}
            {intl.formatMessage({
              id: "patientProfileDays",
              defaultMessage: "days on virta",
              description:
                "Describes the number of days a patient has been on Virta",
            })}
          </DaysText>
          <LinkText>
            {intl.formatMessage({
              id: "patientProfileEditPicture",
              defaultMessage: "Edit profile picture",
              description: "Call to action to edit profile picture",
            })}
          </LinkText>
        </StyledColumn>
      </StyledRow>
      <MenuItem
        icon={<MarketingTargetBullseye />}
        title={{
          id: "patientProfileGoal",
          defaultMessage: "Personal Goal",
          description: "Title for personal goal row on patient profile",
        }}
        subtitleValue={personalGoal}
        subtitleDefaultAction={{
          id: "patientProfileGoalAction",
          defaultMessage: "Add personal goal",
          description:
            "Default action description for personal goal row on patient profile",
        }}
        onPress={() => {
          onSelectMenuItem("PersonalGoal");
        }}
      />
      <MenuItem
        icon={<UserCircle />}
        title={{
          id: "patientProfileName",
          defaultMessage: "Name",
          description: "Title for name row on patient profile",
        }}
        subtitleValue={name}
        subtitleDefaultAction={{
          id: "patientProfileNameAction",
          defaultMessage: "Add name",
          description:
            "Default action description for name row on patient profile",
        }}
        onPress={() => {
          onSelectMenuItem("Name");
        }}
      />
      <MenuItem
        icon={<UserId />}
        title={{
          id: "patientProfilePreferredName",
          defaultMessage: "Preferred Name",
          description: "Title for preferred name row on patient profile",
        }}
        subtitleValue={preferredName}
        subtitleDefaultAction={{
          id: "patientProfilePreferredNameAction",
          defaultMessage: "Add preferred name",
          description:
            "Default action description for preferred name row on patient profile",
        }}
        onPress={() => {
          onSelectMenuItem("PreferredName");
        }}
      />
      <MenuItem
        icon={<Email />}
        title={{
          id: "patientProfileEmail",
          defaultMessage: "Email",
          description: "Title for email row on patient profile",
        }}
        subtitleValue={email}
        subtitleDefaultAction={{
          id: "patientProfileEmailAction",
          defaultMessage: "Add email",
          description:
            "Default action description for email row on patient profile",
        }}
        onPress={() => {
          onSelectMenuItem("Email");
        }}
      />
      <MenuItem
        icon={<Phone />}
        title={{
          id: "patientProfilePhone",
          defaultMessage: "Phone Number",
          description: "Title for phone number row on patient profile",
        }}
        subtitleValue={phoneNumber}
        subtitleDefaultAction={{
          id: "patientProfilePhoneAction",
          defaultMessage: "Add phone number",
          description:
            "Default action description for phone number row on patient profile",
        }}
        onPress={() => {
          onSelectMenuItem("PhoneNumber");
        }}
      />
      {spanishLanguageEnabled && (
        <MenuItem
          icon={<CommentBubble />}
          title={{
            id: "patientProfileLanguage",
            defaultMessage: "Primary Language",
            description: "Title for primary language row on patient profile",
          }}
          subtitleValue={primaryLanguage}
          subtitleDefaultAction={{
            id: "patientProfileLanguageAction",
            defaultMessage: "Add primary language",
            description:
              "Default action description for primary language row on patient profile",
          }}
          onPress={() => {
            onSelectMenuItem("PrimaryLanguage");
          }}
        />
      )}
      <MenuItem
        icon={<UserWarning />}
        title={{
          id: "patientProfileContact",
          defaultMessage: "Emergency Contact",
          description: "Title for emergency contact row on patient profile",
        }}
        subtitleValue={emergencyContact}
        subtitleDefaultAction={{
          id: "patientProfileContactAction",
          defaultMessage: "Add emergency contact",
          description:
            "Default action description for emergency contact row on patient profile",
        }}
        onPress={() => {
          onSelectMenuItem("EmergencyContact");
        }}
      />
      <MenuItem
        icon={<Clock />}
        title={{
          id: "patientProfileTimeZone",
          defaultMessage: "Time Zone",
          description: "Title for time zone row on patient profile",
        }}
        subtitleValue={timeZone}
        subtitleDefaultAction={{
          id: "patientProfileTimeZoneAction",
          defaultMessage: "Add time zone",
          description:
            "Default action description for time zone row on patient profile",
        }}
        onPress={() => {
          onSelectMenuItem("TimeZone");
        }}
      />
    </View>
  );
};
