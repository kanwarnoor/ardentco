import React from "react";
import { motion } from "framer-motion";

interface props {
  title: string;
  image?: string;
  theme: "light" | "dark";
}

export default function FullCard({ title, theme }: props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      className="absolute w-full h-full z-10"
    >
      <div className="flex w-full h-full">
        <p
          className={`flex m-auto text-2xl font-bold z-10 ${
            theme == "light" ? "text-black" : "text-white"
          }`}
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
}
