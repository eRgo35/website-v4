import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import '../styles/Info.css';
import Model from './Model';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (<orbitControls
    ref={controls}
    enableZoom={false}
    // maxAzimuthAngle={Math.PI / 2}
    maxPolarAngle={Math.PI / 2}
    // minAzimuthAngle={-Math.PI / 2}
    minPolarAngle={0}
    args={[camera, domElement]}
  />
  );
}

const Info = () => {
  return (
    <div id="info">
      <div className='info-content'>
        <div className='info-skyline' data-aos="fade-up" data-aos-duration="1500">
          <span className='info-title'>My 2021 GitHub Skyline</span>
          <Canvas camera={{ position: [0, 10, 100] }}>
            <CameraControls />
            <Suspense fallback={null}>
              <Model url={"eRgo35-2021.stl"} />
            </Suspense>
          </Canvas>
        </div>
        <div className='info-technologies' data-aos="fade-up" data-aos-duration="1500">
          <span className='info-title'>Stuff I'm familliar with</span>
          <div className='info-technologies-icons'>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="0">
              <img className="info-technologies-svg" alt="JavaScript" src="logos/js.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="100">
              <img className="info-technologies-svg" alt="NodeJS" src="logos/nodejs.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="200">
              <img className="info-technologies-svg" alt="React" src="logos/react.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="300">
              <img className="info-technologies-svg" alt="Angular" src="logos/angular.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="400">
              <img className="info-technologies-svg" alt="TypeScript" src="logos/typescript.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="500">
              <img className="info-technologies-svg" alt="SaSS" src="logos/sass.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="600">
              <img className="info-technologies-svg" alt="Git" src="logos/git.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="700">
              <img className="info-technologies-svg" alt="Firebase" src="logos/firebase.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="800">
              <img className="info-technologies-svg" alt="Cloudflare" src="logos/cloudflare.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="900">
              <img className="info-technologies-svg" alt="Python" src="logos/python.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="1000">
              <img className="info-technologies-svg" alt="C#" src="logos/csharp.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="1100">
              <img className="info-technologies-svg" alt="Linux" src="logos/linux.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="1200">
              <img className="info-technologies-svg" alt="Docker" src="logos/docker.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="1300">
              <img className="info-technologies-svg" alt="Ethereum" src="logos/ethereum.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="1400">
              <img className="info-technologies-svg" alt="Solidity" src="logos/solidity.svg" />
            </div>
            <div className='info-technologies-icon' data-aos="zoom-in" data-aos-duration="300" data-aos-delay="1500">
              <img className="info-technologies-svg" alt="Metasploit" src="logos/metasploit.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;