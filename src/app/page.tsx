"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";

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
      <div className="w-full h-fit absolute top-0 bottom-0 left-0 right-0 m-auto text-center flex flex-col justify-center items-center bg-black text-white">
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
          </motion.p> <br />

            
          <Link href="" className="text-2xl border-2 font-bold border-white px-5 py-2 rounded-full">Book a call</Link>
        </div>
      </div>
    </>
  );
}
