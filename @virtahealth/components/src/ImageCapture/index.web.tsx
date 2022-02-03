import * as React from "react";
import { Image, ImageProps, View, ViewProps } from "react-native";
import { Button } from "../Button";
import { Spacer } from "../Spacer";
import styled from "../styled-components";
import Camera, { directionEnum } from "./Camera";
interface OwnProps {
  photoURL?: string | null | undefined;
  onAcceptPhoto?: (uri: string) => void;
  onExit?: () => void;
  id: string;
}

const StyledView = styled(View)`
  align-items: center;
`;

type ViewWithDirectionType = ViewProps & { direction: directionEnum };

const StyledCameraContainer = styled(View)<ViewWithDirectionType>`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === directionEnum.LANDSCAPE ? "row" : "column"};
  height: 100vh;
  width: ${({ direction }) =>
    direction === directionEnum.LANDSCAPE ? "80vw" : "100vw"};
`;

const CameraButtonContainer = styled(View)<ViewWithDirectionType>`
  padding: 30px;
  height: 200px;
  width: ${({ direction }) =>
    direction === directionEnum.LANDSCAPE ? "20vw" : "100vw"};
`;

type ImageWithDirectionType = ImageProps & { direction: directionEnum };

const StyledImage = styled(Image)<ImageWithDirectionType>`
  width: ${({ direction }) =>
    direction == directionEnum.LANDSCAPE ? "133vh" : "100vw"};
  height: ${({ direction }) =>
    direction == directionEnum.LANDSCAPE ? "100vh" : "75vw"};
`;

export const ImageCaptureComponent: React.FC<OwnProps> = ({
  onAcceptPhoto,
  onExit,
  id,
}) => {
  const [photoSource, setPhotoSource] = React.useState("");
  const [showCapturedPhoto, setShowCapturedPhoto] = React.useState(false);
  const [direction, setDirection] = React.useState<directionEnum>(
    directionEnum.PORTRAIT
  );

  const [mediaStream, setMediaStream] = React.useState<
    MediaStream | undefined
  >();

  const focusOnImageCapture = () => {
    location.href = "#";
    location.href = `#${id}`;
  };

  const changeDirection = (width: number, height: number) => {
    if (width > height) {
      // landscape view
      setDirection(directionEnum.LANDSCAPE);
    } else {
      // portrait view
      setDirection(directionEnum.PORTRAIT);
    }
    focusOnImageCapture();
  };

  const takePhoto = async () => {
    try {
      if (mediaStream) {
        const track = mediaStream.getVideoTracks()[0];
        // @ts-ignore (11/11/21 Richard) This ignore needed a reason but I don't know it. Next time someone touches this please give a real reason for this ignore.
        const imageCapture = new ImageCapture(track);
        const photoBlob = await imageCapture.takePhoto({
          imageWidth: 1280,
          imageHeight: 960,
        });
        setPhotoSource(URL.createObjectURL(photoBlob));
        setShowCapturedPhoto(true);
      }
    } catch (e) {
      // this should only happen on desktop in testing scenarios
      setPhotoSource("test");
      setShowCapturedPhoto(true);
    }
  };

  return (
    <StyledView
      nativeID={id}
      onLayout={({ nativeEvent }) =>
        changeDirection(nativeEvent.layout.width, nativeEvent.layout.height)
      }
    >
      {showCapturedPhoto ? (
        <StyledCameraContainer direction={direction}>
          <StyledImage source={{ uri: photoSource }} direction={direction} />
          <CameraButtonContainer direction={direction}>
            <Button
              size="medium"
              onPress={() => {
                setShowCapturedPhoto(false);
                setMediaStream(undefined);
              }}
              intent="secondary"
              appearance="outline"
              labelMessage={{
                id: "imagecapture.button.retakephoto",
                defaultMessage: "Retake photo",
              }}
            />
            <Spacer height={3} />
            <Button
              size="medium"
              onPress={() => onAcceptPhoto && onAcceptPhoto(photoSource)}
              intent="primary"
              labelMessage={{
                id: "imagecapture.button.acceptphoto",
                defaultMessage: "Accept Photo",
              }}
            />
          </CameraButtonContainer>
        </StyledCameraContainer>
      ) : (
        <StyledCameraContainer direction={direction}>
          <Camera
            mediaStream={mediaStream}
            setMediaStream={setMediaStream}
            direction={direction}
          />
          <CameraButtonContainer direction={direction}>
            <Button
              size="medium"
              intent="primary"
              onPress={() => onExit && onExit()}
              labelMessage={{
                id: "imagecapture.button.exitphoto",
                defaultMessage: "Back",
              }}
            />
            <Spacer height={8} />
            <Button
              size="medium"
              width="wide"
              intent="primary"
              onPress={takePhoto}
              labelMessage={{
                id: "imagecapture.button.takephoto",
                defaultMessage: "Take Photo",
              }}
            />
          </CameraButtonContainer>
        </StyledCameraContainer>
      )}
    </StyledView>
  );
};
