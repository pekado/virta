import { Interpose, RadioInput, Spacer } from "@virtahealth/components";
import * as React from "react";
import { MessageDescriptor } from "react-intl";
import { LAB_CORP_NAME, QUEST_NAME, StyledLabel } from "../..";
import { labelMessages } from "../../../messages";

interface VendorSelectorProps {
  setVendor: (vendor?: fhir.Organization) => void;
  vendor?: fhir.Organization;
  organizations?: fhir.Organization[];
}

interface VendorOption {
  labelMessage: MessageDescriptor;
  value?: fhir.Organization;
}

export const VendorSelector: React.FC<VendorSelectorProps> = ({
  setVendor,
  vendor,
  organizations,
}) => {
  const [vendorOptions, setVendorOptions] = React.useState<VendorOption[]>([]);
  React.useEffect(() => {
    if (vendorOptions.length === 0 && organizations) {
      // Find the LabCorp and Quest organizations as they are currently the main vendors
      // Future feature: Adding the ability to enter/create other vendor organizations
      const standardOrgs: { [key: string]: fhir.Organization } = {};
      // Need to account for differences in capitalization in different environments
      const labCorpName = LAB_CORP_NAME.toLowerCase();
      const questName = QUEST_NAME.toLowerCase();
      for (const org of organizations) {
        if (org.name?.toLowerCase() === labCorpName) {
          standardOrgs[LAB_CORP_NAME] = org;
        } else if (org.name?.toLowerCase() === questName) {
          standardOrgs[QUEST_NAME] = org;
        }
      }

      const options: VendorOption[] = [];

      standardOrgs[LAB_CORP_NAME]
        ? options.push({
            labelMessage: labelMessages.labCorpVendorOption,
            value: standardOrgs[LAB_CORP_NAME],
          })
        : undefined;

      standardOrgs[QUEST_NAME]
        ? options.push({
            labelMessage: labelMessages.questVendorOption,
            value: standardOrgs[QUEST_NAME],
          })
        : undefined;

      options.push({
        labelMessage: labelMessages.otherVendorOption,
        value: undefined,
      });
      setVendorOptions(options);
    }
  }, [organizations]);

  return (
    <>
      <StyledLabel message={labelMessages.vendor} />
      <Interpose with={<Spacer width={20} />} flexDirection="row">
        {vendorOptions.map((vendorOption) => (
          <RadioInput
            key={vendorOption.value?.id}
            labelMessage={vendorOption.labelMessage}
            onPress={() => setVendor(vendorOption.value)}
            isChecked={vendor?.id === vendorOption.value?.id}
          />
        ))}
      </Interpose>
    </>
  );
};
