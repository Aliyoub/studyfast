import React from "react";
import { useEffect, useState } from "react";
import { texts } from "@/Texts";
function Tts() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(voices.find(voice => voice.name === 'Google US English'));
  const [volume, setVolume] = useState(0.2);

  // const handleSelectChange = (event) => {
  //   setSelectedVoice(event.target.value);
  // };

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleVoiceChange = (e) => {
    const voiceIndex = e.target.value;
    setSelectedVoice(voices[voiceIndex]);
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(texts);

    // Set the voice if it's selected and valid
    if (selectedVoice) {
      // setSelectedVoice(utterance.voice)
      // utterance.voice = selectedVoice;
      utterance.voice = selectedVoice;
  
      // Set the volume
      utterance.volume = volume;
    }

    // Speak the text
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <select onChange={handleVoiceChange}>
        <option value="">Select a voice</option>
        {voices.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
<div style={{marginTop:55}}>Ajuter le volume</div>
      <input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
      <button style={{marginTop: 55}} onClick={speak}>Ecouter</button>
    </div>
  );
}

export default Tts;
