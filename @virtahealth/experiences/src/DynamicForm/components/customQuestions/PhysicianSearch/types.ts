import { CamelCaseEnrollmentAddress } from "../../../../types";

export interface SearchResultsJSON {
  data: SearchResult[];
  total: number;
}
export interface SearchResult {
  address: CamelCaseEnrollmentAddress;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
export type SearchResultsByKey = Record<string, SearchResult[]>;
