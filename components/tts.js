import React from 'react';
import { useEffect, useState } from "react";

function Tts() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const utterance = new SpeechSynthesisUtterance("je suis content");

  useEffect(() => {
    // if (
    //   typeof window !== "undefined" &&
    //   typeof window.SpeechSynthesisUtterance !== "undefined"
    // ) {
    //   const voicesList = window.speechSynthesis.getVoices();
    //   setVoices(voicesList);
    //   setSelectedVoice(voicesList[5]);

    //   // const utterance = new SpeechSynthesisUtterance("je suis content");
    //   window.speechSynthesis.speak(utterance);
    // }

    // Re-fetch voices list when it changes
    const voicesChanged = () => {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
      if (voicesList.length > 0 && !selectedVoice) {
        setSelectedVoice(voicesList[12]); // Set the first voice if none selected
      }
    };

    window.speechSynthesis.addEventListener("voiceschanged", voicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        voicesChanged
      );
    };
  }, [selectedVoice]);

  const speak = () => {
    if (selectedVoice) {
      // const utterance = new SpeechSynthesisUtterance();
      // const utterance = new SpeechSynthesisUtterance("Hello, this is a test!");
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <h1>Select a Voice:</h1>
      <select onChange={(e) => setSelectedVoice(voices[e.target.value])}>
        {voices.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
      <button onClick={speak()}>Speak</button>


      <h1>React Text to Speech App </h1>
      <ul>
        {voices.map((voice, index) => (
          <li key={index}>
            {/* Render the name and language of the voice */}
            {voice.name} ({voice.lang})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tts;
