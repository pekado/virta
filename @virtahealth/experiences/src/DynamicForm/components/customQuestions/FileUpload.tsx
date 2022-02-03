import * as React from "react";
import { ViewStyle, StyleProp } from "react-native";
import { useField, FormikValues, useFormikContext } from "formik";

import {
  formatVirtaMessageOrString,
  getMessageFromTreeOrKey,
  VirtaIntlMessage,
} from "@virtahealth/utils";
import { Button, styled, SubstrateBody } from "@virtahealth/components";
import { css } from "styled-components";
import { useIntl } from "react-intl";

const StyledErrorText = styled(SubstrateBody)`
  margin-top: 10px;
`;

const Wrapper = styled.View`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  margin-bottom: 24px;
`;

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
`;

const StyledInputBox = styled(SubstrateBody)`
  padding: 12px;
  margin-right: 10px;
  display: flex;
  flex: 1 0 auto;
  height: 44px;
  font-size: ${({ theme }) => theme.textLabelLargeFontSize}px;
  border: 1px solid ${({ theme }) => theme.avatarBaseBorderColor};
  border-radius: 10px;
`;

const Title = styled(SubstrateBody)`
  ${({ theme }) => {
    return css`
      font-weight: ${theme.calloutBaseTitleFontWeight};
      font-size: ${theme.calloutBaseTitleFontSize}px;
      line-height: ${theme.calloutBaseTitleLineHeight}px;
    `;
  }}
`;

interface Props {
  name: string;
  label: VirtaIntlMessage;
  style?: StyleProp<ViewStyle>;
}

export const FileUpload: React.FC<Props> = ({ style, name, label }) => {
  const [selectedFile, setSelectedFile] = React.useState<File>();
  const [, meta] = useField<FormikValues[]>({ name });
  const error = meta.touched && meta.error ? meta.error : undefined;
  const { setFieldValue } = useFormikContext();

  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const onSelectFile = (e: React.FormEvent<HTMLInputElement>): void => {
    const input = e.currentTarget;
    if (!input.files || input.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const file = input.files[0];
    const blob = URL.createObjectURL(file);
    setSelectedFile(file);
    setFieldValue(name, blob);
    setFieldValue(`${name}_metadata`, file);
    // free memory
    URL.revokeObjectURL(blob);
  };
  const fileInputRefFront: React.RefObject<HTMLInputElement> =
    React.createRef();
  return (
    <Wrapper>
      <Title>{formatMessage(label)}</Title>
      <StyledContainer style={style}>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={onSelectFile}
          id="imageUpload"
          hidden
          ref={fileInputRefFront}
        />
        <StyledInputBox>{selectedFile ? selectedFile.name : ""}</StyledInputBox>
        <Button
          appearance="outline"
          intent="secondary"
          labelMessage={getMessageFromTreeOrKey(
            "enrollment.eligibility.browseFiles"
          )}
          onPress={() => fileInputRefFront.current?.click()}
        />
      </StyledContainer>
      {error && typeof error === "string" && (
        <StyledErrorText size="xsmall" color="Danger" weight="light">
          {error}
        </StyledErrorText>
      )}
    </Wrapper>
  );
};
