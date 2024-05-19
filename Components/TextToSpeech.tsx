import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

interface TextToSpeechProps {
  text: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [pitch, setPitch] = useState(1); // Default pitch
  const [rate, setRate] = useState(1); // Default rate
  const [highlightedText, setHighlightedText] = useState<string>(text);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchVoices = () => {
      const synth = window.speechSynthesis;
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      setSelectedVoice(availableVoices[0]); // Set the first available voice as default
    };

    window.speechSynthesis.onvoiceschanged = fetchVoices;
    fetchVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const toggleSpeech = () => {
    if (isPlaying) {
      pauseSpeech();
    } else {
      if (utterance) {
        resumeSpeech();
      } else {
        speakText();
      }
    }
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.voice = selectedVoice;
      newUtterance.pitch = pitch;
      newUtterance.rate = rate;

      newUtterance.onboundary = (event) => {
        if (event.name === 'word') {
          const charIndex = event.charIndex;
          setHighlightedText(
            text.slice(0, charIndex) + '<mark>' + text.slice(charIndex, charIndex + event.charLength) + '</mark>' + text.slice(charIndex + event.charLength)
          );
        }
      };

      newUtterance.onend = () => setIsPlaying(false); // Reset isPlaying when speech ends
      setUtterance(newUtterance);
      synth.speak(newUtterance);
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

  const stopSpeech = () => {
    if (utterance) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setUtterance(null);
    }
  };

  const handleVoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const voiceURI = event.target.value;
    const selectedVoice = voices.find(voice => voice.voiceURI === voiceURI);
    setSelectedVoice(selectedVoice || null);
  };

  const handlePitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRate(parseFloat(event.target.value));
  };

  const rewindSpeech = () => {
    stopSpeech();
    const currentText = text.slice(0, Math.max(0, text.length - 20)); // Rewind by a fixed number of characters
    speakText();
  };

  const fastForwardSpeech = () => {
    stopSpeech();
    const currentText = text.slice(Math.min(text.length, 20)); // Fast forward by a fixed number of characters
    speakText();
  };

  return (
    <div>
      <button onClick={toggleSpeech}>
        {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>
      <button onClick={rewindSpeech}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button onClick={fastForwardSpeech}>
        <FontAwesomeIcon icon={faForward} />
      </button>
      <select onChange={handleVoiceChange} value={selectedVoice?.voiceURI || ''}>
        {voices.map(voice => (
          <option key={voice.voiceURI} value={voice.voiceURI}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
      <div>
        <label>
          Pitch: 
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={handlePitchChange}
          />
          {pitch}
        </label>
      </div>
      <div>
        <label>
          Rate: 
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={handleRateChange}
          />
          {rate}
        </label>
      </div>
      <div
        ref={textRef}
        dangerouslySetInnerHTML={{ __html: highlightedText }}
        style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}
      />
    </div>
  );
};

export default TextToSpeech;
