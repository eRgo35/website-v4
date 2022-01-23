import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';

import '../styles/Navbar.css';

const Navbar = () => {

  const moveTo = section => {
    console.log(`Moved to ${section}!`);
  }

  return (
    <div className="Navbar">
      <div className="hello">
        <button className='menuButton' onClick={moveTo("hello")}>
          <img className="wordart" src="/Wordmark.png" alt="Michał Czyż" />
        </button>
      </div>
      <div className="sections">
        <button className='menuButton' onClick={moveTo("info")}>Info</button>
        <button className='menuButton' onClick={moveTo("projects")}>Projects</button>
        <button className='menuButton' onClick={moveTo("hobbies")}>Hobbies</button>
      </div>
      <div className="social">
      <a className="menuLink" href="https://www.linkedin.com/in/mike-czyz" target="_blank" rel='noreferrer'><LinkedInIcon className="icon socials"/></a>
        <a className="menuLink" href="https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ" target="_blank" rel='noreferrer'><YouTubeIcon className="icon socials"/></a>
        <a className="menuLink" href="https://t.me/Mike_Czyz" target="_blank" rel='noreferrer'><TelegramIcon className="icon socials"/></a>
        <a className="menuLink" href="https://twitter.com/Mike_Czyz_" target="_blank" rel='noreferrer'><TwitterIcon className="icon socials"/></a>
        <a className="menuLink contact" href="mailto:mike@czyz.icu" target="_blank" rel='noreferrer'><EmailIcon className="icon"/><span>Contact</span></a>
      </div>
    </div>
  );
}

export default Navbar;