import * as React from "react";

import { Body, styled } from "@virtahealth/components";

const PopoverText = styled(Body)`
  font-size: 14px;
  text-align: center;
  color: white;
  font-weight: 500;
  white-space: pre;
`;

const Container = styled.View`
  position: absolute;
  right: 40%;
  top: 100%;
  z-index: 99;
  min-width: 100px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 4px;
  padding: ${({ theme }) => theme.popoverPadding}px;
`;

const Triangle = styled.View`
  position: absolute;
  right: 0;
  top: -22px;
  border-left-width: 10px;
  border-left-style: solid;
  border-left-color: transparent;
  border-right-width: 10px;
  border-right-style: solid;
  border-right-color: transparent;
  border-top-width: 10px;
  border-top-style: solid;
  border-top-color: transparent;
  border-bottom-width: 12px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.7);
`;

export const popoverReferenceRangeDisplay = (
  referenceRange?: fhir.ObservationReferenceRange
) => {
  if (!referenceRange) {
    return "No reference range";
  }

  if (referenceRange.text) {
    return referenceRange.text;
  }

  const high = referenceRange.high && referenceRange.high.value;
  const low = referenceRange.low && referenceRange.low.value;

  if (low && high) {
    return `${low} - ${high}`;
  }

  if (low) {
    return `Low: ${low}`;
  }

  if (high) {
    return `High: ${high}`;
  }
};

export const RefRangePopover: React.FC<{
  referenceRange?: fhir.ObservationReferenceRange;
}> = ({ referenceRange }) => (
  <Container>
    <Triangle />
    <PopoverText>{popoverReferenceRangeDisplay(referenceRange)}</PopoverText>
  </Container>
);
