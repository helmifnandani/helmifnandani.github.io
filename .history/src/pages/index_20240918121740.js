import Clouds from "../components/effects/Clouds";
import Stars from "../components/effects/Stars";
import Waves from "../components/effects/Waves";
import Right from "../components/right/Right";
import Moon from "../components/effects/Moon";
import Left from "../components/left/Left";
import { useState } from "react";
import Head from "next/head";

import logo from "/public/logo.png";

const Home = () => {
  const [section, setSection] = useState("work");

  return (
    <div id="homescreen" className="relative">
      <Head>
        <title>Hey, I&apos;m Helmi Febri Nandani.</title>
        <meta name="description" content="Helmi Febri Nandani" />
        <link rel="icon" href={logo.src} />
      </Head>
      <Moon />
      <Clouds />
      <Stars />
      <Waves />
      <div className="w-full h-full relative p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
        <Left section={section} />
        <Right setSection={setSection} />
      </div>
    </div>
  );
};

export default Home;
