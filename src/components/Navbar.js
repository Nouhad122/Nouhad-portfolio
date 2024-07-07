import React,{ useState, useEffect} from 'react';
import "./Navbar.css";
import logo from "../../src/assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

const Navbar = ({darkMode, setDarkMode}) => {
  const [opened, setOpened] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setOpened(false);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleNavChange = () => {
      window.scrollY > 1 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleNavChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleNavChange);
    };
  }, []);

  const openMenuList = () =>{
    setOpened(true);
    document.body.style.overflow = "hidden";
  }
  const closeMenuList = () =>{
    setOpened(false);
    document.body.style.overflow = "auto";
  }

  
  return (
    <>
    <nav className={`${scrolled ? `${darkMode ? 'navbar dark-navbar blur dark-blur' : 'navbar blur '}`  : `${darkMode ? 'navbar dark-navbar transparent' : 'navbar transparent '}`}`}>
        <FontAwesomeIcon onClick={openMenuList} icon={faBars} className='menu-bar'/>
        <img className='logo' src={logo} alt='logo'/>
        <ul className={`${opened ? `${darkMode ? 'menu-list opened-menu-list dark-list' :'menu-list opened-menu-list'}` : 'menu-list'}`}>
        <FontAwesomeIcon onClick={closeMenuList} icon={faXmark} className='x-mark'/>
          <li><Link className={`${darkMode ?'menu-link dark-menu-link' : 'menu-link'}`} activeClass={`${darkMode ? 'dark-active' : 'active'}`} to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenuList}>Home</Link></li>
          <li><Link className={`${darkMode ?'menu-link dark-menu-link' : 'menu-link'}`} activeClass={`${darkMode ? 'dark-active' : 'active'}`} to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenuList}>About</Link></li>
          <li><Link className={`${darkMode ?'menu-link dark-menu-link' : 'menu-link'}`} activeClass={`${darkMode ? 'dark-active' : 'active'}`} to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenuList}>Skills</Link></li>
          <li><Link className={`${darkMode ?'menu-link dark-menu-link' : 'menu-link'}`} activeClass={`${darkMode ? 'dark-active' : 'active'}`} to='projects' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenuList}>Projects</Link></li>
          <li><a className={`${darkMode ?'menu-link dark-menu-link' : 'menu-link'}`} href='\my-transcript.pdf' target="_blank" rel="noopener noreferrer">Transcript</a></li>
        </ul>
        <div onClick={() => setDarkMode(!darkMode)} className={`${darkMode ? 'toggleMode dark-toggle' : 'toggleMode'}`}>
          <div className={`${darkMode ? 'circle circle-dark-mode' : 'circle'}`}></div>
        </div>
           
    </nav>
    </>
  )
}

export default Navbar
