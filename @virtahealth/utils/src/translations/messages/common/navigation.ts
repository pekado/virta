import { MessageDescriptor } from "react-intl";

export const en = {
  back: "Back",
  next: "Next",
  continue: "Continue",
  verifyButton: "Verify",
  submit: "Submit",
  logIn: "Log in",
  clickHere: "Click here",
  whoops: "Whoops!",
  pageError:
    "Sorry, an unexpected error was encountered. Please reload the page and try again. If you continue to see this error please contact {supportEmailLink}.",
};

export const es = {
  back: "Atrás",
  next: "Siguiente",
  continue: "Continuar",
  verifyButton: "Verificar",
  submit: "Enviar",
  logIn: "Inicie sesión",
  clickHere: "Haga clic aquí",
  whoops: "¡Uy!",
  pageError:
    "Lo sentimos, se produjo un error inesperado. Vuelva a cargar la página e inténtelo de nuevo. Si continúa viendo este error, escriba a {supportEmailLink}.",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  back: {
    id: "back",
    defaultMessage: en.back,
    description: "'Back' uppercase, used in EP",
  },
  next: {
    id: "next",
    defaultMessage: en.next,
    description: "'Next' uppercase, used in EP",
  },
  continue: {
    id: "continue",
    defaultMessage: en.continue,
    description: "'Continue' uppercase, used in EP",
  },
  verifyButton: {
    id: "verifyButton",
    defaultMessage: en.verifyButton,
    description: "Verify button text, used in EP",
  },
  submit: {
    id: "submit",
    defaultMessage: en.submit,
    description: "The word Submit. Used in participant_app_py, EP.",
  },
  logIn: {
    id: "logIn",
    defaultMessage: en.logIn,
    description: "Button for the user to log in, used in Atlas",
  },
  clickHere: {
    id: "clickHere",
    defaultMessage: en.clickHere,
    description: "click here button, EP",
  },
  whoops: {
    id: "whoops",
    defaultMessage: en.whoops,
    description: "The interjection Whoops!, used in EP",
  },
  pageError: {
    id: "pageError",
    description: "Generic error page message, used in EP",
    defaultMessage: en.pageError,
  },
};
