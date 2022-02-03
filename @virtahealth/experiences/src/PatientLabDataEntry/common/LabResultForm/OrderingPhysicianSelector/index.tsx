import { ComboBox, ComboBoxOption } from "@virtahealth/components";
import * as React from "react";
import { View } from "react-native";
import { StyledLabel } from "../..";
import { labelMessages } from "../../../messages";

interface OrderingPhysicianSelectorProps {
  setOrderingPhysician: (physician?: fhir.Practitioner) => void;
  orderingPhysician?: fhir.Practitioner;
  physicianOptions?: fhir.Practitioner[];
}

export const OrderingPhysicianSelector: React.FC<OrderingPhysicianSelectorProps> =
  ({ setOrderingPhysician, orderingPhysician, physicianOptions = [] }) => {
    const [comboBoxValue, setComboBoxValue] = React.useState("");

    React.useEffect(() => {
      if (orderingPhysician && physicianOptions.length > 0) {
        // Find physician from options with id
        const practitioner = physicianOptions.find(
          (option) => option.id === orderingPhysician.id
        );
        setComboBoxValue(practitioner?.name![0].text || "");
      }
    }, [physicianOptions]);

    React.useEffect(() => {
      // If form value gets cleared, make combobox text reset as well
      if (!orderingPhysician && comboBoxValue) {
        setComboBoxValue("");
      }
    }, [orderingPhysician]);

    const onSelectPhysicianOption = (practitionerId?: string) => {
      const physician = physicianOptions.find(
        (practitioner) => practitioner.id === practitionerId
      );
      if (physician) {
        setOrderingPhysician(physician);
        setComboBoxValue(physician.name![0].text || "");
      }
    };

    const comboBoxOptions: typeof physicianOptions = comboBoxValue
      ? physicianOptions.filter((p) =>
          p.name![0].text?.toLowerCase().includes(comboBoxValue.toLowerCase())
        )
      : physicianOptions;

    return (
      <View>
        <StyledLabel message={labelMessages.orderingPhysician} />
        <ComboBox
          value={comboBoxValue}
          onChangeText={setComboBoxValue}
          onSelectOption={onSelectPhysicianOption}
        >
          {comboBoxOptions.map((practitioner) => (
            <ComboBoxOption key={practitioner.id} value={practitioner.id}>
              {practitioner.name![0].text}
            </ComboBoxOption>
          ))}
        </ComboBox>
      </View>
    );
  };
