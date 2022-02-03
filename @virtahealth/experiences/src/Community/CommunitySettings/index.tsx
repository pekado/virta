import {
  Input,
  ThemeContext,
  styled,
  Button,
  BodySmall,
} from "@virtahealth/components";
import * as React from "react";
import { useIntl } from "react-intl";
import {
  Container,
  CircleView,
  saveDescriptor,
  StyledImage,
} from "../CommunityShared";

interface Props {
  profileName: string;
  profilePicture: string;
  authToken: string;
  /**
   * onAddPicture signals to the parent to offer the user a means to add a new picture.
   * When the user completes this process, profilePicture will need to be updated.
   * This means that the parent is in charge of the temporary state of the picture.
   */
  onAddPicture: () => void;
  onSave: (name: string) => void;
}

const nameDescriptor = {
  id: "communitySettingsName",
  defaultMessage: "Community display name",
  description: "Label for name input in community profile settings",
};

const pictureDescriptor = {
  id: "communitySettingsPicture",
  defaultMessage: "Community photo",
  description: "Label for photo input in community profile settings",
};

const addPictureDescriptor = {
  id: "communitySettingAddPicture",
  defaultMessage: "Add a new photo (.jpg only)",
  description:
    "Button text for adding a new photo in community profile settings",
};

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  margin-bottom: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const StyledName = styled(BodySmall)`
  margin-left: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const StyledPictureButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const BorderView = styled.View`
  padding-top: ${({ theme }) => theme.standardSpacingMedium}px;
  border-top: solid;
  border-top-width: ${({ theme }) => theme.dividerDefaultThickness}px;
  border-top-color: ${({ theme }) => theme.dividerColor};
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const StyledLabelPicture = styled(BodySmall)`
  color: ${({ theme }) => theme.textCommunityColorSecondary};
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
`;

const StyledLabelName = styled(BodySmall)`
  color: ${({ theme }) => theme.textCommunityColorSecondary};
  margin-bottom: ${({ theme }) => theme.standardSpacingSmall};
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
`;

export const CommunitySettings: React.FC<Props> = (props) => {
  const theme = React.useContext(ThemeContext);
  const intl = useIntl();

  const [currentName, setCurrentName] = React.useState(props.profileName);

  return (
    <Container>
      <StyledLabelName>{intl.formatMessage(nameDescriptor)}</StyledLabelName>
      <Input value={currentName} onChangeText={setCurrentName} />
      <StyledLabelPicture>
        {intl.formatMessage(pictureDescriptor)}
      </StyledLabelPicture>
      <Row>
        <CircleView>
          <StyledImage
            source={{
              uri: props.profilePicture,
              headers: {
                Authorization: props.authToken,
              },
            }}
          />
        </CircleView>
        <StyledName>{currentName}</StyledName>
      </Row>
      <StyledPictureButton
        onPress={props.onAddPicture}
        labelMessage={addPictureDescriptor}
        intent="none"
        labelStyle={{
          color: theme.textCommunityColorPrimaryMuted,
        }}
        appearance="outline"
        width="wide"
        size="medium"
      />
      <BorderView>
        <Button
          onPress={() => props.onSave(currentName)}
          labelMessage={saveDescriptor}
          intent="primary"
          appearance="solid"
          width="wide"
          size="medium"
        />
      </BorderView>
    </Container>
  );
};
