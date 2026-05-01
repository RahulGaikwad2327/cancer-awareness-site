import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function FollowCamera({ target }) {
  const { camera } = useThree();
  const look = useRef(new THREE.Vector3());
  useFrame(() => {
    const t = target.current;
    if (!t) return;
    const desired = new THREE.Vector3(t.x + 5, 5.5, t.z + 7);
    camera.position.lerp(desired, 0.06);
    look.current.set(t.x, t.y + 1, t.z);
    camera.lookAt(look.current);
  });
  return null;
}
