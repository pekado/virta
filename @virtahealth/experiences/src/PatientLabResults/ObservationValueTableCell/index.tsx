import * as React from "react";
import { styled, VirtaObservation } from "@virtahealth/components";
import { isZero, StyledTableCell, StyledTableText } from "../common";
import { messages } from "../messages";
import { isStringValueOutsideRefRange } from "../helpers";
import { RefRangePopover } from "./RefRangePopover";

const OutsideRefRangeCell = styled(StyledTableCell)`
  background-color: #fdd7dc;
`;

const NoRefRangeText = styled(StyledTableText)`
  font-style: italic;
`;

const CellValueWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UnitText = styled(StyledTableText)`
  font-size: 12px;
  color: ${({ theme }) => theme.textColorSubtitle};
`;

const OutsideRefRangeText = styled(StyledTableText)`
  color: #86090b;
`;

interface ObservationValueTableCellProps {
  reading?: VirtaObservation;
  referenceRange?: fhir.ObservationReferenceRange;
}

const isValueOutsideOfReferenceRange = (
  reading: VirtaObservation,
  referenceRange: fhir.ObservationReferenceRange
) => {
  if (!referenceRange) {
    return false;
  }

  const high = referenceRange.high && referenceRange.high.value;
  const low = referenceRange.low && referenceRange.low.value;

  if (reading.value) {
    const value = reading.value as any;
    if (isNaN(Number(value))) {
      return isStringValueOutsideRefRange(low!, high!, value);
    }

    // if both low and high are present
    if (low && high) {
      return value < low || value > high;
    }
    // if only low is present
    if (low) {
      return value < low;
    }
    // if only high is present
    if (high) {
      return value > high;
    }
  }

  return false;
};

export const ObservationValueTableCell: React.FC<ObservationValueTableCellProps> =
  ({ reading, referenceRange }) => {
    const [showPopover, setShowPopover] = React.useState(false);

    if (!reading || (!reading.value && !isZero(reading.value))) {
      return (
        <StyledTableCell
          value={<StyledTableText message={messages.noResult} />}
        />
      );
    }

    const unitText = reading.unit ? (
      <UnitText>{(reading.unit === "%" && "percent") || reading.unit}</UnitText>
    ) : null;
    if (!referenceRange) {
      return (
        <div
          onPointerEnter={() => setShowPopover(true)}
          onPointerLeave={() => setShowPopover(false)}
          style={{ position: "relative" }}
        >
          <StyledTableCell
            value={
              <CellValueWrapper>
                <NoRefRangeText>{reading.value}</NoRefRangeText>
                {unitText}
              </CellValueWrapper>
            }
          />
          {showPopover && <RefRangePopover referenceRange={referenceRange} />}
        </div>
      );
    }

    return (
      <div
        onPointerEnter={() => setShowPopover(true)}
        onPointerLeave={() => setShowPopover(false)}
        style={{ position: "relative" }}
      >
        {isValueOutsideOfReferenceRange(reading, referenceRange) ? (
          <OutsideRefRangeCell
            value={
              <CellValueWrapper>
                <OutsideRefRangeText>{reading.value}</OutsideRefRangeText>
                {unitText}
              </CellValueWrapper>
            }
          />
        ) : (
          <StyledTableCell
            value={
              <CellValueWrapper>
                <StyledTableText>{reading.value}</StyledTableText>
                {unitText}
              </CellValueWrapper>
            }
          />
        )}
        {showPopover && <RefRangePopover referenceRange={referenceRange} />}
      </div>
    );
  };
