'use client'

import React, { useState } from 'react';
import backgroundImage from "@/public/_8dd0afd8-2670-4280-85a1-2ce45a2d6669.jpeg"
import SpeechBox from '@/Components/SpeechBox';

// Import FontAwesome icon components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [text, setText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container mx-auto px-4 ${darkMode ? 'dark' : 'light'}`}>
      <div className="flex justify-end mt-4">
        <button className="p-2 rounded-full" onClick={toggleDarkMode}>
          {darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
      </div>
      <h1 className="text-4xl font-bold mt-8 mb-4">Text-to-Speech App</h1>
      <SpeechBox />
      <style jsx global>{`
        body {
          background-color: ${darkMode ? 'black' : '#fff'};
          color: ${darkMode ? '#fff' : '#222'};
        }
        // Add more global styles here
      `}</style>
    </div>
  );
};

export default Home;
