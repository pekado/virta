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
    "Asegúrese de haber completado todos los campos y vuelva a intentarlo",
  somethingWrongLoggedOut:
    "Algo salió mal. Parece que su sesión se encuentra cerrada.",
  somethingWrongOurEnd:
    "Algo salió mal. Vuelva a intentarlo y, si el problema persiste, escriba a support@virtahealth.com.",
  bloodPressure: "Presión arterial",
  glucose: "Glucosa",
  ketones: "Cetonas",
  symptoms: "Síntomas",
  emptyString: " ",
  greetingMorning: "Buenos días, {name}",
  greetingEvening: "Buenas noches, {name}",
  greetingAfternoon: "Buenas tardes, {name}",
  today: "Hoy",
  history: "Historia",
  coaching: "Consejos",
  community: "Comunidad",
  more: "Más",
  learn: "Aprender",
  support: "Asistencia",
  test: "Prueba",
  logOut: "Cerrar sesión",
  profileTitle: "Mi perfil",
  settings: "Ajustes",
  weeklySummary: "Resumen semanal",
  carePlanTitle: "Mi plan de atención",
  hrLoveTitle: "❤ Su departamento de RR. HH.",
  skills: "Habilidades",
  resourceCenter: "Centro de recursos",
  educationalVideos: "Videos educativos",
  foodGuide: "Guía de comidas",
  virtaCheatSheet: "Hoja de referencias de Virta",
  testNotificationsButton: "Probar las notificaciones push",
  supportCenter: "Centro de apoyo",
  requestSupplies: "Solicitar suministros",
  coachChangeTitle: "Solicitar cambio de asesor",
  feedback: "Retroalimentación",
  biomarkerHeading: "Mi seguimiento",
  symptomFrequency: "Según sea necesario",
  biomarkerFrequencyAtLeast: "Al menos {frequency}x/{cadence}",
  biomarkerFrequencySuggested: "Sugerido {frequency}x/{cadence}",
  week: "semana",
  day: "día",
  tryAgain: "Intentar de nuevo",
  delete: "Borrar",
  biomarkerSaveError: "No se pudo cargar la última lectura",
  dailyLog: "Registro diario",
  cancel: "Cancelar",
  confirm: "Confirmar",
  timeOfMeasurementLabel: "Tiempo medido",
  accessibilityButtonLabel: "Botón de {label}",
  save: "Guardar",
  over: "sobre",
  accessibilityInputLabel: "entrada de {label}",
  cuffIssues: "¿Tiene problemas con su brazalete?",
  supportArticleViewLink: "Ver el artículo del Centro de apoyo",
  "mg/dl": "mg/dl",
  lbs: "lb",
  "mmol/L": "mmol/l",
  "mm Hg": "mm Hg",
  g: "g",
  oz: "oz",
  scaleIssues: "¿La báscula no registra automáticamente?",
  troubleshootingViewLink: "Visite nuestra guía de solución de problemas",
  confirmWeight: "Confirmar peso",
  weightConfirmationWarning:
    "El peso que ingresó es significativamente diferente del último ingresado de {latestWeight}. Verifique este valor y envíelo nuevamente si es correcto.",
  ok: "ACEPTAR",
  highKetoneInstructions:
    "Si su medidor indica 'ALTO' como valor de cetona, ingrese {MAX_KETONE_VALUE} y busque atención de emergencia de inmediato.",
  ketoneSupplyTitle: "¿Necesita más suministros?",
  ketoneSupplyLink: "Aprenda cómo pedir más suministros",
  confirmKetones: "Confirmar cetonas",
  highKetonesConfirmationWarning:
    "Las lecturas de cetona mayores de {WARNING_KETONE_VALUE} son anormalmente altas. Confirme que esto sea correcto.",
  abnormalKetonesConfirmationWarning:
    "{ketone_value} es mucho {modifier} que su última lectura de {previous_ketone_value}. Confirme que esto sea correcto.",
  abnormalKetonesLess: "menor",
  abnormalKetonesGreater: "mayor",
  preMeal: "Antes de la comida",
  afterMeal: "Después de comer",
  fasting: "Ayuno",
  glucoseFastingDescription:
    "Valores de glucosa tomados al menos 8 horas después de la última ingesta calórica (alimento o bebida)",
  glucoseAfterMealDescription:
    "Valores de glucosa tomados después de comer (puede incluir valores tomados antes de acostarse)",
  glucosePreMealDescription:
    "Valores de glucosa tomados justo antes de la comida (idealmente menos de 30 minutos antes de comer)",
  timeSinceMeal0: "Inmediatamente",
  timeSinceMeal1: "1 hora o menos",
  timeSinceMeal2: "2 horas",
  timeSinceMeal35: "3 a 5 horas",
  timeSinceMeal68: "6 a 8 horas",
  timeSinceMeal8: "Más de 8 horas",
  glucoseReadingInstructions:
    "Si su glucómetro indica 'ALTO', ingrese {MAX_GLUCOSE_VALUE}.\n" +
    "Si indica 'BAJO', ingrese {MIN_GLUCOSE_VALUE}.",
  readingType: "Tipo de lectura",
  timeSinceMealPrompt: "¿Qué tanto tiempo después de la comida?",
  meterIssues: "¿Tiene problemas con su medidor?",
  headache: "Dolor de cabeza",
  symptomCrampsTwitching: "Calambres musculares/Tirones",
  dizziness: "Mareo",
  fatigue: "Fatiga",
  constipation: "Estreñimiento",
  diarrhea: "Diarrea",
  nausea: "Náuseas",
  vomiting: "Vómitos",
  symptomFainting: "Desmayo/Desvanecimiento",
  heartPalpitations: "Palpitaciones cardíacas",
  great: "Excelente",
  good: "Bien",
  okay: "Aceptable",
  bad: "Mal",
  no: "No",
  sometimes: "Algunas veces",
  often: "A menudo",
  always: "Siempre",
  yes: "Sí",
  high: "Alto",
  medium: "Medio",
  low: "Bajo",
  veryLow: "Muy bajo",
  symptomsCoachQuestion: "¿Quisiera conversar sobre esto con su entrenador?",
  symptomsTroubleshootingQuestion:
    "¿Quisiera más información sobre su síntoma?",
  symptomsTroubleshootingPrompt:
    "Le haremos una serie de preguntas sobre solución de problemas para ayudarlo a comprender su síntoma",
  selectAnswerPrompt: 'Seleccione una respuesta para "{question}"',
  additionalDetailsPrompt: "Bríndele más detalles a su entrenador (opcional)",
  additionalDetailsExcludeInfo:
    "Nota: no hay necesidad de ingresar valores de cetona y glucosa aquí.",
  otherSymptomsMaxLengthError:
    "Caracteres máximos permitidos: {MAX_OTHER_SYMPTOMS_LENGTH}",
  symptomsPrompt:
    "Háganos saber cómo se siente. Solo indique cualquier síntoma nuevo o que empeora.",
  mood: "Humor",
  hunger: "Hambre",
  cravings: "Antojos",
  energy: "Energía",
  validWeightPrompt: "Ingrese un peso válido",
  validWeightBetweenPrompt:
    "Ingrese un peso válido entre {MIN_WEIGHT} y {MAX_WEIGHT} lb.",
  validGlucosePrompt: "Ingrese una lectura válida de glucosa",
  glucoseTooHighPrompt:
    "Si su lectura de glucosa en sangre es más de {MAX_GLUCOSE_VALUE}, póngase en contacto inmediatamente con su entrenador(a) de salud.",
  glucoseTooLowPrompt:
    "Si su lectura de glucosa en sangre es menos de {MIN_GLUCOSE_VALUE}, póngase en contacto inmediatamente con su entrenador(a) de salud.",
  measurementTimeRequired: "Elija una hora de medición para su lectura",
  measurementTypeRequired: "Elija un tipo de lectura",
  measurementAfterMealTimeRequired:
    "Incluya el tiempo transcurrido entre la comida y la toma de la lectura",
  validKetonesPrompt: "Ingrese un valor de cetonas válido.",
  singleDecimalPrompt: "Ingrese solo un decimal, por ejemplo, 0.5",
  ketonesTooLowPrompt:
    "Ingrese lecturas válidas de cetonas, por ejemplo, un número positivo.",
  ketonesTooHighPrompt:
    "Los valores de cetonas mayores de {MAX_KETONE_VALUE} son muy inusuales. Si cometió un error, vuelva a ingresar su valor. Si este es un valor real, busque inmediatamente atención de emergencia.",
  validBloodPressurePrompt: "Ingrese una presión arterial válida",
  wholeNumberPrompt: "Ingrese un número entero",
  validBloodPressureTopBetweenPrompt:
    "Ingrese una presión sistólica (superior) válida (usualmente entre {MIN_SYSTOLIC_BP_VALUE} y {MAX_SYSTOLIC_BP_VALUE}).",
  validBloodPressureBottomBetweenPrompt:
    "Ingrese una presión diastólica (inferior) válida (usualmente entre {MIN_DIASTOLIC_BP_VALUE} y {MAX_DIASTOLIC_BP_VALUE}).",
  symptomsAtLeastOnePrompt: "Registre al menos un valor.",
  readingSubmitError: "No envió la lectura",
  weightSubmitSuccess: "Peso enviado exitosamente.",
  bloodPressureSubmitSuccess: "Presión arterial enviada exitosamente.",
  ketonesSubmitSuccess: "Cetonas enviadas exitosamente.",
  symptomsSubmitSuccess: "Registro diario enviado exitosamente.",
  glucoseSubmitSuccess: "Glucosa enviada exitosamente.",
  biometricsSubmitSuccess: "Biometría enviada exitosamente.",
  done: "Listo",
  ketonesReflectonHeader: "Comprenda sus cetonas",
  glucoseReflectionHeader: "Gracias por reflexionar\nsobre su comida",
  glucoseReflectionNutritionGuide:
    "Revise las guías de nutrición a continuación para conocer más. Use la contraseña: virta",
  glucoseChatPartOne: "Converse con su entrenador(a) de salud",
  glucoseChatPartTwo: " acerca de los alimentos sobre los que tiene dudas",
  discover: "Descubrir",
  spanishCalloutTitle: "¡Hemos agregado más recursos en Español!",
  spanishCalloutAction: "Echale un vistazo",
  contentFetchErrorMessage: "",
  biomarkerInvalidTime: "Esta fecha no es válida. Intente de nuevo.",
  biomarkerFutureTime: "Esta fecha es futura. Intente de nuevo.",
  glucoseFeedbackHeader: "Acerca de su valor de glucosa",
  glucoseAccessibilityMessages: "Mensajes sobre glucosa",
  reflectionAccessibilityMessages: "Considere",
  gotIt: "¡Entendido!",
  achievementsAccessibilityMessages: "Logros",
  selectDate: "Seleccionar fecha",
  selectTime: "Seleccionar hora",
  weightEntryInstructions:
    "Súbase a la báscula de Virta o, si es necesario, agregue su peso manualmente.",
  date: "Fecha",
  bloodPressureTopGreater:
    "La presión sistólica debe ser mayor que la diastólica (p. ej., 120 sobre 80).",
  bloodPressureBotLesser:
    "La presión diastólica debe ser menor que la sistólica (p. ej., 120 sobre 80).",
  glucosePrompt: "¿Cuáles son sus niveles de glucosa hoy?",
  bloodPressurePrompt: "¿Cuál es su presión arterial hoy?",
  weightPrompt: "¿Cuál es su peso hoy?",
  ketonesPrompt: "¿Cuál es su nivel de cetonas hoy?",
  lastEntryLabel: "Última entrada",
  errors: "Errores",
  addBiomarker: "Agregar biomarcadores adicionales",
  confirmingEmail: "Confirmando la dirección de correo electrónico",
  pleaseWait: "Espere mientras confirmamos su dirección de correo electrónico.",
  confirmDob: "Para mayor seguridad, confirme su fecha de nacimiento.",
  identityConfirmed: "¡Identidad confirmada!",
  logInToContinueEnrollment: "Inicie sesión para continuar con la inscripción.",
  securityQuestion: "Pregunta de seguridad",
  emailVerificationSent:
    "Hemos enviado instrucciones para verificar su correo electrónico",
  instructionsSent:
    "Hemos enviado instrucciones para verificar su correo electrónico a:",
  pleaseCheckEmailForEmailVerification:
    "Revise su bandeja de entrada en busca de las instrucciones de verificación por correo electrónico de Virta Health.",
  confirmationFailed: "La confirmación de la identidad falló",
  accountLockedForSecurity:
    "Lo sentimos, su cuenta se ha bloqueado por motivos de seguridad. Para desbloquearla, debe verificar su identidad escribiendo a {supportEmailLink} para obtener ayuda.",
  couldntConfirmIdentityContact:
    "Lo sentimos. No podemos confirmar su identidad. Escriba a {supportEmailLink} para recibir ayuda.",
  checkEmailForPasswordReset:
    "Revise su bandeja de entrada en busca de las instrucciones para restablecer su contraseña de Virta Health.",
  stillHaventReceivedEmail:
    "¿No recibió el correo electrónico? Verifique que la dirección de correo electrónico que se indica con anterioridad sea correcta.",
  passwordResetInstructionsSent:
    "Hemos enviado instrucciones para restablecer su contraseña",
  locationSent:
    "Si existe una cuenta con este correo electrónico, se enviaron instrucciones para restablecer su contraseña a:",
  caseRequirement: "Al menos una letra minúscula y una letra mayúscula",
  characterRequirement: "Al menos un carácter especial (&, #, !, etc.)",
  continueEnrollment: "Continúe con su inscripción.",
  lengthRequirement: "Al menos 8 caracteres",
  newReset:
    "<l>Haga clic aquí</l> a fin de enviar un nuevo correo para restablecer su contraseña.",
  notVerified:
    "Su dirección de correo electrónico no ha sido verificada. Revise su bandeja de entrada en busca de un correo electrónico de confirmación de Virta Health.",
  numberRequirement: "Al menos un número",
  reinforceSuccess: "Su contraseña se estableció correctamente.",
  passwordRequirements: "Requisitos para la contraseña",
  resetExpired: "Su correo electrónico para restablecer la contraseña expiró.",
  setToSave:
    "Elija una contraseña. Esto lo ayudará a guardar su progreso y proteger su información.",
  setYourPassword: "Establezca su contraseña",
  successfullySet: "Contraseña establecida correctamente",
  verificationEmailExpired: "El correo electrónico de verificación expiró",
  resendVerificationEmail: "Reenviar correo electrónico de verificación",
  tryEmailVerificationAgain:
    "Lo sentimos, el correo electrónico de verificación expiró. Ingrese su correo electrónico a continuación para que le enviemos un nuevo correo de verificación.",
  forgotPasswordTitle: "Olvidé mi contraseña",
  forgotPasswordInstructions:
    "Ingrese su correo electrónico a continuación para que podamos brindarle instrucciones para restablecer su contraseña.",
  sendInstructions: "Enviar instrucciones",
  noAccountApplyNow: "¿No tiene una cuenta? <l>Envíe su solicitud ahora</l>.",
  continueVirtaEnrollment: "Continuar con la inscripción en Virta",
  invalidLogin:
    "Correo electrónico o contraseña inválido. Si tiene problemas para iniciar sesión, haga clic en “Olvidé mi contraseña”.",
  rememberToVerify: "Recuerde verificar su cuenta",
  ifYouHaventVerified:
    "Si aún no lo hizo, verifique su cuenta haciendo clic en “Continuar” en el correo electrónico de confirmación.",
  none: "Ninguno",
  notConfident: "No está seguro",
  veryConfident: "Muy seguro",
  communicationDisqualification: "No se puede comunicar en inglés",
  smartphoneDisqualification: "No tiene acceso a un teléfono inteligente",
  yourInfoProtectedAndConfidential:
    "Su información médica está protegida y es absolutamente confidencial. Virta solo compartirá su información médica con las personas autorizadas, lo que incluye a sus proveedores, las personas que administran sus beneficios de salud y los terceros que nos ayudan a proporcionar nuestros servicios. Virta nunca compartirá su información de salud con personas de su empresa que no estén involucradas en la administración de sus beneficios de salud o con otros terceros.",
  biQuestionsContact:
    "¿Tiene preguntas? Envíe un correo electrónico a {supportEmailLink}.",
  eligibilityBasedOnCriteria:
    "La elegibilidad se basa en el cumplimiento de los criterios aplicables. El envío de una solicitud no garantiza la aceptación en Virta.",
  firstStepInLearningMore:
    "El primer paso para saber más sobre el tratamiento Virta es programar una llamada gratuita con uno de nuestros asesores de inscripción, quien evaluará cómo podría funcionar Virta para usted.",
  basicInformation: "Información básica",
  basicInformationInstructions:
    "Proporcione algunos datos básicos de contacto, cobertura y salud para que nuestro equipo pueda preparar la llamada. Podrá programar la llamada después de enviar esta información.",
  generalInformation: "Información general",
  accountCreationFailed:
    "Error al crear la cuenta. Se ingresó un correo electrónico inválido.",
  type2: "Diabetes tipo 2",
  preD: "Prediabetes",
  preD35: "Prediabetes con un IMC superior a 35",
  preD34: "Prediabetes con un IMC superior a 34",
  type2NotMetformin:
    "Diabetes de tipo 2 con una medicación que cubre los requisitos",
  obesity30: "Obesidad con IMC superior a 30",
  notQualified: "No cumple los criterios de calificación",
  qualifiedNoDx: "Cumple los criterios de calificación",
  nextStepIsIntakeCall:
    "El siguiente paso es programar una llamada con un asesor de inscripción que pueda responder a cualquier pregunta sobre estos criterios.",
  emailAssistance:
    "Si tiene alguna pregunta o necesita ayuda, envíe un correo electrónico a {supportEmailLink}.",
  contactPleaseEmail:
    "¿Tiene preguntas? Envíe un correo electrónico a nuestro equipo de asistencia:",
  prelaunchHeader: "Gracias por su solicitud.",
  prelaunchInstructions:
    "{payerName} ofrece Virta a partir del {goLiveDateString}, por lo que hemos suspendido su inscripción y lo hemos añadido a la lista de espera.",
  prelaunchInstructionsFooter:
    "Nos pondremos en contacto con usted tan pronto como se abra la inscripción. Esté atento a su correo electrónico para recibir más instrucciones.",
  instructionsHeader: "Instrucciones para la lista de espera",
  prelaunchSubheader: "Se le ha añadido a la lista de espera.",
  invalidHeight: "Estatura no válida; debe ser mayor que 2 pies",
  costOfVirta: "Costo del tratamiento Virta",
  costOfVirtaSubheader:
    "Sus gastos por cuenta propia para Virta dependen de los detalles de su plan y del estado del deducible.",
  specialCost:
    "<x>Los miembros con cobertura activa de {insuranceProvider} pagan</x><y>${price} por mes</y><z>en concepto de gastos por cuenta propia.</z>",
  standardCost:
    "<x>El precio estándar de Virta es de</x><y>*$249 por mes</y><z>*También hay una tarifa única de $250 por el kit de suministros que se paga por adelantado. Su kit incluye una báscula de peso corporal que se conecta al celular, suministros para medir el azúcar y las cetonas en sangre, y más.</z>",
  learnMore: "Obtenga más información",
  noCostToApply:
    "*Tenga en cuenta que el proceso de inscripción no tiene costo alguno y que puede seguir adelante y obtener más información sin iniciar el pago.",
  apiError:
    "Lo sentimos, se produjo un error inesperado. Inténtelo de nuevo más tarde.",
  communicationAgreement:
    "Al marcar la casilla, acepta que nos comuniquemos con usted por correo electrónico y mensajes de texto. Además, reconoce que el correo electrónico y los mensajes de texto no siempre son formas seguras de comunicación y que Virta no puede garantizar la seguridad y confidencialidad de la información intercambiada mediante estos métodos.",
  limitedCommunication:
    "Virta se toma la seguridad y la privacidad muy en serio y hace todo lo posible para limitar la comunicación en estas plataformas a lo que es indispensable para su atención.",
  mustAcceptTerms:
    "Debe aceptar los Términos de servicio y la Política de privacidad",
  badAge: "La edad ingresada debe ser un número entero",
  badWeight: "El peso ingresado debe ser un número entero",
  invalidAge: "Ingrese una edad válida",
  longPhone: "El número es demasiado largo",
  longZip: "El código postal es demasiado largo",
  shortPhone: "El número es demasiado corto",
  shortZip: "El código postal es demasiado corto",
  stepXOfY: "Paso {x} de {y}",
  dayUppercase: "Día",
  dob: "Fecha de nacimiento",
  faq: "Preguntas frecuentes",
  month: "Mes",
  optional: "Opcional",
  optionalPreferredName: "Opcional (si es diferente al nombre)",
  previous: "Anterior",
  unsure: "No estoy seguro",
  year: "Año",
  and: "y",
  here: "aquí",
  loading: "Cargando...",
  applicationClosed: "Solicitud cerrada",
  sorryYourApplicationClosed:
    "Lo sentimos. Hemos cerrado su solicitud de Virta. Si sigue interesado en presentar una solicitud para Virta, escriba a {supportEmailLink}.",
  yourHIP: "Su proveedor de seguro médico",
  enrollmentSaved:
    "Se ha guardado el progreso de su inscripción al día de hoy.",
  allSpotsFilled: "Lamentablemente, ya se ha cubierto el cupo de Virta.",
  limitedSpots: "{insuranceProvider} ofrece un cupo limitado en Virta.",
  unableToOfferAdditionalSpots:
    "En este momento, el cupo de Virta se ha cubierto y no podemos ofrecer cupos adicionales. Le pedimos disculpas y agradecemos el tiempo que invirtió para formar parte de Virta.",
  wantMoreInfo: "¿Desea obtener más información?",
  checkYourEmail: "Revise su correo electrónico para obtener más detalles.",
  didntReceiveEmail: "¿No recibió el correo electrónico?",
  pleaseEmail: "Envíe un correo electrónico a {supportEmailLink}.",
  thanksForSubmitting: "¡Gracias por presentar su información, {userName}!",
  getStartedOnFinalStep:
    "Puede proceder al último paso de la inscripción, que consiste en obtener una autorización médica para unirse a Virta.",
  confirmInformation: "Confirmar información",
  medicalClearance: "Autorización médica",
  startingVirta: "Primeros pasos en Virta",
  onceStepsAreComplete:
    "Una vez que complete estos pasos, Virta tendrá todo lo que necesita para aprobar su inscripción.",
  videoAppointmentTitle: "Consulta médica por video",
  videoAppointmentDescription:
    "Programe una consulta gratuita y sin compromiso por video con un proveedor médico de Virta.",
  scheduleVisit: "Programar consulta",
  seeVisitDetails: "Ver los detalles de la consulta",
  attendVisit: "Asistir a una consulta",
  rescheduleVisit: "Reprogramar una consulta",
  intakeCallTitle: "Llamada de admisión",
  intakeCallDescription:
    "Conozca a su asesor de inscripción por teléfono y obtenga más información sobre cómo funciona Virta.",
  labsTaskTitle: "Estatus de las pruebas de laboratorio",
  labsTaskDescription:
    "Envíe a Virta los resultados de un conjunto básico de pruebas de laboratorio.",
  completeLabs: "Completar pruebas de laboratorio",
  roiTitle: "Revelación de información",
  roiDescription:
    "Firme nuestro formulario de Revelación de información, para que el equipo clínico de Virta pueda solicitar registros médicos a su proveedor de atención primaria.",
  weUnderstand:
    "Entendemos que asistir al laboratorio no es una buena opción para muchos pacientes debido a la pandemia del coronavirus. Para quienes deseen evitar las citas presenciales, Virta ofrece métodos de toma de muestras a domicilio totalmente cubiertos para realizar las pruebas básicas que requiere la inscripción. Hablará sobre las opciones de pruebas de laboratorio a domicilio con su asesor de inscripción durante la llamada de admisión.",
  forThose:
    "Si prefiere las citas presenciales, puede ver las opciones de inscripción para pruebas de laboratorio habituales de Virta <l>aquí</l>.",
  labs: "Pruebas de laboratorio",
  localCoveredClinic: "Clínica local cubierta: cobertura total",
  ifNearClinic:
    "Si se encuentra cerca de una clínica con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  labsFirstStep: "Paso 1: Generar formularios para las pruebas de laboratorio",
  seeClinicList:
    "Para ver la lista de clínicas cubiertas, haga clic en el botón “Obtener formularios”, a continuación. Asegúrese de completar todas las secciones y descargar e imprimir ambos formularios de la orden.",
  getForms: "Obtener formularios",
  labsSecondStep: "Paso 2: Realizar las pruebas de laboratorio",
  printOrderForms:
    "Imprima los formularios de la orden y llévelos a una clínica cubierta para realizar sus pruebas de laboratorio.",
  youMustFast:
    "Recordatorio: Debe mantener un ayuno de 9 horas como mínimo antes de realizarse las pruebas de laboratorio.",
  localCoveredClinicLocation: "Ubicación de la clínica local cubierta",
  clickGetForms:
    "Para ver la lista de clínicas locales cubiertas y sus ubicaciones, haga clic en el botón “Obtener formularios” que se encuentra arriba.",
  receiveDocusignEmail:
    "Recibirá un correo electrónico de DocuSign con el código de acceso. Si no encuentra el correo electrónico con el código de acceso, revise la carpeta de correo no deseado.",
  labCorpFullyCovered: "LabCorp: cobertura total",
  ifNearLab:
    "Si se encuentra cerca de un laboratorio con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  makeSureToCompleteOrderForm:
    "Asegúrese de completar todas las secciones y descargar e imprimir el formulario de la orden.",
  printMedLabForm:
    "Imprima el “Formulario de orden médica de pruebas de laboratorio” (primera página) y llévelo a un establecimiento cercano de LabCorp. Si necesita ayuda para localizar un establecimiento, consulte a continuación.",
  preferPCP:
    "Si prefiere recurrir a su proveedor de atención primaria para realizarse las pruebas de laboratorio en lugar de recurrir a LabCorp, puede proporcionarle el formulario de la orden de pruebas de laboratorio; sin embargo, usted deberá pagar los gastos por cuenta propia.",
  noApptNecessary:
    "No es necesario programar una cita para realizarse las pruebas de laboratorio.",
  scheduleApptWithFollowingInfo:
    "Sin embargo, si desea programar una cita, use la siguiente información para completar el <l>formulario de solicitud de cita</l>:",
  selectRoutineLabWork:
    "Cuando se le pregunte qué servicio desea, seleccione “pruebas de laboratorio de rutina”",
  sayYesToFasting:
    "Elija la opción “sí” cuando se le pregunte si estará en ayunas",
  sayMyEmployerWillPay:
    "Con respecto al método de pago, seleccione “Mi empleador u otra empresa pagará la consulta”",
  doINeedToSchedule:
    "¿Debo programar una cita para hacerme pruebas de laboratorio en LabCorp?",
  whereIsMyAccessCode:
    "¿Dónde está mi código de acceso para los formularios de mi orden de pruebas de laboratorio?",
  willReceiveDocusignEmail:
    "Recibirá un correo electrónico de DocuSign con el código de acceso. Si no encuentra el correo electrónico con el código de acceso, revise la carpeta de correo no deseado.",
  howMuchLabCost: "¿Cuánto costarán las pruebas de laboratorio?",
  virtaCoversLabCost:
    "Virta cubre el costo de las pruebas de laboratorio que se realicen en LabCorp con el formulario de orden de pruebas de laboratorio proporcionado por Virta. Si prefiere recurrir a su médico de atención primaria para realizarse las pruebas de laboratorio en lugar de recurrir a LabCorp, puede proporcionarle el formulario de la orden de pruebas de laboratorio; sin embargo, usted deberá pagar los gastos por cuenta propia.",
  whereToSeeResults: "¿Dónde puedo ver mis resultados de LabCorp?",
  toSeeResultsGoTo:
    "Si desea ver sus resultados de LabCorp, visite <l>patient.labcorp.com</l> y cree una cuenta.",
  yourPCPNotCovered: "Su proveedor de atención primaria: sin cobertura",
  getYourLabs:
    "Puede pedirle a su proveedor de atención primaria que realice sus pruebas de laboratorio, así como a otra clínica de su elección, pero es posible que deba cubrir los gastos por cuenta propia.",
  makeSureForm:
    "Asegúrese de completar todas las secciones y descargar e imprimir el formulario de la orden.",
  printBothOrderForms:
    "Imprima ambos formularios de la orden y entrégueselos a su proveedor de atención primaria o a la clínica de su elección. Debe pedirles que emitan una orden para sus pruebas de laboratorio.",
  whereGetTests: "¿A dónde debo ir para realizar estos análisis?",
  recommendCallPCP:
    "Le recomendamos que llame a su proveedor de atención primaria de antemano para saber si puede ordenar estos análisis para usted. Si no es así, puede acudir a una clínica local de atención de urgencia o de atención por orden de llegada.",
  howMuchLabsCost: "¿Cuánto costarán las pruebas de laboratorio?",
  cannotPredictCost:
    "No podemos decirle cuánto costarán las pruebas de laboratorio, dado que depende de su proveedor, el plan médico y los deducibles, pero la mayoría de los pacientes no tiene problemas con el costo de las pruebas.",
  optionsToCompleteLabs: "Opciones para realizar sus pruebas de laboratorio",
  feelFree:
    "Siéntase libre de consultar cada opción; puede regresar a esta página en cualquier momento.",
  completeScreening:
    "Para completar la evaluación médica, debe enviar los resultados de un conjunto básico de pruebas de laboratorio a Virta.",
  ifRecentLabsFax:
    "Si hace poco se realizó estas pruebas de laboratorio, pídale a su proveedor de atención médica que las envíe por fax a Virta al {virtaFaxNumber}, o usted puede enviarlas por correo electrónico a su asesor de inscripción. Hablará sobre las opciones de pruebas de laboratorio con su asesor de inscripción durante la llamada de admisión.",
  testsNotRequired:
    "No es necesario que tenga los resultados de estos análisis antes de la cita con su proveedor de Virta. Estos análisis se usarán como parte del proceso de aprobación, por lo cual, cuanto antes los presente, antes podrá obtener la aprobación.",
  instructions: "Instrucciones",
  nearLab:
    "Si se encuentra cerca de un laboratorio con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  localClinicFullyCovered: "Clínica local cubierta: cobertura total",
  nearClinic:
    "Si se encuentra cerca de una clínica con cobertura total, puede realizarse las pruebas de laboratorio sin costo.",
  pcpNotCovered: "Su proveedor de atención primaria: sin cobertura",
  labsElsewhere:
    "Puede pedirle a su proveedor de atención primaria que le realice sus pruebas de laboratorio, así como a otra clínica de su elección, pero es posible que deba cubrir los gastos por cuenta propia.",
  paymentInfo: "Información de pago",
  agreeToBeCharged:
    "Acepto que Virta me cobre cada mes la suma que me informaron por correo electrónico, a través del método de pago que seleccioné, en la fecha de inicio de la suscripción y en el mismo día de cada mes posterior. El envío de mi información de pago a través del formulario del siguiente enlace implica lo siguiente:",
  agreeTerms:
    "Que acepto los <t>Términos de uso</t> y la <p>Política de privacidad</p> de la suscripción de Virta.",
  authorizeVirta:
    "Que autorizo a Virta o a su procesador de pagos a continuar mi suscripción de forma automática y cobrar el costo de suscripción todos los meses, según se describe en el resumen de pago que antecede, a través del método de pago que le proporcioné a Virta, hasta que cancele la suscripción.",
  noRefundsForPartialMonths:
    "No se emitirán reembolsos ni créditos por los meses parciales.",
  toCancel:
    "Para cancelar mi suscripción, debo informar sobre la cancelación a Virta, enviando un correo electrónico a {supportEmailLink}, para que sea válida el siguiente mes. En caso de que ya no sea paciente de Virta, Virta podrá dar por finalizada esta suscripción sin que me proporcione un aviso.",
  bySubmitting:
    "Al enviar este formulario con mi información de pago, autorizo que Virta lo procese para pagar los servicios de Virta que se me ha proporcionan. Entiendo que una vez que se procese mi pago, se inicia mi suscripción recurrente. También entiendo que Virta dejará de procesar estos pagos cuando yo ya no sea paciente de Virta, o cuando solicite a Virta que deje de procesar estos pagos (poniéndome en contacto con Virta al {supportEmailLink}). Puede encontrar los términos de pago detallados <l>aquí</l>.",
  yourSavedCard: "Su tarjeta guardada",
  noCcInfo: "No se encontró información sobre tarjetas de crédito",
  clickAddCard:
    "Haga clic en “Agregar tarjeta” para agregar un método de pago e inscribirse en la suscripción para tratamientos de Virta Health.",
  subscriptionTerms: "Términos de uso de la suscripción",
  term1:
    "1. El acceso a Virta se cubrirá por medio de una suscripción mensual. Por lo tanto, es necesario que se inscriba en nuestro sistema de pagos automáticos.",
  term2:
    "2. Para acceder al tratamiento es necesario que presente su información de pago mediante tarjeta de crédito o débito.",
  term3:
    "3. Esta tarjeta debe ser registrada y se le harán los cargos automáticamente.",
  term4:
    "4. Virta no cobrará su primer pago (que es la cuota de iniciación + el primer mes) hasta el día en que se apruebe el inicio del tratamiento.",
  term5:
    "5. Cada mes adicional de pago se cobrará un mes después de la fecha del primer pago (“su fecha de pago”).",
  term6:
    "6. Si su tarjeta registrada falla o es rechazada, nos pondremos en contacto con usted en un plazo de 3 días hábiles. Si no recibimos el pago en un plazo de 2 semanas a partir de su fecha de pago, Virta iniciará el proceso para retirarlo del tratamiento y perderá el acceso a la aplicación.",
  term7:
    "7. Si decide interrumpir el tratamiento de Virta, seguirá teniendo acceso hasta que termine el último mes que se le cobró.",
  term8: "8. Virta no ofrece reembolsos.",
  termsOfService: "Términos de servicio",
  termsOfServiceDetails:
    "Revise y acepte los Términos de servicio y la Política de privacidad",
  addressLineTwo: "Dirección (continuación)",
  confirmPharmacyAddress:
    'Haga clic en "Confirmar dirección" arriba para guardar su dirección.',
  phoneNumber: "Número de teléfono",
  reaction: "Reacción",
  listFoodAllergies: "Enumere todas sus alergias e intolerancias alimentarias",
  noFoodAllergies: "Ninguna alergia o intolerancia alimentaria",
  listMedAllergies: "Enumere todas sus alergias e intolerancias a medicamentos",
  noMedAllergies: "Alergia o intolerancia a un medicamento",
  mustMakeFoodSelection:
    "Debe agregar alergias alimentarias o seleccionar “No tengo alergias alimentarias”.",
  mustMakeMedSelection:
    "Debe agregar alergias a medicamentos o seleccionar “No tengo alergias a medicamentos”.",
  preferredName: "Nombre preferido",
  requiredByPrevYesResponse:
    "Campo obligatorio debido a la respuesta afirmativa anterior",
  consentFormsTitle: "Formularios de consentimiento",
  pleaseReview:
    "Revise y acepte los siguientes términos de servicio que nos permiten brindarle atención.",
  nextConsent: "Siguiente consentimiento",
  startConsent: "Iniciar consentimiento",
  start: "Iniciar",
  voluntaryAuth:
    "Autorización voluntaria para revelar información de salud protegida",
  protectingData: "Protección de sus datos:",
  deliverRxParts:
    "Para llevar a cabo algunas partes del tratamiento, como el envío de su kit de inicio, necesitamos su consentimiento para compartir información con nuestros socios de confianza.",
  authPurpose: "Objetivo de la autorización:",
  allowPHI:
    "El objetivo de esta autorización es permitirle a Virta revelar su información de salud protegida (protected health information, PHI) a todos los proveedores externos que ayudan a Virta a (i) brindarle el tratamiento, (ii) administrar sus servicios para ofrecerle el tratamiento y (iii) cobrar el pago de su tratamiento (los “Objetivos de la Autorización”). Consulte los términos a continuación.",
  duration: "Duración:",
  authInForce:
    "Esta autorización estará vigente y surtirá efecto hasta que usted la revoque. <b>Tiene derecho a anular (“revocar”) su autorización</b> por escrito en cualquier momento, enviando una declaración por escrito con fecha y firma a Virta Health (501 Folsom Street, San Francisco, CA 94105) o enviando un correo electrónico a {supportEmailLink} para informar que desea revocar su autorización. Virta ya no revelará su información de salud protegida, a menos que ya lo hubiera hecho de conformidad con su autorización anterior. Si autorizó la revelación de registros sobre abuso de sustancias o alcohol, puede revocar este permiso de forma oral.",
  iVoluntarilyAuthorize:
    "Autorizo de forma voluntaria a Virta Health a revelar mi información de salud protegida a todos los proveedores externos que participen en los Objetivos de la Autorización.",
  readAndConsidered:
    "Tuve la oportunidad de leer y analizar el contenido de esta autorización.",
  furtherUnderstand:
    "Además, entiendo que mi participación en el tratamiento de Virta depende de que acepte los Objetivos de la Autorización según se designan, firmando esta autorización. Al marcar la casilla “Acepto” a continuación, acepto y es mi intención firmar esta autorización y enviarla de forma electrónica, y asumir la responsabilidad con la misma validez que si hubiera firmado esta autorización con mi puño y letra en un papel.",
  iAcknowledge: "Reconozco",
  weTakePrivacy:
    "Abordamos la privacidad y seguridad de sus datos de forma muy seria, y usted puede cambiar su consentimiento en cualquier momento. Consulte nuestra <p>Política de privacidad</p> para obtener más detalles.",
  removeMedication: "Eliminar medicamento",
  remove: "Eliminar",
  currentMedications: "Medicamentos actuales",
  pleaseAddMedDetails: "Agregue los detalles completos del medicamento.",
  addMeds: "Agregar medicamentos",
  notTakingMeds: "Actualmente no estoy tomando medicamentos",
  mustMakeSelection:
    "Debe agregar medicamentos o seleccionar “No estoy tomando medicamentos actualmente”.",
  age: "Edad",
  approxHowOld:
    "¿Qué edad tenía aproximadamente en el momento en el que recibió el diagnóstico de prediabetes o diabetes?",
  notSureAboutDiagnosis: "No lo sé con certeza",
  deceased: "Fallecido",
  listSiblingMedProblems: "Enumere los problemas médicos de este familiar:",
  biologicalRelativesSection:
    "La siguiente sección hace referencia a los familiares biológicos Si no lo sabe, deje esta sección en blanco.",
  fatherHealth: "Salud del padre",
  siblingHealth: "Salud del hermano",
  motherHealth: "Salud de la madre",
  healthHistoryTitle: "Antecedentes de salud",
  thanksForConfirmingBI:
    "Gracias por confirmar su información básica. El próximo paso para inscribirse en Virta es completar sus antecedentes de salud, que los usará su proveedor médico de Virta para prepararse para su próxima consulta médica por video.",
  pleaseNoteYourInfoIsProtected:
    "Tenga en cuenta que su información es 100 % privada y está protegida por la Ley de Portabilidad y Responsabilidad del Seguro Médico (Health Insurance Portability and Accountability Act, HIPAA).",
  virtaWillNotShareYourInfo:
    "Virta no compartirá nunca su información de salud con su empleador ni con terceros distintos de su proveedor de atención médica.",
  questionsEmail:
    "¿Tiene preguntas? Envíe un correo electrónico a {supportEmailLink}.",
  yourInfoProtectedByHIPAA:
    "Su información es privada y está protegida por la Ley de Portabilidad y Responsabilidad del Seguro Médico (HIPAA).",
  stillHaveGallbladder: "Sí, pero sigo teniendo la vesícula",
  gallbladderRemoved: "Sí, me extirparon la vesícula",
  digestiveHistoryTitle: "Antecedentes de salud digestiva",
  pancreaticEnzymes:
    "¿Toma suplementos de enzimas pancreáticas (por ejemplo, Creon)?",
  pancreasIssuesQuestion:
    "¿Alguna vez lo operaron del páncreas o le diagnosticaron pancreatitis crónica?",
  liverDiseaseQuestion:
    "¿Alguna vez le diagnosticaron algún tipo de hepatopatía?",
  shortBowelSyndrome:
    "¿Alguna vez le diagnosticaron síndrome del intestino corto?",
  organTransplantQuestion: "¿Le trasplantaron algún órgano en el abdomen?",
  intestinalSurgery:
    "¿Alguna vez se sometió a una cirugía de intestino? Por ejemplo, del duodeno, yeyuno, estómago o colon",
  gallbladderProblems:
    "¿Alguna vez le dijeron que tiene problemas de vesícula?",
  crohns: "¿Alguna vez le diagnosticaron la enfermedad de Crohn?",
  colitis: "¿Alguna vez le diagnosticaron colitis ulcerosa?",
  geneticHistoryTitle: "Antecedentes genéticos",
  raceIdent:
    "¿Con qué grupo racial o étnico se identifica más? Marque todas las opciones que correspondan.",
  heartHistoryTitle: "Antecedentes de salud cardíaca",
  hadHeartAttack: "¿Alguna vez tuvo un ataque cardíaco?",
  hadCHF: "¿Alguna vez le diagnosticaron insuficiencia cardíaca congestiva?",
  valveProblemsQuestion:
    "¿Alguna vez le dijeron que ha tenido un problema con una válvula cardíaca?",
  potsDiagnosed:
    "¿Alguna vez le diagnosticaron taquicardia ortostática postural?",
  svt: "¿Alguna vez le dijeron que tenía ritmo cardíaco anormal, como fibrilación auricular o taquicardia supraventricular?",
  prolongedQT:
    "¿Alguna vez le dijeron que tiene síndrome del QT largo tras realizar un electrocardiograma (abreviado como ECG)?",
  peripheralArterialDisease:
    "¿Alguna vez le diagnosticaron arteriopatía periférica?",
  hypertension: "¿Alguna vez le diagnosticaron hipertensión arterial?",
  lowBloodPressure:
    "¿Alguna vez le dijeron que su presión arterial estaba demasiado baja, aunque haya sido temporal?",
  haveYouEverFainted: "¿Alguna vez se ha desmayado?",
  steroidMedsQuestion:
    "¿Ha tomado medicamentos esteroideos en los últimos 12 meses?",
  impairImmunityMeds:
    "¿Ha recibido medicamentos que afectan al sistema inmunitario en los últimos 24 meses?",
  nextStepIsHealthHistory:
    "El próximo paso para inscribirse en Virta es completar sus antecedentes de salud, esta información la usará su proveedor médico de Virta para prepararse para su próxima consulta médica por video.",
  commonMedicalQuestions: "Preguntas médicas frecuentes",
  askingBecauseOfDiabetes:
    "Hacemos estas preguntas porque estos cuadros se suelen asociar con la diabetes.",
  yesNoDetails:
    "Proporcione más detalles sobre todo lo que respondió con “sí”:",
  primaryCareProvider: "Proveedor de atención primaria",
  listAllSurgeries: "Enumere todas las cirugías a las que se ha sometido.",
  noSurgeries: "Ninguna cirugía",
  addSurgeries: "Agregar cirugías",
  mustMakeSurgerySelection:
    "Debe agregar cirugías o seleccionar “No me he sometido a cirugías”.",
  clickConfirmAddressAbove:
    'Haga clic en "Confirmar dirección" arriba para guardar su dirección.',
  homeAddress: "Dirección original",
  useDifferentShipping:
    "Me gustaría utilizar una dirección diferente para el envío.",
  hic: "Cobertura del seguro médico",
  waiver: "Renuncia",
  pleaseReviewAndAccept: "Lea y acepte la renuncia",
  iAgreeToWaiver: "Acepto la <l>Renuncia</l>",
  mustAcceptWaiver: "Debe aceptar la renuncia",
  importantSafetyInformation: "Información de seguridad importante",
  safeToKeepProvidersUpToDate:
    "Creemos que es importante y seguro que sus otros proveedores de atención médica se mantengan actualizados con respecto a sus cambios de medicación y a su progreso con Virta, para que todos sus proveedores de atención médica puedan atenderlo de la mejor manera posible.",
  optOutFromProviderUpdateExplanation:
    "Enviaremos información actualizada a su proveedor de atención primaria, a menos que nos indique lo contrario. Si surgen problemas médicos y desea que su equipo médico de Virta se coordine con otro proveedor, puede consultarlo con su entrenador(a) de salud después de la inscripción.",
  optOutFromProviderUpdateField:
    "No quiero que mi proveedor de atención médica reciba información sobre mi progreso en Virta.",
  faxNumberNoticeRequirement:
    "Actualmente, solo podemos enviar información actualizada sobre su progreso a un proveedor y <b>debemos tener su número de fax</b> para hacerlo.",
  primaryEmail: "Correo electrónico principal",
  primaryPhone: "Teléfono Principal",
  weightInPounds: "Peso",
  heightInInches: "Altura",
  communication: "Lenguaje primario",
  selectSpeciality: "Seleccione una especialidad",
  address1: "Dirección 1",
  address2: "Dirección 2",
  province: "Provincia",
  postalCode: "Código postal",
  phone: "Número de teléfono",
  phoneNumTooShort: "El número de teléfono es demasiado corto",
  phoneNumTooLong: "El número de teléfono es demasiado largo",
  faxNumTooShort: "El número de fax es demasiado corto",
  faxNumTooLong: "El número de fax es demasiado largo",
  editPostalCode: "Editar código postal",
  findYour: "Buscar su {physicianType}",
  postalCodeInvalid: "El código postal no es válido",
  physicianSearch: "Buscar médico",
  virtaReferralTitle: "Solicitud de derivación de Virta Health",
  basicContact:
    "Proporcione información de contacto y de salud básica sobre el solicitante que está derivando. Después será redirigido a la página del calendario para programar la llamada telefónica con un asesor de inscripción de Virta.",
  ifHaveQuestions:
    "Si tiene alguna pregunta o necesita ayuda, envíe un correo electrónico a {supportEmailLink}.",
  legalFName: "Nombre legal",
  fname: "Nombre",
  legalLName: "Apellido legal",
  lname: "Apellido",
  cell: "Celular",
  whichDiagnosesReferral:
    "¿Cuál de los siguientes diagnósticos recibió el solicitante?",
  referralInsulinQuestion: "¿Alguna vez se le recetó insulina?",
  referralCurrentDialysis: "¿El solicitante está recibiendo diálisis?",
  referralPregnancyQuestion: "¿Cursa un embarazo?",
  referralTakingInsulin: "Sí, recibe insulina actualmente.",
  referralPastInsulin: "Sí, pero en el pasado. No recibe insulina actualmente.",
  theyNeverInsulin: "Nunca recibió insulina.",
  referralUnsureInsulin: "No lo sabe con certeza.",
  selectGender: "Seleccione un género",
  requiredByPrevResponse: "Campo obligatorio debido a la respuesta anterior",
  enterEmail: "Ingrese un correo electrónico válido",
  backToApplication:
    "<l>Deseo regresar a la solicitud</l> para poder actualizar mi información.",
  disappointingNews:
    "Entendemos que esta noticia puede ser desalentadora. Tomamos esta decisión priorizando su seguridad. Virta asume el compromiso de no poner en riesgo la seguridad del paciente en ninguna circunstancia. El estado actual de la tecnología para la supervisión remota de los pacientes es limitado, y algunos cuadros clínicos no se pueden supervisar de forma segura en el entorno ambulatorio.",
  pleaseNoteOtherPrograms:
    "Tenga en cuenta que su proveedor de atención primaria, empleador o seguro pueden tener otros programas o tratamientos médicos que podrían funcionar en su caso. Le recomendamos que se comunique con ellos para obtener más información sobre sus otras opciones.",
  emailSupportWithQuestions:
    "Si tiene preguntas, envíe un correo electrónico a {supportEmailLink}.",
  applicationReceived: "¡Solicitud recibida! Próximos pasos:",
  applicationSubmitted:
    "Su solicitud se envió correctamente. A continuación, queremos informarle cómo funciona Virta.",
  step1LearnVirta: "Paso 1: Aprenda sobre Virta",
  watchVideo:
    "Mire este video breve para conocer los detalles del tratamiento de Virta.",
  verifyAccount: "Verifique su cuenta para acceder al historial de salud.",
  pleaseCheckEmail:
    "Revise su correo electrónico para verificar su cuenta. Después de verificar su cuenta, podrá acceder al formulario de su historial de salud.",
  step2CheckEmail: "Paso 2: Revise su bandeja de entrada",
  clickContinueEmail:
    "Haga clic en “Continuar” en el correo electrónico de confirmación para verificar su cuenta.",
  emailSentTo: "Se envió un correo electrónico a {applicantEmailAddress}.",
  notReceivedEmail:
    "¿No recibió el correo electrónico? Revise la dirección de correo electrónico anterior o envíe un correo a {supportEmailLink}.",
  pleaseCheckEmailForDetails:
    "Revise su correo electrónico para obtener más detalles.",
  isOffering:
    "{insuranceProvider} ofrece un cupo limitado en Virta. En este momento, el cupo de Virta se ha cubierto y no podemos ofrecer cupos adicionales.",
  allVirtaSpotsFilled: "Lamentablemente, se completó el cupo de Virta.",
  thankYouForApplication: "Gracias por su solicitud.",
  indicatedInsurance:
    "Usted indicó que tiene seguro a través de Blue Cross and Blue Shield de Carolina del Norte. Nuestro equipo está verificando si cuenta con la cobertura de Virta a través de su plan médico. Nos pondremos en contacto con usted tan pronto como tengamos más información.",
  englishReferral: "¿Puede el solicitante comunicarse con Virta en inglés?",
  canFillForm:
    "Si puede completar este formulario y conversar en inglés básico, seleccione “sí”.",
  canFillFormReferral:
    "Si el solicitante puede conversar en inglés básico, seleccione “sí”.",
  contactInformation: "Información de contacto",
  smartphoneDefinition:
    "Un “teléfono inteligente” es un teléfono que se puede conectar a Internet y usar aplicaciones descargadas, o “apps”.",
  confirmEmailAddress: "Confirmar dirección de correo electrónico",
  haveSmartphone: "¿Tiene un teléfono inteligente con acceso a Internet?",
  haveSmartphoneReferral:
    "¿Tiene el solicitante un teléfono inteligente con acceso a Internet?",
  emailMismatch: "Las direcciones de correo electrónico no coinciden",
  requiredByPrevYes:
    "Campo obligatorio debido a la respuesta afirmativa anterior",
  ssn: "Número de Seguro Social",
  rxCost: "Costo del tratamiento Virta",
  price249PerMonth: "$249 por mes",
  initiationFee:
    "Con una tarifa única inicial de $250 que se paga por adelantado.",
  promoCode: "Código promocional",
  employerNameRequired: "El nombre del empleador es obligatorio",
  insurerNameRequired: "El nombre de la aseguradora es obligatorio",
  payOOP: "Pagaré por cuenta propia",
  takingMedsReferral:
    "¿Ha tomado el solicitante algún medicamento para la diabetes además de la metformina?",
  hadInsulin: "¿Alguna vez se le recetó insulina?",
  whenStartInsulin: "¿En qué año comenzó a recibir insulina?",
  whenStopInsulin: "¿En qué año dejó de recibir insulina?",
  yesImTakingInsulin: "Sí, recibo insulina actualmente",
  yesInsulinButPast: "Sí, pero en el pasado. No recibo insulina actualmente.",
  iveNeverTakenInsulin: "Nunca recibí insulina",
  moreDetailsNeeded:
    "Brinde más detalles sobre el motivo de su interés en Virta.",
  mdy: "Mes, día, año",
  readyStartSoon: "¡Estoy listo para comenzar tan pronto como sea posible!",
  needAnswersFirst:
    "Quiero empezar, pero primero necesito respuestas a algunas preguntas.",
  learnMoreFirst:
    "No estoy seguro de querer empezar. Primero debo tener más información.",
  pleaseReviewTosAndPrivacy:
    "Revise y acepte los Términos de servicio y la Política de privacidad",
  virtaNotEnrollingAdditionalVeterans:
    "Virta no está admitiendo veteranos nuevos en este momento.",
  virtaCommittedToVeterans:
    "Virta Health se ha comprometido a brindar acceso gratuito al tratamiento de Virta a un grupo piloto de 400 veteranos. El 23 de octubre de 2019, superamos las 400 inscripciones y, por lo tanto, no estamos admitiendo más veteranos por el momento.",
  ifYoudStillLikeToApply:
    "Si de todos modos desea presentar una solicitud en Virta, podemos guardar su información, pero el proceso de inscripción no avanzará por el momento. Agradecemos su interés y le informaremos sobre las próximas oportunidades de inscripción tan pronto como tengamos noticias.",
  congratsPleaseConfirm:
    "¡Felicitaciones! Completó el primer paso de la solicitud de Virta. Antes de continuar, necesitamos confirmar su dirección de correo electrónico.",
  confirmationEmailSentTo:
    "Se envió un correo electrónico de confirmación a la siguiente dirección:",
  checkInbox:
    "Revise su bandeja de entrada en busca de un correo electrónico de confirmación de Virta Health.",
  noConfEmail: "¿Aún no recibió el correo electrónico de confirmación?",
  checkAbove:
    "Asegúrese de haber ingresado su dirección de correo electrónico correctamente arriba. Si tiene errores, vuelva a enviar su información con la dirección de correo electrónico correcta.",
  congrats: "¡Felicitaciones!",
  canStartTreatment: "Ya puede comenzar el tratamiento de Virta.",
  checkEmailForLoginInstructions:
    "Revise su correo electrónico para acceder a las instrucciones sobre cómo iniciar sesión en la aplicación y reunirse con su entrenador.",
  ifBSCA:
    "Si cuenta con un seguro médico de Blue Shield de California, tal vez sea elegible para recibir la cobertura completa del costo de Virta.",
  toReceiveFullCoverage:
    "Para recibir la cobertura completa, debe solicitar Virta a través de Wellvolution, la plataforma de inscripción digital de Blue Shield de California.",
  privacyPolicy: "Política de privacidad",
  telehealthConsent: "Consentimiento de telesalud",
  privacyPractices: "Prácticas de privacidad",
  rightsReserved:
    "Todos los derechos reservados. {copyrightSymbol} {currentYear}.",
  basicInfo: "Información básica",
  needHelp: "¿Necesita ayuda? Contacto",
  needHelpWithApplication: "¿Necesita ayuda con su solicitud?",
  contactUs: "Comuníquese con nosotros",
  brb: "Volveremos en seguida.",
  scheduledMaintenance:
    "Estamos realizando tareas de mantenimiento programadas en nuestros sistemas de solicitud.",
  apology: "Lamentamos los inconvenientes. Volveremos pronto.",
  meantime:
    "Mientras tanto, lea algunas de nuestras inspiradoras <l>historias de pacientes</l>. ¡Gracias por su interés en Virta! Esperamos trabajar con usted en su camino hacia la salud metabólica.",
  ifSeeMsg: "Si continúa viendo este mensaje, escriba a {supportEmailLink}.",
  addressConfirmed: "Dirección confirmada",
  confirmAddress: "Confirmar dirección",
  whichVersionOfYourAddress: "¿Qué versión de su dirección desea utilizar?",
  selectAddress: "Seleccione una dirección a continuación",
  submitButton: "Actualizar",
  backButton: "Atrás",
  finalStepsDescription:
    "Actualice su dirección de envío para recibir su kit de inicio",
  updateAddress: "Actualizar dirección",
  confirmInfo: "Confirmar información",
  receiveInfoAboutLabs:
    "Recibirá más información sobre las pruebas de laboratorio necesarias (si las hay) de parte de su asesor de inscripción.",
  eligibilityStatusCoveredHeader: "¡Buenas noticias, está cubierto!",
  eligibilityStatusCoveredParagraph:
    "Según la información sobre su seguro, usted es elegible para seguir inscribiéndose en el tratamiento Virta sin costo alguno para usted. Nos emociona que comience su travesía hacia la salud.",
  eligibilityStatusCoveredSecondParagraph:
    "Haga clic en Continue (Continuar) para comenzar a completar su historial de salud.",
  eligibilityStatusCoveredSecondParagraphNext:
    "Haga clic en Next (Siguiente) para comenzar a completar su historial de salud.",
  eligibilityStatusMoreTimeHeader:
    "Estamos procesando la información de su seguro.",
  eligibilityStatusMoreTimeParagraph:
    "Gracias por presentar la información de su seguro. Estamos verificando su elegibilidad para Virta y, en cuanto tengamos una respuesta, nos comunicaremos con usted.",
  eligibilityStatusReviewInsuranceParagraph:
    "Esta es la información del seguro que estamos usando para verificar su cobertura. Si encuentra algún error, informe al asesor de inscripción y lo ayudará a actualizar la información.",
  eligibilityCoverageCarrierInput: "Aseguradora",
  eligibilityCoverageGroupIdInput: "Identificación del grupo",
  eligibilityCoverageMemberIdInput: "Identificación del miembro",
  eligibilityCoverageIssueDateInput: "Fecha de emisión",
  eligibilityCoveragePlanInput: "Plan",
  toScheduleHeader: "Programar una llamada",
  isScheduledHeader: "Llamada programada",
  toSchduleMessage:
    "El siguiente paso es programar una consulta telefónica con un asesor de inscripción de Virta. Durante la llamada de admisión, le explicaremos cómo funciona Virta y responderemos a sus preguntas.",
  isSchduledMessage:
    "Durante la llamada, conocerá cómo funciona Virta y podrá obtener una respuesta a cualquier pregunta que tenga.",
  thirtyMinutes: "30 minutos",
  isPrimaryInsurance: "¿Es este su seguro principal?",
  explainPrimarySecondaryInsurance:
    "Si tiene cobertura de un plan de su empresa, además de la cobertura de un plan de su pareja u otro plan (TRICARE, Medicaid, etc.), su propio plan será el principal y el otro plan será el secundario.",
  howVirtaWorks: "Cómo funciona Virta",
  watchOverviewVideo:
    "Vea este vídeo para obtener un panorama general del tratamiento Virta y saber cómo puede ayudarlo a alcanzar sus objetivos de salud.",
  ifYoureNotInterestedNow:
    "Si no está interesado en este momento, ¡no hay problema! Siempre puede ponerse en contacto con {supportEmailLink}.",
  sessionExpired: "Su sesión ha caducado. Vuelva a iniciar sesión.",
  paymentTermsHeader: "Condiciones de pago detalladas",
  monthlySubscriptionAutomated:
    "Suscripción: el acceso a Virta se cubre a través de una “suscripción” mensual, por lo que es necesario inscribirse en nuestro sistema de pago automatizado.",
  virtaRefundPolicy: "No hay reembolsos: Virta no ofrece reembolsos.",
  electronicPaymentRequired:
    "Pago electrónico: para acceder al tratamiento es necesario presentar su información de pago mediante tarjeta de crédito o débito. Esta tarjeta debe ser registrada y se le harán los cargos automáticamente.",
  virtaPaymentSchedule:
    "Fecha de inicio de pago: Virta no cobrará su primer pago (que es la cuota de iniciación + el primer mes) hasta el día en que se apruebe el inicio del tratamiento. Cada mes adicional de pago se cobrará 1 mes después de la fecha del primer pago (“su fecha de pago”).",
  paymentFailure:
    "Falta de pago: si su tarjeta registrada falla o es rechazada, nos pondremos en contacto con usted en un plazo de 3 días hábiles. Si no recibimos el pago en un plazo de 2 semanas a partir de su fecha de pago, Virta iniciará el proceso para retirarlo del tratamiento y perderá el acceso a la aplicación.",
  howToCancel:
    "Cancelación: Virta dejará de procesar sus pagos cuando usted deje de ser paciente de Virta o cuando usted decida suspenderlos. Puede solicitar a Virta que deje de procesar estos pagos poniéndose en contacto con Virta a {supportEmailLink}. Cuando Virta reciba su solicitud de suspensión de pagos, o cuando usted deje de ser paciente, Virta dejará de procesar sus pagos para el siguiente pago que esté programado después de recibir su notificación o de que finalice su condición de paciente.",
  restartingVirta:
    "Reinicio: si interrumpe el tratamiento de Virta y luego decide reiniciarlo, se aplicará el precio estándar de Virta vigente.",
  reduceGlareOnCard:
    "Asegúrese de reducir el reflejo en la imagen de la tarjeta",
  captureSharpImageOfCard: "Tome una imagen clara de su tarjeta",
  issueUploadingCard:
    "Hubo un problema al cargar su tarjeta; inténtelo de nuevo.",
  deseralizeError:
    "Algo salió mal. Vuelva a intentarlo y, si el problema persiste, escriba a support@virtahealth.com.",
  problemWithForm:
    "Hay un problema con el formulario, revise y corrija lo siguiente:",
  checkEmail: "Revisar correo electrónico",
  complete: "Completar",
  inProgress: "En curso",
  inReview: "En revisión",
  upcoming: "Próximamente",
  or: "o",
  mustAcceptAssignment:
    "Debe aceptar el Consentimiento sobre la cesión de beneficios",
  mustAcceptAuthorization:
    "Debe aceptar la Autorización voluntaria para revelar información de salud protegida",
  noWrongAnswer: "¡No hay respuestas incorrectas!",
  noModification:
    "Nota: Incluso si no le interesa modificar su tratamiento para la diabetes, igual podemos ayudarlo con los suministros para hacer las pruebas y el entrenamiento.",
  noPrimaryCareProvider: "Sin proveedor de atención primaria",
  noPCPInstructions:
    "* NOTA: Si actualmente no tiene un proveedor de atención primaria, haga clic aquí:",
  iWouldLikeToOptOut: "Preferiría no participar.",
  optOutConfirmation: "Su opción de no participar se registró con éxito",
  healthInfoExchangeHeader:
    "Preguntas frecuentes sobre el intercambio de información de salud",
  optOutHIEAnswer:
    'Puede optar por que Virta no evalúe su información desde un intercambio de información de salud (HIE) marcando la casilla a continuación y haciendo clic en "Enviar". Espere hasta dos días hábiles para que se procese su solicitud de no participar.',
  optOutHIEQuestion:
    "No quiero participar. ¿Cómo puedo optar por no participar?",
  noActionNeededForHIE:
    "<i>No es necesario que haga nada más</i> si quiere que revisemos los valores de sus pruebas de laboratorio previas a través de nuestro intercambio de información de salud.",
  whatIsHIEAnswer:
    "El intercambio de información de salud es una manera de compartir información de salud entre los consultorios de los médicos, hospitales, laboratorios, centros radiológicos y otros proveedores de atención médica participantes a través de medios electrónicos seguros. El propósito es que cada persona encargada de su atención pueda recibir la información más reciente disponible de otras personas participantes que se encargan de su atención.",
  whatIsHIEQuestion: "¿Qué es el intercambio de información de salud (HIE)?",
  whyHIEAnswer:
    "Si permite que Virta acceda a sus datos desde un HIE, podremos tener un panorama más completo de su salud y tomar decisiones de tratamiento más informadas. El objetivo es que reciba la atención coordinada de una forma más eficiente. Su información de atención médica está disponible para los proveedores de atención médica participantes cuando y donde la necesitan sin demora alguna.",
  whyHIEQuestion:
    "¿Qué beneficios me da participar en el intercambio de información de salud (HIE)?",
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
  tryPopularSearches: "Pruebe estas búsquedas populares",
  tryPopularFoodSearches: "Pruebe estas búsquedas alimentos populares",
  recentSearches: "Búsquedas recientes",
  bloodSugar: "Azúcar en sangre",
  food: "Alimentos",
  reviewInsuranceInfoDescription:
    "Revise la información del seguro que tenemos registrada y realice los cambios necesarios.",
  reviewInsuranceInfoTitle: "Información del seguro",
  updateInfo: "Actualizar información",
  completeProfile: "Completar perfil",
  confirmEmail: "Confirmar correo electrónico",
  emailConfirmed: "¡Correo electrónico confirmado!",
  yourEmailVerified: "Su dirección de correo electrónico ha sido verificada.",
  clickBelowToVerifyEmail:
    "Haga clic en el botón a continuación para verificar su dirección de correo electrónico.",
  copyPasteLinkIfNotWorking:
    "Si el botón no funciona, copie y pegue este enlace en su explorador:",
  emailAssociatedWithVirtaAccount:
    "Nota: <b>Este correo electrónico está asociado a una cuenta de Virta Health.</b> Si no se registró para crear una cuenta en Virta, ignore este correo electrónico y no haga clic en el enlace",
  ifProblemsContactSupport:
    "Si tiene algún problema, comuníquese con nosotros a {supportEmailLink}",
  cameraDirectionBack: "Atrás",
  cameraDirectionFront: "Frente",
  confirmationHeader: "Ha enviado la información del seguro.",
  confirmationHeaderHH: "Próximos pasos",
  getReadySubheader: "Prepárese para escanear su tarjeta",
  getReadyText: "Tenga su tarjeta del seguro a la mano para este próximo paso.",
  helpScreenDescription:
    "Parece que tiene problemas para escanear su tarjeta. Lea los siguientes consejos e inténtelo de nuevo. Si no puede escanear la tarjeta con claridad, ingrese su información del seguro de forma manual.",
  helpScreenHeader: "¿Tiene problemas?",
  helpScreenTip1:
    "Asegúrese de estar en una habitación bien iluminada (o afuera, a la luz del sol)",
  helpScreenTip2:
    "Coloque la tarjeta en una superficie plana con un fondo oscuro (sin dibujos)",
  helpScreenTip3:
    "Intente capturar la mayor parte posible de la tarjeta sin omitir ninguna parte",
  helpScreenTipHeader: "Consejos para escanear la tarjeta de forma correcta",
  hintBoxHeader: "Prepárese para escanear su tarjeta",
  hintBoxMessage:
    "Tenga su tarjeta del seguro y su teléfono inteligente a la mano para el próximo paso.",
  initialInsuranceHeader: "Información del seguro",
  initialInsuranceText:
    "Para verificar su cobertura para el tratamiento de Virta, deberá ingresar la información del seguro.",
  insuranceContinueButton: "Siguiente",
  insuranceDescription:
    "Para verificar su cobertura para el tratamiento de Virta, deberá ingresar la información del seguro.",
  insuranceGroupInput: "Identificación del grupo",
  insuranceGroupInputPlaceholder: "Ejemplo: 534654",
  insuranceHeader: "Información del seguro",
  insuranceInput: "Número de teléfono",
  insuranceInputPlaceholder: "999-999-9999",
  insuranceIssueDateInput: "Fecha de emisión",
  insuranceIssueDateInputPlaceholder: "MM/DD/AAAA",
  insuranceMemberInput: "Identificación del miembro",
  insuranceMemberInputPlaceholder: "Ejemplo: 5829434",
  insuranceNextButton: "Siguiente",
  insuranceNextConfirmButton: "Es correcto",
  insuranceProviderInputPlaceholder: "Ejemplo: Blue Shield",
  insuranceRetakeButton: "Volver a intentarlo",
  insuranceSMSButton: "Enviar enlace",
  insuranceSMSButtonContinue: "Continuar",
  insuranceSMSDescription:
    "Le enviaremos un enlace para que escanee su tarjeta del seguro. Asegúrese de que el número que ha ingresado sea correcto y haga clic en “Enviar enlace”. (Se aplican los cargos normales por mensajes de texto).",
  insuranceSMSSentButton: "Reenviar enlace",
  insuranceSMSSentDescription:
    "Hemos enviado un enlace al número de teléfono que se indica a continuación. Si no recibió el enlace, verifique que el número sea correcto y haga clic en “Reenviar enlace”.",
  insuranceScannerErrorMessage: "mensaje de error en la prueba",
  insuranceSmsSentSubHeader: "Enlace enviado",
  insuranceSubHeader: "Verifique su información y envíe el enlace",
  loadingMessage: "Actualizando su información...",
  manualInputLink: "Ingrese la información del seguro de forma manual",
  manualInsuranceText: "Escriba la información de su seguro aquí.",
  newInsuranceCoverage:
    "Estamos trabajando para mejorar la cobertura con más planes de seguros y lo alentamos a ingresar su información en caso de que califique para una tarifa más baja.",
  insuranceDisclaimer:
    "Al enviar su información de seguro, usted acepta que Virta trabaje con su seguro para reducir potencialmente sus gastos por cuenta propia, aunque no podemos garantizar ninguna reducción en el precio al que usted se compromete en este momento.",
  nextStepDialogue:
    "Gracias por presentar la información de su seguro. Los próximos pasos son programar una llamada de admisión y proporcionar un breve resumen de su historia clínica.",
  nextStepDirectionContinue:
    "Haga clic en “Continuar” para programar su llamada de admisión.",
  nextStepDirectionLink: "Enviamos un enlace a:",
  nextStepSubheader: "Revise su correo electrónico",
  noInsuranceCard: "No tengo mi tarjeta del seguro",
  nonEmailConfirmationBody:
    "Gracias por enviar su información del seguro. El próximo paso es proporcionar un breve resumen de su historia clínica.",
  nonEmailConfirmationBodytwo:
    "Haga clic en “Siguiente” para terminar de ingresar la información de su historia clínica.",
  nonEmailConfirmationHeader: "Ha enviado la información del seguro.",
  nonEmailConfirmationSubBody:
    "* Comuníquese con su asesor de inscripción para obtener más información sobre la elegibilidad.",
  nonSubmitMessage:
    "Los próximos pasos son programar una llamada de admisión y proporcionar un breve resumen de su historia clínica.",
  primaryInsuranceClarificationLbl:
    "* Si tiene cobertura de un plan de su empresa, además de la cobertura de un plan de su pareja u otro plan (TRICARE, Medicaid, etc.), su propio plan será el principal y el otro plan será el secundario.",
  primaryInsuranceHeader: "Seguro principal",
  primaryInsuranceRadioLbl: "¿Es este su seguro principal?",
  primaryInsuranceRequirementLbl:
    "Tenga en cuenta que Virta tiene la obligación de facturar a su seguro principal en primer lugar.",
  readyButton: "Estoy listo",
  requiredErrorText: "Requerido",
  resendTheEmail: "Reenviar correo electrónico",
  retryButton: "Volver a intentarlo",
  reviewInsuranceInfo: "De ser necesario, revise y edite esta información.",
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
    "No podemos verificar que se trate de una dirección válida de EE. UU. Si cree que esta información es válida, confirme a continuación.",
  logInHere: "Inicie sesión aquí",
  alreadyHaveAccount: "¿Ya tiene una cuenta?",
  verifyEmailAddress: "Confirme su dirección de correo electrónico",
  resendEmail: "Reenviar correo electrónico",
  resendVerificationEmailToConfirm:
    "Vuelva a enviar el correo electrónico de verificación para confirmar la dirección que tenemos registrada.",
  checkEmailAndFollowLink:
    "Revise su correo electrónico y siga el enlace para verificar su dirección de correo electrónico.",
  verificationSentCheckInbox:
    "¡Se envió el correo electrónico de verificación! Revise su bandeja de entrada y siga el enlace para verificar su dirección de correo electrónico.",
  verificationLinkExpired:
    "Parece que el enlace de verificación venció. Solicite un enlace nuevo haciendo clic en el botón.",
  verificationLinkInvalidOrAlreadyUsed:
    "Parece que el enlace de verificación no es válido o ya se usó. Compruebe que ingresó el enlace correctamente o solicite un enlace nuevo haciendo clic en el botón.",
  couldNotSendVerificationSMS:
    "Hubo un problema para enviar el SMS a su teléfono; comuníquese con {supportEmailLink}",
  couldNotConfirmPhone:
    "El código ingresado es incorrecto; inténtelo nuevamente.",
  phoneVerifyHeader: "Verificar número de teléfono móvil",
  sentVerificationCodeNoPhone:
    "Hemos enviado un código de verificación al número de teléfono asociado a su cuenta, si existe una. Para seguir, ingrese el código de 6 dígitos a continuación.",
  thankYou: "¡Gracias!",
  verfiedPhone: "Su número de teléfono fue verificado.",
  questionsBI:
    "¿Tiene preguntas? Envíe un correo electrónico a {supportEmailLink}",
  basicInfoComplete: "Información básica completa",
  eligibilityVerified:
    "Verificamos su elegibilidad para Virta y actualizamos su información en nuestro registro. Ahora puede iniciar sesión en la aplicación de Virta.",
  coverage: "Cobertura",
  lookingIntoIt: "Lo estamos investigando",
  unableToVerifyEligibility:
    "No pudimos verificar su elegibilidad para Virta, por lo que nuestro equipo está investigando los detalles de su cobertura. Le informaremos sobre los próximos pasos lo antes posible.",
  verifyingCoverageParagraph:
    "Estamos trabajando en la verificación de su cobertura. Le informaremos sobre los próximos pasos o le solicitaremos información adicional.",
  skip: "Omitir",
  editInfo: "Editar información",
  insuranceDisclaimerLong:
    "Al enviar la información de su seguro, usted da su consentimiento para que Virta trabaje con su proveedor de seguros a fin de reducir potencialmente sus gastos de bolsillo. Aunque no podemos garantizar ninguna reducción del precio al que se compromete en este momento, estamos trabajando para mejorar la cobertura con más planes de seguro y lo invitamos a que ingrese su información en caso de que califique.",
  reviewingHealthInfo:
    "Nuestro equipo está revisando su información de salud para asegurarse de que Virta sea una buena opción para usted.",
  fetchIntakeCallStatusAndEventsFailedWarning:
    "No pudimos recuperar el estado de su llamada de admisión ni los eventos programados en este momento.",
  contactSupportHeader: "Lamentamos que tenga problemas",
  contactSupportBody:
    "Comuníquese con el equipo de asistencia al {supportEmailLink} para que podamos ayudarlo.",
  basicInformationCompletedTitle: "Información básica completa",
  basicInformationCompletedDescription:
    "Ya envió este formulario. Su próximo paso es proporcionarnos cierta información de salud.",
  createProfile: "Crear perfil",
  encounteredError: "Encontramos un error inesperado al crear su cuenta.",
  welcomeToVirta: "Bienvenido a Virta",
  congratsFirstStep:
    "Felicitaciones por dar su primer paso hacia una mejor salud. ¿Cómo deberíamos comunicarnos?",
  recommendPersonalEmailAddress:
    "Recomendamos que utilice su dirección de correo electrónico personal",
  cellPhone: "Teléfono celular",
  emailSent: "Correo electrónico enviado",
  startProfile:
    "Cree su perfil para guardar su avance y mantener segura su información.",
  confirmPassword: "Confirmar contraseña",
  enterEmailAddress: "Ingrese una dirección de correo electrónico",
  passwordMismatch: "Las contraseñas no coinciden",
  alreadySubmittedFormUnifiedBI:
    "Ya envió este formulario. Su próximo paso es proporcionarnos cierta información de salud.",
  weAreSorry: "Lo sentimos",
  logInWithAccount: "¿Ya tiene una cuenta? <l>Inicie sesión aquí.</l>",
  somethingsNotRight: "Algo no está bien...",
  timeoutCoverage:
    "Estamos trabajando en la verificación de su cobertura. Mientras tanto, puede continuar con su inscripción.",
  eligibilityVerifiedFinalSteps:
    "Verificamos su elegibilidad para Virta y actualizamos su información en nuestro registro.",
  eligibilityVerifiedStandAlone:
    "Verificamos su elegibilidad para Virta y actualizamos su información en nuestro registro. Ahora puede iniciar sesión en la aplicación de Virta.",
  greeting: "Hola, {firstName}",
  searchAllCategories: "",
  generalHealthConditionsDetails: "Detalles de la condición de salud",
  confirmGlucose: "Confirmar el nivel de glucosa",
  glucoseConfirmationWarning:
    "Ingresó un numero menos de 20 en la aplicación. Queremos asegurarnos de que es un valor correcto o si ingresó el número porque el medidor le dijo ¨LO¨",
  glucoseReviseWarning: "Verifique el nivel, que debe ser superior a 20.",
  weTakePrivacySeriously:
    "Nos tomamos muy en serio la privacidad y seguridad de su información.",
  cellMobileOnly: "Solo teléfono celular/móvil",
  toContinueVerifyPhone:
    "Para continuar, necesitamos verificar que tenga acceso al número de teléfono móvil que ingresó.",
  weWillSendCodeViaSms: "Le enviaremos un código por SMS",
  pleaseHavePhoneAvailable:
    "Tenga su teléfono celular a la mano para este próximo paso.",
  verifyPhoneAndSendCode: "Verifique su número de teléfono y envíe el código",
  sendCodeOnNextPage:
    "Le enviaremos un código que debe ingresar en la siguiente página. Asegúrese de que el número que ha ingresado sea correcto y haga clic en “Enviar código”. (Se aplican los cargos normales por mensajes de texto).",
  imageFileSize: "\u2022 El tamaño máximo del archivo es 250 MB",
  fileTypes:
    "\u2022 Los tipos de archivo que se aceptan son .pdf, .jpg, .png y .gif",
  front: "Frente",
  uploadImage: "Cargar imágenes de su tarjeta",
  upload: "Cargar",
  attachImageTroubleShooting:
    "Lo sentimos, sigue habiendo un problema. Para ayudarnos a verificar su cobertura, adjunte fotos o copias en PDF de su tarjeta de seguro.",
  contentRecommendationForYouName: "",
  contentRecommendationForYouDescription: "",
  mobilePhoneNumber: "Número de teléfono móvil",
  stillHavingTroubleContactUs:
    "¿Sigue teniendo problemas? Envíe un correo electrónico a {supportEmailLink}",
  enterCodeSent:
    "Ingrese el código que se indica en el mensaje enviado a su dispositivo móvil.",
  possibleUpdates: "Hemos encontrado algunas posibles actualizaciones",
  red: "rojo.",
  suggestedInformation: "Usar la información sugerida",
  originalInformation: "Usar la información original",
  mealPlan: "",
  snacks: "",
  vegetables: "",
  breakfast: "",
  diabetesDiagnosis: "Diagnosis de la diabetes",
  coverageInformation: "Información de cobertura",
  isOnDialysis: "Diálisis",
  isOnDiabetesMedsNotMetformin:
    "Medicamentos para la diabetes además de la metformina",
  hasTakenInsulin2: "Insulina recetada",
  insulinStartYear: "Año de inicio de la administración de insulina",
  insulinEndYear: "Año de finalización de la administración de insulina",
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
    "La configuración anterior controla todas las notificaciones de la aplicación de Virta, entre ellas:\n\n• Mensajes de su entrenador\n• Recordatorios de registro de glucosa, si procede\n• Notificaciones de la comunidad",
  pushNotificationSettingsWarning:
    "Desactivar las notificaciones en la configuración de su teléfono o en la aplicación de Virta evitará que reciba mensajes importantes relacionados con la seguridad y no se recomienda.",
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
