"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import { FlipWords } from "../components/ui/flip-words";
import Footer from "../components/ui/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const messages = [
    {
      message:
        "To our people, who work, trust and dare on this journey with us.",
      who: "Team",
    },
    {
      message:
        "To the brands, institutions and leaders who are with us on this journey.",
      who: "Partners",
    },
    {
      message: "To the industry, nation, and the world we live in.",
      who: "Ecosystem",
    },
  ];
  return (
    <>
      <Navbar left={false} right={false} />
      <motion.div
        initial={{
          scale: 0.8,
          borderRadius: "1rem",
        }}
        animate={{
          scale: 1,
          borderRadius: "0px",
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative w-full h-screen bg-black bg-grid-white/[0.2] text-center"
      >
        {/* Title */}
        <div className="absolute md:top-20 top-32 left-1/2 -translate-x-1/2 w-fit">
        <p className="text-3xl md:text-6xl font-black text-black bg-ardentLighter px-4 py-2">
          THE IDEOLOGY
        </p>
        </div>

        {/* Dynamic Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-1/3 h-[200px] max-w-full">
          <span className="flex text-2xl md:text-4xl font-black text-white rounded italic mb-5">
            <FlipWords
              words={messages.map((item) => item.who)}
              duration={5000}
            />{" "}
            :
          </span>
          <span className="flex text-2xl md:text-4xl font-bold text-white rounded text-center justify-center">
            <FlipWords
              words={messages.map((item) => item.message)}
              duration={5000}
            />
          </span>
        </div>

        {/* Description */}
        <p className="md:block hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neutral-300 text-xs md:text-base font-medium w-[80%]">
          Ardent Co. will always be a sandbox for inspired, driven
          professionals. <br />Ardent Co. will never limit itself by any notions and
          perceptions. <br /> Ardent Co. will encourage both thinkers and doers, and
          serve as an ecosystem for unleashing untapped potential.
        </p>
        <p className="md:hidden block absolute bottom-32 left-1/2 transform -translate-x-1/2 text-neutral-300 text-[12px] md:text-base font-medium w-[80%]">
          Ardent Co. will always be a sandbox for inspired, driven
          professionals. Ardent Co. will never limit itself by any notions and
          perceptions. Ardent Co. will encourage both thinkers and doers, and
          serve as an ecosystem for unleashing untapped potential.
        </p>
      </motion.div>

      <Footer theme="dark" />
    </>
  );
}
