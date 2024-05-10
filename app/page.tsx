// pages/index.js
'use client'
import React, { useState } from 'react';

import SpeechBox from '@/Components/SpeechBox';

const Home = () => {
  const [text, setText] = useState('');

  return (
    
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-8 mb-4">Text-to-Speech App</h1>
        
        <SpeechBox /> {/* Include the SpeechBox component */}
      </div>
   
    
  );
};

export default Home;
