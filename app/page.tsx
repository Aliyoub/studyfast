import React from 'react'
// import Head from "next/head";
// import Image from "next/image";
import { Inter, Roboto, Montserrat } from "next/font/google";
// import Header from "../components/header";
import ViewWithBorderRadius from "@/components/ViewWithBorderRadius/ViewWithBorderRadius";
import BottomNavigation from "@/components/bottom-navigation/bottom-navigation";
import { isMobile } from 'react-device-detect';

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const montserrat_bold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

function Home() {
  return (
    <main className={montserrat.className}>
      <ViewWithBorderRadius />
      <BottomNavigation />

    <div>
      {isMobile ? (
        <h1>You are using a mobile device</h1>
      ) : (
        <h1>You are using a desktop device</h1>
      )}
    </div>

    </main>
  );
}

export default Home