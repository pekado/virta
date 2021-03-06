/* eslint-disable max-lines */

import { es as forms } from "./messages/common/forms";
import { es as login } from "./messages/common/login";
import { es as navigation } from "./messages/common/navigation";
import { es as primitives } from "./messages/common/primitives";
import { es as profile } from "./messages/common/profile";

import { es as languages } from "./messages/constants/languages";
import { es as months } from "./messages/constants/months";
import { es as numbers } from "./messages/constants/numbers";
import { es as states } from "./messages/constants/states";

import { es as aboutYou1 } from "./messages/enrollment/aboutYou1";
import { es as aboutYou2 } from "./messages/enrollment/aboutYou2";
import { es as aboutYou3 } from "./messages/enrollment/aboutYou3";
import { es as aboutYou4 } from "./messages/enrollment/aboutYou4";
import { es as basicInformation } from "./messages/enrollment/basicInformation";
import { es as eligibility } from "./messages/enrollment/eligibility";
import { es as finalSteps } from "./messages/enrollment/finalSteps";
import { es as healthProfile1 } from "./messages/enrollment/healthProfile1";
import { es as healthProfile2 } from "./messages/enrollment/healthProfile2";
import { es as healthProfile3 } from "./messages/enrollment/healthProfile3";
import { es as healthProfile4 } from "./messages/enrollment/healthProfile4";
import { es as healthProfile5 } from "./messages/enrollment/healthProfile5";
import { es as healthProfile6 } from "./messages/enrollment/healthProfile6";
import { es as healthProfile7 } from "./messages/enrollment/healthProfile7";
import { es as healthProfile8 } from "./messages/enrollment/healthProfile8";
import { es as intakeScheduling } from "./messages/enrollment/intakeScheduling";
import { es as leadCapture } from "./messages/enrollment/leadCapture";
import { es as status } from "./messages/enrollment/status";
import { es as physicianSearch } from "./messages/enrollment/physicianSearch";
import { es as disqualifications } from "./messages/enrollment/disqualifications";
import { es as nonQualifications } from "./messages/enrollment/nonQualifications";
import { es as popularFood } from "./messages/food/popular";
import { en as virtaMeter } from "./messages/biomarkers/virtaMeter";

