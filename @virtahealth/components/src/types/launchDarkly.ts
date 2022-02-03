/*
  LaunchDarkly Client needs to be Project-aware to be able to support querying about
  multiple user bases. For example, the Spark and Patient projects.
*/
export interface LaunchDarklyClient {
  setup(environment: string): Promise<void>;
  identify(
    key: string,
    custom?: Record<string, any>,
    project?: string
  ): Promise<void>;
  getAllFlags<FlagSet>(project?: string): Promise<FlagSet>;
  getJSONFlag<T = object>(
    flag: string,
    defaultReturnValue: Record<string, any>,
    project?: string
  ): Promise<T>;
  getStringFlag(
    flag: string,
    defaultReturnValue: string,
    project?: string
  ): Promise<string>;
  getBooleanFlag(
    flag: string,
    defaultReturnValue: boolean,
    project?: string
  ): Promise<boolean>;
  getFloatFlag(
    flag: string,
    defaultReturnValue: number,
    project?: string
  ): Promise<number>;
  getIntFlag(
    flag: string,
    defaultReturnValue: number,
    project?: string
  ): Promise<number>;
}
