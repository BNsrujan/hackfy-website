import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MouseFollower = () => {
  const meshRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      const x = (mousePosition.x / window.innerWidth) * 2 - 1;
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1;
      meshRef.current.position.set(x * 5, y * 5, 0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const MouseFollow = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <MouseFollower />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MouseFollow;
