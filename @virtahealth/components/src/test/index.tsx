import * as React from "react";
import { render } from "@testing-library/react-native";
import { base } from "@virtahealth/styles";
import { VirtaContext } from "../VirtaContext";

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

export const createComponentWithVirtaContext = (children: React.ReactNode) => {
  return render(
    <VirtaContext
      client={testClient}
      theme={base}
      launchDarkly={testLaunchDarkly}
    >
      {children}
    </VirtaContext>
  );
};
