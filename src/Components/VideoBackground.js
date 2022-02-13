import React, { useRef } from "react";
import Webcam from "react-webcam";

export default function VideoBackground() {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width: window.innerWidth,
    height: window.innerHeight,
    facingMode: "user",
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
