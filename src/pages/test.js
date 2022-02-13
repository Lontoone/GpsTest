import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import { render } from "@testing-library/react";
import CreateBox from "../util/CreateBox";
import AnimatedSphere from "../util/AnimatedSphere";
import MyModel from "../models/Gl2"

/*
function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}*/

export default function test() {
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "black" }}>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        ></directionalLight>
        {/*
        <pointLight position={[-10, -10, -10]} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        */}
        <Suspense fallback={null}>
          <CreateBox></CreateBox>
          <AnimatedSphere />
        </Suspense>
      </Canvas>

      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        ></directionalLight>
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>

      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-2, 5, 2]}
          intensity={1}
        ></directionalLight>
        <Suspense fallback={null}>
          <MyModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
