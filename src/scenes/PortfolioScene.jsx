import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider } from '@react-three/rapier';
import { Suspense, useRef } from 'react';
import RoverController from '../player/RoverController';
import FollowCamera from '../camera/FollowCamera';
import WorldZones from '../world/WorldZones';

export default function PortfolioScene({ keys, setActiveZone, roverPos }) {
  return (
    <Canvas shadows camera={{ position: [6, 5, 8], fov: 48 }}>
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 12, 55]} />
      <ambientLight intensity={0.35} />
      <directionalLight castShadow intensity={1.2} position={[8, 16, 10]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Stars radius={70} count={1200} factor={3} fade />
      </Suspense>
      <Physics gravity={[0, -9.8, 0]}>
        <RigidBody type="fixed" colliders={false}>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[80, 80]} />
            <meshStandardMaterial color="#0f172a" roughness={0.85} metalness={0.2} />
          </mesh>
          <CuboidCollider args={[40, 0.1, 40]} position={[0, -0.1, 0]} />
        </RigidBody>
        <WorldZones onSelect={setActiveZone} />
        <RoverController keys={keys} onUpdate={(p) => (roverPos.current = p)} />
      </Physics>
      <FollowCamera target={roverPos} />
    </Canvas>
  );
}
