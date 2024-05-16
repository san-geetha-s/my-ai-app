import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  const toggleSpeech = async () => {
    if (isPlaying) {
      pauseSpeech();
    } else {
      if (utterance) {
        resumeSpeech();
      } else {
        await speakText();
      }
    }
  };

  const speakText = async () => {
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

  const convertToSpeech = async () => {
    // Add your logic here to handle text-to-speech conversion
    // For example, you can use a text-to-speech API or library
  };

  return (
    <div>
      <button onClick={toggleSpeech}>
        {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>
      {/* <button onClick={downloadSpeech}>
        <FontAwesomeIcon icon={faDownload} />
      </button> */}
     
    </div>
     <button onClick={convertToSpeech}>play/pause</button>
  );
};

export default TextToSpeech;
