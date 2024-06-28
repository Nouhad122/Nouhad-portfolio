import React from 'react';
import '../components/About.css';
import statue2 from '../../src/assets/statue2.png';

const About = () => {
  return (
    <>
      <div id='about' className='about-section'>
      <div className='about-image'>
            <img src={statue2}/>
        </div>
        <div className='about-description'>
            <h3>About Me</h3>
            <h1>Future-Focused <span className='my-major'>Software Engineer</span></h1>
            <p>Hello! I'm a dedicated software engineering student at Uskudar University,<br/>
            currently in my final year. My passion lies in frontend development, where<br/>
            I specialize in creating intuitive and visually appealing web applications.<br/>
            I have a strong command of HTML, CSS, JavaScript, Bootstrap 5, and React.js,<br/>
            which I use to bring innovative ideas to life. With a solid foundation in these<br/>
            technologies, I strive to develop seamless and engaging user experiences.<br/>
            I'm excited to continue growing my skills and making a positive impact in<br/> the world of software engineering.</p>
        </div>
      </div>
    </>
  )
}

export default About
