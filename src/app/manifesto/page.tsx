"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import { FlipWords } from "../components/ui/flip-words";
import Footer from "../components/ui/Footer";
import { motion } from "framer-motion";
import Lander from "../components/ui/Lander";

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
      <Lander heading1={`Our Manifesto`} css="text-white" />
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
        className="flex flex-col w-full min-h-screen h-fit bg-black bg-grid-white/[0.2] text-center"
      >
        <div className="flex flex-col w-fit h-fit m-auto md:pt-32 md:pb-32 pt-16 pb-16 text-center justify-center items-center">
          <p className="text-3xl w-fit md:text-6xl m-auto font-black text-black bg-ardentLighter px-4 py-2">
            THE IDEOLOGY
          </p>

          <p className=" text-neutral-300  text-xs md:text-base font-medium w-[70%] mt-10">
            Ardent Co, in its shape today is a company. In its soul, it’s a
            vision. In its intentions it’s journeying to become an
            institution.In our experience of working in the fields of
            communications, public policy, research, and brand advisory, we
            developed aspirations of how the work, teams, and our role in the
            ecosystem should be.But aspirations are only dreams. Until, there is
            the madness (read: courage) to throw your hands in the sand, and
            depart from the safety of conventionality. That is what we did, and
            that is what we attract. In 2018, Ardent Co. was envisioned as an
            unnamed fictional entity. In the next three and a half years it was
            shaped into the idea of a company. In late 2022, it was born. As
            founders, to stay honest to the vision of Ardent Co, we have written
            this manifesto to engrave our commitments to our stakeholders, of
            what Ardent Co will always be.
          </p>

            <p className="flex text-3xl md:text-5xl w-fit text-white font-black mt-20 bg-ardent px-4 py-2">
              OUR MANIFESTO <br /> OF COMMITMENTS
            </p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="w-[70%] md:w-1/3 h-[200px] max-w-full mt-10"
          >
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
          </motion.div>
          {/* <Image src={"/signature.png"} height={100} width={100} alt={"signature"} ></Image> */}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] md:w-1/3 h-[200px] max-w-full"
      >
        <span className="flex text-2xl md:text-4xl font-black text-white rounded italic mb-5">
          <FlipWords words={messages.map((item) => item.who)} duration={5000} />{" "}
          :
        </span>
        <span className="flex text-2xl md:text-4xl font-bold text-white rounded text-center justify-center">
          <FlipWords
            words={messages.map((item) => item.message)}
            duration={5000}
          />
        </span>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
      >
        <p className="hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neutral-300 text-xs md:text-base font-medium w-[80%]">
          Ardent Co. will always be a sandbox for inspired, driven
          professionals. <br />
          Ardent Co. will never limit itself by any notions and perceptions.{" "}
          <br /> Ardent Co. will encourage both thinkers and doers, and serve as
          an ecosystem for unleashing untapped potential.
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
