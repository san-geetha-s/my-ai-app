import React, { useState, ChangeEvent } from 'react';
import TextToSpeech from './TextToSpeech';

const SpeechBox: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    console.log('Updated text:', e.target.value); // Log the updated text
  };

  return (
    <div className="w-500 h-500 border-2 border-gray-300 p-4">
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={50}
      />
      <div className="flex justify-center items-center h-full">
        <TextToSpeech text={text} />
      </div>
    </div>
  );
};

export default SpeechBox;
