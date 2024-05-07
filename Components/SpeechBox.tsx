// SpeechBox.js
import React from 'react';

interface SpeechBoxProps {
    speech: string; 
}

const SpeechBox: React.FC<SpeechBoxProps> = ({ speech }) => {
  return (
    <div>
      <div>{speech}</div>
      <button>Play</button>
      <button>Pause</button>
      <button>Download</button>
    </div>
  );
};

export default SpeechBox;
