import * as React from "react";
import {
  AcceptedFileTypes,
  Body,
  JsonFilePicker,
  Attachment,
  styled,
  Button,
  Spacer,
} from "@virtahealth/components";
import { defineMessages } from "react-intl";
import { SectionHeading } from "../..";

const StyledJsonFilePicker = styled(JsonFilePicker)`
  border-width: 0px;
`;

const FileDisplay = styled.View`
  border-color: ${({ theme }) => theme.questionItemHeadingBorderColor};
  border-bottom-width: 1px;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RemoveButton = styled(Button)`
  background: transparent;
  max-width: 70px;
  min-height: none;
`;

export interface FileUploadSectionProps {
  attachments?: Attachment[];
  removedAttachments?: Attachment[];
  setAttachments: (attachments?: Attachment[]) => void;
  setRemovedAttachments: (attachments?: Attachment[]) => void;
}

const buttonText = defineMessages({
  uploadButton: {
    id: "fileUploadSection.uploadButton",
    description: "Text for the upload button.",
    defaultMessage: "Select file",
  },
  uploadMoreButton: {
    id: "fileUploadSection.uploadMoreButton",
    description: "Text for the upload more button.",
    defaultMessage: "Select another file",
  },
  removeButton: {
    id: "fileUploadSection.removeButton",
    description: "Text for the button to remove a file.",
    defaultMessage: "Remove",
  },
});

export const FileUploadSection: React.FC<FileUploadSectionProps> = ({
  attachments,
  setAttachments,
  removedAttachments,
  setRemovedAttachments,
}) => {
  const removeFile = (attachment: Attachment) => {
    const filteredAttachments = attachments?.filter((a) => a !== attachment);
    setAttachments(filteredAttachments);
    if (attachment.url) {
      // only add to this if attachment has previously been saved
      removedAttachments
        ? setRemovedAttachments([...removedAttachments, attachment])
        : setRemovedAttachments([attachment]);
    }
  };

  const setEncodedFiles = (newAttachments: Attachment[]) => {
    attachments
      ? setAttachments([...attachments, ...newAttachments])
      : setAttachments(newAttachments);
  };

  return (
    <>
      <SectionHeading>Files</SectionHeading>
      {!attachments || attachments.length === 0 ? (
        <>
          <Spacer height={25} />
          <Body>
            Please upload the images/PDFs associated with this result set
          </Body>
        </>
      ) : (
        <>
          {attachments.map((attachment, idx) => (
            <FileDisplay key={`${attachment.title}-${idx}`}>
              <Body>{attachment.title}</Body>
              <RemoveButton
                labelMessage={buttonText.removeButton}
                onPress={() => removeFile(attachment)}
                intent={"tertiary"}
              />
            </FileDisplay>
          ))}
        </>
      )}
      <Spacer height={25} />
      <StyledJsonFilePicker
        accept={[
          AcceptedFileTypes.pdf,
          AcceptedFileTypes.png,
          AcceptedFileTypes.jpg,
          AcceptedFileTypes.jpeg,
          AcceptedFileTypes.gif,
        ]}
        setEncodedFiles={setEncodedFiles}
        labelMessage={
          !attachments || attachments.length === 0
            ? buttonText.uploadButton
            : buttonText.uploadMoreButton
        }
      />
    </>
  );
};
