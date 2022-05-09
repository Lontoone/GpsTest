import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Box, Environment, OrbitControls, useFBX } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useEffect, useState } from "react/cjs/react.production.min";

import { Mesh } from "three";
import texture from "../textures/willow sister texture_FIN.png";
import { AmbientLight, TextureLoader } from "three";

const Fbx = () => {
  const ref = useRef();
  const colorMap = useLoader(TextureLoader, texture);
  console.log(colorMap);
  const path = require("../models/willow0325.fbx");
  const loader = new FBXLoader();
  //const fbx = useLoader(FBXLoader, path);
  const fbx = useFBX(path);
  //console.log(fbx);

  let mixer;
  if (fbx.animations.length) {
    mixer = new THREE.AnimationMixer(fbx);
    const action = mixer.clipAction(fbx.animations[3]);
    action.play();

    //mixer.addEventListener('loop',function(e){console.log(e);})

    //console.log(action);
  }

  let preStopTime = 0;
  let nextIdel = false;
  const clock = new THREE.Clock();
  useFrame((state, delta) => {
    if (fbx.animations.length) {
      mixer?.update(clock.getDelta());

      if (clock.getElapsedTime() - preStopTime > 0) {
        //隨機挑動畫播放
        var clip_index = 2;
        var clips = [0, 1, 3];
        if (!nextIdel) {
          clip_index = clips[Math.floor(Math.random() * 3)];
        }
        nextIdel = !nextIdel;
        //console.log(clip_index);

        mixer = new THREE.AnimationMixer(fbx);
        const action = mixer.clipAction(fbx.animations[clip_index]);
        action.setDuration(fbx.animations[clip_index].duration).play();
        preStopTime =
          clock.getElapsedTime() +
          fbx.animations[clip_index].duration * (clip_index == 2 ? 10 : 1);
      }
    }
  });

  /*
  const geo = useMemo(() => {
    let g;
    fbx.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        g = child.geometry;
      }
    });
    return g;
  }, [fbx]);
  */

  //console.log(geo);

  return (
    /*
    <mesh geometry={geo} rotation={[-90,0,0]} ref={ref}>
      <meshStandardMaterial color="#a5a5a5" attach="material" map={colorMap} />
    </mesh>*/

    <primitive
      object={fbx}
      ref={ref}
      scale={[1.35,1.35,-1.35]}
      rotation={[0, 0, 0]}
      position={[0, -170, 70]}
      key={fbx.src}
      dispose={null}
    ></primitive>
  );
};
export default function LoadFBX() {
  return (
    <div className="fbx-container">
      <Canvas orthographic camera={{ position: [0, 0, -10], near: 0.001 }}>
        <ambientLight intensity={0.7} color="#B6B6B6B6" />
        <Suspense fallback={<>Loading</>}>
          <Fbx />
          {/*<OrbitControls />*/}
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
