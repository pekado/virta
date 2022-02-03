import * as React from "react";
import { waitFor, fireEvent } from "@testing-library/react-native";
import { createComponentWithVirtaContext } from "../../../../test";
import { FileUploadSection } from "./index";

// Mock device specific components used
jest.mock("@virtahealth/components", () => {
  const RealModule = jest.requireActual("@virtahealth/components");
  return {
    ...RealModule,
    JsonFilePicker: "JsonFilePicker",
  };
});

describe("FileUploadSection", () => {
  it("renders without any attachments", async () => {
    const fileUploadSection = createComponentWithVirtaContext(
      <FileUploadSection
        setAttachments={() => undefined}
        setRemovedAttachments={() => undefined}
      />
    );
    await waitFor(() => {
      fileUploadSection.getByText("Files");
    });
    expect(fileUploadSection).toMatchSnapshot();
  });

  it("renders with attachments", async () => {
    const fileUploadSection = createComponentWithVirtaContext(
      <FileUploadSection
        attachments={[
          {
            title: "Test File 1",
            url: "example.com/test-file-1",
            contentType: "application/pdf",
          },
          {
            title: "Test File 2",
            url: "example.com/test-file-1",
            contentType: "image/png",
          },
        ]}
        setAttachments={() => undefined}
        setRemovedAttachments={() => undefined}
      />
    );
    await waitFor(() => {
      fileUploadSection.getByText("Files");
    });
    expect(fileUploadSection).toMatchSnapshot();
  });

  it("calls setRemovedAttachments when Remove button is clicked", async () => {
    const mockSetRemovedAttachments = jest.fn();
    const testAttachment = {
      title: "Test File 1",
      url: "example.com/test-attachment-1",
      contentType: "image/jpeg",
    };
    const fileUploadSection = createComponentWithVirtaContext(
      <FileUploadSection
        attachments={[testAttachment]}
        setAttachments={() => undefined}
        setRemovedAttachments={mockSetRemovedAttachments}
      />
    );
    await waitFor(() => {
      fileUploadSection.getByText("Files");
    });

    const removeBtn = fileUploadSection.getByText("Remove");
    fireEvent.press(removeBtn);
    expect(mockSetRemovedAttachments).toHaveBeenCalledWith([testAttachment]);
  });
});
