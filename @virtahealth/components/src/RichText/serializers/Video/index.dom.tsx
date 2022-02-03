import * as React from "react";

// NOTE: We don't (currently) use handleOpenVideo on this platform since we just play it inline.
export const VideoSerializer =
  (): React.FC<{ node: { url: string } }> =>
  // @ts-ignore - TODO: type this properly
  // eslint-disable-next-line react/display-name
  (props) => {
    return (
      <video controls={true} preload="auto">
        {/* eslint-disable-next-line react/prop-types */}
        <source src={props.node.url} type="video/mp4" />
      </video>
    );
  };
