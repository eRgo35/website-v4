// import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

import '../styles/Navbar.css';
import { Link } from 'react-scroll';
import { useRef } from 'react';

const Navbar = () => {

  window.onscroll = () => scrollFunc();

  const navbar = useRef(null);

  const scrollFunc = () => {
    if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
      navbar.current.style.background = "#181818";
    }
    else {
      navbar.current.style.background = "#00000000";
    }
  }

  return (
    <div className="navbar" ref={navbar} >
      <div className="navbar-hello">
        <button className='navbar-menuButton' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img className="navbar-wordart" src="/Wordmark.png" alt="Michael Czyż" />
        </button>
      </div>
      <div className="navbar-sections">
        <Link className='navbar-menuButton' activeClass="navbar-active" to="info" spy={true} smooth={true}>Info</Link>
        <Link className='navbar-menuButton' activeClass="navbar-active" to="projects" spy={true} smooth={true}>Projects</Link>
        <Link className='navbar-menuButton' activeClass="navbar-active" to="hobbies" spy={true} smooth={true}>Hobbies</Link>
        <a className='navbar-menuButton' href='resume.pdf' target="_blank" rel='noreferrer'>Résumé</a>
      </div>
      <div className="navbar-social">
        {/* <a className="menuLink" href="https://github.com/eRgo35" target="_blank" rel='noreferrer'><GitHubIcon className="icon socials" /></a> */}
        <a className="navbar-menuLink" href="https://www.linkedin.com/in/mike-czyz" target="_blank" rel='noreferrer'><LinkedInIcon className="navbar-icon navbar-socials" /></a>
        {/* <a className="menuLink" href="https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ" target="_blank" rel='noreferrer'><YouTubeIcon className="icon socials"/></a> */}
        <a className="navbar-menuLink" href="https://t.me/Mike_Czyz" target="_blank" rel='noreferrer'><TelegramIcon className="navbar-icon navbar-socials" /></a>
        <a className="navbar-menuLink" href="https://twitter.com/Mike_Czyz_" target="_blank" rel='noreferrer'><TwitterIcon className="navbar-icon navbar-socials" /></a>
        <a className="navbar-menuLink navbar-contact" href="mailto:mike@czyz.icu?subject=Hi" target="_blank" rel='noreferrer'><EmailIcon className="navbar-icon navbar-socials" /><span>Contact</span></a>
      </div>
    </div>
  );
}

export default Navbar;