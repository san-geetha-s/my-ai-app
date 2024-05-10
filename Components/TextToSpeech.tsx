// TextToSpeech.tsx
import React, { useState } from 'react';

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const newUtterance = new SpeechSynthesisUtterance(text);
      setUtterance(newUtterance);
      window.speechSynthesis.speak(newUtterance);
      setIsPlaying(true);
    } else {
      console.error('Speech synthesis not supported.');
    }
  };

  const pauseSpeech = () => {
    if (utterance) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    }
  };

  const resumeSpeech = () => {
    if (utterance) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
    }
  };

  const downloadSpeech = () => {
    if (utterance) {
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'speech.txt';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <button onClick={isPlaying ? pauseSpeech : speakText}>{isPlaying ? 'Pause' : 'Speak'}</button>
      <button onClick={resumeSpeech} disabled={!isPlaying}>Resume</button>
      <button onClick={downloadSpeech}>Download</button>
    </div>
  );
};

export default TextToSpeech;
