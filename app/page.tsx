// pages/index.js
'use client'
import React, { useState } from 'react';
import backgroundImage from "@/public/_8dd0afd8-2670-4280-85a1-2ce45a2d6669.jpeg"
import SpeechBox from '@/Components/SpeechBox';

const Home = () => {
  const [text, setText] = useState('');

  return (
    
    <div className="container mx-auto px-4" style={{ backgroundImage: `url(${backgroundImage})` }}> 
        <h1 className="text-4xl font-bold mt-8 mb-4">Text-to-Speech App</h1>
        
        <SpeechBox /> {/* Include the SpeechBox component */}
      </div>
   
    
  );
};

export default Home;
