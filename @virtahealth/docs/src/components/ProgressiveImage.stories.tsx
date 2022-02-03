import * as React from "react";
import { ProgressiveImage } from "@virtahealth/components";

export default {
  title: "Components / Progressive Image",
  component: ProgressiveImage,
  parameters: {
    chromatic: { delay: 600 },
  },
};

export const Example = () => (
  <ProgressiveImage
    thumbnailSource={{
      uri: "https://cdn.sanity.io/images/iyfmtfwm/patient-content-dev/e898a30d679c3e9fbdbfac592e138b9ec57be346-2121x1414.png?w=50",
    }}
    imageProps={{
      height: 1414,
      width: 2121,
      source: {
        uri: "https://cdn.sanity.io/images/iyfmtfwm/patient-content-dev/e898a30d679c3e9fbdbfac592e138b9ec57be346-2121x1414.png",
      },
    }}
  />
);

Example.storyName = "Progressive Image";
