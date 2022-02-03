import { head, translationMessageToArgs } from "@virtahealth/utils";
import { IntlShape } from "react-intl";

import { DropdownOptionProps } from "./interfaces";

export function getOrCreateCustomOption<T>(
  value: T,
  options: DropdownOptionProps<T>[],
  allowCustomValues: boolean
) {
  // If we have no value to find, lets jet.
  if (!value) {
    return null;
  }

  // Try and fetch the option off the options that are available.
  const firstExistingOption = head(
    options.filter((option) => option.value === value)
  );

  // If we found an option, return that.
  if (firstExistingOption) {
    return firstExistingOption;
  }

  // If we are allowing custom values...
  if (allowCustomValues) {
    // Create one and return that.
    return {
      value: value,
      label: {
        id: String(value),
        defaultMessage: String(value),
      },
    };
  }

  return null;
}

export function searchFilter<T>(
  item: DropdownOptionProps<T>,
  intl: IntlShape,
  fieldValue: unknown | null,
  searchable?: boolean,
  filterFunction?: (
    filterQuery: DropdownOptionProps<T>,
    value: unknown
  ) => boolean
) {
  // If we have a filter function lets check its value
  if (filterFunction && !filterFunction(item, fieldValue)) {
    // If we have a function and it says we should not see this option...
    return false;
  }

  // If we are marked as searchable lets do some searching...
  if (searchable && fieldValue && typeof fieldValue == "string") {
    // Check the label!
    return (
      intl.formatMessage(...translationMessageToArgs(item.label)) as string
    )
      .toLowerCase()
      .includes(fieldValue.toLowerCase());
  }

  // If nothing else return true!
  return true;
}
