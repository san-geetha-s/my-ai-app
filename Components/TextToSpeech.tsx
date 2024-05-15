// TextToSpeech.tsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faDownload } from '@fortawesome/free-solid-svg-icons';

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

  


  const downloadSpeech = async () => {
    if (utterance) {
      try {
        // Send the text to the server for conversion
        const response = await fetch('/api/text-to-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
  
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'speech.mp3';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); // Clean up the temporary link element
  
        // Revoke the object URL after the download is complete
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error downloading speech:', error);
      }
    }
  };
  
  
  return (
    <div>
      <button onClick={toggleSpeech}>
        {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>
      <button onClick={downloadSpeech}>
        <FontAwesomeIcon icon={faDownload} />
      </button>
    </div>
  );
};

export default TextToSpeech;
