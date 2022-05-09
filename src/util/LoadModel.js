import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useFBX,
  useGLTF,
  useProgress,
  useTexture,
} from "@react-three/drei";

//import MyModel from "../models/Gl2";

export default function LoadModel() {
  /*
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    console.log(progress);
    if (progress == 100) {
      finishCallback();
    }
    return <Html center>{progress} % loaded</Html>
  }*/
  function Fbx() {
    //const texture = useTexture("../textures/Adam_Head_a.jpg");
    const model = useFBX("willow0322.FBX");
    return <primitive object={model} scale={0.00015} position={(0, 0, 0)} />;
  }
  return (
    <Canvas >
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1}></directionalLight>
      <Suspense fallback={null}>
        {/*<MyModel />*/}
        <Fbx />
      </Suspense>
    </Canvas>
  );
}
