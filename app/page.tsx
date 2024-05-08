// pages/index.js
'use client'
import React, { useState } from 'react';
import TextInput from '@/Components/TextInput';
import SpeechBox from '@/Components/SpeechBox';
import Layout from '@/Components/Layout';
const Home = () => {
  const [text, setText] = useState('');

  return (
    <Layout>
      <div>
      
      <h1>Text-to-Speech App</h1>
      <TextInput value={text} onChange={setText} />
      <SpeechBox /> 
    </div>
    </Layout>
    
  );
};

export default Home;
