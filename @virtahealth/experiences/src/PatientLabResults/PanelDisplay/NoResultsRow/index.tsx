import * as React from "react";
import { Platform } from "react-native";
import { LeftTableCell, ShadedRow, StyledTableText } from "../../common";
import { messages } from "../../messages";
import { ObservationValueTableCell } from "../../ObservationValueTableCell";
import { Panel } from "../../types";

interface Props {
  panel: Panel;
}

const isWeb = Platform.OS === "web";

export const NoResultsRow: React.FC<Props> = ({ panel }) => {
  return (
    <ShadedRow isWeb={isWeb}>
      <LeftTableCell
        value={<StyledTableText message={messages.noResultsForPanel} />}
      />
      <ObservationValueTableCell
        key={`empty-value--${panel.name}-noResultsValue`}
      />
    </ShadedRow>
  );
};
