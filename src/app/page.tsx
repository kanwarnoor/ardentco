"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import About from "./components/ui/about";
import Footer from "./components/ui/Footer";
import Counter from "./components/ui/Counter";
import Enable from "./components/ui/Enable";
import Contact from "./components/ui/Contact";

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
        className="relative w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-white"
      >
        {/* <motion.video
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
          src="/street.mp4"
          autoPlay
          loop
          muted
          className="absolute object-cover inset-0 w-full h-full scale-90 rounded-none opacity-100"
        >
          Your browser does not support the video tag.
        </motion.video> */}
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
          className="relative object-cover inset-0 w-full h-full scale-90 rounded-2xl opacity-100"
        >
          <Image
            src="/Athens.jpeg"
            height={0}
            width={0}
            sizes="100% 100%"
            className="absolute object-cover inset-0 w-full h-full scale-100 opacity-100"
            alt="athens"
            no-select
          ></Image>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.7,
          }}
          transition={{
            duration: 2,
          }}
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_50%)]"
        ></motion.div>
        <div className="absolute">
          <FlipWords
            words={avail}
            duration={3000}
            className="text-9xl text-black font-bold text-center"
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
              href="#about"
              className="text-xl border-2 font-bold text-black border-black px-5 py-2 rounded-full"
            >
              Know more
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="relative bg-white bg-dot-black/[0.5] w-full h-screen "
        id="about"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)]"></div>
        <About />
      </section>

      <section
        className="relative bg-white bg-dot-black/[0.5] flex w-full h-screen"
        id="enable"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)]"></div>
        <Enable />
      </section>

      <section className="relative bg-white flex w-full h-screen" id="contact">
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)]"></div> */}
        <Contact />
      </section>
      <Footer theme="dark" />
    </>
  );
}
