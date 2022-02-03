import * as React from "react";
import Dropzone from "react-dropzone";
import { UploaderProps, defaultProps } from "../types";
import { Body } from "../../Text";
import styled from "../../styled-components";

const StyledBody = styled(Body)`
  color: ${({ theme }) => theme.filePickerTextColor};
  font-weight: ${({ theme }) => theme.filePickerTextFontWeight};
`;

const Uploader = ({ accept, onSetFiles, labelMessage }: UploaderProps) => {
  return (
    <Dropzone
      onDrop={async (files) => {
        if (files && files.length) {
          onSetFiles(files);
        }
      }}
      accept={accept}
    >
      {({ getInputProps, getRootProps }) => (
        <div {...(getRootProps() as React.HTMLAttributes<HTMLDivElement>)}>
          <input
            {...(getInputProps() as React.InputHTMLAttributes<HTMLInputElement>)}
          />
          <StyledBody message={labelMessage} />
        </div>
      )}
    </Dropzone>
  );
};
Uploader.defaultProps = defaultProps as Pick<UploaderProps, "labelMessage">;

export default Uploader;
