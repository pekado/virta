import * as React from "react";
import { useIntl } from "react-intl";
import {
  VirtaIntlMessage,
  VirtaIntlMessageOrString,
  formatVirtaMessageOrString,
} from "@virtahealth/utils";

import styled from "../styled-components";
import { Label, HelperText } from "../Text";
import { LabelLarge } from "../PatientProfileText";

interface LabelSpacerProps {
  /**
   * Size of spacer between Label text and Helper text
   * if label content is not `space-between`
   */
  spacerSize?: number;
}

export interface FormElementLabelProps extends LabelSpacerProps {
  /**
   * A react-intl message for the label of the input
   */
  labelMessage: VirtaIntlMessage;
  /**
   * A react-intl message for the helper text in the label of the input
   */
  helperText?: VirtaIntlMessageOrString;
  /**
   * Specifies if the label should have larger font size
   */
  isLarge?: boolean;
}

export interface LabelContainer {
  isLarge?: boolean;
}

const LabelContainer: React.FC<LabelContainer> = ({ isLarge, children }) => {
  if (isLarge) {
    return <LabelLarge>{children}</LabelLarge>;
  } else {
    return <Label>{children}</Label>;
  }
};

const StyledLabel = styled(LabelContainer)`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;

const LabelSpacer = styled.View<LabelSpacerProps>`
  width: ${({ spacerSize }) => (spacerSize ? spacerSize : 12)}px;
`;

export const FormElementLabel: React.FC<FormElementLabelProps> = ({
  labelMessage,
  helperText,
  spacerSize,
  isLarge,
}) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  return (
    <StyledLabel isLarge={isLarge}>
      {formatMessage(labelMessage)}
      {helperText && (
        <>
          <LabelSpacer spacerSize={spacerSize} />
          <HelperText>{formatMessage(helperText)}</HelperText>
        </>
      )}
    </StyledLabel>
  );
};
