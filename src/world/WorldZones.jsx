import { Text, Float } from '@react-three/drei';

const zones = [
  { key: 'home', label: 'HOME', pos: [-8, 1.2, -6], color: '#22d3ee' },
  { key: 'projects', label: 'PROJECTS', pos: [8, 1.2, -8], color: '#818cf8' },
  { key: 'skills', label: 'SKILLS', pos: [-10, 1.2, 8], color: '#34d399' },
  { key: 'experience', label: 'EXPERIENCE', pos: [8, 1.2, 8], color: '#f59e0b' },
  { key: 'contact', label: 'CONTACT', pos: [0, 1.2, 13], color: '#f472b6' },
  { key: 'secret', label: 'SECRET', pos: [0, 1.2, -13], color: '#e879f9' }
];

export default function WorldZones({ onSelect }) {
  return (
    <group>
      {zones.map((z) => (
        <group key={z.key} position={z.pos} onClick={() => onSelect(z.key)}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[2.4, 2.4, 2.4]} />
            <meshStandardMaterial color={z.color} emissive={z.color} emissiveIntensity={0.2} />
          </mesh>
          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.7}>
            <Text position={[0, 2.2, 0]} fontSize={0.45} color="white">{z.label}</Text>
          </Float>
        </group>
      ))}
    </group>
  );
}
