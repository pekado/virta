import * as React from "react";
import { Base, Heading4, styled } from "@virtahealth/components";
import { View } from "react-native";
import { AttachmentViewer } from "../AttachmentViewer";

const FilesHeading = styled(Heading4)`
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.questionItemHeadingBorderColor};
  font-weight: 600;
`;

const FileSection = styled.View`
  padding-bottom: 16px;
  min-width: 350px;
  max-width: 500px;
`;

const FileBorder = styled.View`
  border-color: ${({ theme }) => theme.questionItemHeadingBorderColor};
  border-bottom-width: 1px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const DateHeading = styled(Base)`
  font-size: 14px;
  color: ${({ theme }) => theme.textTableCellColor};
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.questionItemHeadingBorderColor};
  font-weight: 600;
`;

interface Props {
  filesByDate?: {
    [date: string]: fhir.Attachment[];
  };
  getAttachmentData: (id: string) => Promise<unknown>;
}

export const FilesDisplay: React.FC<Props> = ({
  filesByDate,
  getAttachmentData,
}) => {
  return (
    <FileSection>
      <FilesHeading>Files</FilesHeading>
      {filesByDate &&
        Object.keys(filesByDate).map((date, idx) => {
          return (
            <View key={`${date}-${idx}`}>
              <DateHeading>{date}</DateHeading>
              {filesByDate[date].map((file, idx) => (
                <FileBorder key={`${file.id}-${idx}`}>
                  <AttachmentViewer
                    attachment={file}
                    handleGetAttachment={getAttachmentData}
                  />
                </FileBorder>
              ))}
            </View>
          );
        })}
    </FileSection>
  );
};
