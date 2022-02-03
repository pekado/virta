import * as React from "react";
import { render } from "@testing-library/react-native";
import { VirtaContext } from "@virtahealth/components";
import { base } from "@virtahealth/styles";

export const testClient = {
  get: jest.fn(),
  post: jest.fn(),
  patch: jest.fn(),
  delete: jest.fn(),
};

export const testLaunchDarkly = {
  setup: jest.fn(),
  identify: jest.fn(),
  getJSONFlag: jest.fn(),
  getIntFlag: jest.fn(),
  getFloatFlag: jest.fn(),
  getBooleanFlag: jest.fn(),
  getStringFlag: jest.fn(),
  getAllFlags: jest.fn(),
};

export const testAnalyticsClient = {
  logClickEvent: jest.fn(),
  logViewEvent: jest.fn(),
};

export const createComponentWithVirtaContext = (children: React.ReactNode) => {
  return render(
    <VirtaContext
      client={testClient}
      theme={base}
      analyticsClient={testAnalyticsClient}
      launchDarkly={testLaunchDarkly}
    >
      {children}
    </VirtaContext>
  );
};

export const WrapComponentWithVirtaContext: React.FC = ({ children }) => (
  <VirtaContext
    client={testClient}
    theme={base}
    analyticsClient={testAnalyticsClient}
    launchDarkly={testLaunchDarkly}
  >
    {children}
  </VirtaContext>
);
