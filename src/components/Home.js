import React from 'react';
import '../components/Home.css'
import statue from '../../src/assets/statue.png';
import robot from '../../src/assets/robot.png';
const Home = ({darkMode}) => {
  return (
    <>
      <div id='home' className='home-section'>
        <div className={`${darkMode ? 'home-description dark-font' : 'home-description'}`}>
            <h1>Hello,<br/>I'm <span className={`${darkMode ? 'my-name special-color' : 'my-name'}`}>Nouhad</span></h1>
            <h3>Software Engineer, Frontend Developer</h3>
            <p className={`${darkMode && 'darkParag'}`}>Hard work beats talent
            when talent doesent work Hard...<br/>This is my official portfolio as a frontend web developer.<br/>
            I design and code beautifully simple things, and i love what i do</p>
            <a href="/My-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className={`${darkMode ? "custom-btn btn dark-btn" : "custom-btn btn"}`}><span>Check My Resume</span></button>
            </a>
        </div>
        <div className='home-image'>
            <img src={`${darkMode ? statue : robot}`}/>
        </div>
        
      </div>
    </>
  )
}

export default Home
