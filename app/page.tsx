// pages/index.tsx
'use client';
import React, { useState } from 'react';
import TextInput from '@/Components/TextInput';
import SpeechBox from '@/Components/SpeechBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [text, setText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', !isDarkMode);
      document.documentElement.classList.toggle('light', isDarkMode);
    }
  };

  return (
    <div className={`container mx-auto px-4 ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="flex justify-between items-center mt-8 mb-4">
        <h1 className="text-4xl font-bold text-center mx-auto">Text-to-Speech App</h1>
        <div className="ml-auto">
          <button onClick={toggleTheme} className="focus:outline-none">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="2x" />
          </button>
        </div>
      </div>
      <TextInput value={text} onChange={setText} />
      <SpeechBox text={text} />
    </div>
  );
};

export default Home;
