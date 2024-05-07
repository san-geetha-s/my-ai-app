// pages/index.js
'use client'
import React, { useState } from 'react';
import TextInput from '@/Components/TextInput';
import TextToSpeech from '@/Components/TextToSpeech';

const Home = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>Text-to-Speech App</h1>
      <TextInput value={text} onChange={setText} />
      <TextToSpeech text={text} />
    </div>
  );
};

export default Home;
