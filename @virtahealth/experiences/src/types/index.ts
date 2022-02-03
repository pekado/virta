export enum FetchingStatus {
  IDLE = "idle",
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
}

export interface EnrollmentAddress {
  address_1: string;
  address_2?: string;
  city: string;
  country_code: string;
  postal_code: string;
  province: string;
}

export interface CamelCaseEnrollmentAddress {
  address1: string;
  address2?: string;
  city: string;
  countryCode: string;
  postalCode: string;
  province: string;
}
