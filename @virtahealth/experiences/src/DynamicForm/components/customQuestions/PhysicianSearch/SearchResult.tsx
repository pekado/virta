import * as React from "react";
import { TouchableOpacity } from "react-native";
import { styled, SubstrateBody } from "@virtahealth/components";
import { SearchResult } from "./types";

const StyledAddressNameLine = styled(SubstrateBody).attrs({
  weight: "bold",
  size: "small",
})`
  margin-bottom: 8px;
`;

const StyledAddressLine = styled(SubstrateBody)`
  margin-bottom: 8px;
`;

const StyledProviderResultContainer = styled.View<{ isFirst: boolean }>`
  padding-top: 16px;
  padding-bottom: 8px;
  padding-horizontal: 20px;
  border-color: ${({ theme }) => theme.dynamicFormsQuestionSubitemBorderColor};
  border-top-width: ${({ isFirst }) => (isFirst ? 1 : 0)}px;
  border-bottom-width: 1;
`;

const ProviderSearchResult: React.FC<{
  isFirst: boolean;
  onSelectProvider: (provider: SearchResult) => void;
  searchResult: SearchResult;
}> = ({ isFirst, onSelectProvider, searchResult }) => {
  const {
    address: { address1, address2, city, province, postalCode },
    firstName,
    lastName,
  } = searchResult;

  if (!searchResult) {
    return null;
  }

  return (
    <TouchableOpacity onPress={() => onSelectProvider(searchResult)}>
      <StyledProviderResultContainer isFirst={isFirst}>
        <StyledAddressNameLine>
          {firstName} {lastName}
        </StyledAddressNameLine>
        {Boolean(address1) && <StyledAddressLine>{address1}</StyledAddressLine>}
        {Boolean(address2) && <StyledAddressLine>{address2}</StyledAddressLine>}
        {(Boolean(city) || Boolean(province) || Boolean(postalCode)) && (
          <StyledAddressLine>
            {Boolean(city) && `${city}, `}
            {Boolean(province) && `${province} `}
            {Boolean(postalCode) && postalCode}
          </StyledAddressLine>
        )}
      </StyledProviderResultContainer>
    </TouchableOpacity>
  );
};

export default ProviderSearchResult;
