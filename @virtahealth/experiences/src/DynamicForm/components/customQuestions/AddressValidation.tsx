import { ViewStyle, StyleProp } from "react-native";
import * as React from "react";
import { pick, isEqual, snakeCase, get, mapKeys } from "lodash";
import { useFormikContext, useField, FormikValues } from "formik";
import {
  RadioInputList,
  Spinner,
  styled,
  SubstrateBody,
  VirtaContextComponents,
} from "@virtahealth/components";
import { messageTree } from "@virtahealth/utils";
import { OptionProp } from "@virtahealth/components/src/RadioInput/RadioList";

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

export type AddressType = "homeAddress" | "shippingAddress";

export type Address = {
  address_1: string;
  address_2?: string;
  city: string;
  province: string;
  postal_code: string;
};

export type ValidatedAddressResult = {
  original: Address;
  suggested: Address;
};

type HomeAddress = {
  homeAddress1: string;
  homeAddress2?: string;
  homeCity: string;
  homeState: string;
  homeZip: string;
};

type ShippingAddress = {
  shippingAddress1: string;
  shippingAddress2?: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;
};

type CombinedAddress = HomeAddress | ShippingAddress;

interface Props {
  name: AddressType;
  style?: StyleProp<ViewStyle>;
}

const snakeCaseAddress = (addressMap: Address) =>
  mapKeys(addressMap, (_, key) => snakeCase(key));

const removeUndefinedStreetFromIntlString = (
  intlString: string,
  values: Address
) => (!values.address_2 ? intlString.replace(`{address_2}\n`, "") : intlString);

const generateSuggestedValueMessage = (
  originalAddress: Address,
  suggestedAddress: Address
) => {
  let defaultMessage = removeUndefinedStreetFromIntlString(
    messageTree.enrollment.aboutYou2.formattedAddress.defaultMessage as string,
    suggestedAddress
  );

  const values = Object.keys(suggestedAddress).reduce((result, key) => {
    if (
      originalAddress[key as keyof Address]?.toLowerCase() !==
      suggestedAddress[key as keyof Address]?.toLowerCase()
    ) {
      defaultMessage = defaultMessage.replace(
        `{${key}}`,
        `<${key}>${suggestedAddress[key as keyof Address]}</${key}>`
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
  }, suggestedAddress);

  return {
    message: {
      id: "suggestedFormattedAddress",
      defaultMessage,
    },
    values,
  };
};

export const AddressValidationQuestionField: React.FC<Props> = ({
  name,
  style,
}) => {
  const addressType = name === "homeAddress" ? "home" : "shipping";

  const addressFieldNames = React.useMemo(
    () => ({
      address1: `${addressType}Address1`,
      address2: `${addressType}Address2`,
      city: `${addressType}City`,
      zip: `${addressType}Zip`,
      state: `${addressType}State`,
    }),
    [addressType]
  );

  const { values, setValues, setFieldValue } = useFormikContext();
  const [field, meta] = useField<string | number>({ name });
  const error = meta.error ? meta.error : undefined;

  const [processing, setProcessing] = React.useState(false);
  const [options, setOptions] = React.useState<OptionProp[]>([]);
  const [apiError, setApiError] = React.useState("");

  const { enrollmentClient } = React.useContext(VirtaContextComponents);

  const validateAddressFunc = React.useCallback(
    async (originalAddress: Address) => {
      const originalAddressCamelCased = {
        [addressFieldNames.address1]: originalAddress.address_1,
        [addressFieldNames.address2]: originalAddress.address_2,
        [addressFieldNames.city]: originalAddress.city,
        [addressFieldNames.state]: originalAddress.province,
        [addressFieldNames.zip]: originalAddress.postal_code,
      };

      const newOptions: OptionProp[] = [
        {
          label: messageTree.enrollment.aboutYou2.originalAddress,
          description: {
            message: {
              ...messageTree.enrollment.aboutYou2.formattedAddress,
              defaultMessage: removeUndefinedStreetFromIntlString(
                messageTree.enrollment.aboutYou2.formattedAddress
                  .defaultMessage as string,
                originalAddress
              ),
            },
            values: originalAddress,
          },
          data: originalAddressCamelCased,
          value: "original",
        },
      ];

      let newValues: FormikValues = {
        [name]: "original",
      };

      try {
        setProcessing(true);
        const results: ValidatedAddressResult = await enrollmentClient!.post(
          "api/v1/address-validation",
          originalAddress
        );

        const originalResultsAddress: Address = snakeCaseAddress(
          results.original
        ) as Address;
        const suggestedResultsAddress: Address = snakeCaseAddress(
          results.suggested
        ) as Address;

        const suggestedResults = {
          [addressFieldNames.address1]: suggestedResultsAddress.address_1,
          [addressFieldNames.address2]: suggestedResultsAddress.address_2,
          [addressFieldNames.city]: suggestedResultsAddress.city,
          [addressFieldNames.state]: suggestedResultsAddress.province,
          [addressFieldNames.zip]: suggestedResultsAddress.postal_code,
        };

        if (!isEqual(originalAddressCamelCased, suggestedResults)) {
          newOptions.push({
            label: messageTree.enrollment.aboutYou2.suggestedAddress,
            description: generateSuggestedValueMessage(
              originalResultsAddress,
              suggestedResultsAddress
            ),
            data: suggestedResults,
            value: "suggested",
          });

          newValues = {
            ...suggestedResults,
            [name]: "suggested",
          };
        }
      } catch (e) {
        setApiError(e as string);
      }
      setOptions(newOptions);
      Object.keys(newValues).forEach((key) => {
        setFieldValue(key, newValues[key]);
      });
      setProcessing(false);
    },
    [enrollmentClient, name, addressFieldNames, setFieldValue]
  );

  React.useEffect(() => {
    if (!options.length && !processing) {
      const address = pick<CombinedAddress>(values as CombinedAddress, [
        addressFieldNames.address1,
        addressFieldNames.address2,
        addressFieldNames.city,
        addressFieldNames.state,
        addressFieldNames.zip,
      ]);

      const originalAddress: Address = {
        address_1: get(address, addressFieldNames.address1),
        address_2: get(address, addressFieldNames.address2),
        city: get(address, addressFieldNames.city),
        province: get(address, addressFieldNames.state),
        postal_code: get(address, addressFieldNames.zip),
      };

      validateAddressFunc(originalAddress);
    }
  }, [validateAddressFunc, values, options, addressFieldNames, processing]);

  const handleValueChange = (value: string | number, option: OptionProp) => {
    setValues({
      ...(values as Address),
      ...(option.data as CombinedAddress),
      [name]: value,
    });
  };

  return (
    <StyledContainer style={style} key={name}>
      {processing ? (
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
      {!!apiError && (
        <StyledErrorText size="xsmall" color="Danger" weight="light">
          {apiError}
        </StyledErrorText>
      )}
    </StyledContainer>
  );
};
