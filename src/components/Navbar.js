import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Navbar.css';

const Navbar = () => {

  const menu = num => {
    console.log(`Moved to ${num}!`);
  }

  return (
    <div className="Navbar">
      <div className="hello">
        <button className='menuButton' onClick={menu(0)}>
          <img className="wordart" src="/Wordmark.png" alt="Michał Czyż" />
        </button>
      </div>
      <div className="sections">
        <button className='menuButton' onClick={menu(1)}>Info</button>
        <button className='menuButton' onClick={menu(2)}>Projects</button>
        <button className='menuButton' onClick={menu(3)}>Hobbies</button>
      </div>
      <div className="social">
      <a className="menuLink" href="https://www.linkedin.com/in/mike-czyz" target="_blank" rel='noreferrer'><LinkedInIcon /></a>
        <a className="menuLink" href="https://github.com/eRgo35" target="_blank" rel='noreferrer'><GitHubIcon /></a>
        <a className="menuLink" href="https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ" target="_blank" rel='noreferrer'><YouTubeIcon /></a>
        <a className="menuLink" href="https://twitter.com/Mike_Czyz_" target="_blank" rel='noreferrer'><TwitterIcon /></a>
        <a className="menuLink" href="https://t.me/Mike_Czyz" target="_blank" rel='noreferrer'><TelegramIcon /></a>
        <a className="menuLink contact" href="mailto:mike@czyz.icu" target="_blank" rel='noreferrer'><EmailIcon /><span>Contact</span></a>
      </div>
    </div>
  );
}

export default Navbar;