import * as React from "react";
import { AutoComplete } from "@virtahealth/components";
import { useIntl } from "react-intl";
import { listTimeZones } from "timezone-support";
import { formatToTimeZone } from "date-fns-timezone";
import {
  ScreenProps,
  InputScreen,
  saveButtonDescriptor,
  StyledError,
  AutoCompleteContainer,
} from "./InputScreen";

const invalidTimezoneDescriptor = {
  id: "patientProfileInvalidTimezone",
  defaultMessage: "Invalid Timezone",
  description: "Invalid timezone error in patient profile",
};

const timeZoneExampleDescriptor = {
  id: "patientProfileTimezoneExample",
  defaultMessage: "Example: America Denver/MST (-7)",
  description: "Example timezone in patient profile",
};

const timeZoneEmptyDescriptor = {
  id: "patientProfileTimezoneEmpty",
  defaultMessage: "No matching timezones",
  description: "Empty suggestion list for timezone in patient profile",
};

export const TimeZoneScreen: React.FunctionComponent<ScreenProps> = (props) => {
  const intl = useIntl();
  // The value we store is different than the value we display.
  // Do the conversion here because the two values will always have the same index
  // in their respective arrays
  const originalIndex = timeZoneList.indexOf(props.value);
  let originalValue = "";
  if (originalIndex >= 0) {
    originalValue = timeZoneListFormatted[originalIndex];
  }

  const tryChangeValue = () => {
    // do the value conversion again to make it savable
    const index = timeZoneListFormatted.indexOf(value);
    if (index < 0) {
      // user tried to save an invalid value
      setShowError(true);
      return;
    }
    const newVal = timeZoneList[index];
    props.changeValue(newVal);
  };

  const [value, setValue] = React.useState(originalValue);
  const [showError, setShowError] = React.useState(false);

  return (
    <InputScreen
      disableSave={props.disableSave}
      onPress={() => {
        tryChangeValue();
      }}
      buttonText={saveButtonDescriptor}
      input={
        <AutoCompleteContainer>
          <AutoComplete
            // Use the short list so the user doesn't see duplicates.
            // We'll use the full list for lookup
            data={timeZoneListFormattedShort}
            value={value}
            onChangeText={(text) => {
              setValue(text!);
              setShowError(false);
            }}
            emptyResultsMessage={timeZoneEmptyDescriptor}
            placeholderMessage={timeZoneExampleDescriptor}
            hasError={showError}
          />
          {showError && (
            <StyledError>
              {intl.formatMessage(invalidTimezoneDescriptor)}
            </StyledError>
          )}
        </AutoCompleteContainer>
      }
    />
  );
};

// get our initial list of timezones in a workable format
const timeZoneList = listTimeZones();
const timeZoneListWithInfo = timeZoneList.map((tz) => {
  const pattern = "Z (z)";
  const format = formatToTimeZone(Date.now(), pattern, { timeZone: tz });
  return `${tz} ${format}`;
});

// this converts the various timezones to the format:
// Continent CityOrCountry/TimeZoneAbreviation (TimeZoneHourDifference)
const ourFormat = (tz: string) => {
  // extract the timezone abreviation, if there is one
  const abrList = /\([A-Z]+\)/.exec(tz);
  // extract the utc difference
  // (11/11/21 Richard) Not touching regex for now...
  // eslint-disable-next-line no-useless-escape
  const difList = /[\+\-]\d\d\:\d\d/.exec(tz);
  // extract the first part of the location (continent)
  const locList = /.+?\//.exec(tz);
  // extract second part of the location (city or country)
  // (11/11/21 Richard) Not touching regex for now...
  // eslint-disable-next-line no-useless-escape
  const loc2List = tz.match(/\/[^ \/]+/g);

  let loc2 = "";
  // if there are 2 values for city/country, we have a state we need to get rid of
  if (loc2List) {
    if (loc2List.length > 1) {
      loc2 = loc2List[1];
    } else if (loc2List.length) {
      loc2 = loc2List[0];
    }
  }

  // now remove / and _ from locations and add a space
  let loc1 = "";
  if (locList && locList.length) {
    loc1 = locList[0].replace("/", "");
  }
  // edge case, dont show Etc
  if (loc1 === "Etc") {
    loc1 = "";
  }
  loc2 = loc2.replace(/\//g, "");
  loc2 = loc2.replace(/_/g, " ");
  if (loc2 && loc1) {
    loc1 = loc1 + " ";
  }

  // now remove () from abreviation and add a / if theres a location
  let abr = "";
  if (abrList && abrList.length) {
    abr = abrList[0].replace("(", "").replace(")", "");
  }
  // edge case, dont repeat a location that is a timezone
  if (loc1 === abr || loc2 === abr) {
    abr = "";
  }
  if (abr && (loc2 || loc1)) {
    abr = "/" + abr;
  }

  // now remove :00 as well as any trailing 0 from utc difference, add a space, and put it in ()
  let dif = "";
  if (difList && difList.length) {
    dif = difList[0].replace(":00", "").replace("+0", "+").replace("-0", "-");
  }
  if (dif) {
    dif = " (" + dif + ")";
  }

  // all together now!
  return `${loc1}${loc2}${abr}${dif}`;
};

// convert all the timezones to look pretty
const timeZoneListFormatted = timeZoneListWithInfo.map((tz) => ourFormat(tz));
// remove any duplicates resulting from the prettification
const timeZoneListFormattedShort = Array.from(new Set(timeZoneListFormatted));
