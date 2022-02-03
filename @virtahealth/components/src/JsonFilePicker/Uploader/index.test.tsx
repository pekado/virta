import * as React from "react";
import { createComponentWithVirtaContext } from "../../test";
import { AcceptedFileTypes } from "../types";
import Uploader from "./index";

// Need to come back to this and add back separate testing for web platform files
it.skip("renders the Uploader", () => {
  const uploader = createComponentWithVirtaContext(
    <Uploader accept={[AcceptedFileTypes.pdf]} onSetFiles={() => undefined} />
  );
  expect(uploader).toMatchSnapshot();
});
