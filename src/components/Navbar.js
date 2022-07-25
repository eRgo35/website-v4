// import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';

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
    <div className="Navbar" ref={navbar}>
      <div className="hello">
        <Link className='menuButton' activeClass="active" to="hello" spy={true} smooth={true}>
          <img className="wordart" src="/Wordmark.png" alt="Michael Czyż" />
        </Link>
      </div>
      <div className="sections">
        <Link className='menuButton' activeClass="active" to="info" spy={true} smooth={true}>Info</Link>
        <Link className='menuButton' activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link>
        <Link className='menuButton' activeClass="active" to="hobbies" spy={true} smooth={true}>Hobbies</Link>
        <a className='menuButton' href='resume.pdf' target="_blank" rel='noreferrer'>Résumé</a>
      </div>
      <div className="social">
        <a className="menuLink" href="https://www.linkedin.com/in/mike-czyz" target="_blank" rel='noreferrer'><LinkedInIcon className="icon socials" /></a>
        {/* <a className="menuLink" href="https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ" target="_blank" rel='noreferrer'><YouTubeIcon className="icon socials"/></a> */}
        <a className="menuLink" href="https://t.me/Mike_Czyz" target="_blank" rel='noreferrer'><TelegramIcon className="icon socials" /></a>
        <a className="menuLink" href="https://twitter.com/Mike_Czyz_" target="_blank" rel='noreferrer'><TwitterIcon className="icon socials" /></a>
        <a className="menuLink contact" href="mailto:mike@czyz.icu" target="_blank" rel='noreferrer'><EmailIcon className="icon" /><span>Contact</span></a>
      </div>
    </div>
  );
}

export default Navbar;