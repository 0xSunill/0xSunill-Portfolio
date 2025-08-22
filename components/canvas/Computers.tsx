"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import type { MediaQueryListEvent } from "typescript";
import CanvasLoader from "../Loader";

type ComputersProps = { isMobile: boolean };

const Computers = ({ isMobile }: ComputersProps) => {
  // IMPORTANT: this loads from /public. Ensure the model exists at /public/desktop_pc/scene.gltf
  const computer = useGLTF("/desktop_pc/scene.gltf");

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
        // @ts-expect-error drei GLTF typing is permissive; this is fine at runtime
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
    const mql = window.matchMedia("(max-width: 500px)");
    setIsMobile(mql.matches);

    const handle = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handle);
    return () => mql.removeEventListener("change", handle);
  }, []);

  return (
    <Canvas frameloop="demand" shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

// drei GLTF cache helper (optional, but quiets warnings if you preload somewhere)
// @ts-ignore
useGLTF.preload?.("/desktop_pc/scene.gltf");
