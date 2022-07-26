// import { Suspense } from 'react';
import '../styles/Info.css';

const Info = () => {
  return (
    <div id="info">
      <div className='info-content'>
        <div className='info-skyline'>
          {/* <Canvas camera={{ position: [0, 10, 100] }}>
            <Suspense fallback={null}>
              <Model url={"./eRgo35-2022.stl"} />
            </Suspense>
          </Canvas> */}
        </div>
        <div className='info-technologies'>

        </div>
      </div>
    </div>
  );
}

export default Info;