import * as React from "react";
import { Platform } from "react-native";
import { ObservationData, PanelResult } from "../../types";
import {
  LeftTableCell,
  StyledTableRow,
  ShadedRow,
  StyledTableText,
} from "../../common";
import { ObservationValueTableCell } from "../../ObservationValueTableCell";

interface PanelRowProps {
  observationData: ObservationData;
  panelResults: PanelResult[];
  isShadedRow: boolean;
}

const isWeb = Platform.OS === "web";

export const PanelRow: React.FC<PanelRowProps> = ({
  observationData,
  isShadedRow,
  panelResults,
}) => {
  const { codes, referenceRange, observationName } = observationData;
  const RowComponent = isShadedRow ? ShadedRow : StyledTableRow;

  const cells: React.ReactNode[] = [];

  panelResults.forEach((result, idx) => {
    const { collectionDate } = result;
    let observation;
    if (codes) {
      for (const c of codes) {
        observation = result.observations[c];
        if (observation) {
          break;
        }
      }
      if (!observation) {
        cells.push(
          <ObservationValueTableCell
            key={`empty-value--${observationName}-${collectionDate}-${idx}`}
          />
        );
        return;
      }

      cells.push(
        <ObservationValueTableCell
          key={observation.id}
          reading={observation}
          referenceRange={referenceRange}
        />
      );
    }
  });

  return (
    <RowComponent key={observationName} name={observationName} isWeb={isWeb}>
      <LeftTableCell
        value={<StyledTableText>{observationName}</StyledTableText>}
      />
      {cells}
    </RowComponent>
  );
};
