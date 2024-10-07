'use client'

import { useState } from 'react';
import TextToSpeech from './TextToSpeech'
import { contents } from './contents';


const Page = () => {
const [text, setText] = useState("");

  return (
    <TextToSpeech text={contents} />
  )
}

export default Page