import * as React from "react";
import codes from "iso-language-codes";
import { useIntl } from "react-intl";
import {
  Callout,
  styled,
  BasicDropdown,
  DropdownOptionProps,
} from "@virtahealth/components";
import { formatVirtaMessageOrString } from "@virtahealth/utils";

import { ScreenProps, InputScreen, saveButtonDescriptor } from "./InputScreen";

type LanguageProps = {
  onUnsupportedLanguage: (language: string) => void;
};

type LanguageScreenProps = ScreenProps & LanguageProps;

const DropdownWrapper = styled.View`
  height: 44px;
`;

const supportedLanguages = ["English", "Spanish"];

const unsupportedLanguageDescriptor = {
  id: "patientProfileUnsupportedLanguageDescription",
  defaultMessage:
    "Your experience will stay in your previously saved language, but this helps us understand what languages to add next.",
  description:
    "Warning paragraph in patient profile that the user's language isn't supported yet",
};

const unsupportedLanguageLabelDescriptor = {
  id: "patientProfileUnsupportedLanguageLabel",
  defaultMessage: "{language} isn't supported yet",
  description:
    "Warning label in patient profile that the user's language isn't supported yet. Expect the language name to be prepended.",
};

const languageExampleDescriptor = {
  id: "patientProfileLanguageSearch",
  defaultMessage: "Search Language",
  description: "Search language in patient profile",
};

const patientProfileLanguage = {
  id: "patientProfileLanguage",
  defaultMessage: "Primary Language",
  description: "Title for primary language row on patient profile",
};

const StyledCallout = styled(Callout)`
  margin-top: ${({ theme }) => theme.standardSpacingMedium}px;
  flex-basis: auto;
`;

// remove any details about the name, keep just the base name
const languages: DropdownOptionProps<string>[] = codes.map((item) => {
  const cleanNameArray = /[^(, ]*/.exec(item.name);
  const cleanName = cleanNameArray?.[0] as string;
  return {
    label: {
      id: item.iso639_1,
      defaultMessage: cleanName,
    },
    value: item.iso639_1,
  };
});

export const LanguageScreen: React.FunctionComponent<LanguageScreenProps> = (
  props
) => {
  const intl = useIntl();
  const formatMessage = formatVirtaMessageOrString(intl);

  const [value, setValue] = React.useState(
    languages.find((l) => l.value === props.value)
  );
  const [showWarning, setShowWarning] = React.useState(false);

  const tryChangeValue = React.useCallback((updatedValue: string) => {
    const language = languages.find((l) => l.value === updatedValue);

    // Check to see if the currently selected language is on our supported languages list
    const isSupported = supportedLanguages.includes(
      formatMessage(language?.label) as string
    );

    if (!isSupported) {
      // user tried to save an unsupported value, let them know
      setShowWarning(true);
      props.onUnsupportedLanguage(language!.value);
      return;
    }

    props.changeValue(language?.value || "");
  }, []);

  return (
    <InputScreen
      disableSave={props.disableSave}
      onPress={() => {
        tryChangeValue(value?.value || "");
      }}
      buttonText={saveButtonDescriptor}
      input={
        <>
          <DropdownWrapper style={{ height: 44 }}>
            <BasicDropdown<string>
              title={patientProfileLanguage}
              placeholderMessage={languageExampleDescriptor}
              options={languages}
              initialValue={value?.value}
              onSelectOption={(selectedLanguage) => {
                setValue(languages.find((l) => l.value === selectedLanguage));
                setShowWarning(false);
              }}
              filterFunction={(item, inputValue: unknown) =>
                (formatMessage(item.label) as string)
                  .toLowerCase()
                  .includes((inputValue as string).toLowerCase())
              }
              allowCustomValues={false}
              overlap={true}
            />
          </DropdownWrapper>
          {showWarning && (
            <StyledCallout
              intent="warning"
              title={unsupportedLanguageLabelDescriptor}
              description={unsupportedLanguageDescriptor}
              titleVariables={{
                language: formatMessage(
                  languages.find((l) => l.value === value?.value)?.label
                ) as string,
              }}
            />
          )}
        </>
      }
    />
  );
};
