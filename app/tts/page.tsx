'use client'

import { useEffect, useState } from 'react';
import TextToSpeech from './TextToSpeech'
import { contents } from './contents';


const Page = () => {
const [text, setText] = useState("");

// useEffect(()=>{
//     if ('speechSynthesis' in window) {
//         alert("Speech synthesis is supported")
//       } else {
//         alert('Speech synthesis not supported on this device/browser.');
//       }
      
// },[])


// useEffect(() => {
//     // This code will only run in the browser
//     const speakButton = document.getElementById('speakButton');

//     const handleClick = () => {
//       const utterance = new SpeechSynthesisUtterance('Hello, this is a test.');
//       window.speechSynthesis.speak(utterance);
//     };

//     if (speakButton) {
//       speakButton.addEventListener('click', handleClick);
//     }

//     // Cleanup function to remove the event listener when the component unmounts
//     return () => {
//       if (speakButton) {
//         speakButton.removeEventListener('click', handleClick);
//       }
//     };
//   }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <>
    {/* <div>
      <button id="speakButton">Speak</button>
      <br />
      <br />
      <br />
    </div> */}
    <TextToSpeech text={contents} />
    </>
  )
}

export default Page