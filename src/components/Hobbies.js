import '../styles/Hobbies.css';

const Hobbies = () => {
  return (
    <div id="hobbies">
      <div className='hobbies-content' data-aos="fade-up" data-aos-duration="1500">
        <span>My Other Interests</span>
        <div className='hobbies-card-wrapper'>
          <div className='hobbies-card' data-aos="fade-up" data-aos-duration="1500">
            <div className='hobbies-img'>
              <img src="hobbies/google-earth.webp" alt="Google Earth Studio" />
            </div>
            <div className='hobbies-header'>
              <a href="https://www.youtube.com/playlist?list=PLgm7_rin1dVzcviyHPVFLvvuzX2dogIPV" target="_blank" rel="noreferrer">Google Earth Studio</a>
            </div>
          </div>
          {/* <div className='hobbies-card'>
            <div className='hobbies-img'>
              <img src="hobbies/trackmania.webp" alt="Trackmania Speedruns" />
            </div>
            <div className='hobbies-header'>
              <a href="https://youtube.com/playlist?list=PLgm7_rin1dVzcvCRQFiIAUWW9HFDOCZ_L" target="_blank" rel="noreferrer">Trackmania Speedruns</a>
            </div>
          </div> */}
          <div className='hobbies-card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <div className='hobbies-img'>
              <img src="hobbies/portal.webp" alt="Portal Speedruns" />
            </div>
            <div className='hobbies-header'>
              <a href="https://www.youtube.com/playlist?list=PLgm7_rin1dVwmGrP2i2eXddbrT1H4lwAo" target="_blank" rel="noreferrer">Portal Speedruns</a>
            </div>
          </div>
          <div className='hobbies-card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            <div className='hobbies-img'>
              <img src="hobbies/magic.webp" alt="Card Magic" />
            </div>
            <div className='hobbies-header'>
              <a href="https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ" target="_blank" rel="noreferrer">Card Magic</a>
            </div>
          </div>
          <div className='hobbies-card last' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600" data-aos-anchor=".hobbies-card-wrapper">
            <div className='hobbies-img'>
              <img src="hobbies/rubiks-cube.webp" alt="Speedcubing" />
            </div>
            <div className='hobbies-header'>
              <a href="https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ" target="_blank" rel="noreferrer">Speedcubing</a>
            </div>
          </div>
          {/* <div className='hobbies-card'>
            <div className='hobbies-img'>
              <img src="hobbies/music.webp" alt="Music" />
            </div>
            <div className='hobbies-header'>
              <a href="https://open.spotify.com/user/21xsmk4ywj5v7fryg62uzco2y/playlists" target="_blank" rel="noreferrer">Music I'm listening to</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hobbies;