import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three'

const Scene = () => {

    let tex = useTexture('./home.jpg');
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.x += delta;
    })
    return (
        <mesh ref={cyl} rotation={[0, 1.4, 0.5]}>
            <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Scene
