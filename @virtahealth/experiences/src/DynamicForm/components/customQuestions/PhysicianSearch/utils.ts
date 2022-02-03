export function createSearchResultKey(
  postalCode: string,
  providerName: string
): string {
  return `${postalCode}-${providerName || ""}`;
}
