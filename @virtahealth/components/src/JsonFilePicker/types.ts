import { defineMessages, MessageDescriptor } from "react-intl";

export enum AcceptedFileTypes {
  pdf = ".pdf",
  jpg = ".jpg",
  jpeg = ".jpeg",
  png = ".png",
  gif = ".gif",
}

export interface UploaderProps {
  accept: AcceptedFileTypes[];
  onSetFiles: (files: File[]) => void;
  labelMessage?: MessageDescriptor;
  testID?: string;
}

export const labelMessage = defineMessages({
  filePickerLabel: {
    id: "filePicker.defaultLabel",
    description: "The default file drop label",
    defaultMessage: "Select File",
  },
});

export const defaultProps = {
  labelMessage: labelMessage.filePickerLabel,
};
