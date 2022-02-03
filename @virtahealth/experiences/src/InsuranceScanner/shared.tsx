import { styled, Link } from "@virtahealth/components";
import { messages } from "@virtahealth/utils";
import { ViewProps } from "react-native";
import * as React from "react";

export interface BlueBoxProps extends ViewProps {
  direction: string;
}

export const StyledBlueBox = styled.View<BlueBoxProps>`
  background-color: #dff2ff;
  padding: 16px;
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
`;

const StyledLinkContainer = styled.View`
  text-align: center;
  align-items: center;
`;

export const NoInsuranceCardLink: React.FC<{ onIssue: () => void }> = ({
  onIssue,
}) => (
  <StyledLinkContainer>
    <Link onPress={onIssue} message={messages.noInsuranceCard} />
  </StyledLinkContainer>
);
