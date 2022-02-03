import { Heading4, styled } from "@virtahealth/components";
import * as React from "react";
import { View, Platform } from "react-native";
import { messages } from "../messages";

interface Props {
  isSticky?: boolean; // Only works on web
}

const StyledHeaderContainer = styled(View)<{ isSticky: boolean }>`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: white;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.questionItemHeadingBorderColor};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  ${({ isSticky }) =>
    Platform.OS === "web" && isSticky
      ? "position: sticky; top: 0; z-index: 100;"
      : ""}
`;

/*
 * Header for lab results display. Includes prev/next page navigation
 */
export const LabResultsHeader: React.FC<Props> = ({ isSticky = true }) => {
  return (
    <StyledHeaderContainer isSticky={isSticky}>
      <Heading4 message={messages.headingMessage} />
    </StyledHeaderContainer>
  );
};
