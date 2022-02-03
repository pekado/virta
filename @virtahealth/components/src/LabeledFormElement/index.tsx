import * as React from "react";
import { Platform, ViewProps, View } from "react-native";

import { FormElementLabelProps, FormElementLabel } from "../FormElementLabel";
import { Row } from "../Row";
import styled from "../styled-components";

const isWeb = Platform.OS === "web";

const FormElementRow = styled(Row)`
  display: flex;
  margin-top: ${({ theme }) => theme.formElementLabelSpacing}px;
  ${isWeb ? "z-index: auto;" : ""}
`;

export const LabeledFormElement: React.FC<FormElementLabelProps & ViewProps> =
  ({ children, style, ...labelProps }) => (
    <View style={style}>
      <FormElementLabel {...labelProps} />
      <FormElementRow>{children}</FormElementRow>
    </View>
  );
