import { useEffect, useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch("https://api.github.com/users/eRgo35/repos");
  //   var data = await response.json();
  //   setProjects(data)
  // }, []);

  return (
    <div id="projects">
      <div className="projects-content">
        <span>My Projects</span>
        <div className='projects-card-wrapper'>
          <div className='projects-card'>
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
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <div className='projects-card'></div>
          <a href="https://github.com/eRgo35?tab=repositories" target="_blank" rel="noreferrer" className='projects-see-more'>SEE MORE</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;