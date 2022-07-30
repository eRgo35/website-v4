// import { useEffect, useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {

  // const [projects, setProjects] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch("https://api.github.com/users/eRgo35/repos");
  //   var data = await response.json();
  //   setProjects(data)
  // }, []);

  return (
    <div id="projects">
      <div className="projects-content">
        <span data-aos="fade-up" data-aos-duration="1500">My Projects</span>
        <div className='projects-card-wrapper'>
          <div className='projects-card' data-aos="fade-up" data-aos-duration="1500">
            <div className='projects-header'>
              <a href="https://github.com/eRgo35/Etherscan-Search" target="_blank" rel='noreferrer' >Etherscan-Search</a>
              <div className='projects-interaction'>
                <div className='projects-stars'></div>
                <div className='projects-forks'></div>
              </div>
            </div>
            <div className='projects-description'>
              <span>Search by Adress / Txn Hash / Block / Token / Ens on Etherscan.io</span>
            </div>
          </div>
          <div className='projects-card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
            <div className='projects-header'>
              <a href="https://github.com/eRgo35/Project-TSI" target="_blank" rel='noreferrer' >Project-TSI</a>
              <div className='projects-interaction'>
                <div className='projects-stars'></div>
                <div className='projects-forks'></div>
              </div>
            </div>
            <div className='projects-description'>
              <span>Source code of the entire page created during Web Development classes</span>
            </div>
          </div>
          <div className='projects-card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
            <div className='projects-header'>
              <a href="https://github.com/eRgo35/JS-Calculator" target="_blank" rel='noreferrer' > JS-Calculator</a>
              <div className='projects-interaction'>
                <div className='projects-stars'></div>
                <div className='projects-forks'></div>
              </div>
            </div>
            <div className='projects-description'>
              <span>Calculator made in JavaScript</span>
            </div>
          </div>
          <div className='projects-card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600">
            <div className='projects-header'>
              <a href="https://github.com/eRgo35/Server-Manager" target="_blank" rel='noreferrer' >Server-Manager</a>
              <div className='projects-interaction'>
                <div className='projects-stars'></div>
                <div className='projects-forks'></div>
              </div>
            </div>
            <div className='projects-description'>
              <span>Simple Tool for managing your local server.</span>
            </div>
          </div>
          <div className='projects-card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
            <div className='projects-header'>
              <a href="https://github.com/eRgo35/MelvinJS" target="_blank" rel='noreferrer' >MelvinJS</a>
              <div className='projects-interaction'>
                <div className='projects-stars'></div>
                <div className='projects-forks'></div>
              </div>
            </div>
            <div className='projects-description'>
              <span>Multipurpose Discord Bot rewritten in JavaScript</span>
            </div>
          </div>
          <div className='projects-card' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
            <div className='projects-header'>
              <a href="https://github.com/eRgo35/Bscscan-Search" target="_blank" rel='noreferrer' >Bscscan-Search</a>
              <div className='projects-interaction'>
                <div className='projects-stars'></div>
                <div className='projects-forks'></div>
              </div>
            </div>
            <div className='projects-description'>
              <span>Search by Adress / Txn Hash / Block / Token on BscScan.com</span>
            </div>
          </div>
          <a href="https://github.com/eRgo35?tab=repositories" target="_blank" rel="noreferrer" className='projects-see-more' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500" data-aos-anchor=".projects-card-wrapper">SEE MORE</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;