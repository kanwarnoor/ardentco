"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import { FlipWords } from "../components/ui/flip-words";
import Footer from "../components/ui/Footer";
import { motion } from "framer-motion";
import Lander from "../components/ui/Lander";
import Image from "next/image";

export default function Home() {
  // const messages = [
  //   {
  //     message:
  //       "To our people, who work, trust and dare on this journey with us.",
  //     who: "Team",
  //   },
  //   {
  //     message:
  //       "To the brands, institutions and leaders who are with us on this journey.",
  //     who: "Partners",
  //   },
  //   {
  //     message: "To the industry, nation, and the world we live in.",
  //     who: "Ecosystem",
  //   },
  // ];
  const team = [
    {
      message:
        "To our people, who work, trust and dare on this journey with us.",
      who: "Team",
    },
    {
      message:
        "To our people, who work, trust and dare on this journey with us. ",
      who: "Team",
    },
  ];
  const partners = [
    {
      message:
        "To the brands, institutions and leaders who are with us on this journey.",
      who: "Partners",
    },
    {
      message:
        "To the brands, institutions and leaders who are with us on this journey. ",
      who: "Partners",
    },
  ];
  const ecosystems = [
    {
      message: "To the industry, nation, and the world we live in.",
      who: "Ecosystem",
    },
    {
      message: "To the industry, nation, and the world we live in. ",
      who: "Ecosystem",
    },
  ];
  return (
    <>
      <Navbar left={false} right={false} />
      <Lander heading1={`The makings of our DNA`} css="text-white" />
      <div
        id="more"
        className="flex flex-col w-full min-h-screen h-fit bg-black bg-grid-white/[0.2] text-center"
      >
        <div className="flex flex-col w-fit h-fit m-auto md:pt-32 md:pb-32 pt-16 pb-16 text-center justify-center items-center ">
          <motion.p
            initial={{
              opacity: 0,
              y: -50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-3xl w-fit md:text-6xl m-auto font-black text-white  px-4 py-2"
          >
            THE IDEOLOGY
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: -25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className=" text-neutral-300  text-xs md:text-base font-medium w-[70%] mt-10"
          >
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
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex text-3xl md:text-5xl w-fit text-white font-black mt-20 px-4 py-2"
          >
            OUR MANIFESTO <br /> OF COMMITMENTS
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className=" w-[70%] md:w-1/3 h-fit max-w-full mt-10"
          >
            <div className="flex text-2xl md:text-4xl font-black text-white rounded italic mb-5">
              <FlipWords words={team.map((item) => item.who)} duration={5000} />{" "}
              :
            </div>
            <div className="flex text-2xl md:text-4xl font-bold text-white rounded text-center justify-center">
              <FlipWords
                words={team.map((item) => item.message)}
                duration={5000}
              />
            </div>

            <div className="flex md:w-fit h-fit file text-white/80 md:text-sm text-xs mt-5 text-center justify-center">
              Ardent Co. will always be a sandbox for inspired, driven
              professionals <br />
              Ardent Co. will never limit itself by any notions and perceptions{" "}
              <br />
              Ardent Co. will encourage, both, thinkers, and doers, and serve as
              an ecosystem for unleashing inhibited potential
            </div>
            <hr className="mt-10 w-1/2 flex m-auto" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-[70%] md:w-1/3 h-fit max-w-full mt-10"
          >
            <div className="flex text-2xl md:text-4xl font-black text-white rounded italic mb-5">
              <FlipWords
                words={partners.map((item) => item.who)}
                duration={5000}
              />{" "}
              :
            </div>
            <div className="flex text-2xl md:text-4xl font-bold text-white rounded text-center justify-center">
              <FlipWords
                words={partners.map((item) => item.message)}
                duration={5000}
              />
            </div>

            <div className="flex md:w-fit h-fit file text-white/80 md:text-sm text-xs mt-5 text-center justify-center">
              Ardent Co. will always work as partners with you, harmonized with
              an in-depth appreciation of your goals, targets, and vision.{" "}
              <br />
              Ardent Co.’s strategy and work will always be intellectually
              sound, driven by our principles of research, coherence, and cogent
              interventions. <br />
              Ardent Co. will always maintain a solution-oriented mindset,
              regardless of the onerosity of the mandate
            </div>
            <hr className="mt-10 w-1/2 flex m-auto" />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className=" w-[70%] md:w-1/3 h-fit max-w-full mt-10"
          >
            <div className="flex text-2xl md:text-4xl font-black text-white rounded italic mb-5">
              <FlipWords
                words={ecosystems.map((item) => item.who)}
                duration={5000}
              />{" "}
              :
            </div>
            <div className="flex text-2xl md:text-4xl font-bold text-white rounded text-center justify-center">
              <FlipWords
                words={ecosystems.map((item) => item.message)}
                duration={5000}
              />
            </div>

            <div className="flex md:w-fit h-fit file text-white/80 md:text-sm text-xs mt-5 text-center justify-center">
              Ardent Co. will always strive towards developing fresh
              perspectives and novel approaches in all the verticals we operate
              in. <br />
              Ardent Co. will seek to support the nation’s growth and
              priorities, by leveraging its capacities and expertise for
              researching, developing, and recommending innovative solutions and
              interventions. <br />
              Ardent Co. will seek to positively contribute to the planet’s
              metamorphosis, standing at the cusp of a technological
              transformation, environmental transition, and societal evolution
            </div>
            <hr className="mt-10 w-1/2 flex m-auto" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-white md:w-1/2 w-[80%] mt-20 md:text-xl text-sm"
          >
            As founders, we are committed to the vision of creating a legacy,
            achieved in collaboration with a cohort of right individuals.In a
            world of billions of human beings, it takes a committed, driven, and
            resolute human to leave a mark. A mark which survives through
            generations.Inspired by the great artists, leaders, scientists who
            shaped the world we live in today, we are on a journey to incubate
            the touch of excellence in all of our work and actions.That is who
            we are. What we believe in, and what we will always attract.
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-10 flex flex-row"
          >
            <div className="md:w-[300px] md:h-[300px] w-[150px] h-[150px]">
              <Image
                src={"/sign2.png"}
                height={0}
                width={0}
                sizes="100% 100%"
                className="w-full h-full rounded-xl"
                alt={"signature"}
              ></Image>
            </div>
            <div className="md:ml-20 ml-10 md:w-[300px] md:h-[300px] w-[150px] h-[150px]">
              <Image
                src={"/sign1.png"}
                height={0}
                width={0}
                sizes="100% 100%"
                className="w-full h-full rounded-xl "
                alt={"signature"}
              ></Image>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer theme="dark" />
    </>
  );
}
