import * as React from "react";
import { TouchableOpacity } from "react-native";
import {
  EllipsisIcon,
  styled,
  BodySmall,
  Interpose,
} from "@virtahealth/components";
import { CommunityUser } from "../../../types";
import { useUserContext } from "../../../UserContext";

export interface MoreMenuProps {
  onDelete: () => void;
  onEdit: () => void;
  onReport: () => void;
  postUser: CommunityUser["id"];
}

const editDescriptor = {
  id: "communityEditPostButton",
  defaultMessage: "Edit",
  description: "Text for the edit button in a post's more menu",
};

const deleteDescriptor = {
  id: "communityDeletePostButton",
  defaultMessage: "Delete",
  description: "Text for the delete button in a post's more menu",
};

const reportDescriptor = {
  id: "communityReportPostButton",
  defaultMessage: "Report",
  description: "Text for the report button in a post's more menu",
};

const RightAligned = styled.View`
  margin-left: auto;
  margin-top: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  padding-left: ${({ theme }) => theme.standardSpacingMedium}px;
`;
const Menu = styled.View`
  border-radius: ${({ theme }) => theme.popoverBorderRadiusSmall};
  border-style: solid;
  border-width: ${({ theme }) => theme.popoverBorderWidth}px;
  border-color: ${({ theme }) => theme.textCommunityColorSecondary};
  position: absolute;
  right: 0;
  top: 20px;
  background-color: ${({ theme }) => theme.communityBackgroundWhite};
`;
const MenuOption = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.popoverPadding}px;
`;
const OptionText = styled(BodySmall)`
  color: ${({ theme }) => theme.textCommunityColorSecondary};
  font-size: ${({ theme }) => theme.textSmallcapsFontSize};
  font-weight: ${({ theme }) => theme.buttonBaseTextFontWeight};
`;

const Divider = styled.View`
  border-bottom-width: ${({ theme }) => theme.popoverBorderWidth}px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.textCommunityColorSecondary};
`;

export const PostMoreMenu: React.FC<MoreMenuProps> = ({
  postUser,
  onDelete,
  onEdit,
  onReport,
}) => {
  const [showingMore, setShowingMore] = React.useState(false);
  const currentUser = useUserContext();

  // we dont want to modify state after the more menu is unmounted
  let stillMounted = true;
  React.useEffect(() => {
    stillMounted = true;
    return () => {
      stillMounted = false;
    };
  }, []);

  // in profile view we only show the post date
  return (
    <RightAligned>
      <TouchableOpacity
        onPress={() => {
          setShowingMore(!showingMore);
        }}
        onBlur={() => {
          // delay so the menu option can recieve the click
          setTimeout(
            () => {
              if (stillMounted) {
                setShowingMore(false);
              }
            },
            showingMore ? 150 : 0
          );
        }}
      >
        <EllipsisIcon />
      </TouchableOpacity>
      {showingMore && (
        <Menu>
          {currentUser.id == postUser ? (
            <Interpose with={<Divider />}>
              <MenuOption
                onPress={() => {
                  if (onEdit) {
                    onEdit();
                  }
                  setShowingMore(false);
                }}
              >
                <OptionText message={editDescriptor} />
              </MenuOption>
              <MenuOption
                onPress={() => {
                  if (onDelete) {
                    onDelete();
                  }
                  setShowingMore(false);
                }}
              >
                <OptionText message={deleteDescriptor} />
              </MenuOption>
            </Interpose>
          ) : (
            <MenuOption
              onPress={() => {
                if (onReport) {
                  onReport();
                }
                setShowingMore(false);
              }}
            >
              <OptionText message={reportDescriptor} />
            </MenuOption>
          )}
        </Menu>
      )}
    </RightAligned>
  );
};
