import { ViewStyle, StyleProp } from "react-native";
import * as React from "react";
import { isEqual } from "lodash";
import { useFormikContext, useField } from "formik";
import {
  RadioInputList,
  Spinner,
  styled,
  SubstrateBody,
  VirtaContextComponents,
} from "@virtahealth/components";
import { OptionProp } from "@virtahealth/components/src/RadioInput/RadioList";
import { getMessageFromTreeOrKey, messageTree } from "@virtahealth/utils";

const StyledContainer = styled.View`
  min-height: 120px;
  justify-content: center;
`;

const StyledRadioInputList = styled(RadioInputList)`
  width: 100%;
`;

const StyledErrorText = styled(SubstrateBody)`
  margin-top: 10px;
`;

const StyledSpinner = styled(Spinner)`
  flex: 1;
`;

export type InsuranceInfo = {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  inurancePlan: string;
  groupId: string;
  memberId: string;
};

export type ValidatedInsuranceInfoResult = {
  original: InsuranceInfo;
  suggested: InsuranceInfo;
};

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
}

const removeUndefinedValueFromIntlString = (
  intlString: string,
  values: InsuranceInfo
) => (!values.memberId ? intlString.replace(`{memberId}\n`, "") : intlString);

const generateSuggestedValueMessage = (
  originalInsuranceInfo: InsuranceInfo,
  suggestedInsuranceInfo: InsuranceInfo
) => {
  let defaultMessage = removeUndefinedValueFromIntlString(
    messageTree.enrollment.eligibility.formattedInsuranceInfo
      .defaultMessage as string,
    originalInsuranceInfo
  );

  const values = (
    Object.keys(suggestedInsuranceInfo) as Array<keyof InsuranceInfo>
  ).reduce((result, key) => {
    const insuranceInfoValue = originalInsuranceInfo[key];
    const suggestedInsuranceInfoValue = suggestedInsuranceInfo[key];
    if (
      (typeof insuranceInfoValue === "string" &&
        insuranceInfoValue?.toLowerCase() !==
          suggestedInsuranceInfoValue?.toLowerCase()) ||
      (typeof insuranceInfoValue === "number" &&
        insuranceInfoValue !== suggestedInsuranceInfoValue)
    ) {
      defaultMessage = defaultMessage.replace(
        `{${key}}`,
        `<${key}>${suggestedInsuranceInfoValue}</${key}>`
      );

      return {
        ...result,
        [key]: (chunks: string) => (
          <SubstrateBody
            color="Danger"
            size="small"
            weight="semibold"
            lineHeightMultiplier={1.5}
          >
            {chunks}
          </SubstrateBody>
        ),
      };
    } else {
      return result;
    }
  }, suggestedInsuranceInfo);
  return {
    message: {
      id: "suggestedFormattedInsuranceInfo",
      defaultMessage,
    },
    values,
  };
};

export const InsuranceValidationQuestionField: React.FC<Props> = ({
  style,
  name,
}) => {
  const { values, setValues, setFieldValue } = useFormikContext();
  const [field, meta] = useField<string>({ name });
  const error = meta.error ? meta.error : undefined;

  const [isProcessing, setIsProcessing] = React.useState(false);
  const [options, setOptions] = React.useState<OptionProp[]>([]);
  const [apiError, setApiError] = React.useState("");

  const { enrollmentClient } = React.useContext(VirtaContextComponents);

  const validateInsuranceInfo = React.useCallback(
    async (originalInsuranceInfo: InsuranceInfo) => {
      const newOptions: OptionProp[] = [
        {
          label: messageTree.enrollment.eligibility.originalInfo,
          description: {
            message: getMessageFromTreeOrKey(
              "enrollment.eligibility.formattedInsuranceInfo"
            ),
            values: originalInsuranceInfo,
          },
          data: originalInsuranceInfo,
          value: "original",
        },
      ];

      try {
        setIsProcessing(true);
        const results: ValidatedInsuranceInfoResult =
          await enrollmentClient!.post(
            "/eligibility_responses",
            originalInsuranceInfo
          );

        const resultsOriginalInsuranceInfo: InsuranceInfo = results.original;
        const resultsSuggestedInsuranceInfo: InsuranceInfo = results.suggested;

        if (
          !isEqual(resultsOriginalInsuranceInfo, resultsSuggestedInsuranceInfo)
        ) {
          const formattedSuggested = generateSuggestedValueMessage(
            resultsOriginalInsuranceInfo,
            resultsSuggestedInsuranceInfo
          );
          const suggestedResults = {
            label: messageTree.enrollment.eligibility.suggestedInfo,
            description: formattedSuggested,
            data: resultsSuggestedInsuranceInfo,
            value: "suggested",
          };
          newOptions.push(suggestedResults);
        }
        setIsProcessing(false);
      } catch (e) {
        setApiError(e as string);
      }
      setOptions(newOptions);
      setFieldValue(name, "suggested");
    },
    [enrollmentClient, name, setFieldValue]
  );
  React.useEffect(() => {
    if (!options.length && !isProcessing) {
      const originalInsuranceInfo: InsuranceInfo = values as InsuranceInfo;

      validateInsuranceInfo(originalInsuranceInfo);
    }
  }, [validateInsuranceInfo, values, options, isProcessing]);

  const handleValueChange = (value: string | number, option: OptionProp) => {
    setValues(option.data);
    setFieldValue("insuranceValidation", String(value));
  };

  return (
    <StyledContainer style={style}>
      {isProcessing ? (
        <StyledSpinner size="large" />
      ) : (
        <StyledRadioInputList
          isButton
          options={options}
          value={field.value}
          onChange={handleValueChange}
          error={error}
        />
      )}
      {!!apiError || (
        <StyledErrorText size="xsmall" color="Danger" weight="light">
          {apiError}
        </StyledErrorText>
      )}
    </StyledContainer>
  );
};
