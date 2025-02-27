"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function Model() {
  const gltf = useGLTF("/assets/3d/duck.glb")
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return <primitive object={gltf.scene} ref={meshRef} scale={[1.5, 1.5, 1.5]} />
}

export default function AvatarModel() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

