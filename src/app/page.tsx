"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import Navbar from "./components/ui/Navbar1";

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
    <Navbar/>
      <section id="home" className="w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-black text-white ">
        <div>
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
              opacity: 0.6,
            }}
            transition={{
              duration: 1,
            }}
            className="text-7xl font-bold"
          >
            Status Quo
          </motion.p>{" "}
          <br />
          <motion.div className="w-fit flex mx-auto"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 }
            }}
            whileTap={{
              scale: 1,
              transition: { duration: 0.1 }
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1,  transition: { duration: 1 } }}
          >
            <Link
              href=""
              className="text-xl border-2 font-bold border-white px-5 py-2 rounded-full"
            >
              Book a call
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white w-full h-screen" id="second"> 
          
      </section>
    </>
  );
}
