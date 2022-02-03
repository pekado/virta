import * as React from "react";
import { TouchableOpacity } from "react-native";

import { LargePlayIcon } from "../../../Icons";
import styled from "../../../styled-components";

const StyledVideoBox = styled.View`
  background-color: #000000;
  height: 250px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const VideoSerializer =
  (
    handleOpenVideo: (url: string) => void
  ): React.FC<{ node: { url: string } }> =>
  // @ts-ignore - TODO: type this properly
  // eslint-disable-next-line react/display-name
  (props) => {
    return (
      <TouchableOpacity
        onPress={() => {
          {
            /* eslint-disable react/prop-types */
          }
          handleOpenVideo(props.node.url);
          {
            /* eslint-enable react/prop-types */
          }
        }}
      >
        <StyledVideoBox>
          <LargePlayIcon />
        </StyledVideoBox>
      </TouchableOpacity>
    );
  };
