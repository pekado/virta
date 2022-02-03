import * as React from "react";
import { createComponentWithVirtaContext } from "../test";
import { AcceptedFileTypes } from "./types";
import { JsonFilePicker } from "./index";

jest.mock("./Uploader", () => ({
  __esModule: true,
  default: "Uploader",
}));

it("renders the JsonFilePicker", () => {
  const jsonFilePickerContainer = createComponentWithVirtaContext(
    <JsonFilePicker
      accept={[AcceptedFileTypes.pdf]}
      setEncodedFiles={() => undefined}
    />
  );
  expect(jsonFilePickerContainer).toMatchSnapshot();
});
