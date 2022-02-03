import * as React from "react";
import {
  Button,
  CameraIcon,
  Form,
  InputField,
  styled,
  ThemeContext,
} from "@virtahealth/components";

const Container = styled.View`
  flex-direction: column;
  padding: ${({ theme }) => theme.standardSpacingMedium}px;
  background-color: ${({ theme }) => theme.semiTransparentBrightContainer};
`;
const ButtonsContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
`;

const StyledInputField = styled(InputField)`
  background-color: ${({ theme }) => theme.communityBackgroundWhite};
`;

export const CreateEditComment: React.FC = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Container>
      <Form initialValues={{ commentText: "" }} onSubmit={() => undefined}>
        <StyledInputField
          multiline
          name="commentText"
          placeholderMessage={{
            id: "commentPlaceholder",
            defaultMessage: "Write a comment",
          }}
        />

        <ButtonsContainer>
          <Button
            labelMessage={{
              id: "createEditComment.action.addImage",
              defaultMessage: "Add Image",
            }}
            labelStyle={{
              fontSize: theme.textBodySpacedFontSize,
              color: theme.textCommunityColorPrimary,
              fontWeight: theme.textCommunityThinFontWeight,
            }}
            intent="secondary"
            appearance="link"
            size="small"
            iconBefore={<CameraIcon color="#45535E" width={28} height={22} />}
          />

          <Button
            labelMessage={{
              id: "createEditComment.action.submitComment",
              defaultMessage: "Comment",
            }}
            intent="primary"
            appearance="solid"
            size="small"
          />
        </ButtonsContainer>
      </Form>
    </Container>
  );
};
