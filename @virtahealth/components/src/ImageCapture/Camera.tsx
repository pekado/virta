import * as React from "react";

// method to stop the mediastream tracks for cleanup purposes
export const stopAllTracks = (mediaStream: MediaStream) =>
  mediaStream.getTracks().forEach((track) => {
    track.stop();
  });

export enum directionEnum {
  LANDSCAPE,
  PORTRAIT,
}

// React component to render an environment facing camera (if possible), falls back to user facing
const Camera: React.FC<{
  mediaStream: MediaStream | undefined;
  setMediaStream: (stream: MediaStream | undefined) => void;
  direction: directionEnum;
}> = ({ mediaStream, setMediaStream, direction }) => {
  const videoRef = React.createRef<HTMLVideoElement>();

  // method creates a new video media stream to use with the device camera
  React.useEffect(() => {
    const enableStream = async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          frameRate: { max: 30 },
          height: 960,
          width: 1280,
        },
      });

      setMediaStream(mediaStream);
    };

    if (!mediaStream) {
      enableStream();
    } else {
      return () => stopAllTracks(mediaStream);
    }
  }, []);

  // set the video DOM element to use the media stream
  React.useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = mediaStream;
    }
  });

  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <video
      ref={videoRef}
      playsInline
      style={{
        objectFit: "cover",
        width: direction == directionEnum.LANDSCAPE ? "133vh" : "100vw",
        height: direction == directionEnum.LANDSCAPE ? "100vh" : "75vw",
      }}
      onCanPlay={handleCanPlay}
      autoPlay
      muted
    />
  );
};

export default Camera;
