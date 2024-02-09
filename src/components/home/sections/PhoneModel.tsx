import React from "react";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import Model from "./scene";
import { Suspense } from "react";

const PhoneModel = () => {
  return (
    <div className="z-1 pointer-events-none fixed top-0 h-screen w-screen bg-transparent transition-all duration-300">
      <Canvas camera={{ fov: 14 }} className="pointer-events-none">
        <ambientLight intensity={5} className="pointer-events-none" />
        <directionalLight intensity={5} className="pointer-events-none" />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default PhoneModel;
