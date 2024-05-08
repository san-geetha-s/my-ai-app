// components/SpeechBox.tsx
import React, { useState } from 'react';
import TextToSpeech from './TextToSpeech'; // Assuming TextToSpeech component is in TextToSpeech.tsx

const SpeechBox = () => {
  const [text, setText] = useState('');

  return (
    <div className="w-500 h-500 border-2 border-gray-300 p-4">
     
      <div className="flex justify-center items-center h-full">
        <TextToSpeech text={text} /> {/* Pass the 'text' prop to the TextToSpeech component */}
      </div>
    </div>
  );
};

export default SpeechBox;
