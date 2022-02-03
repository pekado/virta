import * as React from "react";
import { styled, Button } from "@virtahealth/components";
import { useIntl, MessageDescriptor } from "react-intl";

const StyledPopularSearchOption = styled(Button).attrs(
  (): Pick<React.ComponentProps<typeof Button>, "appearance" | "intent"> => ({
    appearance: "link",
    intent: "secondary",
  })
)`
  margin-top: 12px;
`;

interface Props {
  message: MessageDescriptor;
  onSearchChange: (search: string) => void;
}

export function PopularSearchOption({ message, onSearchChange }: Props) {
  const intl = useIntl();

  return (
    <StyledPopularSearchOption
      labelMessage={message}
      onPress={() => onSearchChange(intl.formatMessage(message))}
    />
  );
}
