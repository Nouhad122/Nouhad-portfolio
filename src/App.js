import React, { useState } from 'react';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactInfos from './components/ContactInfos';
import './style.css';
import Footer from './components/Footer';

function App() {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? 'App dark-mode' : 'App light-mode'}`}>
      <Navbar darkMode = {darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode = {darkMode}/>
      <About darkMode = {darkMode}/>
      <Skills darkMode = {darkMode}/>
      <Projects darkMode = {darkMode}/>
      <ContactInfos darkMode = {darkMode}/>
      <Footer darkMode = {darkMode}/>
    </div>
  );
}

export default App;
