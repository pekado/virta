import * as React from "react";

export const VideoPreview = ({ value }) => (
  <video
    width={320}
    height={240}
    src={value.url}
    type="video/mp4"
    autoPlay={false}
    controls={true}
  />
);
