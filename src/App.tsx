import React from 'react';
import logo from './logo.svg';
import './App.css';
import terminalSVG from './terminal.svg';
import nameTag from './name-tag.svg';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className="App">
      <section className='flex flex-col items-start bg-dark-bg h-screen p-5'>
        {/* Upper */}
        <div className='container w-2/3 flex items-center p-2 basis-1/4 text-8xl font-type1 text-color1'>
          Web Developer
        </div>
        {/* Middler */}
        <div className='container flex p-2 basis-1/2'>
          {/* <img className='w-2/3' src={terminalSVG} alt="Terminal" /> */}
          <Terminal />
        </div>
        {/* Lower */}
        <div className='container flex justify-end items-end p-2 basis-1/4 text-8xl  font-type1 text-color1'>
          {/* <img className='h-[6rem]' src={nameTag} alt="Terminal" /> */}
        </div>
      </section>
      <section className='flex flex-col items-start bg-light-bg h-screen p-5'>
       
      </section>
    </div>
  );
}

export default App;
