"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";

export default function Page() {
  const { ref: ref, inView: refInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (refInView) {
      setIntersecting(true);
    } else {
      setIntersecting(false);
    }
  }, [refInView]);
  return (
    <>
      <Navbar left={intersecting} right={intersecting} />
      <Lander
        image="/banner/digitalComms.png"
        heading1="Digital"
        heading2="Communications"
        css="text-white"
      />

      <section
        className="relative bg-white bg-dot-black/[0.5] w-full h-auto min-h-screen"
        id="more"
        ref={ref}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)] z-0"></div>

        <div className="relative m-auto flex flex-col w-full h-auto py-20 z-10 justify-center items-center min-h-screen gap-5">
          <div className="flex flex-wrap justify-center w-full h-fit text-center gap-5 mx-auto ">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col w-[400px] h-[400px] border-2 border-black border-dashed rounded-2xl items-center"
            >
              <div className="flex flex-col h-fit m-auto justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Platform Comms & <br /> Strategies
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  At Ardent Co, we understand the significance of digital
                  platforms in today’s information consumption landscape. Our
                  Strategic Digital Communications service helps organizations
                  navigate this vast digital world and leverage the ecosystem
                  for achieving audience-appreciation on communication goals. We
                  tailor innovative strategies that amplify engagement, ensuring
                  a consistent and impactful digital presence across multiple
                  channels.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col w-[400px] h-[400px] border-2 border-black border-dashed rounded-2xl  items-center"
            >
              <div className="flex flex-col h-fit  m-auto justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                  />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Creative Design & <br /> Development
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  Ardent Co specializes in Creative Design and Development,
                  empowering organizations to define and drive their unique
                  creative identity.Our team assists in designing compelling
                  content collaterals across various formats, including
                  brochures, leaflets, posters, packaging, and more. We leverage
                  our professional expertise to create visually captivating
                  materials that align with your brand and resonate with your
                  target audience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
