import React from 'react'
import '../components/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const ContactInfos = () => {
  return (
    <>
    <div className='social-media'>
    <div className='line1'></div>
    <a href="https://www.instagram.com/nouhad.hallab1/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='social-icon' icon={faInstagram} />
    </a>
    <a href="https://wa.me/+905344421873" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='social-icon' icon={faWhatsapp} />
    </a>
    <a href="https://www.linkedin.com/in/nouhad-elhallab/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='social-icon' icon={faLinkedin} />
    </a>
    <a href="https://github.com/Nouhad122" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='social-icon' icon={faGithub} />
    </a>
    <div className='line2'></div>
    </div>
    <div className='my-email'>
        <div className='line1'></div>
        <a className='email-link' href="mailto:nouhadalhallab122@gmail.com" target="_blank" rel="noopener noreferrer">
        <h3>nouhadalhallab122@gmail.com</h3>
        </a>
        <div className='line2'></div>
    </div>
      
    </>
  )
}

export default ContactInfos
