import { MessageDescriptor } from "react-intl";

export const en = {
  signIntoAccount: "Sign into your account",
  forgotPassword: "Forgot Password?",
  dontHaveAccount: "Don't have an account? {enrollButton}",
  enrollNow: "Enroll now",
  getInTouch: "How should we get in touch?",
  agreementToTermsAndPrivacy:
    "I have read and agree to the <t>Terms of Service</t> & <p>Privacy Policy</p>.",
  alreadyHaveApplication: "Already have an application started?",
  letsKeepInfoSafe: "Let's keep your info safe.",
  setPassword: "Set Password",
  passwordMinLength: "Password must be 8 characters or longer",
  oneLowercaseCharacter: "At least one lowercase character",
  minOneNumber: "At least one number",
  minOneSpecialCharacter: "At least one special character",
  oneUppercaseCharacter: "At least one uppercase character",
  verifyYourMobileNumber: "Verify your mobile number",
  sentVerificationCode:
    "We've sent a verification code to your phone number ending in {phoneNumber}. Please enter the 6 digit code below to continue.",
  codeRequiredLength: "Verification code must be 6 digits",
  resentVerificationCode: "Resend Verification Code",
  editPhoneNumber: "Edit your phone number",
  confirmOrEditPhoneNumber:
    "Please confirm or edit the mobile phone number below and click “Send Code”.",
  sendCode: "Send Code",
  stillHavingTrouble: "Still having trouble? <e>Contact us</e>.",
  getStarted: "Get Started",
  accountError:
    "We encountered an unexpected error creating your account. If you started an application in the past, log in to continue.",
};

export const es = {
  signIntoAccount: "Inicie sesión en su cuenta",
  forgotPassword: "Olvidé mi contraseña",
  dontHaveAccount: "¿No tiene una cuenta? {enrollButton}",
  enrollNow: "Inscríbase ahora",
  getInTouch: "¿Cómo deberíamos comunicarnos?",
  agreementToTermsAndPrivacy:
    "He leído y acepto los <t>Términos de servicio</t> y la <p>Política de privacidad</p>.",
  alreadyHaveApplication: "¿Ya ha iniciado una solicitud?",
  letsKeepInfoSafe: "Mantengamos su información segura.",
  setPassword: "Establecer contraseña",
  passwordMinLength: "La contraseña debe tener 8 caracteres o más",
  oneLowercaseCharacter: "Al menos una letra minúscula",
  minOneNumber: "Al menos un número",
  minOneSpecialCharacter: "Al menos un carácter especial",
  oneUppercaseCharacter: "Al menos una letra mayúscula",
  verifyYourMobileNumber: "Verifique su número de teléfono móvil",
  sentVerificationCode:
    "Enviamos un código de verificación a su número de teléfono que termina en {phoneNumber}. Para seguir, ingrese el código de 6 dígitos a continuación.",
  codeRequiredLength: "El código de verificación debe tener 6 dígitos",
  resentVerificationCode: "Reenviar código de verificación",
  editPhoneNumber: "Modifique el número telefónico",
  confirmOrEditPhoneNumber:
    "Confirme o modifique el número telefónico a continuación y haga clic en “Enviar código.”",
  sendCode: "Enviar código",
  stillHavingTrouble:
    "¿Sigue teniendo problemas? <e>Comuníquese con nosotros</e>.",
  getStarted: "Comenzar",
  accountError: "Encontramos un error inesperado al crear su cuenta.",
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
  getInTouch: {
    defaultMessage: en.getInTouch,
    description: "Prompt to enter contact info",
    id: "getInTouch",
  },
  agreementToTermsAndPrivacy: {
    id: "agreementToTermsAndPrivacy",
    description: "Agreement statement, used in EP",
    defaultMessage: en.agreementToTermsAndPrivacy,
  },
  alreadyHaveApplication: {
    id: "alreadyHaveApplication",
    description: "A question about whether the user has an account already",
    defaultMessage: en.alreadyHaveApplication,
  },
  letsKeepInfoSafe: {
    id: "letsKeepInfoSafe",
    description: "A nudge to keep information safe by creating a password",
    defaultMessage: en.letsKeepInfoSafe,
  },
  setPassword: {
    id: "setPassword",
    description: "Button label to save password, used in EP",
    defaultMessage: en.setPassword,
  },
  passwordMinLength: {
    id: "passwordMinLength",
    description: "Validation error for too short a password, used in EP",
    defaultMessage: en.passwordMinLength,
  },
  oneLowercaseCharacter: {
    id: "oneLowercaseCharacter",
    description: "Validation error for no lowercase character, used in EP",
    defaultMessage: en.oneLowercaseCharacter,
  },
  minOneNumber: {
    id: "minOneNumber",
    description: "Validation error for no number, used in EP",
    defaultMessage: en.minOneNumber,
  },
  minOneSpecialCharacter: {
    id: "minOneSpecialCharacter",
    description: "Validation error for no special character, used in EP",
    defaultMessage: en.minOneSpecialCharacter,
  },
  oneUppercaseCharacter: {
    id: "oneUppercaseCharacter",
    description: "Validation error for no uppercase character, used in EP",
    defaultMessage: en.oneUppercaseCharacter,
  },
  verifyYourMobileNumber: {
    id: "verifyYourMobileNumber",
    defaultMessage: en.verifyYourMobileNumber,
    description: "Imperative prompt to enter your verify your mobile number",
  },
  sentVerificationCode: {
    id: "sentVerificationCode",
    defaultMessage: en.sentVerificationCode,
    description: "Message when verification is sent, used in EP",
  },
  codeRequiredLength: {
    id: "codeRequiredLength",
    defaultMessage: en.codeRequiredLength,
    description:
      "Validation message instructing the user that the verifiaction code should be exactly 6 digits",
  },
  resentVerificationCode: {
    id: "resentVerificationCode",
    defaultMessage: en.resentVerificationCode,
    description: "Resent verification code message, used in EP",
  },
  editPhoneNumber: {
    id: "editPhoneNumber",
    defaultMessage: en.editPhoneNumber,
    description: "need to edit phone number link, EP",
  },
  confirmOrEditPhoneNumber: {
    id: "confirmOrEditPhoneNumber",
    defaultMessage: en.confirmOrEditPhoneNumber,
    description: "confirm or edit description, EP",
  },
  sendCode: {
    id: "sendCode",
    defaultMessage: en.sendCode,
    description: "button text on phone number input verification page, EP",
  },
  stillHavingTrouble: {
    id: "stillHavingTrouble",
    defaultMessage: en.stillHavingTrouble,
    description: "Phone verification having trouble message, used in EP",
  },
  getStarted: {
    id: "getStarted",
    description: "Imperative invitation to start an application",
    defaultMessage: en.getStarted,
  },
  accountError: {
    id: "accountError",
    description:
      "Letting the applicant know there was an error that may be a duplicate account",
    defaultMessage: en.accountError,
  },
};
