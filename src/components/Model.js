import { useEffect, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Model = ({ url }) => {
  const geom = useLoader(STLLoader, url);
  const ref = useRef();

  return (
    <>
      {/* <mesh position={[0, -50, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2000, 2000, 20, 20]} />
        <meshNormalMaterial wireframe={true} />
      </mesh> */}
      <mesh position={[0, -50, 0]}>
        <gridHelper args={[20000, 200, 0xff00ff, 0xff00ff]} />
      </mesh>
      <mesh ref={ref} scale={[2.2, 2.2, 2.2]} position={[0, -30, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow={true} castShadow={true}>
        <meshPhongMaterial color={0xaabbaa} specular={0x111111} shininess={400} />
        <primitive object={geom} attach="geometry" />
      </mesh>
      <hemisphereLight args={[0x443333, 0x111122]} />
      <directionalLight position={[1, 1, 2]} color={0xffffff} intensity={1.35} castShadow={true} />
      <directionalLight position={[0, -10, 20]} color={0xffaa00} intensity={1} castShadow={true} />
      {/* <directionalLight position={[0, 0, 5]} color="royalBlue" /> */}
    </>
  )
}

export default Model;