import React from 'react';
import '../components/Home.css'
import statue from '../../src/assets/statue.png';

const Home = () => {
  return (
    <>
      <div id='home' className='home-section'>
        <div className='home-description'>
            <h1>Hello,<br/>I'm <span className='my-name'>Nouhad</span></h1>
            <h3>Software Engineer, Frontend Developer</h3>
            <p>Hard work beats talent
            when talent doesent work Hard...<br/>This is my official portfolio as a frontend web developer.<br/>
            I design and code beautifully simple things, and i love what i do</p>
            <a href="/My-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="custom-btn btn"><span>Check My Resume</span></button>
            </a>
        </div>
        <div className='home-image'>
            <img src={statue}/>
        </div>
        
      </div>
    </>
  )
}

export default Home
