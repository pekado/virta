import { MessageDescriptor } from "react-intl";

export const en = {
  april: "April",
  august: "August",
  december: "December",
  february: "February",
  january: "January",
  july: "July",
  june: "June",
  march: "March",
  may: "May",
  november: "November",
  october: "October",
  september: "September",
};

export const es = {
  april: "Abril",
  august: "Agosto",
  december: "Diciembre",
  february: "Febrero",
  january: "Enero",
  july: "Julio",
  june: "Junio",
  march: "Marzo",
  may: "Mayo",
  november: "Noviembre",
  october: "Octubre",
  september: "Septiembre",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  january: {
    id: "january",
    description: "First month gregorian, used in EP",
    defaultMessage: en.january,
  },
  february: {
    id: "february",
    description: "Second month gregorian, used in EP",
    defaultMessage: en.february,
  },
  march: {
    id: "march",
    description: "Third month gregorian, used in EP",
    defaultMessage: en.march,
  },
  april: {
    id: "april",
    description: "Fourth month gregorian, used in EP",
    defaultMessage: en.april,
  },
  may: {
    id: "may",
    description: "Fifth month gregorian, used in EP",
    defaultMessage: en.may,
  },
  june: {
    id: "june",
    description: "Sixth month gregorian, used in EP",
    defaultMessage: en.june,
  },
  july: {
    id: "july",
    description: "Seventh month gregorian, used in EP",
    defaultMessage: en.july,
  },
  august: {
    id: "august",
    description: "Eighth month gregorian, used in EP",
    defaultMessage: en.august,
  },
  september: {
    id: "september",
    description: "Ninth month gregorian, used in EP",
    defaultMessage: en.september,
  },
  october: {
    id: "october",
    description: "Tenth month gregorian, used in EP",
    defaultMessage: en.october,
  },
  november: {
    id: "november",
    description: "Eleventh month gregorian, used in EP",
    defaultMessage: en.november,
  },
  december: {
    id: "december",
    description: "Twelfth month gregorian, used in EP",
    defaultMessage: en.december,
  },
};
