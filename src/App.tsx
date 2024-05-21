import React, { useEffect, useState } from 'react';
import './App.css';

import LandingSection from './sections/LandingSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';

function App() {

  return (
    <div className="App">
      <LandingSection bg='white' color='bucketColor2' />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
