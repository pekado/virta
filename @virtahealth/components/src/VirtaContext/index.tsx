import * as React from "react";
import { RawIntlProvider, createIntlCache, createIntl } from "react-intl";
import {
  ApolloClient as GraphQLClient,
  NormalizedCacheObject,
} from "@apollo/client";
import { translations, initTranslationHelpers } from "@virtahealth/utils";
import { ThemeProvider, ThemeInterface } from "../styled-components";
import { AlgoliaClient } from "../AlgoliaClient";
import { VirtaAnalyticsClient } from "../types/analytics";
import { LaunchDarklyClient } from "../types/launchDarkly";

export interface VirtaClient {
  get: <T = unknown>(url: string) => Promise<T>;
  post: <T = unknown>(url: string, body: unknown) => Promise<T>;
  patch: <T = unknown>(url: string, body: unknown) => Promise<T>;
  delete: <T = unknown>(url: string, body?: unknown) => Promise<T>;
}

export interface VirtaContextProps {
  algoliaClient?: AlgoliaClient;
  analyticsClient?: VirtaAnalyticsClient;
  children: React.ReactNode;
  client: VirtaClient;
  enrollmentClient?: VirtaClient;
  gqlClient?: GraphQLClient<NormalizedCacheObject>;
  launchDarkly?: LaunchDarklyClient;
  locale?: string;
  theme: ThemeInterface;
  timezone?: string;
  virtaId?: string;
}

export interface VirtaContextComponentsProps {
  algoliaClient?: AlgoliaClient;
  analyticsClient?: VirtaAnalyticsClient;
  client?: VirtaClient;
  enrollmentClient?: VirtaClient;
  gqlClient?: GraphQLClient<NormalizedCacheObject>;
  launchDarkly?: LaunchDarklyClient;
  virtaId?: string;
  timezone?: string;
}

export const VirtaContextComponents = React.createContext(
  {} as VirtaContextComponentsProps
);

export const VirtaContext: React.FC<VirtaContextProps> = ({
  algoliaClient,
  analyticsClient,
  children,
  client,
  enrollmentClient,
  gqlClient,
  launchDarkly,
  locale,
  theme,
  timezone,
  virtaId,
}) => {
  const localeProp = (locale || "en") as keyof typeof translations;
  const messages = translations[localeProp];

  // We create an intl shape here so that we can pass it to our helpers if they want to use translations outside React
  // It's also passed to RawIntlProvider, which is the same pattern as IntlProvider but lets us define the intl shape ourselves
  const cache = createIntlCache();
  const intl = createIntl(
    {
      locale: localeProp,
      messages,
      onError: () => null,
    },
    cache
  );
  initTranslationHelpers(intl);

  return (
    <ThemeProvider theme={theme}>
      <RawIntlProvider value={intl}>
        <VirtaContextComponents.Provider
          value={{
            algoliaClient,
            analyticsClient,
            client,
            enrollmentClient,
            gqlClient,
            launchDarkly,
            virtaId,
            timezone,
          }}
        >
          {children}
        </VirtaContextComponents.Provider>
      </RawIntlProvider>
    </ThemeProvider>
  );
};

export const withVirta = <P extends object>(
  Component: React.ComponentType<P & VirtaContextComponentsProps>
): React.FC<P & VirtaContextComponentsProps> => {
  const WrappedComponent: React.FC<P & VirtaContextComponentsProps> = ({
    ...props
  }) => (
    <VirtaContextComponents.Consumer>
      {({
        algoliaClient,
        analyticsClient,
        client,
        launchDarkly,
        gqlClient,
        virtaId,
        timezone,
      }: VirtaContextComponentsProps) => (
        <Component
          algoliaClient={algoliaClient}
          analyticsClient={analyticsClient}
          client={client}
          launchDarkly={launchDarkly}
          gqlClient={gqlClient}
          virtaId={virtaId}
          timezone={timezone}
          {...(props as P)}
        />
      )}
    </VirtaContextComponents.Consumer>
  );
  return WrappedComponent;
};
