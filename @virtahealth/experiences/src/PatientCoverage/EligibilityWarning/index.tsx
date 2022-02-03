import * as React from "react";
import { styled, withVirta, Body } from "@virtahealth/components";
import {
  EligibilityResponse,
  Coverage,
  getFirstName,
  getLastName,
  getBirthDateString,
  Patient,
} from "../utils";

export interface EligibilityWarningProps {
  eligibilityResponse?: EligibilityResponse;
  patient: Patient;
  coverage: Coverage;
  checkDiscrepancies?: boolean;
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  margin: ${({ theme }) => theme.standardSpacingSmallMedium}px;
  background-color: ${({ theme }) => theme.calloutWarningBackgroundColor};
`;

const StyledText = styled(Body)`
  font-weight: bold;
  color: ${({ theme }) => theme.calloutWarningFontColor};
`;

const EligibilityWarning: React.FC<EligibilityWarningProps> = ({
  eligibilityResponse,
  patient,
  coverage,
  checkDiscrepancies,
}) => {
  const [discrepancies, setDiscrepencies] =
    React.useState<Array<JSX.Element>>();
  React.useEffect(() => {
    const items: Array<JSX.Element> = [];
    if (
      checkDiscrepancies == true &&
      eligibilityResponse &&
      eligibilityResponse.contained
    ) {
      eligibilityResponse.contained.forEach((contained) => {
        if (contained && contained.patient && contained.patient.name) {
          const containedFirstName = getFirstName(contained.patient);
          const inputFirstName = getFirstName(patient);
          const inputLastName = getLastName(patient);
          const containedLastName = getLastName(contained.patient);
          if (
            containedFirstName &&
            containedFirstName.toUpperCase() != inputFirstName!.toUpperCase()
          ) {
            items.push(
              <li>
                Eligibility check first name:{" "}
                <StyledText>{containedFirstName}</StyledText>
              </li>
            );
          }
          if (
            containedLastName &&
            containedLastName.toUpperCase() != inputLastName!.toUpperCase()
          ) {
            items.push(
              <li>
                Eligibility check last name:{" "}
                <StyledText>{containedLastName}</StyledText>
              </li>
            );
          }
        }
        if (contained && contained.patient && contained.patient.birthDate) {
          const inputDob = getBirthDateString(patient.birthDate!);
          const containedDob = contained.patient.birthDate
            ? getBirthDateString(contained.patient.birthDate)
            : undefined;
          if (
            containedDob &&
            containedDob.toUpperCase() != inputDob!.toUpperCase()
          ) {
            items.push(
              <li>
                Eligibility check birth date:{" "}
                <StyledText>{containedDob}</StyledText>
              </li>
            );
          }
        }

        if (contained && contained.coverage) {
          if (contained.coverage.grouping && contained.coverage.grouping.plan) {
            const containedPlan = contained.coverage.grouping.plan.value;
            const inputPlan = coverage!.grouping!.plan!.value;
            if (
              containedPlan &&
              inputPlan.toUpperCase() !== containedPlan.toUpperCase()
            ) {
              items.push(
                <li>
                  Eligibility check plan name:{" "}
                  <StyledText>{containedPlan}</StyledText>
                </li>
              );
            }
          }

          if (
            contained.coverage.grouping &&
            contained.coverage.grouping.group
          ) {
            const containedGroup = contained.coverage.grouping.group.value;
            const inputGroup = coverage!.grouping!.group!.value;
            if (
              containedGroup &&
              inputGroup.toUpperCase() !== containedGroup.toUpperCase()
            ) {
              items.push(
                <li>
                  Eligibility check group id:{" "}
                  <StyledText>{containedGroup}</StyledText>
                </li>
              );
            }
          }
          if (contained.coverage.grouping && contained.coverage.subscriberId) {
            const containedSubscriberId = contained.coverage.subscriberId.value;
            const inputSubscriberId = coverage!.subscriberId!.value;
            if (
              containedSubscriberId &&
              inputSubscriberId.toUpperCase() !==
                containedSubscriberId.toUpperCase()
            ) {
              items.push(
                <li>
                  Eligibility check member id:{" "}
                  <StyledText>{containedSubscriberId}</StyledText>
                </li>
              );
            }
          }
        }
      });
    }
    if (items.length > 0) {
      setDiscrepencies(items);
    } else {
      setDiscrepencies(undefined);
    }
  }, [eligibilityResponse]);

  if (Array.isArray(discrepancies) && discrepancies.length > 0) {
    return (
      <Container>
        <Body>
          Eligibility check returned the following{" "}
          {discrepancies.length == 1 ? "discrepancy" : "discrepancies"}:
        </Body>
        {discrepancies}
      </Container>
    );
  } else {
    return null;
  }
};

export const EligibilityWarningTable =
  withVirta<EligibilityWarningProps>(EligibilityWarning);
