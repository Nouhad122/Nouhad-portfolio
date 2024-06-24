import React from 'react';
import clubConnect from '../../src/assets/club-connect.png';
import '../components/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faJs,faBootstrap,faGit,faPython } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <>
      <div className='projects-section'>
        <div className='projects-header'>
            <h3>Projects</h3>
        </div>
            <div className='projects-container'>
                <div className='project-box'>
                    <h1 className='project-title'>ClubConnect</h1>
                    <img src={clubConnect}/>
                    <div className='project-technologies'>
                      <FontAwesomeIcon className='project-icon' icon={faHtml5} />
                      <FontAwesomeIcon className='project-icon' icon={faCss3Alt} />
                      <FontAwesomeIcon className='project-icon' icon={faJs} />
                      <FontAwesomeIcon className='project-icon' icon={faBootstrap} />
                      <FontAwesomeIcon className='project-icon' icon={faGit} />
                      <FontAwesomeIcon icon={faPython} />
                    </div>
                    <div className='dark-background'></div>
                    <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Pellentesque pulvinar pellentesque habitant morbi tristique. Et netus et malesuada fames ac.
                           Nec sagittis aliquam malesuada bibendum arcu. Lobortis elementum nibh tellus molestie nunc
                            non blandit massa. Nisl suscipit adipiscing bibendum est ultricies integer.</p>
                </div>
                <div className='project-box'>
                    <img src={clubConnect}/>
                </div>
                <div className='project-box'>
                    <img src={clubConnect}/>
                </div>
            </div>
        
      </div>
    </>
  )
}

export default Projects
