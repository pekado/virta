import * as React from "react";
import { Button } from "@virtahealth/components";

interface AttachmentViewerProps {
  attachment: fhir.Attachment;
  handleGetAttachment: (id: string) => Promise<unknown>;
}

/**
 * *Web Only
 *
 * Opens a Base64 encoded PDF in a new tab/window in an iFrame
 */
export const AttachmentViewer: React.FC<AttachmentViewerProps> = ({
  attachment,
  handleGetAttachment,
}) => {
  const allowedContentTypes = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/gif",
  ];
  const buildAttachmentLink = async (attachment: fhir.Attachment) => {
    if (attachment.url) {
      // fetch first
      const splitUrl = attachment.url?.split("/");
      if (splitUrl) {
        const data = (await handleGetAttachment(
          splitUrl[splitUrl.length - 1]
        )) as fhir.DocumentReference;

        const documentData = data.content[0].attachment;
        const { contentType } = documentData;
        if (contentType && allowedContentTypes.includes(contentType)) {
          if (documentData.data) {
            return `data:${attachment.contentType};base64,${encodeURI(
              documentData.data
            )}`;
          }
        }
      }
    } else if (attachment.data) {
      const { contentType, data } = attachment;
      return `data:${contentType};base64,${encodeURI(data)}`;
    }
  };

  const handleOpenAttachment = async (attachment: fhir.Attachment) => {
    const attachmentLink = await buildAttachmentLink(attachment);
    const { contentType } = attachment;
    const newTabWindow = window.open("");
    if (newTabWindow && attachmentLink) {
      switch (contentType) {
        case "application/pdf":
          newTabWindow.document.write(
            `<iframe width='100%' height='100%' src='${attachmentLink}'></iframe>`
          );
          return newTabWindow.document.close();
        case "image/png":
        case "image/jpeg":
        case "image/gif":
          // This should be fixed eventually.
          // eslint-disable-next-line no-case-declarations
          const image = new Image();
          image.src = `${attachmentLink}`;
          newTabWindow.document.write(image.outerHTML);
          return newTabWindow.document.close();
        default:
          console.log(`Content type: ${contentType} not supported`);
      }
    }
  };

  return (
    <Button
      appearance="link"
      intent="secondary"
      alignLabel="left"
      labelMessage={{
        id: attachment.title || "untitledLabsAttachment",
        defaultMessage: attachment.title || "untitled",
      }}
      onPress={() => handleOpenAttachment(attachment)}
    />
  );
};
