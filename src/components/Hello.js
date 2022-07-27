import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-scroll';
import '../styles/Hello.css';

const Hello = () => {
  return (
    <>
      <div className='hello-bg'></div>
      <div className="hello" data-aos="fade-in" data-aos-duration="1500">
        <div className='hello-content'>
          <div className='hello-greeting'>
            Hi, I'm Mike 👋🏻 👨🏻‍💻
          </div>
          <div className='hello-bio'>
            <span className='hello-bio-span'>
              I'm a developer and high school student creating websites using Angular and React framework and software using C# and Python.<br /><br />
              I built a basic web app using Angular Material framework, simple Server Manager program for Windows and simple Guess the Number game using Python.<br /><br />
              I'm open to new technologies such as Blockchain and Ethereum Smart Contracts.
            </span>
          </div>
        </div>
        <div className='hello-scroll-down'>
          <Link to="info" offset={-500} spy={true} smooth={true}><ExpandMoreIcon className='hello-expander' /></Link>
        </div>
      </div>
    </>
  );
}

export default Hello;