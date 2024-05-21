// pages/index.tsx
'use client';
import React, { useState } from 'react';
import TextInput from '@/Components/TextInput';
import ThemeToggle from '@/Components/ThemeToggle';
import SpeechBox from '@/Components/SpeechBox';
const Home = () => {
  const [text, setText] = useState('');

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mt-8 mb-4">
        <h1 className="text-4xl font-bold text-center mx-auto">Text-to-Speech App</h1>
        <div className="ml-auto">
         <ThemeToggle/>
        </div>
      </div>
      <TextInput value={text} onChange={setText} />
      <SpeechBox text={text} />
    </div>
  );
};

export default Home;
