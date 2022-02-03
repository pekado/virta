import { styled, Button, Heading2, Label, Row } from "@virtahealth/components";

export const SectionHeading = styled(Heading2)`
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.questionItemHeadingBorderColor};
`;

export const FormWrapper = styled.View`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const RightPullView = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const defaultButtonWidth = 105;

export const StyledButton = styled(Button)`
  min-width: ${defaultButtonWidth}px;
`;

export const StyledLabel = styled(Label)`
  font-weight: 600;
  padding-bottom: 12px;
`;

export const WrappingRow = styled(Row)`
  flex-wrap: wrap;
`;

export const labCategory = {
  coding: [
    {
      code: "LAB",
      display: "Laboratory",
      system: "http://hl7.org/fhir/v2/0074",
    },
  ],
};

export const LAB_CORP_NAME = "LabCorp";
export const QUEST_NAME = "Quest";
