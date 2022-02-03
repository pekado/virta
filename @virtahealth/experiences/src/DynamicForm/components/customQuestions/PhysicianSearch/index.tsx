import * as React from "react";
import { ViewStyle, StyleProp, View, TouchableOpacity } from "react-native";
import { useFormikContext, useField, FormikValues } from "formik";
import { useIntl } from "react-intl";
import {
  Spinner,
  styled,
  SubstrateBody,
  VirtaContextComponents,
  InputField,
  Button,
  CloseSymbol,
} from "@virtahealth/components";
import {
  debounce,
  getMessageFromTreeOrKey,
  messageTree,
  VirtaIntlMessage,
} from "@virtahealth/utils";

import ProviderSearchResult from "./SearchResult";
import { SearchResult, SearchResultsByKey, SearchResultsJSON } from "./types";
import { createSearchResultKey } from "./utils";

const StyledLoadingContainer = styled.View`
  min-height: 120px;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledErrorText = styled(SubstrateBody)`
  margin-top: 10px;
`;

const StyledSpinner = styled(Spinner)`
  margin-top: 20px;
  flex: 1;
`;

const StyledInputField = styled(InputField)`
  margin-bottom: 10px;
`;

const StyledLinkButton = styled(Button).attrs({
  appearance: "link",
})`
  margin-bottom: 10px;
  align-self: flex-start;
`;

const StyledCloseSymbol = styled(CloseSymbol)`
  color: ${({ theme }) => theme.substrateTextColorBase};
  font-size: 20px;
  margin-left: 20px;
  margin-top: 40px;
`;

const StyledInputWrapper = styled.View`
  flex-direction: row;
`;

interface Props {
  name: string;
  labelMessage: VirtaIntlMessage;
  style?: StyleProp<ViewStyle>;
}

const PHYSICIANS_ROUTE = "/physicians";
const SEARCH_LIMIT = 10;
const SEARCH_DEBOUNCE_DELAY = 300; // give the user a bit of time to type
const PROVIDER_NAME_FIELD = "providerName";

export const PhysicianSearchField: React.FC<Props> = ({
  name,
  style,
  ...rest
}) => {
  const { values, setFieldValue, submitForm, setFieldError } =
    useFormikContext<FormikValues>();
  const [, nameMeta] = useField<string | number>(PROVIDER_NAME_FIELD);
  const [, fieldMeta] = useField<string | number>(name);

  // this means the user tried to advance without filling in the name
  const error = fieldMeta.touched && !nameMeta.value;
  const intl = useIntl();

  const [loading, setLoading] = React.useState(false);
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<SearchResultsByKey>(
    {}
  );
  const [apiError, setApiError] = React.useState("");

  const { enrollmentClient } = React.useContext(VirtaContextComponents);

  const labelMessage = {
    ...rest.labelMessage,
    values: {
      postalCode: values.postalZip,
    },
  };

  const getData = React.useCallback(
    async (postal_code: string, providerName: string) => {
      setLoading(true);
      setFieldError(name, undefined);
      if (apiError) {
        setApiError("");
      }
      try {
        const urlParams = new URLSearchParams({
          search: providerName,
          postal_code,
          limit: String(SEARCH_LIMIT),
        });
        const url = `${PHYSICIANS_ROUTE}?${urlParams.toString()}`;
        const { data } = await enrollmentClient!.get<SearchResultsJSON>(url);
        setSearchResults((searchResults): SearchResultsByKey => {
          return {
            ...searchResults,
            [createSearchResultKey(postal_code, providerName)]: data,
          };
        });
      } catch (e) {
        setApiError(e as string);
      } finally {
        setLoading(false);
        setHasLoaded(true);
      }
    },
    [enrollmentClient, setApiError, apiError]
  );

  //   eslint can't type `debounce` with `useCallback`
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetData = React.useCallback(
    debounce(getData, SEARCH_DEBOUNCE_DELAY, {
      trailing: true,
      leading: false,
    }),
    []
  );
  React.useEffect(() => {
    const { postalZip, providerName } = values;
    /**
     * we only perform the search if the user has entered a postal code & provider name
     * and the search hasn't been performed already (as indicated by the presense of the key)
     */
    if (
      postalZip &&
      providerName &&
      !(createSearchResultKey(postalZip, providerName) in searchResults)
    ) {
      debounceGetData(postalZip, providerName);
    }

    if (!providerName) {
      setHasLoaded(false);
    }
  }, [debounceGetData, enrollmentClient, values, searchResults]);

  const handleSelectProvider = async (value: SearchResult) => {
    await setFieldValue(name, value);
    submitForm();
  };

  const handleManualPress = async () => {
    await setFieldValue(name, {}, false);
    submitForm();
  };

  const list =
    searchResults[createSearchResultKey(values.postalZip, values.providerName)];

  return (
    <View style={style}>
      <StyledInputWrapper>
        <StyledInputField
          {...rest}
          name={PROVIDER_NAME_FIELD}
          labelMessage={labelMessage}
        />
        <TouchableOpacity
          onPress={() => setFieldValue(PROVIDER_NAME_FIELD, "")}
        >
          <StyledCloseSymbol />
        </TouchableOpacity>
      </StyledInputWrapper>
      {error && (
        <StyledErrorText size="xsmall" color="Danger" weight="light">
          {intl.formatMessage(messageTree.common.forms.required)}
        </StyledErrorText>
      )}
      {apiError && (
        <StyledErrorText size="xsmall" color="Danger" weight="light">
          {apiError}
        </StyledErrorText>
      )}
      <StyledLoadingContainer>
        {loading ? (
          <StyledSpinner size="large" />
        ) : (
          <>
            {list ? (
              list.map((searchResult, index) => (
                <ProviderSearchResult
                  key={index}
                  isFirst={index === 0}
                  onSelectProvider={handleSelectProvider}
                  searchResult={searchResult}
                />
              ))
            ) : hasLoaded ? (
              <SubstrateBody>
                {intl.formatMessage(
                  getMessageFromTreeOrKey(
                    "enrollment.physicianSearch.noProvidersFound"
                  )
                )}
              </SubstrateBody>
            ) : null}
          </>
        )}
      </StyledLoadingContainer>
      <StyledLinkButton
        labelMessage={getMessageFromTreeOrKey(
          "enrollment.physicianSearch.manuallyAddDetails"
        )}
        onPress={handleManualPress}
      />
    </View>
  );
};
