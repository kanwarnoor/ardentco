"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Navbar intersecting={false} />
      <section
        id="home"
        className="relative w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-opacity-100 "
      >
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
          className="relative object-cover inset-0 w-full h-full scale-90 rounded-2xl opacity-100 bg-black bg-grid-white/[0.2]"
        ></motion.div>

        <div className="absolute">
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="md:text-7xl text-5xl font-black text-black"
          ></motion.span>
          <br />
        </div>
      </section>
    </>
  );
}
