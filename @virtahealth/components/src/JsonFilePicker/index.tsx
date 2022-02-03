import * as React from "react";
import { MessageDescriptor } from "react-intl";
import { ViewProps } from "react-native";
import styled from "../styled-components";
import Uploader from "./Uploader";
import { AcceptedFileTypes } from "./types";

export interface JsonFilePickerProps extends Pick<ViewProps, "style"> {
  accept: AcceptedFileTypes[];
  setEncodedFiles: (attachments: Attachment[]) => void;
  labelMessage?: MessageDescriptor;
}

export { AcceptedFileTypes } from "./types";

interface BasicAttachment {
  title?: string;
  contentType: string;
}

interface SavedAttachment extends BasicAttachment {
  url: string;
  file?: never;
}

interface UploadedAttachment extends BasicAttachment {
  file: string;
  url?: never;
}

export type Attachment = SavedAttachment | UploadedAttachment;

// Based on some testing, e.g. jest has issues but not storybook, this probably isn't the right breakdown
// between platform components but running with it for now.
function toBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result!.toString().replace(/^data:(.*,)?/, "");
      if (encoded.length % 4 > 0) {
        encoded += "=".repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = (error) => reject(error);
  });
}

const StyledView = styled.View`
  border: 2px solid black;
`;

export const JsonFilePicker = ({
  accept,
  setEncodedFiles,
  labelMessage,
  style,
}: JsonFilePickerProps) => {
  const handleFileUpload = async (fileRefs: File[]) => {
    const errors: Error[] = [];
    const encodedFiles: Attachment[] = [];
    for (const fileRef of fileRefs) {
      try {
        const base64File = await toBase64(fileRef);
        encodedFiles.push({
          file: base64File,
          contentType: fileRef.type,
          title: fileRef.name,
        } as Attachment);
      } catch (e) {
        errors.push(e as Error);
      }
    }

    if (encodedFiles.length > 0) {
      setEncodedFiles(encodedFiles);
    }
    if (errors.length > 0) {
      console.log("Errors occurred while encoding files", errors);
    }
  };

  return (
    <StyledView style={style}>
      <Uploader
        accept={accept}
        onSetFiles={handleFileUpload}
        labelMessage={labelMessage}
        testID="file-uploader"
      />
    </StyledView>
  );
};
