import * as React from "react";
import { Platform } from "react-native";
import { useIntl } from "react-intl";
import { FormikValues, useFormikContext } from "formik";
import { Heading, styled, SubstrateBody } from "@virtahealth/components";
import * as icons from "@virtahealth/components/src/Icons";
import {
  getMessageFromTreeOrKey,
  formatVirtaMessageOrString,
} from "@virtahealth/utils";

import { Section } from "../types";
import { shouldShowDynamicFormComponent } from "../utils";
import { generateInterpolationValues } from "../interpolationUtils";
import Question from "./Question";

const isWeb = Platform.OS === "web";

export interface Props {
  schema: Section;
  formOnSubmitHook?: () => void;
}

const SectionContainer = styled.View`
  display: flex;
  flex-direction: column;
  ${isWeb ? "z-index: auto;" : ""}
`;

const SectionInfo = styled.View`
  margin-bottom: ${({ theme }) => theme.dynamicFormsSectionInfoSpacing}px;
`;

const SectionHeader = styled(Heading).attrs({
  size: 2,
})``;

const SectionDescription = styled(SubstrateBody).attrs({
  lineHeightMultiplier: 1.4,
})`
  margin-top: ${({ theme }) => theme.dynamicFormsSectionDescriptionSpacing}px;
`;

const StyledIconWrapper = styled.View`
  margin-top: 14px;
  align-items: center;
`;

const DynamicFormSection: React.FC<Props> = ({ schema }: Props) => {
  const intl = useIntl();
  const { values: allFormikValues } = useFormikContext<FormikValues>();
  const formatMessage = formatVirtaMessageOrString(intl);
  const { heading, questions, icon } = schema;
  const headingMessage = getMessageFromTreeOrKey(heading);
  const Icon = icon && icons[icon];

  return (
    <SectionContainer>
      <SectionInfo>
        {!!headingMessage && (
          <SectionHeader>{formatMessage(headingMessage)}</SectionHeader>
        )}
        {schema.description?.map((d) => (
          <SectionDescription key={d} size="small">
            {formatMessage({
              message: getMessageFromTreeOrKey(d),
              values: generateInterpolationValues(
                allFormikValues,
                schema.interpolation
              ),
            })}
          </SectionDescription>
        ))}
        {icon && Icon && (
          <StyledIconWrapper>
            <Icon width={120} style={{ marginTop: 24 }} />
          </StyledIconWrapper>
        )}
      </SectionInfo>
      {questions
        ?.filter((q) =>
          shouldShowDynamicFormComponent(allFormikValues, q.showWhen)
        )
        .map((q) => {
          return <Question {...q} key={q.key} id={q.key} />;
        })}
    </SectionContainer>
  );
};

export default DynamicFormSection;
