import { MessageDescriptor } from "react-intl";

export const en = {
  dateFormatString: "MM/DD/YYYY",
  phoneFormatString: "999-999-9999",
  add: "Add",
  addX: "Add {x}",
  name: "Name",
  email: "Email",
  password: "Password",
  notSure: "I'm not sure",
  // Errors
  required: "Required",
  invalidDate: "Please enter a valid date (MM/DD/YYYY)",
  enterValidEmail: "Please enter a valid email address",
  invalidPhone: "Required number format 999-999-9999",
  invalidNumber: "Must be a number",
  invalidMin: "Must be more than {min}",
  invalidMax: "Must be less than {max}",
  invalidMinArray: "Must have at least {min} items",
  invalidMaxArray: "Must have no more than {max} items",
  invalidWeight: "Invalid weight",
  invalidYear: "Invalid year",
  checkResponses: "Please check your responses above.",
  longString: "Text is too long",
};

export const es = {
  dateFormatString: "MM/DD/AAAA",
  phoneFormatString: "999-999-9999",
  add: "Agregar",
  addX: "Agregar {x}",
  name: "Nombre",
  email: "Correo electrónico",
  password: "Contraseña",
  notSure: "No lo sé con certeza",
  // Errors
  required: "Requerido",
  invalidDate: "Ingrese una fecha válida (MM/DD/AAAA)",
  enterValidEmail: "Ingrese un correo electrónico válido",
  invalidPhone: "Formato de número requerido: 999-999-9999",
  invalidNumber: "Debe ser un número",
  invalidMin: "Debe ser mayor que {min}",
  invalidMax: "Debe ser menor que {min}",
  invalidMaxCharacters: "Debe ser menor que {min} caracteres",
  invalidMinArray: "Debe tener al menos {min} elementos",
  invalidMaxArray: "No debe tener más de {max} elementos",
  invalidWeight: "Peso no válido",
  invalidYear: "Ingrese un año válido",
  checkResponses: "Verifique sus respuestas anteriores.",
  longString: "El texto es demasiado largo",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  dateFormatString: {
    id: "dateFormatString",
    description: "Placeholder for a proper date format",
    defaultMessage: en.dateFormatString,
  },
  phoneFormatString: {
    id: "phoneFormatString",
    description: "Placeholder for a proper phone number format",
    defaultMessage: en.phoneFormatString,
  },
  add: {
    id: "add",
    defaultMessage: en.add,
    description: "Imperative prompt to the user to add something",
  },
  addX: {
    id: "addX",
    defaultMessage: en.addX,
    description:
      "Imperative prompt to the user to add an additional (given) item to a list",
  },
  name: {
    id: "name",
    defaultMessage: en.name,
    description: "'Name' uppercase, used in EP",
  },
  email: {
    id: "email",
    defaultMessage: en.email,
    description: "'Email' uppercase, used in EP",
  },
  password: {
    id: "password",
    defaultMessage: en.password,
    description: "'Password' uppercase, used in EP",
  },
  notSure: {
    id: "notSure",
    defaultMessage: en.notSure,
    description: "the phrase I'm not sure, used in EP",
  },
  // Errors
  required: {
    id: "required",
    defaultMessage: en.required,
    description: "Validation error message for a field that must have a value",
  },
  enterValidEmail: {
    id: "enterValidEmail",
    defaultMessage: en.enterValidEmail,
    description: "Validation error message for an improper email",
  },
  invalidDate: {
    id: "invalidDate",
    defaultMessage: en.invalidDate,
    description: "Validation error message for invalid date, used in EP",
  },
  invalidZip: {
    id: "invalidZip",
    defaultMessage: "Invalid zip code",
    description: "Invalid Zip validation error text",
  },
  invalidPhone: {
    id: "invalidPhone",
    defaultMessage: en.invalidPhone,
    description: "Validation error for invalid phone number, used in EP",
  },
  invalidNumber: {
    id: "invalidNumber",
    defaultMessage: en.invalidNumber,
    description: "Number validation error text",
  },
  invalidMin: {
    id: "invalidMin",
    defaultMessage: en.invalidMin,
    description: "Min validation message",
  },
  invalidMax: {
    id: "invalidMax",
    defaultMessage: en.invalidMax,
    description: "Max validation message",
  },
  longString: {
    id: "longString",
    defaultMessage: en.longString,
    description: "Max character validation message",
  },
  invalidMinArray: {
    id: "invalidMinArray",
    defaultMessage: en.invalidMinArray,
    description: "Min array validation message",
  },
  invalidMaxArray: {
    id: "invalidMaxArray",
    defaultMessage: en.invalidMaxArray,
    description: "Max array validation message",
  },
  invalidWeight: {
    id: "invalidWeight",
    defaultMessage: en.invalidWeight,
    description: "Invalid weight validation error text",
  },
  invalidYear: {
    id: "invalidYear",
    defaultMessage: en.invalidYear,
    description: "Validation error message for invalid year, used in EP",
  },
  checkResponses: {
    id: "checkResponses",
    defaultMessage: en.checkResponses,
    description: "Generic error message to display at bottom of form",
  },
};
