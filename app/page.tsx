"use client"
import React, { useEffect, useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto, Montserrat } from "next/font/google";
import Tts from "@/components/tts";
import BackgroundImage from '../public/presta-events-images/decoration.jpg';
import TtsSettings from '@/components/settings/tts-settings';
import { usePathname } from 'next/navigation';
import { count } from 'console';
import ViewWithBorderRadius from '@/components/ViewWithBorderRadius/ViewWithBorderRadius';
// import { useRouter } from 'next/router';

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

const montserrat_bold = Montserrat({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {

  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
};
// const router = useRouter();
// const { asPath } = router;

  return (
    <main className={montserrat.className}>
      <ViewWithBorderRadius />

    {/* <main  style={backgroundStyle} className={montserrat.className}> */}
      <Tts />
      {/* <TtsSettings /> */}
    </main>
  );
}
