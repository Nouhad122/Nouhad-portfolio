import React from 'react';
import '../components/Home.css'
import statue from '../../src/assets/statue.png';

const Home = () => {
  return (
    <>
      <div className='home-section'>
        <div className='home-description'>
            <h1>Hello,<br/>I'm <span className='my-name'>Nouhad</span></h1>
            <h3>Software Engineer, Frontend Developer</h3>
            <p>Hard work beats talent
            when talent doesent work Hard...<br/>This is my official portfolio as a frontend web developer.<br/>
            I design and code beautifully simple things, and i love what i do</p>
        </div>
        <div className='home-image'>
            <img src={statue}/>
        </div>
        
      </div>
    </>
  )
}

export default Home
