// src/App.jsx (수정)

import './App.css'; 
import React from 'react'; 
import IntroSection from './components/IntroSection/IntroSection';
import PhilosophySection from './components/PhilosophySection/PhilosophySection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactSection from './components/ContactSection/ContactSection';

function App() {
  return (
    <div className="page-container">
      <IntroSection />
      <PhilosophySection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;