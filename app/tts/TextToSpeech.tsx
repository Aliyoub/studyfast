import { useState, useEffect } from "react";

interface LayoutProps {
  text: string;
}
const TextToSpeech = ({ text }: LayoutProps) => {
  // const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    setUtterance(u);
    setVoice(voices[0]);
    // =====
    const speakButton = document.getElementById("speakButton");

    const handlePlay = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);

      const synth = window.speechSynthesis;

      if (isPaused) {
        synth.resume();
      } else {
        utterance ? (utterance.voice = voice) : null;
        utterance ? (utterance.pitch = pitch) : null;
        utterance ? (utterance.rate = rate) : null;
        utterance ? (utterance.volume = volume) : null;
        utterance ? synth.speak(utterance) : null;
      }

      setIsPaused(false);
    };

    if (speakButton) {
      speakButton.addEventListener("click", handlePlay);
    }

    //     return () => {
    //       if (speakButton) {
    //         speakButton.removeEventListener('click', handlePlay);
    //       }
    //     };
    // =====
    return () => {
      if (speakButton) {
        speakButton.removeEventListener("click", handlePlay);
      }
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const speakButton = document.getElementById("speakButton");

    if (speakButton) {
      speakButton.addEventListener("click", handlePlay);
    }

    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance ? (utterance.voice = voice) : null;
      utterance ? (utterance.pitch = pitch) : null;
      utterance ? (utterance.rate = rate) : null;
      utterance ? (utterance.volume = volume) : null;
      utterance ? synth.speak(utterance) : null;
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;

    synth.pause();

    setIsPaused(true);

    const speakButton = document.getElementById("speakButton");
    if (speakButton) {
      speakButton.removeEventListener("click", handlePlay);
    }
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;

    synth.cancel();
    setIsPaused(false);
  };

  const handleVoiceChange = (event: any) => {
    const voices = window.speechSynthesis.getVoices();

    // setVoice(
    //   typeof window !== "undefined" && window.speechSynthesis.getVoices()
    //     ? window.speechSynthesis.getVoices().find((v) => v.name === event.target.value)
    //     : null
    // );
    // setVoice(
    // voices
    //     ? voices.find((v) => v.name === event.target.value)
    //     : null
    // );
  };

  const handlePitchChange = (event: any) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event: any) => {
    setRate(parseFloat(event.target.value));
  };

  const handleVolumeChange = (event: any) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div>
      <label>
        Voice:
        <select value={voice?.name} onChange={handleVoiceChange}>
          {typeof window !== "undefined" && window.speechSynthesis
            ? window.speechSynthesis.getVoices().map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name}
                </option>
              ))
            : null}
        </select>
      </label>

      <br />
      <br />
      <br />

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
      </label>

      <br />
      <br />
      <br />

      <label>
        Speed:
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={handleRateChange}
        />
      </label>
      <br />
      <br />
      <br />
      <label>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>

      <br />
      <br />
      <br />

      <button
        style={{
          marginRight: 20,
          border: "1px solid #EEE,",
          padding: "10px 25px 10px 25px",
        }}
        onClick={handlePlay}
        id={"speakButton"}
      >
        Play
        {/* {isPaused ? "Resume" : "Play"} */}
      </button>
      <button
        style={{
          marginRight: 20,
          border: "1px solid #EEE,",
          padding: "10px 25px 10px 25px",
        }}
        onClick={handlePause}
      >
        Pause
      </button>
      <button
        style={{
          marginRight: 20,
          border: "1px solid #EEE,",
          padding: "10px 25px 10px 25px",
        }}
        onClick={handleStop}
      >
        Stop
      </button>
    </div>
  );
};

export default TextToSpeech;
