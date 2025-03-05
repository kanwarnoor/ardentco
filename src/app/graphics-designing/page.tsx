"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";
import Options from "../components/ui/Options";

export default function Page() {
  const content = [
    {
      title: "Brand Identity & Visual Design",
      description:
        "We craft distinct brand identities through compelling logos, cohesive color palettes, and typography that reflect your brand’s essence. Our team ensures consistency across all platforms with well-defined brand guidelines, creating a strong and memorable visual presence that resonates with your audience.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="duration-300 fill-white  cursor-pointer"
        >
          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
          <path
            fillRule="evenodd"
            d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Marketing & Social Media Graphics",
      description:
        "From engaging social media creatives to performance-driven ad designs, we develop visuals that capture attention and enhance brand storytelling. Our designs are strategically crafted to align with marketing objectives, ensuring higher engagement, brand recall, and conversion rates across digital platforms.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="duration-300 cursor-pointer stroke-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      ),
    },
    {
      title: "Corporate & Editorial Design",
      description:
        "We design professional brochures, pitch decks, reports, and presentations that simplify complex ideas and elevate corporate communication. Blending creativity with clarity, our editorial layouts and infographics enhance readability, ensuring your brand’s message is presented with impact and professionalism.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="  duration-300  cursor-pointer fill-white "
        >
          <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
        </svg>
      ),
    },
  ];

  const { ref: ref, inView: refInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (refInView) {
      setIntersecting(false);
    } else {
      setIntersecting(false);
    }
    // console.log("Home: " + enableInView);

    // console.log("enable: " + enableInView);
  }, [refInView]);
  return (
    <>
      <Navbar left={intersecting} right={intersecting} />
      <Lander
        image="/banner/graphics.png"
        heading1="Graphics"
        heading2="Designing"
        css="text-white"
      />

      <section
        className="relative bg-neutral-950 bg-dot-black/[0.5] w-full h-auto min-h-screen"
        id="more"
        ref={ref}
      >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)] z-0"></div> */}

        <div className="relative m-auto flex flex-col w-full h-auto z-10 justify-center items-center min-h-screen gap-5">
          <div className="flex flex-wrap justify-center w-full h-fit text-center  gap-5 mx-auto text-white">
            <motion.div
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
              className=" flex flex-col m-auto mt-20 justify-center items-center"
            >
              <p className="md:text-5xl text-2xl font-black px-20 pb-10 text-center">
                Graphics Designing
              </p>
              <p className="md:px-32 px-20 md:text-2xl text-base text-center opac">
                laurem ipsum dolor sit amet, consectetur adipiscing elit. In
                ultricies, nunc in euismod malesuada, magna purus maximus
                lectus, nec facilisis eros libero ut nulla.
              </p>
            </motion.div>
            <div className="w-1/3 h-1 bg-white/20 rounded-full my-10"></div>
            <Options content={content} />
            <div className="mb-20"></div>
          </div>
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
