import './App.css';
import React, { useEffect, useState } from 'react';
import translations from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar language={language} setLanguage={setLanguage} translations={translations[language]} />
      <Hero translations={translations[language]} />
      <About translations={translations[language]} />
      <Projects translations={translations[language]} />
      <Contact translations={translations[language]} />
      <Footer translations={translations[language]} />
      <BackToTop translations={translations[language]} />
    </div>
  );
}

export default App;
