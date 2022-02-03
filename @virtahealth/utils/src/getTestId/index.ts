/**
 * A web compatibility layer that does nothing.
 */
export function getTestID(testID: string): string | undefined {
  return testID;
}

export const tID = getTestID;
