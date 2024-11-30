"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import Lander from "../components/ui/Lander";
import Person from "../components/ui/Person";
import Footer from "../components/ui/Footer";
import { motion } from "framer-motion";

export default function page() {
  return (
    <>
      <Navbar left={true} right={true} />
      <Lander heading1={"Meet Our Team"}></Lander>
      <div className="w-full min-h-screen h-fit bg-white bg-dot-black justify-center items-center flex  m-auto">
        <div className="md:w-1/2 w-[90%] flex flex-col m-auto">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0,
            }}
            className="w-full  flex m-auto mb-5"
          >
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="w-full flex flex-row mb-5"
          >
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="hidden w-full md:flex md:flex-row"
          >
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="flex w-full flex-row md:hidden"
          >
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
            <Person name="Kanwarnoor" image="" role="Devloper" theme="dark" />
          </motion.div>
        </div>
      </div>
      <Footer theme={"dark"} />
    </>
  );
}
