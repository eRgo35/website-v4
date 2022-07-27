import '../styles/Hobbies.css';

const Hobbies = () => {
  return (
    <div id="hobbies">
      <div className='hobbies-content'>
        <span>My Other Interests</span>
        <div className='hobbies-card-wrapper'>
          <div className='hobbies-card'>Google Earth Studio</div>
          <div className='hobbies-card'>Portal Speedruns</div>
          <div className='hobbies-card'>Trackmania Speedruns</div>
          <div className='hobbies-card'>Card Magic</div>
          <div className='hobbies-card'>Speedcubing</div>
          <div className='hobbies-card'>Music I currently listen to</div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;