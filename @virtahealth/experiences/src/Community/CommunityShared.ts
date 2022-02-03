import { styled } from "@virtahealth/components";

export const Container = styled.View`
  padding: ${({ theme }) => theme.standardSpacingMedium}px;
  margin: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  border-radius: ${({ theme }) => theme.roundedContainerBorderRadius}px;
  border-style: solid;
  border-width: 0px;
  background-color: ${({ theme }) => theme.communityBackgroundWhite};
`;

export const CircleView = styled.View`
  overflow: hidden;
  border-radius: 999px;
  border-style: solid;
  border-width: 0px;
`;

export const saveDescriptor = {
  id: "communitySettingsSave",
  defaultMessage: "Save",
  description: "Save button text in community profile settings",
};

export const StyledImage = styled.Image`
  width: ${({ theme }) => theme.profileImageSize}px;
  height: ${({ theme }) => theme.profileImageSize}px;
`;

export interface ExpandableProps {
  onExpand?: () => void;
  onCondense?: () => void;
}
