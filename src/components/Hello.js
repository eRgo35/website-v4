import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-scroll';
import '../styles/Hello.css';

const Hello = () => {
  return (
    <>
      <div className='hello-bg'></div>
      <div className="hello">
        <div className='hello-content'>
          <div className='hello-greeting' data-aos="fade-in" data-aos-duration="1500" data-aos-delay="600">
            Hi, I'm Mike 👋🏻 👨🏻‍💻
          </div>
          <div className='hello-bio'>
            <span className='hello-bio-span' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
              I'm a developer and student developing websites using Angular and React frameworks and software in C# and Python.
            </span>
            <br /><br />
            <span className='hello-bio-span' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
              I built a simple web app in Angular, Server Manager program for Windows and useful Chrome Extensions.
            </span>
            <br /><br />
            <span className='hello-bio-span' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1200">
              I'm open to new technologies like blockchain and Ethereum Smart Contracts.
            </span>
          </div>
        </div>
        <div className='hello-scroll-down' data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1400" data-aos-anchor=".hello-bg">
          <Link to="info" offset={-500} spy={true} smooth={true}><ExpandMoreIcon className='hello-expander' /></Link>
        </div>
      </div>
    </>
  );
}

export default Hello;