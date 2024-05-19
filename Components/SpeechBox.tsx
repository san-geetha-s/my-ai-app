// components/SpeechBox.tsx
import React from 'react';
import TextToSpeech from './TextToSpeech';

const SpeechBox: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="w-500 h-500 border-2 border-gray-300 p-4 mt-4">
      <h2 className="mb-4 text-center">Speech Output</h2>
      <div className="flex justify-center items-center h-full">
        <TextToSpeech text={text} />
      </div>
    </div>
  );
};

export default SpeechBox;
