import { MessageDescriptor } from "react-intl";

export const en = {
  address: "Address",
  weWillShipStarterKitToAddress:
    "Once you complete enrollment, we will ship you a Virta starter kit. If you aren't able to receive packages securely at your home address, please supply an alternate address that we can ship your starter kit to.",
  unacceptableAddressRecourse:
    "<styleB>Currently we do not ship to P.O. boxes.</styleB> If you still cannot provide an alternate shipping address, please reach out to your Enrollment Advisor for additional support.",
  addressContinued: "Apartment, suite, etc.",
  chooseState: "Choose a state",
  city: "City",
  state: "State",
  zip: "Zip Code",
  differentShipping: "I need to use a different address for shipping",
  shippingAddress: "Shipping Address",
  supplyShippingAddress:
    "Please supply an alternate address that we can ship your starter kit to.",
  addressVerification: "Address Verification",
  shippingAddressVerification: "Shipping Address Verification",
  originalAddress: "Original address:",
  suggestedAddress: "Suggested address:",
  formattedAddress:
    "{address_1}\n{address_2}\n{city}, {province}\n{postal_code}",
};

export const es = {
  address: "Dirección",
  weWillShipStarterKitToAddress:
    "Una vez que haya completado la inscripción, le enviaremos un kit de inicio de Virta. Si no puede recibir los paquetes de forma segura en su domicilio, facilite una dirección alternativa a la que podamos enviar su kit de inicio.",
  unacceptableAddressRecourse:
    "<styleB>Actualmente no hacemos envíos a apartados postales.</styleB> Si todavía no puede proporcionar una dirección de envío alternativa, póngase en contacto con su <em>Asesor de inscripción</em> para obtener ayuda adicional.",
  addressContinued: "Departamento, habitación, etc.",
  chooseState: "Elija un estado",
  city: "Ciudad",
  state: "Estado",
  zip: "Código postal",
  differentShipping: "Necesito usar una dirección diferente para el envío",
  shippingAddress: "Dirección de envío",
  supplyShippingAddress:
    "Facilite una dirección alternativa a la que podamos enviar su kit de inicio.",
  addressVerification: "Verificación de dirección",
  shippingAddressVerification: "Verificación de dirección de envío",
  originalAddress: "Dirección original:",
  suggestedAddress: "Dirección sugerida:",
  formattedAddress:
    "{address_1}\n{address_2}\n{city}, {province}\n{postal_code}",
};

export const messages: { [key: string]: Required<MessageDescriptor> } = {
  address: {
    id: "address",
    defaultMessage: en.address,
    description: "'Address' uppercase, used in EP",
  },
  weWillShipStarterKitToAddress: {
    id: "weWillShipStarterKitToAddress",
    defaultMessage: en.weWillShipStarterKitToAddress,
    description:
      "context for the purpose of the address and instruction to add shipping address if applicable, used in EP",
  },
  unacceptableAddressRecourse: {
    id: "unacceptableAddressRecourse",
    defaultMessage: en.unacceptableAddressRecourse,
    description:
      "instructions for recourse if no safe shipping address available, used in EP",
  },
  addressContinued: {
    id: "addressContinued",
    description: "Address line 2 label, used in EP",
    defaultMessage: en.addressContinued,
  },
  chooseState: {
    id: "chooseState",
    description: "Address state placeholder, used in EP",
    defaultMessage: en.chooseState,
  },
  city: {
    id: "city",
    description: "Address city label, used in EP",
    defaultMessage: en.city,
  },
  state: {
    id: "state",
    description: "Address state label, used in EP",
    defaultMessage: en.state,
  },
  zip: {
    id: "zip",
    description: "Address zip code label, used in EP",
    defaultMessage: en.zip,
  },
  differentShipping: {
    id: "differentShipping",
    defaultMessage: en.differentShipping,
    description:
      "Checkbox text to indicate a different shipping address will be used, used in EP",
  },
  shippingAddress: {
    id: "shippingAddress",
    defaultMessage: en.shippingAddress,
    description: "Shipping Address text, used in EP",
  },
  supplyShippingAddress: {
    id: "supplyShippingAddress",
    defaultMessage: en.supplyShippingAddress,
    description: "Prompt to provide an alternate address for shipping purposes",
  },
  addressVerification: {
    id: "addressVerification",
    defaultMessage: en.addressVerification,
    description: "Title for the address verification flow",
  },
  shippingAddressVerification: {
    id: "shippingAddressVerification",
    defaultMessage: en.shippingAddressVerification,
    description: "Title for the shipping address verification flow",
  },
  originalAddress: {
    id: "originalAddress",
    defaultMessage: en.originalAddress,
    description: "Original address label, used in EP",
  },
  suggestedAddress: {
    id: "suggestedAddress",
    defaultMessage: en.suggestedAddress,
    description: "Suggested address label, used in EP",
  },
  formattedAddress: {
    id: "formattedAddress",
    defaultMessage: en.formattedAddress,
    description: "Formatted address verification description",
  },
};
