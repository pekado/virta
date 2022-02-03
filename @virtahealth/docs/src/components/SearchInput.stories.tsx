import * as React from "react";
import { SearchInput } from "@virtahealth/components";

export default {
  title: "Components / SearchInput",
  component: SearchInput,
};

export const Normal = () => (
  <SearchInput showCancel={false} value="" onChangeText={() => undefined} />
);

export const IsSearching = () => (
  <SearchInput showCancel={true} value="" onChangeText={() => undefined} />
);

export const Placeholder = () => (
  <SearchInput
    value=""
    onChangeText={() => undefined}
    placeholderMessage={{
      id: "testMessage",
      defaultMessage: "This is a test for storybook",
      description: "A storybook test",
    }}
  />
);

export const Value = () => (
  <SearchInput value="This is a test value!" onChangeText={() => undefined} />
);
