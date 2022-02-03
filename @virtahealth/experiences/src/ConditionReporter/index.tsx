import * as React from "react";
import { CheckboxField, styled } from "@virtahealth/components";
import { messages } from "@virtahealth/utils";

const CheckboxFieldWrapper = styled.View`
  margin-bottom: 10;
`;

// Just disabling this rule for now since I don't know if anything was using this type that gets exported out of the package.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConditionReporterProps {}

export const ConditionReporter: React.FunctionComponent<ConditionReporterProps> =
  () => (
    <>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasBloodDiseases"
          labelMessage={messages.bloodDisease}
          testID="has-blood-diseases-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasBrainNervousSystemCondition"
          labelMessage={messages.brainOrNerve}
          testID="has-brain-nervous-system-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasCancer"
          labelMessage={messages.cancer}
          testID="has-cancer-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasEarEyeSinusNoseOrThroatCondition"
          labelMessage={messages.ent}
          testID="has-ent-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasHeartCondition"
          labelMessage={messages.heartDisease}
          testID="has-heart-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasHormonalOrEndocrineCondition"
          labelMessage={messages.hormonal}
          testID="has-hormonal-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasKidneyOrBladderCondition"
          labelMessage={messages.kidney}
          testID="has-kidney-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasLungCondition"
          labelMessage={messages.lungs}
          testID="has-lung-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasMuscleBoneOrJointCondition"
          labelMessage={messages.muscleBoneJoint}
          testID="has-muscle-bone-joint-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="isPregnantOrBreastfeeding"
          labelMessage={messages.pregnancyBreastfeeding}
          testID="is-pregnant-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasMentalHealthCondition"
          labelMessage={messages.psych}
          testID="has-mental-health-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasReproductiveOrSexualHealthCondition"
          labelMessage={messages.reproductiveHealth}
          testID="has-reproductive-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasStomachIntestineLiverCondition"
          labelMessage={messages.stomachIntestineLiver}
          testID="has-stomach-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="hasOtherHealthCondition"
          labelMessage={messages.other}
          testID="has-other-condition-row-field"
        />
      </CheckboxFieldWrapper>
      <CheckboxFieldWrapper>
        <CheckboxField
          name="noAdditional"
          labelMessage={messages.noAdditional}
          testID="has-no-additional-condition-row-field"
        />
      </CheckboxFieldWrapper>
    </>
  );
