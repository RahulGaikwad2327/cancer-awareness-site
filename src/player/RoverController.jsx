import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function RoverController({ keys, onUpdate }) {
  const body = useRef();
  useFrame(() => {
    const rb = body.current;
    if (!rb) return;
    const impulse = { x: 0, y: 0, z: 0 };
    if (keys.current.forward) impulse.z -= 0.06;
    if (keys.current.backward) impulse.z += 0.05;
    if (keys.current.left) impulse.x -= 0.05;
    if (keys.current.right) impulse.x += 0.05;
    rb.applyImpulse(impulse, true);
    const p = rb.translation();
    onUpdate?.(p);
  });

  return (
    <RigidBody ref={body} colliders="ball" restitution={0.2} friction={2} linearDamping={2.3} position={[0, 1, 4]}>
      <mesh castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.35} metalness={0.5} roughness={0.2} />
      </mesh>
    </RigidBody>
  );
}
