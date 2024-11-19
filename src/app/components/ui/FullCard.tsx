import React from "react";
import { motion } from "framer-motion";

interface props {
  title: string;
  image?: string;
}

export default function FullCard({ title }: props) {
  return (
    <div className="bg-yellow-100 w-full h-full">
      
      <motion.div
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex w-full h-full"
      >
        <p className="flex m-auto text-2xl font-bold z-10">{title}</p>
      </motion.div>
    </div>
  );
}
