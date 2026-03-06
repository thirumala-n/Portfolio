import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Education/>
      <Certificates />
      <Contact />
      <Footer/>
      
      
    </div>
  );
}

export default App;