"use client";

import {
  useEffect,
  forwardRef,
  Suspense,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import { Three } from "@/helpers/components/Three";
import { useFrame } from "@react-three/fiber";

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

export const CommonRotation = ({ color }) => {
  const groupRef = useRef();
  const cameraRef = useRef();
  const YrotationSpeedRef = useRef(0.001); // Initial rotation speed

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(5, 1, 7);
    }
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += YrotationSpeedRef.current;
  });

  return (
    <Suspense fallback={null}>
      {color && <color attach="background" args={[color]} />}
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <group ref={groupRef}>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          fov={20}
          position={[0, 0, 0]}
        />
      </group>
    </Suspense>
  );
};

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = "View";

export { View };
