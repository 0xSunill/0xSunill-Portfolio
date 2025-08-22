"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib"; // ✅ add type
import CanvasLoader from "../Loader";

type ComputersProps = { isMobile: boolean };

const Computers = ({ isMobile }: ComputersProps) => {
  // Make sure model + textures exist in /public/desktop_pc/...
  const computer = useGLTF("/desktop_pc/scene.gltf") as GLTF; // ✅ typed

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="blue" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 1}
        position={isMobile ? [0, -0.1, -0.5] : [0, -1, -1.5]}
        rotation={[0, 0, -0.2]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql: MediaQueryList = window.matchMedia("(max-width: 500px)");
    setIsMobile(mql.matches);

    const handle = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handle);
      return () => mql.removeEventListener("change", handle);
    } else {
      // Safari <14 fallback with explicit typing
      const legacyMql = mql as MediaQueryList & {
        addListener: (listener: (e: MediaQueryListEvent) => void) => void;
        removeListener: (listener: (e: MediaQueryListEvent) => void) => void;
      };

      legacyMql.addListener(handle);
      return () => legacyMql.removeListener(handle);
    }
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

// Preload the GLTF (optional)
useGLTF.preload?.("/desktop_pc/scene.gltf");