export const es: Record<string, string> = {
  fillAllFields:
    "Aseg??rese de haber completado todos los campos y vuelva a intentarlo",
  somethingWrongLoggedOut:
    "Algo sali?? mal. Parece que su sesi??n se encuentra cerrada.",
  somethingWrongOurEnd:
    "Algo sali?? mal. Vuelva a intentarlo y, si el problema persiste, escriba a support@virtahealth.com.",
  bloodPressure: "Presi??n arterial",
  glucose: "Glucosa",
  ketones: "Cetonas",
  symptoms: "S??ntomas",
  emptyString: " ",
  greetingMorning: "Buenos d??as, {name}",
  greetingEvening: "Buenas noches, {name}",
  greetingAfternoon: "Buenas tardes, {name}",
  today: "Hoy",
  history: "Historia",
  coaching: "Consejos",
  community: "Comunidad",
  more: "M??s",
  learn: "Aprender",
  support: "Asistencia",
  test: "Prueba",
  logOut: "Cerrar sesi??n",
  profileTitle: "Mi perfil",
  settings: "Ajustes",
  weeklySummary: "Resumen semanal",
  carePlanTitle: "Mi plan de atenci??n",
  hrLoveTitle: "??? Su departamento de RR. HH.",
  skills: "Habilidades",
  resourceCenter: "Centro de recursos",
  educationalVideos: "Videos educativos",
  foodGuide: "Gu??a de comidas",
  virtaCheatSheet: "Hoja de referencias de Virta",
  testNotificationsButton: "Probar las notificaciones push",
  supportCenter: "Centro de apoyo",
  requestSupplies: "Solicitar suministros",
  coachChangeTitle: "Solicitar cambio de asesor",
  feedback: "Retroalimentaci??n",
  biomarkerHeading: "Mi seguimiento",
  symptomFrequency: "Seg??n sea necesario",
  biomarkerFrequencyAtLeast: "Al menos {frequency}x/{cadence}",
  biomarkerFrequencySuggested: "Sugerido {frequency}x/{cadence}",
  week: "semana",
  day: "d??a",
  tryAgain: "Intentar de nuevo",
  delete: "Borrar",
  biomarkerSaveError: "No se pudo cargar la ??ltima lectura",
  dailyLog: "Registro diario",
  cancel: "Cancelar",
  confirm: "Confirmar",
  timeOfMeasurementLabel: "Tiempo medido",
  accessibilityButtonLabel: "Bot??n de {label}",
  save: "Guardar",
  over: "sobre",
  accessibilityInputLabel: "entrada de {label}",
  cuffIssues: "??Tiene problemas con su brazalete?",
  supportArticleViewLink: "Ver el art??culo del Centro de apoyo",
  "mg/dl": "mg/dl",
  lbs: "lb",
  "mmol/L": "mmol/l",
  "mm Hg": "mm Hg",
  g: "g",
  oz: "oz",
  scaleIssues: "??La b??scula no registra autom??ticamente?",
  troubleshootingViewLink: "Visite nuestra gu??a de soluci??n de problemas",
  confirmWeight: "Confirmar peso",
  weightConfirmationWarning:
    "El peso que ingres?? es significativamente diferente del ??ltimo ingresado de {latestWeight}. Verifique este valor y env??elo nuevamente si es correcto.",
  ok: "ACEPTAR",
  highKetoneInstructions:
    "Si su medidor indica 'ALTO' como valor de cetona, ingrese {MAX_KETONE_VALUE} y busque atenci??n de emergencia de inmediato.",
  ketoneSupplyTitle: "??Necesita m??s suministros?",
  ketoneSupplyLink: "Aprenda c??mo pedir m??s suministros",
  confirmKetones: "Confirmar cetonas",
  highKetonesConfirmationWarning:
    "Las lecturas de cetona mayores de {WARNING_KETONE_VALUE} son anormalmente altas. Confirme que esto sea correcto.",
  abnormalKetonesConfirmationWarning:
    "{ketone_value} es mucho {modifier} que su ??ltima lectura de {previous_ketone_value}. Confirme que esto sea correcto.",
  abnormalKetonesLess: "menor",
  abnormalKetonesGreater: "mayor",
  preMeal: "Antes de la comida",
  afterMeal: "Despu??s de comer",
  fasting: "Ayuno",
  glucoseFastingDescription:
    "Valores de glucosa tomados al menos 8 horas despu??s de la ??ltima ingesta cal??rica (alimento o bebida)",
  glucoseAfterMealDescription:
    "Valores de glucosa tomados despu??s de comer (puede incluir valores tomados antes de acostarse)",
  glucosePreMealDescription:
    "Valores de glucosa tomados justo antes de la comida (idealmente menos de 30 minutos antes de comer)",
  timeSinceMeal0: "Inmediatamente",
  timeSinceMeal1: "1 hora o menos",
  timeSinceMeal2: "2 horas",
  timeSinceMeal35: "3 a 5 horas",
  timeSinceMeal68: "6 a 8 horas",
  timeSinceMeal8: "M??s de 8 horas",
  glucoseReadingInstructions:
    "Si su gluc??metro indica 'ALTO', ingrese {MAX_GLUCOSE_VALUE}.\n" +
    "Si indica 'BAJO', ingrese {MIN_GLUCOSE_VALUE}.",
  readingType: "Tipo de lectura",
  timeSinceMealPrompt: "??Qu?? tanto tiempo despu??s de la comida?",
  meterIssues: "??Tiene problemas con su medidor?",
  headache: "Dolor de cabeza",
  symptomCrampsTwitching: "Calambres musculares/Tirones",
  dizziness: "Mareo",
  fatigue: "Fatiga",
  constipation: "Estre??imiento",
  diarrhea: "Diarrea",
  nausea: "N??useas",
  vomiting: "V??mitos",
  symptomFainting: "Desmayo/Desvanecimiento",
  heartPalpitations: "Palpitaciones card??acas",
  great: "Excelente",
  good: "Bien",
  okay: "Aceptable",
  bad: "Mal",
  no: "No",
  sometimes: "Algunas veces",
  often: "A menudo",
  always: "Siempre",
  yes: "S??",
  high: "Alto",
  medium: "Medio",
  low: "Bajo",
  veryLow: "Muy bajo",
  symptomsCoachQuestion: "??Quisiera conversar sobre esto con su entrenador?",
  symptomsTroubleshootingQuestion:
    "??Quisiera m??s informaci??n sobre su s??ntoma?",
  symptomsTroubleshootingPrompt:
    "Le haremos una serie de preguntas sobre soluci??n de problemas para ayudarlo a comprender su s??ntoma",
  selectAnswerPrompt: 'Seleccione una respuesta para "{question}"',
  additionalDetailsPrompt: "Br??ndele m??s detalles a su entrenador (opcional)",
  additionalDetailsExcludeInfo:
    "Nota: no hay necesidad de ingresar valores de cetona y glucosa aqu??.",
  otherSymptomsMaxLengthError:
    "Caracteres m??ximos permitidos: {MAX_OTHER_SYMPTOMS_LENGTH}",
  symptomsPrompt:
    "H??ganos saber c??mo se siente. Solo indique cualquier s??ntoma nuevo o que empeora.",
  mood: "Humor",
  hunger: "Hambre",
  cravings: "Antojos",
  energy: "Energ??a",
  validWeightPrompt: "Ingrese un peso v??lido",
  validWeightBetweenPrompt:
    "Ingrese un peso v??lido entre {MIN_WEIGHT} y {MAX_WEIGHT} lb.",
  validGlucosePrompt: "Ingrese una lectura v??lida de glucosa",
  glucoseTooHighPrompt:
    "Si su lectura de glucosa en sangre es m??s de {MAX_GLUCOSE_VALUE}, p??ngase en contacto inmediatamente con su entrenador(a) de salud.",
  glucoseTooLowPrompt:
    "Si su lectura de glucosa en sangre es menos de {MIN_GLUCOSE_VALUE}, p??ngase en contacto inmediatamente con su entrenador(a) de salud.",
  measurementTimeRequired: "Elija una hora de medici??n para su lectura",
  measurementTypeRequired: "Elija un tipo de lectura",
  measurementAfterMealTimeRequired:
    "Incluya el tiempo transcurrido entre la comida y la toma de la lectura",
  validKetonesPrompt: "Ingrese un valor de cetonas v??lido.",
  singleDecimalPrompt: "Ingrese solo un decimal, por ejemplo, 0.5",
  ketonesTooLowPrompt:
    "Ingrese lecturas v??lidas de cetonas, por ejemplo, un n??mero positivo.",
  ketonesTooHighPrompt:
    "Los valores de cetonas mayores de {MAX_KETONE_VALUE} son muy inusuales. Si cometi?? un error, vuelva a ingresar su valor. Si este es un valor real, busque inmediatamente atenci??n de emergencia.",
  validBloodPressurePrompt: "Ingrese una presi??n arterial v??lida",
  wholeNumberPrompt: "Ingrese un n??mero entero",
  validBloodPressureTopBetweenPrompt:
    "Ingrese una presi??n sist??lica (superior) v??lida (usualmente entre {MIN_SYSTOLIC_BP_VALUE} y {MAX_SYSTOLIC_BP_VALUE}).",
  validBloodPressureBottomBetweenPrompt:
    "Ingrese una presi??n diast??lica (inferior) v??lida (usualmente entre {MIN_DIASTOLIC_BP_VALUE} y {MAX_DIASTOLIC_BP_VALUE}).",
  symptomsAtLeastOnePrompt: "Registre al menos un valor.",
  readingSubmitError: "No envi?? la lectura",
  weightSubmitSuccess: "Peso enviado exitosamente.",
  bloodPressureSubmitSuccess: "Presi??n arterial enviada exitosamente.",
  ketonesSubmitSuccess: "Cetonas enviadas exitosamente.",
  symptomsSubmitSuccess: "Registro diario enviado exitosamente.",
  glucoseSubmitSuccess: "Glucosa enviada exitosamente.",
  biometricsSubmitSuccess: "Biometr??a enviada exitosamente.",
  done: "Listo",
  ketonesReflectonHeader: "Comprenda sus cetonas",
  glucoseReflectionHeader: "Gracias por reflexionar\nsobre su comida",
  glucoseReflectionNutritionGuide:
    "Revise las gu??as de nutrici??n a continuaci??n para conocer m??s. Use la contrase??a: virta",
  glucoseChatPartOne: "Converse con su entrenador(a) de salud",
  glucoseChatPartTwo: " acerca de los alimentos sobre los que tiene dudas",
  discover: "Descubrir",
  spanishCalloutTitle: "??Hemos agregado m??s recursos en Espa??ol!",
  spanishCalloutAction: "Echale un vistazo",
  contentFetchErrorMessage: "",
  biomarkerInvalidTime: "Esta fecha no es v??lida. Intente de nuevo.",
  biomarkerFutureTime: "Esta fecha es futura. Intente de nuevo.",
  glucoseFeedbackHeader: "Acerca de su valor de glucosa",
  glucoseAccessibilityMessages: "Mensajes sobre glucosa",
  reflectionAccessibilityMessages: "Considere",
  gotIt: "??Entendido!",
  achievementsAccessibilityMessages: "Logros",
  selectDate: "Seleccionar fecha",
  selectTime: "Seleccionar hora",
  weightEntryInstructions:
    "S??base a la b??scula de Virta o, si es necesario, agregue su peso manualmente.",
  date: "Fecha",
  bloodPressureTopGreater:
    "La presi??n sist??lica debe ser mayor que la diast??lica (p. ej., 120 sobre 80).",
  bloodPressureBotLesser:
    "La presi??n diast??lica debe ser menor que la sist??lica (p. ej., 120 sobre 80).",
  glucosePrompt: "??Cu??les son sus niveles de glucosa hoy?",
  bloodPressurePrompt: "??Cu??l es su presi??n arterial hoy?",
  weightPrompt: "??Cu??l es su peso hoy?",
  ketonesPrompt: "??Cu??l es su nivel de cetonas hoy?",
  lastEntryLabel: "??ltima entrada",
  errors: "Errores",
  addBiomarker: "Agregar biomarcadores adicionales",
  confirmingEmail: "Confirmando la direcci??n de correo electr??nico",
  pleaseWait: "Espere mientras confirmamos su direcci??n de correo electr??nico.",
  confirmDob: "Para mayor seguridad, confirme su fecha de nacimiento.",
  identityConfirmed: "??Identidad confirmada!",
  logInToContinueEnrollment: "Inicie sesi??n para continuar con la inscripci??n.",
  securityQuestion: "Pregunta de seguridad",
  emailVerificationSent:
    "Hemos enviado instrucciones para verificar su correo electr??nico",
  instructionsSent:
    "Hemos enviado instrucciones para verificar su correo electr??nico a:",
  pleaseCheckEmailForEmailVerification:
    "Revise su bandeja de entrada en busca de las instrucciones de verificaci??n por correo electr??nico de Virta Health.",
  confirmationFailed: "La confirmaci??n de la identidad fall??",
  accountLockedForSecurity:
    "Lo sentimos, su cuenta se ha bloqueado por motivos de seguridad. Para desbloquearla, debe verificar su identidad escribiendo a {supportEmailLink} para obtener ayuda.",
  couldntConfirmIdentityContact:
    "Lo sentimos. No podemos confirmar su identidad. Escriba a {supportEmailLink} para recibir ayuda.",
  checkEmailForPasswordReset:
    "Revise su bandeja de entrada en busca de las instrucciones para restablecer su contrase??a de Virta Health.",
  stillHaventReceivedEmail:
    "??No recibi?? el correo electr??nico? Verifique que la direcci??n de correo electr??nico que se indica con anterioridad sea correcta.",
  passwordResetInstructionsSent:
    "Hemos enviado instrucciones para restablecer su contrase??a",
  locationSent:
    "Si existe una cuenta con este correo electr??nico, se enviaron instrucciones para restablecer su contrase??a a:",
  caseRequirement: "Al menos una letra min??scula y una letra may??scula",
  characterRequirement: "Al menos un car??cter especial (&, #, !, etc.)",
  continueEnrollment: "Contin??e con su inscripci??n.",
  lengthRequirement: "Al menos 8 caracteres",
  newReset:
    "<l>Haga clic aqu??</l> a fin de enviar un nuevo correo para restablecer su contrase??a.",
  notVerified:
    "Su direcci??n de correo electr??nico no ha sido verificada. Revise su bandeja de entrada en busca de un correo electr??nico de confirmaci??n de Virta Health.",
  numberRequirement: "Al menos un n??mero",
  reinforceSuccess: "Su contrase??a se estableci?? correctamente.",
  passwordRequirements: "Requisitos para la contrase??a",
  resetExpired: "Su correo electr??nico para restablecer la contrase??a expir??.",
  setToSave:
    "Elija una contrase??a. Esto lo ayudar?? a guardar su progreso y proteger su informaci??n.",
  setYourPassword: "Establezca su contrase??a",
  successfullySet: "Contrase??a establecida correctamente",
  verificationEmailExpired: "El correo electr??nico de verificaci??n expir??",
  resendVerificationEmail: "Reenviar correo electr??nico de verificaci??n",
  tryEmailVerificationAgain:
    "Lo sentimos, el correo electr??nico de verificaci??n expir??. Ingrese su correo electr??nico a continuaci??n para que le enviemos un nuevo correo de verificaci??n.",
  forgotPasswordTitle: "Olvid?? mi contrase??a",
  forgotPasswordInstructions:
    "Ingrese su correo electr??nico a continuaci??n para que podamos brindarle instrucciones para restablecer su contrase??a.",
  sendInstructions: "Enviar instrucciones",
  noAccountApplyNow: "??No tiene una cuenta? <l>Env??e su solicitud ahora</l>.",
  continueVirtaEnrollment: "Continuar con la inscripci??n en Virta",
  invalidLogin:
    "Correo electr??nico o contrase??a inv??lido. Si tiene problemas para iniciar sesi??n, haga clic en ???Olvid?? mi contrase??a???.",
  rememberToVerify: "Recuerde verificar su cuenta",
  ifYouHaventVerified:
    "Si a??n no lo hizo, verifique su cuenta haciendo clic en ???Continuar??? en el correo electr??nico de confirmaci??n.",
  none: "Ninguno",
  notConfident: "No est?? seguro",
  veryConfident: "Muy seguro",
  communicationDisqualification: "No se puede comunicar en ingl??s",
  smartphoneDisqualification: "No tiene acceso a un tel??fono inteligente",
  yourInfoProtectedAndConfidential:
    "Su informaci??n m??dica est?? protegida y es absolutamente confidencial. Virta solo compartir?? su informaci??n m??dica con las personas autorizadas, lo que incluye a sus proveedores, las personas que administran sus beneficios de salud y los terceros que nos ayudan a proporcionar nuestros servicios. Virta nunca compartir?? su informaci??n de salud con personas de su empresa que no est??n involucradas en la administraci??n de sus beneficios de salud o con otros terceros.",
  biQuestionsContact:
    "??Tiene preguntas? Env??e un correo electr??nico a {supportEmailLink}.",
  eligibilityBasedOnCriteria:
    "La elegibilidad se basa en el cumplimiento de los criterios aplicables. El env??o de una solicitud no garantiza la aceptaci??n en Virta.",
  firstStepInLearningMore:
    "El primer paso para saber m??s sobre el tratamiento Virta es programar una llamada gratuita con uno de nuestros asesores de inscripci??n, quien evaluar?? c??mo podr??a funcionar Virta para usted.",
  basicInformation: "Informaci??n b??sica",
  basicInformationInstructions:
    "Proporcione algunos datos b??sicos de contacto, cobertura y salud para que nuestro equipo pueda preparar la llamada. Podr?? programar la llamada despu??s de enviar esta informaci??n.",
  generalInformation: "Informaci??n general",
  accountCreationFailed:
    "Error al crear la cuenta. Se ingres?? un correo electr??nico inv??lido.",
  type2: "Diabetes tipo 2",
  preD: "Prediabetes",
  preD35: "Prediabetes con un IMC superior a 35",
  preD34: "Prediabetes con un IMC superior a 34",
  type2NotMetformin:
    "Diabetes de tipo 2 con una medicaci??n que cubre los requisitos",
  obesity30: "Obesidad con IMC superior a 30",
  notQualified: "No cumple los criterios de calificaci??n",
  qualifiedNoDx: "Cumple los criterios de calificaci??n",
  nextStepIsIntakeCall:
    "El siguiente paso es programar una llamada con un asesor de inscripci??n que pueda responder a cualquier pregunta sobre estos criterios.",
  emailAssistance:
    "Si tiene alguna pregunta o necesita ayuda, env??e un correo electr??nico a {supportEmailLink}.",
  contactPleaseEmail:
    "??Tiene preguntas? Env??e un correo electr??nico a nuestro equipo de asistencia:",
  prelaunchHeader: "Gracias por su solicitud.",
  prelaunchInstructions:
    "{payerName} ofrece Virta a partir del {goLiveDateString}, por lo que hemos suspendido su inscripci??n y lo hemos a??adido a la lista de espera.",
  prelaunchInstructionsFooter:
    "Nos pondremos en contacto con usted tan pronto como se abra la inscripci??n. Est?? atento a su correo electr??nico para recibir m??s instrucciones.",
  instructionsHeader: "Instrucciones para la lista de espera",
  prelaunchSubheader: "Se le ha a??adido a la lista de espera.",
  invalidHeight: "Estatura no v??lida; debe ser mayor que 2 pies",
  costOfVirta: "Costo del tratamiento Virta",
  costOfVirtaSubheader:
    "Sus gastos por cuenta propia para Virta dependen de los detalles de su plan y del estado del deducible.",
  specialCost:
    "<x>Los miembros con cobertura activa de {insuranceProvider} pagan</x><y>${price} por mes</y><z>en concepto de gastos por cuenta propia.</z>",
  standardCost:
    "<x>El precio est??ndar de Virta es de</x><y>*$249 por mes</y><z>*Tambi??n hay una tarifa ??nica de $250 por el kit de suministros que se paga por adelantado. Su kit incluye una b??scula de peso corporal que se conecta al celular, suministros para medir el az??car y las cetonas en sangre, y m??s.</z>",
  learnMore: "Obtenga m??s informaci??n",
  noCostToApply:
    "*Tenga en cuenta que el proceso de inscripci??n no tiene costo alguno y que puede seguir adelante y obtener m??s informaci??n sin iniciar el pago.",
  apiError:
    "Lo sentimos, se produjo un error inesperado. Int??ntelo de nuevo m??s tarde.",
  communicationAgreement:
    "Al marcar la casilla, acepta que nos comuniquemos con usted por correo electr??nico y mensajes de texto. Adem??s, reconoce que el correo electr??nico y los mensajes de texto no siempre son formas seguras de comunicaci??n y que Virta no puede garantizar la seguridad y confidencialidad de la informaci??n intercambiada mediante estos m??todos.",
  limitedCommunication:
    "Virta se toma la seguridad y la privacidad muy en serio y hace todo lo posible para limitar la comunicaci??n en estas plataformas a lo que es indispensable para su atenci??n.",
  mustAcceptTerms:
    "Debe aceptar los T??rminos de servicio y la Pol??tica de privacidad",
  badAge: "La edad ingresada debe ser un n??mero entero",
  badWeight: "El peso ingresado debe ser un n??mero entero",
  invalidAge: "Ingrese una edad v??lida",
  longPhone: "El n??mero es demasiado largo",
  longZip: "El c??digo postal es demasiado largo",
  shortPhone: "El n??mero es demasiado corto",
  shortZip: "El c??digo postal es demasiado corto",
  stepXOfY: "Paso {x} de {y}",
  dayUppercase: "D??a",
  dob: "Fecha de nacimiento",
  faq: "Preguntas frecuentes",
  month: "Mes",
  optional: "Opcional",
  optionalPreferredName: "Opcional (si es diferente al nombre)",
  previous: "Anterior",
  unsure: "No estoy seguro",
  year: "A??o",
  and: "y",
  here: "aqu??",
  loading: "Cargando...",
  applicationClosed: "Solicitud cerrada",
  sorryYourApplicationClosed:
    "Lo sentimos. Hemos cerrado su solicitud de Virta. Si sigue interesado en presentar una solicitud para Virta, escriba a {supportEmailLink}.",
  yourHIP: "Su proveedor de seguro m??dico",
  enrollmentSaved:
    "Se ha guardado el progreso de su inscripci??n al d??a de hoy.",
  allSpotsFilled: "Lamentablemente, ya se ha cubierto el cupo de Virta.",
  limitedSpots: "{insuranceProvider} ofrece un cupo limitado en Virta.",
  unableToOfferAdditionalSpots:
    "En este momento, el cupo de Virta se ha cubierto y no podemos ofrecer cupos adicionales. Le pedimos disculpas y agradecemos el tiempo que invirti?? para formar parte de Virta.",
  wantMoreInfo: "??Desea obtener m??s informaci??n?",
  checkYourEmail: "Revise su correo electr??nico para obtener m??s detalles.",
  didntReceiveEmail: "??No recibi?? el correo electr??nico?",
  pleaseEmail: "Env??e un correo electr??nico a {supportEmailLink}.",
  thanksForSubmitting: "??Gracias por presentar su informaci??n, {userName}!",
  getStartedOnFinalStep:
    "Puede proceder al ??ltimo paso de la inscripci??n, que consiste en obtener una autorizaci??n m??dica para unirse a Virta.",
  confirmInformation: "Confirmar informaci??n",
  medicalClearance: "Autorizaci??n m??dica",
  startingVirta: "Primeros pasos en Virta",
  onceStepsAreComplete:
    "Una vez que complete estos pasos, Virta tendr?? todo lo que necesita para aprobar su inscripci??n.",
  videoAppointmentTitle: "Consulta m??dica por video",
  videoAppointmentDescription:
    "Programe una consulta gratuita y sin compromiso por video con un proveedor m??dico de Virta.",
  scheduleVisit: "Programar consulta",
  seeVisitDetails: "Ver los detalles de la consulta",
  attendVisit: "Asistir a una consulta",
  rescheduleVisit: "Reprogramar una consulta",
  intakeCallTitle: "Llamada de admisi??n",
  intakeCallDescription:
    "Conozca a su asesor de inscripci??n por tel??fono y obtenga m??s informaci??n sobre c??mo funciona Virta.",
  labsTaskTitle: "Estatus de las pruebas de laboratorio",
  labsTaskDescription:
    "Env??e a Virta los resultados de un conjunto b??sico de pruebas de laboratorio.",
  completeLabs: "Completar pruebas de laboratorio",
  roiTitle: "Revelaci??n de informaci??n",
  roiDescription:
    "Firme nuestro formulario de Revelaci??n de informaci??n, para que el equipo cl??nico de Virta pueda solicitar registros m??dicos a su proveedor de atenci??n primaria.",
  weUnderstand:
    "Entendemos que asistir al laboratorio no es una buena opci??n para muchos pacientes debido a la pandemia del coronavirus. Para quienes deseen evitar las citas presenciales, Virta ofrece m??todos de toma de muestras a domicilio totalmente cubiertos para realizar las pruebas b??sicas que requiere la inscripci??n. Hablar?? sobre las opciones de pruebas de laboratorio a domicilio con su asesor de inscripci??n durante la llamada de admisi??n.",
  forThose:
    "Si prefiere las citas presenciales, puede ver las opciones de inscripci??n para pruebas de laboratorio habituales de Virta <l>aqu??</l>.",
  labs: "Pruebas de laboratorio",
  localCoveredClinic: "Cl??nica local cubierta: cobertura total",
  ifNearClinic:
    "Si se encuentra cerca de una cl??nica con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  labsFirstStep: "Paso 1: Generar formularios para las pruebas de laboratorio",
  seeClinicList:
    "Para ver la lista de cl??nicas cubiertas, haga clic en el bot??n ???Obtener formularios???, a continuaci??n. Aseg??rese de completar todas las secciones y descargar e imprimir ambos formularios de la orden.",
  getForms: "Obtener formularios",
  labsSecondStep: "Paso 2: Realizar las pruebas de laboratorio",
  printOrderForms:
    "Imprima los formularios de la orden y ll??velos a una cl??nica cubierta para realizar sus pruebas de laboratorio.",
  youMustFast:
    "Recordatorio: Debe mantener un ayuno de 9 horas como m??nimo antes de realizarse las pruebas de laboratorio.",
  localCoveredClinicLocation: "Ubicaci??n de la cl??nica local cubierta",
  clickGetForms:
    "Para ver la lista de cl??nicas locales cubiertas y sus ubicaciones, haga clic en el bot??n ???Obtener formularios??? que se encuentra arriba.",
  receiveDocusignEmail:
    "Recibir?? un correo electr??nico de DocuSign con el c??digo de acceso. Si no encuentra el correo electr??nico con el c??digo de acceso, revise la carpeta de correo no deseado.",
  labCorpFullyCovered: "LabCorp: cobertura total",
  ifNearLab:
    "Si se encuentra cerca de un laboratorio con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  makeSureToCompleteOrderForm:
    "Aseg??rese de completar todas las secciones y descargar e imprimir el formulario de la orden.",
  printMedLabForm:
    "Imprima el ???Formulario de orden m??dica de pruebas de laboratorio??? (primera p??gina) y ll??velo a un establecimiento cercano de LabCorp. Si necesita ayuda para localizar un establecimiento, consulte a continuaci??n.",
  preferPCP:
    "Si prefiere recurrir a su proveedor de atenci??n primaria para realizarse las pruebas de laboratorio en lugar de recurrir a LabCorp, puede proporcionarle el formulario de la orden de pruebas de laboratorio; sin embargo, usted deber?? pagar los gastos por cuenta propia.",
  noApptNecessary:
    "No es necesario programar una cita para realizarse las pruebas de laboratorio.",
  scheduleApptWithFollowingInfo:
    "Sin embargo, si desea programar una cita, use la siguiente informaci??n para completar el <l>formulario de solicitud de cita</l>:",
  selectRoutineLabWork:
    "Cuando se le pregunte qu?? servicio desea, seleccione ???pruebas de laboratorio de rutina???",
  sayYesToFasting:
    "Elija la opci??n ???s????? cuando se le pregunte si estar?? en ayunas",
  sayMyEmployerWillPay:
    "Con respecto al m??todo de pago, seleccione ???Mi empleador u otra empresa pagar?? la consulta???",
  doINeedToSchedule:
    "??Debo programar una cita para hacerme pruebas de laboratorio en LabCorp?",
  whereIsMyAccessCode:
    "??D??nde est?? mi c??digo de acceso para los formularios de mi orden de pruebas de laboratorio?",
  willReceiveDocusignEmail:
    "Recibir?? un correo electr??nico de DocuSign con el c??digo de acceso. Si no encuentra el correo electr??nico con el c??digo de acceso, revise la carpeta de correo no deseado.",
  howMuchLabCost: "??Cu??nto costar??n las pruebas de laboratorio?",
  virtaCoversLabCost:
    "Virta cubre el costo de las pruebas de laboratorio que se realicen en LabCorp con el formulario de orden de pruebas de laboratorio proporcionado por Virta. Si prefiere recurrir a su m??dico de atenci??n primaria para realizarse las pruebas de laboratorio en lugar de recurrir a LabCorp, puede proporcionarle el formulario de la orden de pruebas de laboratorio; sin embargo, usted deber?? pagar los gastos por cuenta propia.",
  whereToSeeResults: "??D??nde puedo ver mis resultados de LabCorp?",
  toSeeResultsGoTo:
    "Si desea ver sus resultados de LabCorp, visite <l>patient.labcorp.com</l> y cree una cuenta.",
  yourPCPNotCovered: "Su proveedor de atenci??n primaria: sin cobertura",
  getYourLabs:
    "Puede pedirle a su proveedor de atenci??n primaria que realice sus pruebas de laboratorio, as?? como a otra cl??nica de su elecci??n, pero es posible que deba cubrir los gastos por cuenta propia.",
  makeSureForm:
    "Aseg??rese de completar todas las secciones y descargar e imprimir el formulario de la orden.",
  printBothOrderForms:
    "Imprima ambos formularios de la orden y entr??gueselos a su proveedor de atenci??n primaria o a la cl??nica de su elecci??n. Debe pedirles que emitan una orden para sus pruebas de laboratorio.",
  whereGetTests: "??A d??nde debo ir para realizar estos an??lisis?",
  recommendCallPCP:
    "Le recomendamos que llame a su proveedor de atenci??n primaria de antemano para saber si puede ordenar estos an??lisis para usted. Si no es as??, puede acudir a una cl??nica local de atenci??n de urgencia o de atenci??n por orden de llegada.",
  howMuchLabsCost: "??Cu??nto costar??n las pruebas de laboratorio?",
  cannotPredictCost:
    "No podemos decirle cu??nto costar??n las pruebas de laboratorio, dado que depende de su proveedor, el plan m??dico y los deducibles, pero la mayor??a de los pacientes no tiene problemas con el costo de las pruebas.",
  optionsToCompleteLabs: "Opciones para realizar sus pruebas de laboratorio",
  feelFree:
    "Si??ntase libre de consultar cada opci??n; puede regresar a esta p??gina en cualquier momento.",
  completeScreening:
    "Para completar la evaluaci??n m??dica, debe enviar los resultados de un conjunto b??sico de pruebas de laboratorio a Virta.",
  ifRecentLabsFax:
    "Si hace poco se realiz?? estas pruebas de laboratorio, p??dale a su proveedor de atenci??n m??dica que las env??e por fax a Virta al {virtaFaxNumber}, o usted puede enviarlas por correo electr??nico a su asesor de inscripci??n. Hablar?? sobre las opciones de pruebas de laboratorio con su asesor de inscripci??n durante la llamada de admisi??n.",
  testsNotRequired:
    "No es necesario que tenga los resultados de estos an??lisis antes de la cita con su proveedor de Virta. Estos an??lisis se usar??n como parte del proceso de aprobaci??n, por lo cual, cuanto antes los presente, antes podr?? obtener la aprobaci??n.",
  instructions: "Instrucciones",
  nearLab:
    "Si se encuentra cerca de un laboratorio con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  localClinicFullyCovered: "Cl??nica local cubierta: cobertura total",
  nearClinic:
    "Si se encuentra cerca de una cl??nica con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  pcpNotCovered: "Su proveedor de atenci??n primaria: sin cobertura",
  labsElsewhere:
    "Puede pedirle a su proveedor de atenci??n primaria que le realice sus pruebas de laboratorio, as?? como a otra cl??nica de su elecci??n, pero es posible que deba cubrir los gastos por cuenta propia.",
  paymentInfo: "Informaci??n de pago",
  agreeToBeCharged:
    "Acepto que Virta me cobre cada mes la suma que me informaron por correo electr??nico, a trav??s del m??todo de pago que seleccion??, en la fecha de inicio de la suscripci??n y en el mismo d??a de cada mes posterior. El env??o de mi informaci??n de pago a trav??s del formulario del siguiente enlace implica lo siguiente:",
  agreeTerms:
    "Que acepto los <t>T??rminos de uso</t> y la <p>Pol??tica de privacidad</p> de la suscripci??n de Virta.",
  authorizeVirta:
    "Que autorizo a Virta o a su procesador de pagos a continuar mi suscripci??n de forma autom??tica y cobrar el costo de suscripci??n todos los meses, seg??n se describe en el resumen de pago que antecede, a trav??s del m??todo de pago que le proporcion?? a Virta, hasta que cancele la suscripci??n.",
  noRefundsForPartialMonths:
    "No se emitir??n reembolsos ni cr??ditos por los meses parciales.",
  toCancel:
    "Para cancelar mi suscripci??n, debo informar sobre la cancelaci??n a Virta, enviando un correo electr??nico a {supportEmailLink}, para que sea v??lida el siguiente mes. En caso de que ya no sea paciente de Virta, Virta podr?? dar por finalizada esta suscripci??n sin que me proporcione un aviso.",
  bySubmitting:
    "Al enviar este formulario con mi informaci??n de pago, autorizo que Virta lo procese para pagar los servicios de Virta que se me ha proporcionan. Entiendo que una vez que se procese mi pago, se inicia mi suscripci??n recurrente. Tambi??n entiendo que Virta dejar?? de procesar estos pagos cuando yo ya no sea paciente de Virta, o cuando solicite a Virta que deje de procesar estos pagos (poni??ndome en contacto con Virta al {supportEmailLink}). Puede encontrar los t??rminos de pago detallados <l>aqu??</l>.",
  yourSavedCard: "Su tarjeta guardada",
  noCcInfo: "No se encontr?? informaci??n sobre tarjetas de cr??dito",
  clickAddCard:
    "Haga clic en ???Agregar tarjeta??? para agregar un m??todo de pago e inscribirse en la suscripci??n para tratamientos de Virta Health.",
  subscriptionTerms: "T??rminos de uso de la suscripci??n",
  term1:
    "1. El acceso a Virta se cubrir?? por medio de una suscripci??n mensual. Por lo tanto, es necesario que se inscriba en nuestro sistema de pagos autom??ticos.",
  term2:
    "2. Para acceder al tratamiento es necesario que presente su informaci??n de pago mediante tarjeta de cr??dito o d??bito.",
  term3:
    "3. Esta tarjeta debe ser registrada y se le har??n los cargos autom??ticamente.",
  term4:
    "4. Virta no cobrar?? su primer pago (que es la cuota de iniciaci??n + el primer mes) hasta el d??a en que se apruebe el inicio del tratamiento.",
  term5:
    "5. Cada mes adicional de pago se cobrar?? un mes despu??s de la fecha del primer pago (???su fecha de pago???).",
  term6:
    "6. Si su tarjeta registrada falla o es rechazada, nos pondremos en contacto con usted en un plazo de 3 d??as h??biles. Si no recibimos el pago en un plazo de 2 semanas a partir de su fecha de pago, Virta iniciar?? el proceso para retirarlo del tratamiento y perder?? el acceso a la aplicaci??n.",
  term7:
    "7. Si decide interrumpir el tratamiento de Virta, seguir?? teniendo acceso hasta que termine el ??ltimo mes que se le cobr??.",
  term8: "8. Virta no ofrece reembolsos.",
  termsOfService: "T??rminos de servicio",
  termsOfServiceDetails:
    "Revise y acepte los T??rminos de servicio y la Pol??tica de privacidad",
  addressLineTwo: "Direcci??n (continuaci??n)",
  confirmPharmacyAddress:
    'Haga clic en "Confirmar direcci??n" arriba para guardar su direcci??n.',
  phoneNumber: "N??mero de tel??fono",
  reaction: "Reacci??n",
  listFoodAllergies: "Enumere todas sus alergias e intolerancias alimentarias",
  noFoodAllergies: "Ninguna alergia o intolerancia alimentaria",
  listMedAllergies: "Enumere todas sus alergias e intolerancias a medicamentos",
  noMedAllergies: "Alergia o intolerancia a un medicamento",
  mustMakeFoodSelection:
    "Debe agregar alergias alimentarias o seleccionar ???No tengo alergias alimentarias???.",
  mustMakeMedSelection:
    "Debe agregar alergias a medicamentos o seleccionar ???No tengo alergias a medicamentos???.",
  preferredName: "Nombre preferido",
  requiredByPrevYesResponse:
    "Campo obligatorio debido a la respuesta afirmativa anterior",
  consentFormsTitle: "Formularios de consentimiento",
  pleaseReview:
    "Revise y acepte los siguientes t??rminos de servicio que nos permiten brindarle atenci??n.",
  nextConsent: "Siguiente consentimiento",
  startConsent: "Iniciar consentimiento",
  start: "Iniciar",
  voluntaryAuth:
    "Autorizaci??n voluntaria para revelar informaci??n de salud protegida",
  protectingData: "Protecci??n de sus datos:",
  deliverRxParts:
    "Para llevar a cabo algunas partes del tratamiento, como el env??o de su kit de inicio, necesitamos su consentimiento para compartir informaci??n con nuestros socios de confianza.",
  authPurpose: "Objetivo de la autorizaci??n:",
  allowPHI:
    "El objetivo de esta autorizaci??n es permitirle a Virta revelar su informaci??n de salud protegida (protected health information, PHI) a todos los proveedores externos que ayudan a Virta a (i) brindarle el tratamiento, (ii) administrar sus servicios para ofrecerle el tratamiento y (iii) cobrar el pago de su tratamiento (los ???Objetivos de la Autorizaci??n???). Consulte los t??rminos a continuaci??n.",
  duration: "Duraci??n:",
  authInForce:
    "Esta autorizaci??n estar?? vigente y surtir?? efecto hasta que usted la revoque. <b>Tiene derecho a anular (???revocar???) su autorizaci??n</b> por escrito en cualquier momento, enviando una declaraci??n por escrito con fecha y firma a Virta Health (501 Folsom Street, San Francisco, CA 94105) o enviando un correo electr??nico a {supportEmailLink} para informar que desea revocar su autorizaci??n. Virta ya no revelar?? su informaci??n de salud protegida, a menos que ya lo hubiera hecho de conformidad con su autorizaci??n anterior. Si autoriz?? la revelaci??n de registros sobre abuso de sustancias o alcohol, puede revocar este permiso de forma oral.",
  iVoluntarilyAuthorize:
    "Autorizo de forma voluntaria a Virta Health a revelar mi informaci??n de salud protegida a todos los proveedores externos que participen en los Objetivos de la Autorizaci??n.",
  readAndConsidered:
    "Tuve la oportunidad de leer y analizar el contenido de esta autorizaci??n.",
  furtherUnderstand:
    "Adem??s, entiendo que mi participaci??n en el tratamiento de Virta depende de que acepte los Objetivos de la Autorizaci??n seg??n se designan, firmando esta autorizaci??n. Al marcar la casilla ???Acepto??? a continuaci??n, acepto y es mi intenci??n firmar esta autorizaci??n y enviarla de forma electr??nica, y asumir la responsabilidad con la misma validez que si hubiera firmado esta autorizaci??n con mi pu??o y letra en un papel.",
  iAcknowledge: "Reconozco",
  weTakePrivacy:
    "Abordamos la privacidad y seguridad de sus datos de forma muy seria, y usted puede cambiar su consentimiento en cualquier momento. Consulte nuestra <p>Pol??tica de privacidad</p> para obtener m??s detalles.",
  removeMedication: "Eliminar medicamento",
  remove: "Eliminar",
  currentMedications: "Medicamentos actuales",
  pleaseAddMedDetails: "Agregue los detalles completos del medicamento.",
  addMeds: "Agregar medicamentos",
  notTakingMeds: "Actualmente no estoy tomando medicamentos",
  mustMakeSelection:
    "Debe agregar medicamentos o seleccionar ???No estoy tomando medicamentos actualmente???.",
  age: "Edad",
  approxHowOld:
    "??Qu?? edad ten??a aproximadamente en el momento en el que recibi?? el diagn??stico de prediabetes o diabetes?",
  notSureAboutDiagnosis: "No lo s?? con certeza",
  deceased: "Fallecido",
  listSiblingMedProblems: "Enumere los problemas m??dicos de este familiar:",
  biologicalRelativesSection:
    "La siguiente secci??n hace referencia a los familiares biol??gicos Si no lo sabe, deje esta secci??n en blanco.",
  fatherHealth: "Salud del padre",
  siblingHealth: "Salud del hermano",
  motherHealth: "Salud de la madre",
  healthHistoryTitle: "Antecedentes de salud",
  thanksForConfirmingBI:
    "Gracias por confirmar su informaci??n b??sica. El pr??ximo paso para inscribirse en Virta es completar sus antecedentes de salud, que los usar?? su proveedor m??dico de Virta para prepararse para su pr??xima consulta m??dica por video.",
  pleaseNoteYourInfoIsProtected:
    "Tenga en cuenta que su informaci??n es 100 % privada y est?? protegida por la Ley de Portabilidad y Responsabilidad del Seguro M??dico (Health Insurance Portability and Accountability Act, HIPAA).",
  virtaWillNotShareYourInfo:
    "Virta no compartir?? nunca su informaci??n de salud con su empleador ni con terceros distintos de su proveedor de atenci??n m??dica.",
  questionsEmail:
    "??Tiene preguntas? Env??e un correo electr??nico a {supportEmailLink}.",
  yourInfoProtectedByHIPAA:
    "Su informaci??n es privada y est?? protegida por la Ley de Portabilidad y Responsabilidad del Seguro M??dico (HIPAA).",
  stillHaveGallbladder: "S??, pero sigo teniendo la ves??cula",
  gallbladderRemoved: "S??, me extirparon la ves??cula",
  digestiveHistoryTitle: "Antecedentes de salud digestiva",
  pancreaticEnzymes:
    "??Toma suplementos de enzimas pancre??ticas (por ejemplo, Creon)?",
  pancreasIssuesQuestion:
    "??Alguna vez lo operaron del p??ncreas o le diagnosticaron pancreatitis cr??nica?",
  liverDiseaseQuestion:
    "??Alguna vez le diagnosticaron alg??n tipo de hepatopat??a?",
  shortBowelSyndrome:
    "??Alguna vez le diagnosticaron s??ndrome del intestino corto?",
  organTransplantQuestion: "??Le trasplantaron alg??n ??rgano en el abdomen?",
  intestinalSurgery:
    "??Alguna vez se someti?? a una cirug??a de intestino? Por ejemplo, del duodeno, yeyuno, est??mago o colon",
  gallbladderProblems:
    "??Alguna vez le dijeron que tiene problemas de ves??cula?",
  crohns: "??Alguna vez le diagnosticaron la enfermedad de Crohn?",
  colitis: "??Alguna vez le diagnosticaron colitis ulcerosa?",
  geneticHistoryTitle: "Antecedentes gen??ticos",
  raceIdent:
    "??Con qu?? grupo racial o ??tnico se identifica m??s? Marque todas las opciones que correspondan.",
  heartHistoryTitle: "Antecedentes de salud card??aca",
  hadHeartAttack: "??Alguna vez tuvo un ataque card??aco?",
  hadCHF: "??Alguna vez le diagnosticaron insuficiencia card??aca congestiva?",
  valveProblemsQuestion:
    "??Alguna vez le dijeron que ha tenido un problema con una v??lvula card??aca?",
  potsDiagnosed:
    "??Alguna vez le diagnosticaron taquicardia ortost??tica postural?",
  svt: "??Alguna vez le dijeron que ten??a ritmo card??aco anormal, como fibrilaci??n auricular o taquicardia supraventricular?",
  prolongedQT:
    "??Alguna vez le dijeron que tiene s??ndrome del QT largo tras realizar un electrocardiograma (abreviado como ECG)?",
  peripheralArterialDisease:
    "??Alguna vez le diagnosticaron arteriopat??a perif??rica?",
  hypertension: "??Alguna vez le diagnosticaron hipertensi??n arterial?",
  lowBloodPressure:
    "??Alguna vez le dijeron que su presi??n arterial estaba demasiado baja, aunque haya sido temporal?",
  haveYouEverFainted: "??Alguna vez se ha desmayado?",
  steroidMedsQuestion:
    "??Ha tomado medicamentos esteroideos en los ??ltimos 12 meses?",
  impairImmunityMeds:
    "??Ha recibido medicamentos que afectan al sistema inmunitario en los ??ltimos 24 meses?",
  nextStepIsHealthHistory:
    "El pr??ximo paso para inscribirse en Virta es completar sus antecedentes de salud, esta informaci??n la usar?? su proveedor m??dico de Virta para prepararse para su pr??xima consulta m??dica por video.",
  commonMedicalQuestions: "Preguntas m??dicas frecuentes",
  askingBecauseOfDiabetes:
    "Hacemos estas preguntas porque estos cuadros se suelen asociar con la diabetes.",
  yesNoDetails:
    "Proporcione m??s detalles sobre todo lo que respondi?? con ???s?????:",
  primaryCareProvider: "Proveedor de atenci??n primaria",
  listAllSurgeries: "Enumere todas las cirug??as a las que se ha sometido.",
  noSurgeries: "Ninguna cirug??a",
  addSurgeries: "Agregar cirug??as",
  mustMakeSurgerySelection:
    "Debe agregar cirug??as o seleccionar ???No me he sometido a cirug??as???.",
  clickConfirmAddressAbove:
    'Haga clic en "Confirmar direcci??n" arriba para guardar su direcci??n.',
  homeAddress: "Direcci??n original",
  useDifferentShipping:
    "Me gustar??a utilizar una direcci??n diferente para el env??o.",
  hic: "Cobertura del seguro m??dico",
  waiver: "Renuncia",
  pleaseReviewAndAccept: "Lea y acepte la renuncia",
  iAgreeToWaiver: "Acepto la <l>Renuncia</l>",
  mustAcceptWaiver: "Debe aceptar la renuncia",
  importantSafetyInformation: "Informaci??n de seguridad importante",
  safeToKeepProvidersUpToDate:
    "Creemos que es importante y seguro que sus otros proveedores de atenci??n m??dica se mantengan actualizados con respecto a sus cambios de medicaci??n y a su progreso con Virta, para que todos sus proveedores de atenci??n m??dica puedan atenderlo de la mejor manera posible.",
  optOutFromProviderUpdateExplanation:
    "Enviaremos informaci??n actualizada a su proveedor de atenci??n primaria, a menos que nos indique lo contrario. Si surgen problemas m??dicos y desea que su equipo m??dico de Virta se coordine con otro proveedor, puede consultarlo con su entrenador(a) de salud despu??s de la inscripci??n.",
  optOutFromProviderUpdateField:
    "No quiero que mi proveedor de atenci??n m??dica reciba informaci??n sobre mi progreso en Virta.",
  faxNumberNoticeRequirement:
    "Actualmente, solo podemos enviar informaci??n actualizada sobre su progreso a un proveedor y <b>debemos tener su n??mero de fax</b> para hacerlo.",
  primaryEmail: "Correo electr??nico principal",
  primaryPhone: "Tel??fono Principal",
  weightInPounds: "Peso",
  heightInInches: "Altura",
  communication: "Lenguaje primario",
  selectSpeciality: "Seleccione una especialidad",
  address1: "Direcci??n 1",
  address2: "Direcci??n 2",
  province: "Provincia",
  postalCode: "C??digo postal",
  phone: "N??mero de tel??fono",
  phoneNumTooShort: "El n??mero de tel??fono es demasiado corto",
  phoneNumTooLong: "El n??mero de tel??fono es demasiado largo",
  faxNumTooShort: "El n??mero de fax es demasiado corto",
  faxNumTooLong: "El n??mero de fax es demasiado largo",
  editPostalCode: "Editar c??digo postal",
  findYour: "Buscar su {physicianType}",
  postalCodeInvalid: "El c??digo postal no es v??lido",
  physicianSearch: "Buscar m??dico",
  virtaReferralTitle: "Solicitud de derivaci??n de Virta Health",
  basicContact:
    "Proporcione informaci??n de contacto y de salud b??sica sobre el solicitante que est?? derivando. Despu??s ser?? redirigido a la p??gina del calendario para programar la llamada telef??nica con un asesor de inscripci??n de Virta.",
  ifHaveQuestions:
    "Si tiene alguna pregunta o necesita ayuda, env??e un correo electr??nico a {supportEmailLink}.",
  legalFName: "Nombre legal",
  fname: "Nombre",
  legalLName: "Apellido legal",
  lname: "Apellido",
  cell: "Celular",
  whichDiagnosesReferral:
    "??Cu??l de los siguientes diagn??sticos recibi?? el solicitante?",
  referralInsulinQuestion: "??Alguna vez se le recet?? insulina?",
  referralCurrentDialysis: "??El solicitante est?? recibiendo di??lisis?",
  referralPregnancyQuestion: "??Cursa un embarazo?",
  referralTakingInsulin: "S??, recibe insulina actualmente.",
  referralPastInsulin: "S??, pero en el pasado. No recibe insulina actualmente.",
  theyNeverInsulin: "Nunca recibi?? insulina.",
  referralUnsureInsulin: "No lo sabe con certeza.",
  selectGender: "Seleccione un g??nero",
  requiredByPrevResponse: "Campo obligatorio debido a la respuesta anterior",
  enterEmail: "Ingrese un correo electr??nico v??lido",
  backToApplication:
    "<l>Deseo regresar a la solicitud</l> para poder actualizar mi informaci??n.",
  disappointingNews:
    "Entendemos que esta noticia puede ser desalentadora. Tomamos esta decisi??n priorizando su seguridad. Virta asume el compromiso de no poner en riesgo la seguridad del paciente en ninguna circunstancia. El estado actual de la tecnolog??a para la supervisi??n remota de los pacientes es limitado, y algunos cuadros cl??nicos no se pueden supervisar de forma segura en el entorno ambulatorio.",
  pleaseNoteOtherPrograms:
    "Tenga en cuenta que su proveedor de atenci??n primaria, empleador o seguro pueden tener otros programas o tratamientos m??dicos que podr??an funcionar en su caso. Le recomendamos que se comunique con ellos para obtener m??s informaci??n sobre sus otras opciones.",
  emailSupportWithQuestions:
    "Si tiene preguntas, env??e un correo electr??nico a {supportEmailLink}.",
  applicationReceived: "??Solicitud recibida! Pr??ximos pasos:",
  applicationSubmitted:
    "Su solicitud se envi?? correctamente. A continuaci??n, queremos informarle c??mo funciona Virta.",
  step1LearnVirta: "Paso 1: Aprenda sobre Virta",
  watchVideo:
    "Mire este video breve para conocer los detalles del tratamiento de Virta.",
  verifyAccount: "Verifique su cuenta para acceder al historial de salud.",
  pleaseCheckEmail:
    "Revise su correo electr??nico para verificar su cuenta. Despu??s de verificar su cuenta, podr?? acceder al formulario de su historial de salud.",
  step2CheckEmail: "Paso 2: Revise su bandeja de entrada",
  clickContinueEmail:
    "Haga clic en ???Continuar??? en el correo electr??nico de confirmaci??n para verificar su cuenta.",
  emailSentTo: "Se envi?? un correo electr??nico a {applicantEmailAddress}.",
  notReceivedEmail:
    "??No recibi?? el correo electr??nico? Revise la direcci??n de correo electr??nico anterior o env??e un correo a {supportEmailLink}.",
  pleaseCheckEmailForDetails:
    "Revise su correo electr??nico para obtener m??s detalles.",
  isOffering:
    "{insuranceProvider} ofrece un cupo limitado en Virta. En este momento, el cupo de Virta se ha cubierto y no podemos ofrecer cupos adicionales.",
  allVirtaSpotsFilled: "Lamentablemente, se complet?? el cupo de Virta.",
  thankYouForApplication: "Gracias por su solicitud.",
  indicatedInsurance:
    "Usted indic?? que tiene seguro a trav??s de Blue Cross and Blue Shield de Carolina del Norte. Nuestro equipo est?? verificando si cuenta con la cobertura de Virta a trav??s de su plan m??dico. Nos pondremos en contacto con usted tan pronto como tengamos m??s informaci??n.",
  englishReferral: "??Puede el solicitante comunicarse con Virta en ingl??s?",
  canFillForm:
    "Si puede completar este formulario y conversar en ingl??s b??sico, seleccione ???s?????.",
  canFillFormReferral:
    "Si el solicitante puede conversar en ingl??s b??sico, seleccione ???s?????.",
  contactInformation: "Informaci??n de contacto",
  smartphoneDefinition:
    "Un ???tel??fono inteligente??? es un tel??fono que se puede conectar a Internet y usar aplicaciones descargadas, o ???apps???.",
  confirmEmailAddress: "Confirmar direcci??n de correo electr??nico",
  haveSmartphone: "??Tiene un tel??fono inteligente con acceso a Internet?",
  haveSmartphoneReferral:
    "??Tiene el solicitante un tel??fono inteligente con acceso a Internet?",
  emailMismatch: "Las direcciones de correo electr??nico no coinciden",
  requiredByPrevYes:
    "Campo obligatorio debido a la respuesta afirmativa anterior",
  ssn: "N??mero de Seguro Social",
  rxCost: "Costo del tratamiento Virta",
  price249PerMonth: "$249 por mes",
  initiationFee:
    "Con una tarifa ??nica inicial de $250 que se paga por adelantado.",
  promoCode: "C??digo promocional",
  employerNameRequired: "El nombre del empleador es obligatorio",
  insurerNameRequired: "El nombre de la aseguradora es obligatorio",
  payOOP: "Pagar?? por cuenta propia",
  takingMedsReferral:
    "??Ha tomado el solicitante alg??n medicamento para la diabetes adem??s de la metformina?",
  hadInsulin: "??Alguna vez se le recet?? insulina?",
  whenStartInsulin: "??En qu?? a??o comenz?? a recibir insulina?",
  whenStopInsulin: "??En qu?? a??o dej?? de recibir insulina?",
  yesImTakingInsulin: "S??, recibo insulina actualmente",
  yesInsulinButPast: "S??, pero en el pasado. No recibo insulina actualmente.",
  iveNeverTakenInsulin: "Nunca recib?? insulina",
  moreDetailsNeeded:
    "Brinde m??s detalles sobre el motivo de su inter??s en Virta.",
  mdy: "Mes, d??a, a??o",
  readyStartSoon: "??Estoy listo para comenzar tan pronto como sea posible!",
  needAnswersFirst:
    "Quiero empezar, pero primero necesito respuestas a algunas preguntas.",
  learnMoreFirst:
    "No estoy seguro de querer empezar. Primero debo tener m??s informaci??n.",
  pleaseReviewTosAndPrivacy:
    "Revise y acepte los T??rminos de servicio y la Pol??tica de privacidad",
  virtaNotEnrollingAdditionalVeterans:
    "Virta no est?? admitiendo veteranos nuevos en este momento.",
  virtaCommittedToVeterans:
    "Virta Health se ha comprometido a brindar acceso gratuito al tratamiento de Virta a un grupo piloto de 400 veteranos. El 23 de octubre de 2019, superamos las 400 inscripciones y, por lo tanto, no estamos admitiendo m??s veteranos por el momento.",
  ifYoudStillLikeToApply:
    "Si de todos modos desea presentar una solicitud en Virta, podemos guardar su informaci??n, pero el proceso de inscripci??n no avanzar?? por el momento. Agradecemos su inter??s y le informaremos sobre las pr??ximas oportunidades de inscripci??n tan pronto como tengamos noticias.",
  congratsPleaseConfirm:
    "??Felicitaciones! Complet?? el primer paso de la solicitud de Virta. Antes de continuar, necesitamos confirmar su direcci??n de correo electr??nico.",
  confirmationEmailSentTo:
    "Se envi?? un correo electr??nico de confirmaci??n a la siguiente direcci??n:",
  checkInbox:
    "Revise su bandeja de entrada en busca de un correo electr??nico de confirmaci??n de Virta Health.",
  noConfEmail: "??A??n no recibi?? el correo electr??nico de confirmaci??n?",
  checkAbove:
    "Aseg??rese de haber ingresado su direcci??n de correo electr??nico correctamente arriba. Si tiene errores, vuelva a enviar su informaci??n con la direcci??n de correo electr??nico correcta.",
  congrats: "??Felicitaciones!",
  canStartTreatment: "Ya puede comenzar el tratamiento de Virta.",
  checkEmailForLoginInstructions:
    "Revise su correo electr??nico para acceder a las instrucciones sobre c??mo iniciar sesi??n en la aplicaci??n y reunirse con su entrenador.",
  ifBSCA:
    "Si cuenta con un seguro m??dico de Blue Shield de California, tal vez sea elegible para recibir la cobertura completa del costo de Virta.",
  toReceiveFullCoverage:
    "Para recibir la cobertura completa, debe solicitar Virta a trav??s de Wellvolution, la plataforma de inscripci??n digital de Blue Shield de California.",
  privacyPolicy: "Pol??tica de privacidad",
  telehealthConsent: "Consentimiento de telesalud",
  privacyPractices: "Pr??cticas de privacidad",
  rightsReserved:
    "Todos los derechos reservados. {copyrightSymbol} {currentYear}.",
  basicInfo: "Informaci??n b??sica",
  needHelp: "??Necesita ayuda? Contacto",
  needHelpWithApplication: "??Necesita ayuda con su solicitud?",
  contactUs: "Comun??quese con nosotros",
  brb: "Volveremos en seguida.",
  scheduledMaintenance:
    "Estamos realizando tareas de mantenimiento programadas en nuestros sistemas de solicitud.",
  apology: "Lamentamos los inconvenientes. Volveremos pronto.",
  meantime:
    "Mientras tanto, lea algunas de nuestras inspiradoras <l>historias de pacientes</l>. ??Gracias por su inter??s en Virta! Esperamos trabajar con usted en su camino hacia la salud metab??lica.",
  ifSeeMsg: "Si contin??a viendo este mensaje, escriba a {supportEmailLink}.",
  addressConfirmed: "Direcci??n confirmada",
  confirmAddress: "Confirmar direcci??n",
  whichVersionOfYourAddress: "??Qu?? versi??n de su direcci??n desea utilizar?",
  selectAddress: "Seleccione una direcci??n a continuaci??n",
  submitButton: "Actualizar",
  backButton: "Atr??s",
  finalStepsDescription:
    "Actualice su direcci??n de env??o para recibir su kit de inicio",
  updateAddress: "Actualizar direcci??n",
  confirmInfo: "Confirmar informaci??n",
  receiveInfoAboutLabs:
    "Recibir?? m??s informaci??n sobre las pruebas de laboratorio necesarias (si las hay) de parte de su asesor de inscripci??n.",
  eligibilityStatusCoveredHeader: "??Buenas noticias, est?? cubierto!",
  eligibilityStatusCoveredParagraph:
    "Seg??n la informaci??n sobre su seguro, usted es elegible para seguir inscribi??ndose en el tratamiento Virta sin costo alguno para usted. Nos emociona que comience su traves??a hacia la salud.",
  eligibilityStatusCoveredSecondParagraph:
    "Haga clic en Continue (Continuar) para comenzar a completar su historial de salud.",
  eligibilityStatusCoveredSecondParagraphNext:
    "Haga clic en Next (Siguiente) para comenzar a completar su historial de salud.",
  eligibilityStatusMoreTimeHeader:
    "Estamos procesando la informaci??n de su seguro.",
  eligibilityStatusMoreTimeParagraph:
    "Gracias por presentar la informaci??n de su seguro. Estamos verificando su elegibilidad para Virta y, en cuanto tengamos una respuesta, nos comunicaremos con usted.",
  eligibilityStatusReviewInsuranceParagraph:
    "Esta es la informaci??n del seguro que estamos usando para verificar su cobertura. Si encuentra alg??n error, informe al asesor de inscripci??n y lo ayudar?? a actualizar la informaci??n.",
  eligibilityCoverageCarrierInput: "Aseguradora",
  eligibilityCoverageGroupIdInput: "Identificaci??n del grupo",
  eligibilityCoverageMemberIdInput: "Identificaci??n del miembro",
  eligibilityCoverageIssueDateInput: "Fecha de emisi??n",
  eligibilityCoveragePlanInput: "Plan",
  toScheduleHeader: "Programar una llamada",
  isScheduledHeader: "Llamada programada",
  toSchduleMessage:
    "El siguiente paso es programar una consulta telef??nica con un asesor de inscripci??n de Virta. Durante la llamada de admisi??n, le explicaremos c??mo funciona Virta y responderemos a sus preguntas.",
  isSchduledMessage:
    "Durante la llamada, conocer?? c??mo funciona Virta y podr?? obtener una respuesta a cualquier pregunta que tenga.",
  thirtyMinutes: "30 minutos",
  isPrimaryInsurance: "??Es este su seguro principal?",
  explainPrimarySecondaryInsurance:
    "Si tiene cobertura de un plan de su empresa, adem??s de la cobertura de un plan de su pareja u otro plan (TRICARE, Medicaid, etc.), su propio plan ser?? el principal y el otro plan ser?? el secundario.",
  howVirtaWorks: "C??mo funciona Virta",
  watchOverviewVideo:
    "Vea este v??deo para obtener un panorama general del tratamiento Virta y saber c??mo puede ayudarlo a alcanzar sus objetivos de salud.",
  ifYoureNotInterestedNow:
    "Si no est?? interesado en este momento, ??no hay problema! Siempre puede ponerse en contacto con {supportEmailLink}.",
  sessionExpired: "Su sesi??n ha caducado. Vuelva a iniciar sesi??n.",
  paymentTermsHeader: "Condiciones de pago detalladas",
  monthlySubscriptionAutomated:
    "Suscripci??n: el acceso a Virta se cubre a trav??s de una ???suscripci??n??? mensual, por lo que es necesario inscribirse en nuestro sistema de pago automatizado.",
  virtaRefundPolicy: "No hay reembolsos: Virta no ofrece reembolsos.",
  electronicPaymentRequired:
    "Pago electr??nico: para acceder al tratamiento es necesario presentar su informaci??n de pago mediante tarjeta de cr??dito o d??bito. Esta tarjeta debe ser registrada y se le har??n los cargos autom??ticamente.",
  virtaPaymentSchedule:
    "Fecha de inicio de pago: Virta no cobrar?? su primer pago (que es la cuota de iniciaci??n + el primer mes) hasta el d??a en que se apruebe el inicio del tratamiento. Cada mes adicional de pago se cobrar?? 1 mes despu??s de la fecha del primer pago (???su fecha de pago???).",
  paymentFailure:
    "Falta de pago: si su tarjeta registrada falla o es rechazada, nos pondremos en contacto con usted en un plazo de 3 d??as h??biles. Si no recibimos el pago en un plazo de 2 semanas a partir de su fecha de pago, Virta iniciar?? el proceso para retirarlo del tratamiento y perder?? el acceso a la aplicaci??n.",
  howToCancel:
    "Cancelaci??n: Virta dejar?? de procesar sus pagos cuando usted deje de ser paciente de Virta o cuando usted decida suspenderlos. Puede solicitar a Virta que deje de procesar estos pagos poni??ndose en contacto con Virta a {supportEmailLink}. Cuando Virta reciba su solicitud de suspensi??n de pagos, o cuando usted deje de ser paciente, Virta dejar?? de procesar sus pagos para el siguiente pago que est?? programado despu??s de recibir su notificaci??n o de que finalice su condici??n de paciente.",
  restartingVirta:
    "Reinicio: si interrumpe el tratamiento de Virta y luego decide reiniciarlo, se aplicar?? el precio est??ndar de Virta vigente.",
  reduceGlareOnCard:
    "Aseg??rese de reducir el reflejo en la imagen de la tarjeta",
  captureSharpImageOfCard: "Tome una imagen clara de su tarjeta",
  issueUploadingCard:
    "Hubo un problema al cargar su tarjeta; int??ntelo de nuevo.",
  deseralizeError:
    "Algo sali?? mal. Vuelva a intentarlo y, si el problema persiste, escriba a support@virtahealth.com.",
  problemWithForm:
    "Hay un problema con el formulario, revise y corrija lo siguiente:",
  checkEmail: "Revisar correo electr??nico",
  complete: "Completar",
  inProgress: "En curso",
  inReview: "En revisi??n",
  upcoming: "Pr??ximamente",
  or: "o",
  mustAcceptAssignment:
    "Debe aceptar el Consentimiento sobre la cesi??n de beneficios",
  mustAcceptAuthorization:
    "Debe aceptar la Autorizaci??n voluntaria para revelar informaci??n de salud protegida",
  noWrongAnswer: "??No hay respuestas incorrectas!",
  noModification:
    "Nota: Incluso si no le interesa modificar su tratamiento para la diabetes, igual podemos ayudarlo con los suministros para hacer las pruebas y el entrenamiento.",
  noPrimaryCareProvider: "Sin proveedor de atenci??n primaria",
  noPCPInstructions:
    "* NOTA: Si actualmente no tiene un proveedor de atenci??n primaria, haga clic aqu??:",
  iWouldLikeToOptOut: "Preferir??a no participar.",
  optOutConfirmation: "Su opci??n de no participar se registr?? con ??xito",
  healthInfoExchangeHeader:
    "Preguntas frecuentes sobre el intercambio de informaci??n de salud",
  optOutHIEAnswer:
    'Puede optar por que Virta no eval??e su informaci??n desde un intercambio de informaci??n de salud (HIE) marcando la casilla a continuaci??n y haciendo clic en "Enviar". Espere hasta dos d??as h??biles para que se procese su solicitud de no participar.',
  optOutHIEQuestion:
    "No quiero participar. ??C??mo puedo optar por no participar?",
  noActionNeededForHIE:
    "<i>No es necesario que haga nada m??s</i> si quiere que revisemos los valores de sus pruebas de laboratorio previas a trav??s de nuestro intercambio de informaci??n de salud.",
  whatIsHIEAnswer:
    "El intercambio de informaci??n de salud es una manera de compartir informaci??n de salud entre los consultorios de los m??dicos, hospitales, laboratorios, centros radiol??gicos y otros proveedores de atenci??n m??dica participantes a trav??s de medios electr??nicos seguros. El prop??sito es que cada persona encargada de su atenci??n pueda recibir la informaci??n m??s reciente disponible de otras personas participantes que se encargan de su atenci??n.",
  whatIsHIEQuestion: "??Qu?? es el intercambio de informaci??n de salud (HIE)?",
  whyHIEAnswer:
    "Si permite que Virta acceda a sus datos desde un HIE, podremos tener un panorama m??s completo de su salud y tomar decisiones de tratamiento m??s informadas. El objetivo es que reciba la atenci??n coordinada de una forma m??s eficiente. Su informaci??n de atenci??n m??dica est?? disponible para los proveedores de atenci??n m??dica participantes cuando y donde la necesitan sin demora alguna.",
  whyHIEQuestion:
    "??Qu?? beneficios me da participar en el intercambio de informaci??n de salud (HIE)?",
  calorieCount: "",
  carbohydrates: "Carbohidratos",
  fat: "Fat",
  fiber: "",
  protein: "",
  servingCount: "",
  servingSize: "",
  sugarAdded: "",
  sugarAlcohol: "",
  nutritionFacts: "",
  prepTime: "",
  totalTime: "",
  ingredients: "",
  recipeInstructions: "",
  enable: "Permitir",
  pushNotificationsCoach: "",
  pushNotificationsStats: "",
  pushNotificationsHeader: "",
  pushNotificationsInstructions: "",
  chatSLABannerTitle: "",
  chatSLABannerDescription: "",
  chatSLABannerLink: "",
  noSearchResults: "No hay resultados",
  tryPopularSearches: "Pruebe estas b??squedas populares",
  tryPopularFoodSearches: "Pruebe estas b??squedas alimentos populares",
  recentSearches: "B??squedas recientes",
  bloodSugar: "Az??car en sangre",
  food: "Alimentos",
  reviewInsuranceInfoDescription:
    "Revise la informaci??n del seguro que tenemos registrada y realice los cambios necesarios.",
  reviewInsuranceInfoTitle: "Informaci??n del seguro",
  updateInfo: "Actualizar informaci??n",
  completeProfile: "Completar perfil",
  confirmEmail: "Confirmar correo electr??nico",
  emailConfirmed: "??Correo electr??nico confirmado!",
  yourEmailVerified: "Su direcci??n de correo electr??nico ha sido verificada.",
  clickBelowToVerifyEmail:
    "Haga clic en el bot??n a continuaci??n para verificar su direcci??n de correo electr??nico.",
  copyPasteLinkIfNotWorking:
    "Si el bot??n no funciona, copie y pegue este enlace en su explorador:",
  emailAssociatedWithVirtaAccount:
    "Nota: <b>Este correo electr??nico est?? asociado a una cuenta de Virta Health.</b> Si no se registr?? para crear una cuenta en Virta, ignore este correo electr??nico y no haga clic en el enlace",
  ifProblemsContactSupport:
    "Si tiene alg??n problema, comun??quese con nosotros a {supportEmailLink}",
  cameraDirectionBack: "Atr??s",
  cameraDirectionFront: "Frente",
  confirmationHeader: "Ha enviado la informaci??n del seguro.",
  confirmationHeaderHH: "Pr??ximos pasos",
  getReadySubheader: "Prep??rese para escanear su tarjeta",
  getReadyText: "Tenga su tarjeta del seguro a la mano para este pr??ximo paso.",
  helpScreenDescription:
    "Parece que tiene problemas para escanear su tarjeta. Lea los siguientes consejos e int??ntelo de nuevo. Si no puede escanear la tarjeta con claridad, ingrese su informaci??n del seguro de forma manual.",
  helpScreenHeader: "??Tiene problemas?",
  helpScreenTip1:
    "Aseg??rese de estar en una habitaci??n bien iluminada (o afuera, a la luz del sol)",
  helpScreenTip2:
    "Coloque la tarjeta en una superficie plana con un fondo oscuro (sin dibujos)",
  helpScreenTip3:
    "Intente capturar la mayor parte posible de la tarjeta sin omitir ninguna parte",
  helpScreenTipHeader: "Consejos para escanear la tarjeta de forma correcta",
  hintBoxHeader: "Prep??rese para escanear su tarjeta",
  hintBoxMessage:
    "Tenga su tarjeta del seguro y su tel??fono inteligente a la mano para el pr??ximo paso.",
  initialInsuranceHeader: "Informaci??n del seguro",
  initialInsuranceText:
    "Para verificar su cobertura para el tratamiento de Virta, deber?? ingresar la informaci??n del seguro.",
  insuranceContinueButton: "Siguiente",
  insuranceDescription:
    "Para verificar su cobertura para el tratamiento de Virta, deber?? ingresar la informaci??n del seguro.",
  insuranceGroupInput: "Identificaci??n del grupo",
  insuranceGroupInputPlaceholder: "Ejemplo: 534654",
  insuranceHeader: "Informaci??n del seguro",
  insuranceInput: "N??mero de tel??fono",
  insuranceInputPlaceholder: "999-999-9999",
  insuranceIssueDateInput: "Fecha de emisi??n",
  insuranceIssueDateInputPlaceholder: "MM/DD/AAAA",
  insuranceMemberInput: "Identificaci??n del miembro",
  insuranceMemberInputPlaceholder: "Ejemplo: 5829434",
  insuranceNextButton: "Siguiente",
  insuranceNextConfirmButton: "Es correcto",
  insuranceProviderInputPlaceholder: "Ejemplo: Blue Shield",
  insuranceRetakeButton: "Volver a intentarlo",
  insuranceSMSButton: "Enviar enlace",
  insuranceSMSButtonContinue: "Continuar",
  insuranceSMSDescription:
    "Le enviaremos un enlace para que escanee su tarjeta del seguro. Aseg??rese de que el n??mero que ha ingresado sea correcto y haga clic en ???Enviar enlace???. (Se aplican los cargos normales por mensajes de texto).",
  insuranceSMSSentButton: "Reenviar enlace",
  insuranceSMSSentDescription:
    "Hemos enviado un enlace al n??mero de tel??fono que se indica a continuaci??n. Si no recibi?? el enlace, verifique que el n??mero sea correcto y haga clic en ???Reenviar enlace???.",
  insuranceScannerErrorMessage: "mensaje de error en la prueba",
  insuranceSmsSentSubHeader: "Enlace enviado",
  insuranceSubHeader: "Verifique su informaci??n y env??e el enlace",
  loadingMessage: "Actualizando su informaci??n...",
  manualInputLink: "Ingrese la informaci??n del seguro de forma manual",
  manualInsuranceText: "Escriba la informaci??n de su seguro aqu??.",
  newInsuranceCoverage:
    "Estamos trabajando para mejorar la cobertura con m??s planes de seguros y lo alentamos a ingresar su informaci??n en caso de que califique para una tarifa m??s baja.",
  insuranceDisclaimer:
    "Al enviar su informaci??n de seguro, usted acepta que Virta trabaje con su seguro para reducir potencialmente sus gastos por cuenta propia, aunque no podemos garantizar ninguna reducci??n en el precio al que usted se compromete en este momento.",
  nextStepDialogue:
    "Gracias por presentar la informaci??n de su seguro. Los pr??ximos pasos son programar una llamada de admisi??n y proporcionar un breve resumen de su historia cl??nica.",
  nextStepDirectionContinue:
    "Haga clic en ???Continuar??? para programar su llamada de admisi??n.",
  nextStepDirectionLink: "Enviamos un enlace a:",
  nextStepSubheader: "Revise su correo electr??nico",
  noInsuranceCard: "No tengo mi tarjeta del seguro",
  nonEmailConfirmationBody:
    "Gracias por enviar su informaci??n del seguro. El pr??ximo paso es proporcionar un breve resumen de su historia cl??nica.",
  nonEmailConfirmationBodytwo:
    "Haga clic en ???Siguiente??? para terminar de ingresar la informaci??n de su historia cl??nica.",
  nonEmailConfirmationHeader: "Ha enviado la informaci??n del seguro.",
  nonEmailConfirmationSubBody:
    "* Comun??quese con su asesor de inscripci??n para obtener m??s informaci??n sobre la elegibilidad.",
  nonSubmitMessage:
    "Los pr??ximos pasos son programar una llamada de admisi??n y proporcionar un breve resumen de su historia cl??nica.",
  primaryInsuranceClarificationLbl:
    "* Si tiene cobertura de un plan de su empresa, adem??s de la cobertura de un plan de su pareja u otro plan (TRICARE, Medicaid, etc.), su propio plan ser?? el principal y el otro plan ser?? el secundario.",
  primaryInsuranceHeader: "Seguro principal",
  primaryInsuranceRadioLbl: "??Es este su seguro principal?",
  primaryInsuranceRequirementLbl:
    "Tenga en cuenta que Virta tiene la obligaci??n de facturar a su seguro principal en primer lugar.",
  readyButton: "Estoy listo",
  requiredErrorText: "Requerido",
  resendTheEmail: "Reenviar correo electr??nico",
  retryButton: "Volver a intentarlo",
  reviewInsuranceInfo: "De ser necesario, revise y edite esta informaci??n.",
  scanInsuranceHeader: "Escanee la tarjeta del seguro:",
  scannerTroubleBackButton: "Intentar de nuevo",
  scannerTroubleContinueButton: "Continuar",
  skipInput: "Omitir este paso por el momento.",
  newHHTitle: "",
  newHHDescription: "",
  newHHButtonLabel: "",
  dismiss: "",
  insuranceGroupInputHelperText: "Si es aplicable",
  invalidAddress:
    "No podemos verificar que se trate de una direcci??n v??lida de EE. UU. Si cree que esta informaci??n es v??lida, confirme a continuaci??n.",
  logInHere: "Inicie sesi??n aqu??",
  alreadyHaveAccount: "??Ya tiene una cuenta?",
  verifyEmailAddress: "Confirme su direcci??n de correo electr??nico",
  resendEmail: "Reenviar correo electr??nico",
  resendVerificationEmailToConfirm:
    "Vuelva a enviar el correo electr??nico de verificaci??n para confirmar la direcci??n que tenemos registrada.",
  checkEmailAndFollowLink:
    "Revise su correo electr??nico y siga el enlace para verificar su direcci??n de correo electr??nico.",
  verificationSentCheckInbox:
    "??Se envi?? el correo electr??nico de verificaci??n! Revise su bandeja de entrada y siga el enlace para verificar su direcci??n de correo electr??nico.",
  verificationLinkExpired:
    "Parece que el enlace de verificaci??n venci??. Solicite un enlace nuevo haciendo clic en el bot??n.",
  verificationLinkInvalidOrAlreadyUsed:
    "Parece que el enlace de verificaci??n no es v??lido o ya se us??. Compruebe que ingres?? el enlace correctamente o solicite un enlace nuevo haciendo clic en el bot??n.",
  couldNotSendVerificationSMS:
    "Hubo un problema para enviar el SMS a su tel??fono; comun??quese con {supportEmailLink}",
  couldNotConfirmPhone:
    "El c??digo ingresado es incorrecto; int??ntelo nuevamente.",
  phoneVerifyHeader: "Verificar n??mero de tel??fono m??vil",
  sentVerificationCodeNoPhone:
    "Hemos enviado un c??digo de verificaci??n al n??mero de tel??fono asociado a su cuenta, si existe una. Para seguir, ingrese el c??digo de 6 d??gitos a continuaci??n.",
  thankYou: "??Gracias!",
  verfiedPhone: "Su n??mero de tel??fono fue verificado.",
  questionsBI:
    "??Tiene preguntas? Env??e un correo electr??nico a {supportEmailLink}",
  basicInfoComplete: "Informaci??n b??sica completa",
  eligibilityVerified:
    "Verificamos su elegibilidad para Virta y actualizamos su informaci??n en nuestro registro. Ahora puede iniciar sesi??n en la aplicaci??n de Virta.",
  coverage: "Cobertura",
  lookingIntoIt: "Lo estamos investigando",
  unableToVerifyEligibility:
    "No pudimos verificar su elegibilidad para Virta, por lo que nuestro equipo est?? investigando los detalles de su cobertura. Le informaremos sobre los pr??ximos pasos lo antes posible.",
  verifyingCoverageParagraph:
    "Estamos trabajando en la verificaci??n de su cobertura. Le informaremos sobre los pr??ximos pasos o le solicitaremos informaci??n adicional.",
  skip: "Omitir",
  editInfo: "Editar informaci??n",
  insuranceDisclaimerLong:
    "Al enviar la informaci??n de su seguro, usted da su consentimiento para que Virta trabaje con su proveedor de seguros a fin de reducir potencialmente sus gastos de bolsillo. Aunque no podemos garantizar ninguna reducci??n del precio al que se compromete en este momento, estamos trabajando para mejorar la cobertura con m??s planes de seguro y lo invitamos a que ingrese su informaci??n en caso de que califique.",
  reviewingHealthInfo:
    "Nuestro equipo est?? revisando su informaci??n de salud para asegurarse de que Virta sea una buena opci??n para usted.",
  fetchIntakeCallStatusAndEventsFailedWarning:
    "No pudimos recuperar el estado de su llamada de admisi??n ni los eventos programados en este momento.",
  contactSupportHeader: "Lamentamos que tenga problemas",
  contactSupportBody:
    "Comun??quese con el equipo de asistencia al {supportEmailLink} para que podamos ayudarlo.",
  basicInformationCompletedTitle: "Informaci??n b??sica completa",
  basicInformationCompletedDescription:
    "Ya envi?? este formulario. Su pr??ximo paso es proporcionarnos cierta informaci??n de salud.",
  createProfile: "Crear perfil",
  encounteredError: "Encontramos un error inesperado al crear su cuenta.",
  welcomeToVirta: "Bienvenido a Virta",
  congratsFirstStep:
    "Felicitaciones por dar su primer paso hacia una mejor salud. ??C??mo deber??amos comunicarnos?",
  recommendPersonalEmailAddress:
    "Recomendamos que utilice su direcci??n de correo electr??nico personal",
  cellPhone: "Tel??fono celular",
  emailSent: "Correo electr??nico enviado",
  startProfile:
    "Cree su perfil para guardar su avance y mantener segura su informaci??n.",
  confirmPassword: "Confirmar contrase??a",
  enterEmailAddress: "Ingrese una direcci??n de correo electr??nico",
  passwordMismatch: "Las contrase??as no coinciden",
  alreadySubmittedFormUnifiedBI:
    "Ya envi?? este formulario. Su pr??ximo paso es proporcionarnos cierta informaci??n de salud.",
  weAreSorry: "Lo sentimos",
  logInWithAccount: "??Ya tiene una cuenta? <l>Inicie sesi??n aqu??.</l>",
  somethingsNotRight: "Algo no est?? bien...",
  timeoutCoverage:
    "Estamos trabajando en la verificaci??n de su cobertura. Mientras tanto, puede continuar con su inscripci??n.",
  eligibilityVerifiedFinalSteps:
    "Verificamos su elegibilidad para Virta y actualizamos su informaci??n en nuestro registro.",
  eligibilityVerifiedStandAlone:
    "Verificamos su elegibilidad para Virta y actualizamos su informaci??n en nuestro registro. Ahora puede iniciar sesi??n en la aplicaci??n de Virta.",
  greeting: "Hola, {firstName}",
  searchAllCategories: "",
  generalHealthConditionsDetails: "Detalles de la condici??n de salud",
  confirmGlucose: "Confirmar el nivel de glucosa",
  glucoseConfirmationWarning:
    "Ingres?? un numero menos de 20 en la aplicaci??n. Queremos asegurarnos de que es un valor correcto o si ingres?? el n??mero porque el medidor le dijo ??LO??",
  glucoseReviseWarning: "Verifique el nivel, que debe ser superior a 20.",
  weTakePrivacySeriously:
    "Nos tomamos muy en serio la privacidad y seguridad de su informaci??n.",
  cellMobileOnly: "Solo tel??fono celular/m??vil",
  toContinueVerifyPhone:
    "Para continuar, necesitamos verificar que tenga acceso al n??mero de tel??fono m??vil que ingres??.",
  weWillSendCodeViaSms: "Le enviaremos un c??digo por SMS",
  pleaseHavePhoneAvailable:
    "Tenga su tel??fono celular a la mano para este pr??ximo paso.",
  verifyPhoneAndSendCode: "Verifique su n??mero de tel??fono y env??e el c??digo",
  sendCodeOnNextPage:
    "Le enviaremos un c??digo que debe ingresar en la siguiente p??gina. Aseg??rese de que el n??mero que ha ingresado sea correcto y haga clic en ???Enviar c??digo???. (Se aplican los cargos normales por mensajes de texto).",
  imageFileSize: "\u2022 El tama??o m??ximo del archivo es 250 MB",
  fileTypes:
    "\u2022 Los tipos de archivo que se aceptan son .pdf, .jpg, .png y .gif",
  front: "Frente",
  uploadImage: "Cargar im??genes de su tarjeta",
  upload: "Cargar",
  attachImageTroubleShooting:
    "Lo sentimos, sigue habiendo un problema. Para ayudarnos a verificar su cobertura, adjunte fotos o copias en PDF de su tarjeta de seguro.",
  contentRecommendationForYouName: "",
  contentRecommendationForYouDescription: "",
  mobilePhoneNumber: "N??mero de tel??fono m??vil",
  stillHavingTroubleContactUs:
    "??Sigue teniendo problemas? Env??e un correo electr??nico a {supportEmailLink}",
  enterCodeSent:
    "Ingrese el c??digo que se indica en el mensaje enviado a su dispositivo m??vil.",
  possibleUpdates: "Hemos encontrado algunas posibles actualizaciones",
  red: "rojo.",
  suggestedInformation: "Usar la informaci??n sugerida",
  originalInformation: "Usar la informaci??n original",
  mealPlan: "",
  snacks: "",
  vegetables: "",
  breakfast: "",
  diabetesDiagnosis: "Diagnosis de la diabetes",
  coverageInformation: "Informaci??n de cobertura",
  isOnDialysis: "Di??lisis",
  isOnDiabetesMedsNotMetformin:
    "Medicamentos para la diabetes adem??s de la metformina",
  hasTakenInsulin2: "Insulina recetada",
  insulinStartYear: "A??o de inicio de la administraci??n de insulina",
  insulinEndYear: "A??o de finalizaci??n de la administraci??n de insulina",
  hasKnowledgeOfVirtaTreatment: "Conocimiento del tratamiento Virta",
  isReadyToStartTreatment: "Lista para comenzar el tratamiento",
  referralChannelOpt: "Primero escuche sobre Virta",
  isWillingToAdoptKeto: "Ingesta diaria de carbohidratos",
  shop: "",
  virtaStore: "",
  smsVerificationCode: "",
  pairMeterCalloutTitle: "",
  pairMeterCalloutDescription: "",
  pairMeter: "",
  notNow: "",
  meterLookingTitle: "",
  meterDetectedTitle: "",
  meterConfirmTitle: "",
  meterSuccessTitle: "",
  meterLookingDescription: "",
  meterDetectedDescription: "",
  meterConfirmDescriptionTop: "",
  meterConfirmDescriptionBottom: "",
  readSupportArticle: "",
  meterSuccessDescriptionTop: "",
  meterSuccessDescriptionBottom: "",
  pushNotificationSettingsDescription:
    "La configuraci??n anterior controla todas las notificaciones de la aplicaci??n de Virta, entre ellas:\n\n??? Mensajes de su entrenador\n??? Recordatorios de registro de glucosa, si procede\n??? Notificaciones de la comunidad",
  pushNotificationSettingsWarning:
    "Desactivar las notificaciones en la configuraci??n de su tel??fono o en la aplicaci??n de Virta evitar?? que reciba mensajes importantes relacionados con la seguridad y no se recomienda.",
  meterErrorTitle: "",
  meterErrorDescriptionTop: "",
  meterErrorDescriptionBottom: "",
  goToSettings: "",
  turnOnBluetoothTitle: "",
  turnOnBluetoothDescription: "",
  authorizeBluetoothTitle: "",
  authorizeBluetoothDescription: "",
  ...forms,
  ...login,
  ...navigation,
  ...primitives,
  ...profile,
  ...languages,
  ...months,
  ...numbers,
  ...states,
  ...aboutYou1,
  ...aboutYou2,
  ...aboutYou3,
  ...aboutYou4,
  ...basicInformation,
  ...eligibility,
  ...finalSteps,
  ...healthProfile1,
  ...healthProfile2,
  ...healthProfile3,
  ...healthProfile4,
  ...healthProfile5,
  ...healthProfile6,
  ...healthProfile7,
  ...healthProfile8,
  ...intakeScheduling,
  ...leadCapture,
  ...status,
  ...physicianSearch,
  ...disqualifications,
  ...nonQualifications,
  ...popularFood,
  ...virtaMeter,
};
/* eslint-enable max-lines */
