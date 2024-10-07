'use client'

import { useEffect, useState } from 'react';
import TextToSpeech from './TextToSpeech'
import { contents } from './contents';


const Page = () => {
const [text, setText] = useState("");

useEffect(()=>{
    if ('speechSynthesis' in window) {
        alert("Speech synthesis is supported")
      } else {
        alert('Speech synthesis not supported on this device/browser.');
      }
      
},[])

  return (
    <TextToSpeech text={contents} />
  )
}

export default Page