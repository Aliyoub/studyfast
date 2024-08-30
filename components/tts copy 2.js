import React from "react";
import { useEffect, useState } from "react";

function Tts() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(
    voices.find((voice) => voice.name === "Google US English")
  );
  const [volume, setVolume] = useState(0.2);
  // const [volume, setVolume] = useState(1.0);
  // const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleSelectChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.SpeechSynthesisUtterance !== "undefined"
    ) {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
    }

    // Re-fetch voices list when it changes
    const voicesChanged = () => {
      // const voicesList = window.speechSynthesis.getVoices();
      // setVoices(voicesList);
      if (voices.length > 0 && !selectedVoice) {
        setSelectedVoice(voices); // Set the first voice if none selected
      }
    };

    window.speechSynthesis.addEventListener("voiceschanged", voicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        voicesChanged
      );
    };
  });

  // Re-fetch voices list when it changes
  // const voicesChanged = () => {
  //   const voicesList = window.speechSynthesis.getVoices();
  //   setVoices(voicesList);
  //   if (voicesList.length > 0 && !selectedVoice) {
  //     setSelectedVoice(voicesList); // Set the first voice if none selected
  //   }
  // };

  const speak = () => {
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance();
      // const utterance = new SpeechSynthesisUtterance("Hello, this is a test!");
      utterance.voice = selectedVoice;
      utterance.volume = volume;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <h1>Selectionnez une voix:</h1> */}
      {/* <select  onChange={(e) => setSelectedVoice(voices[e.target.value])}>
        {voices.map((voice, index) => (
          <option key={index} value={index}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select> */}

      <div>
        <label htmlFor="options">Selectionnez une voix:</label>
        <select
          id="options"
          value={selectedVoice}
          onChange={handleSelectChange}
        >
          {voices.map((voice, index) => (
            <option value={index}>
              {/* <option key={index} value={index}> */}
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
        <p>You selected: {selectedVoice}</p>
      </div>

      <button style={{ marginTop: 22 }} onClick={speak()}>
        Ecouter
      </button>
    </div>
  );
}

export default Tts;
