"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import Navbar from "./components/ui/Navbar";
import About from "./components/ui/about";
import Footer from "./components/ui/Footer";
import Counter from "./components/ui/Counter";
import Enable from "./components/ui/Enable";

export default function Home() {

  const avail: string[] = [
    "Rewiring",
    "Transforming",
    "Rewriting",
    "Modernizing",
    "Elevating",
  ];
  return (
    <>
      <Counter />
      <Navbar />
      <section
        id="home"
        className="w-full h-screen m-auto text-center flex flex-col justify-center items-center  bg-opacity-100 bg-white"
      >
       
          <motion.video
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
            src="/kabootar.mp4"
            autoPlay
            loop
            muted
            className="absolute object-cover inset-0 w-full h-full scale-90 rounded-none opacity-80"
          >
            Your browser does not support the video tag.
          </motion.video>
        <div className="absolute">
          <FlipWords
            words={avail}
            duration={3000}
            className="text-9xl font-bold text-center"
          />
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="text-7xl font-bold text-black"
          >
            Status Quo
          </motion.p>
          <br />
          <motion.div
            className="w-fit flex mx-auto absolute justify-center text-center left-0 right-0"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 1,
              transition: { duration: 0.1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }}
          >
            <Link
              href=""
              className="text-xl border-2 font-bold  border-black px-5 py-2 rounded-full"
            >
              Book a call
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white w-full h-screen" id="about">
        <About />
      </section>

      <section className="bg-white flex w-full h-screen" id="enable">
        <Enable />
      </section>
      <Footer theme="dark" />
    </>
  );
}
