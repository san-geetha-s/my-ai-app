// components/TextToSpeech.tsx
import React from 'react';

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported.');
    }
  };

  return (
    <div>
      <button onClick={speakText}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
