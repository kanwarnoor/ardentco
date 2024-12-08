"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";
import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
// import Counter from "./components/ui/Counter";
import Enable from "./components/ui/Enable";
import Contact from "./components/ui/Contact";
import About from "./components/ui/TempAbout";
import Wake from "./components/ui/Wake";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import frontpage from "../../public/frontpage.jpg";
import Inactive from "./components/ui/Inactive";

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: [0.05, 0.5], // Fully visible
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: enableRef, inView: enableInView } = useInView({
    threshold: [0.05, 0.5], // Fully visible
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: [0.05, 0.5], // Fully visible
    rootMargin: "0px 0px -89% 0px",
  });

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  useEffect(() => {
    if (aboutInView) {
      setLeft(true);
      setRight(true);
    } else if (enableInView) {
      setLeft(false);
      setRight(true);
    } else if (contactInView) {
      setLeft(true);
      setRight(false);
    } else {
      setLeft(false);
      setRight(false);
    }
  }, [aboutInView, enableInView, contactInView]);

  const avail: string[] = [
    "Rewiring",
    "Transforming",
    "Rewriting",
    "Modernizing",
    "Elevating",
  ];
  return (
    <>
      {/* <Counter /> */}
      <div className="hidden md:block">
        <Wake />
      </div>
      <Inactive/>
      <Navbar left={left} right={right} />

      <section
        id="home"
        className="select-none relative w-full h-[100vh] m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-white"
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
            src={frontpage}
            height={0}
            width={0}
            placeholder="blur"
            sizes="100% 100%"
            className="absolute object-cover inset-0 w-full h-full scale-100 opacity-100"
            alt="athens"
            no-select="true"
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
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle,white_10%,transparent_50%)]"
        ></motion.div>
        <div className="absolute flex lg:flex-row flex-col">
          <FlipWords
            words={avail}
            duration={3000}
            className="md:text-9xl text-6xl text-white font-bold lg:text-left text-center  w-[800px] flex-wrap"
          />
          <div className="w-1 bg-white flex-wrap rounded-full">
            
          </div>
          <div className="lg:pl-10 flex-wrap">
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
              className="md:text-7xl text-4xl font-bold text-white mb-0 pb-0 w-full"
            >
              Status Quo
            </motion.p>
            <br />
            <motion.div
              className="w-fit md:flex mx-auto justify-center text-center left-0 right-0"
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
              <a
                href="#about"
                className="md:text-xl border-2 font-bold text-white bg-none border-white px-5 py-2 rounded-full"
              >
                Know more
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-white bg-dot-black/[0.5] w-full h-fit min-h-full"
        id="about"
        ref={aboutRef}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)]"></div>
        <About />
      </section>

      <section
        className="relative bg-white bg-dot-black/[0.5] flex w-full min-h-screen h-fit"
        id="services"
        ref={enableRef}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)]"></div>
        <Enable />
      </section>

      <section
        className="relative bg-white flex w-full min-h-screen h-fit"
        id="contact"
        ref={contactRef}
      >
        <Contact />
      </section>
      <Footer theme="dark" />
    </>
  );
}
