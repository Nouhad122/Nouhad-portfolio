import React from 'react'
import '../components/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactInfos = ({darkMode}) => {
  return (
    <>
    <div className= {darkMode ? 'social-media dark-font': 'social-media'}>
    <div className={darkMode ? 'line1 dark-line': 'line1'}></div>
    <a className={darkMode ? 'contact-link dark-link' : 'contact-link'} href="https://www.instagram.com/nouhad.hallab1/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className= {darkMode ? 'social-icon dark-icon':'social-icon'} icon={faInstagram} />
    </a>
    <a className={darkMode ? 'contact-link dark-link' : 'contact-link'} href="https://wa.me/+905344421873" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className={darkMode ? 'social-icon dark-icon':'social-icon'} icon={faWhatsapp} />
    </a>
    <a className={darkMode ? 'contact-link dark-link' : 'contact-link'} href="https://www.linkedin.com/in/nouhad-elhallab/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className={darkMode ? 'social-icon dark-icon':'social-icon'} icon={faLinkedin} />
    </a>
    <a className={darkMode ? 'contact-link dark-link' : 'contact-link'} href="https://github.com/Nouhad122" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className={darkMode ? 'social-icon dark-icon':'social-icon'} icon={faGithub} />
    </a>
    <div className={darkMode ? 'line2 dark-line': 'line2'}></div>
    </div>
    <div className='my-email'>
        <div className={darkMode ? 'line1 dark-line': 'line1'}></div>
        <a className={darkMode ? 'email-link dark-link' : 'email-link'} href="mailto:nouhadalhallab122@gmail.com" target="_blank" rel="noopener noreferrer">
        <h3 className={darkMode ? 'email dark-email':'email' }>nouhadalhallab122@gmail.com</h3>
        </a>
        <div className={darkMode ? 'line2 dark-line': 'line2'}></div>
    </div>
      
    </>
  )
}

export default ContactInfos
