import React, { useRef } from "react";
import Webcam from "react-webcam";

function VideoBackground() {
  const webcamRef = React.useRef(null);
  const isLandscape = window.innerHeight <= window.innerWidth;
  const ratio = isLandscape
    ? window.innerWidth / window.innerHeight
    : window.innerHeight / window.innerWidth;
  const videoConstraints = {
    facingMode: "environment",
    aspectRatio: ratio,
  };
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <>
      <Webcam
        //TODO: https://www.npmjs.com/package/react-webcam
        audio={false}
        height={window.innerHeight}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={window.innerWidth}
        videoConstraints={videoConstraints}
      />
    </>
  );
}

export default VideoBackground;
