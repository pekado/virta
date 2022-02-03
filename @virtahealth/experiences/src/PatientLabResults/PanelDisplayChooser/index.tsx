import { Button, Checkbox, Spacer } from "@virtahealth/components";
import * as React from "react";
import { View } from "react-native";
import { WrappingRow } from "../common";
import {
  ALBUMIN_CREATININE_PANEL_NAME,
  C_PEPTIDE_PANEL_NAME,
  HBA1C_PANEL_NAME,
  LIPID_NMR_PANEL_NAME,
  LIPID_PANEL_NAME,
  METABOLIC_PANEL_NAME,
  OTHER_PANEL_CHECKBOX_LABEL,
} from "../constants";

interface Props {
  panelSelections: { [key: string]: boolean };
  setPanelSelections: (panelSelections: { [key: string]: boolean }) => void;
}

export const initialDisplayValues = {
  [HBA1C_PANEL_NAME]: true,
  [METABOLIC_PANEL_NAME]: true,
  [LIPID_PANEL_NAME]: true,
  [LIPID_NMR_PANEL_NAME]: true,
  [ALBUMIN_CREATININE_PANEL_NAME]: true,
  [C_PEPTIDE_PANEL_NAME]: true,
  [OTHER_PANEL_CHECKBOX_LABEL]: false,
};

const checkboxOrder = [
  HBA1C_PANEL_NAME,
  METABOLIC_PANEL_NAME,
  LIPID_PANEL_NAME,
  LIPID_NMR_PANEL_NAME,
  ALBUMIN_CREATININE_PANEL_NAME,
  C_PEPTIDE_PANEL_NAME,
  OTHER_PANEL_CHECKBOX_LABEL,
];

/*
 * Checkboxes to select which panels to display
 */
export const PanelDisplayChooser: React.FC<Props> = ({
  panelSelections,
  setPanelSelections,
}) => {
  const handleCheckbox = (checkboxName: string) => {
    setPanelSelections({
      ...panelSelections,
      [checkboxName]: !panelSelections[checkboxName],
    });
  };

  const handleDeselectAll = () => {
    setPanelSelections(
      Object.keys(initialDisplayValues).reduce((acc, key) => {
        return { ...acc, [key]: false };
      }, {})
    );
  };

  const handleSelectAll = () => setPanelSelections(initialDisplayValues);

  return (
    <WrappingRow style={{ minWidth: 825, maxWidth: 1000 }}>
      {checkboxOrder.map((checkboxName) => (
        <View key={checkboxName}>
          <Checkbox
            onPress={() => handleCheckbox(checkboxName)}
            labelMessage={{
              id: `panelDisplayChooser.checkboxName.${checkboxName}`,
              defaultMessage: checkboxName,
            }}
            isChecked={panelSelections[checkboxName]}
            testID={checkboxName}
          />
          <Spacer height={12} />
        </View>
      ))}
      <View>
        {Object.values(panelSelections).some((value) => value === true) ? (
          <Button
            appearance="minimal"
            intent="secondary"
            labelMessage={{
              id: "panelDisplayChooser.deselectAll",
              defaultMessage: "Deselect All",
            }}
            onPress={handleDeselectAll}
          />
        ) : (
          <Button
            appearance="minimal"
            intent="secondary"
            labelMessage={{
              id: "panelDisplayChooser.selectAll",
              defaultMessage: "Select All",
            }}
            onPress={handleSelectAll}
          />
        )}
        <Spacer height={12} />
      </View>
    </WrappingRow>
  );
};
