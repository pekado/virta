import { MessageDescriptor } from "react-intl";

export const en = {
  signIntoAccount: "Sign into your account",
  forgotPassword: "Forgot Password?",
  dontHaveAccount: "Don't have an account? {enrollButton}",
  enrollNow: "Enroll now",
  rememberMe: "Remember me",
};

export const es = {
  signIntoAccount: "Inicie sesión en su cuenta",
  forgotPassword: "Olvidé mi contraseña",
  dontHaveAccount: "¿No tiene una cuenta? {enrollButton}",
  enrollNow: "Inscríbase ahora",
  rememberMe: "Recordar mis datos",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  signIntoAccount: {
    id: "signIntoAccount",
    description: "Prompt to sign into one's account",
    defaultMessage: en.signIntoAccount,
  },
  forgotPassword: {
    id: "forgotPassword",
    description: "Forgotten password text, used in EP",
    defaultMessage: en.forgotPassword,
  },
  dontHaveAccount: {
    id: "dontHaveAccount",
    defaultMessage: en.dontHaveAccount,
    description: "A question about whether the user has an account yet",
  },
  enrollNow: {
    id: "enrollNow",
    defaultMessage: en.enrollNow,
    description: "A prompt to enroll",
  },
  rememberMe: {
    id: "rememberMe",
    description: "Text in Remember Me label",
    defaultMessage: en.rememberMe,
  },
};
