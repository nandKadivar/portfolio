import React, { useEffect, useState } from 'react';
import './App.css';

import LandingSection from './sections/LandingSectionV2';
import SecondSection from './sections/SecondSection';

function App() {
  const [sectionBg, setSectionBg] = useState('white');
  const [sectionColor, setSectionColor] = useState('gray-bg')
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        // setSectionBg('dark-bg');
        // setSectionColor('white');
      } else {
        setSectionBg('white');
        // setSectionColor('gray-bg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <LandingSection bg={sectionBg} color='bucketColor2' />
      <SecondSection />
    </div>
  );
}

export default App;
