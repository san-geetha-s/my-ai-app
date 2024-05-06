// pages/index.js
 'use client'
import React, { useState } from 'react';
import TextInput from '@/Components/TextInput';

const Home = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Text-to-Speech App</h1>
      <TextInput value={text} onChange={handleTextChange} />
      {/* Add other components and functionality here */}
    </div>
  );
};

export default Home;
