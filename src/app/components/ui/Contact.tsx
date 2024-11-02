import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";

export default function Contact() {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [zindex, setZindex] = useState("z-10");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!clicked1) {
      timer = setTimeout(() => {
        setZindex("z-0");
      }, 500);
    } else {
      setZindex("z-20");
    }

    return () => {
      clearTimeout(timer);
    };
  }, [clicked1]);

  return (
    <div className="flex flex-row w-[100%]">
      {/* left option */}
      <div
        className="w-[50%] h-screen bg-red-200 cursor-pointer"
        onClick={() => setClicked((clicked) => !clicked)}
      >
        <div className="absolute w-[50%] h-screen bg-green-200"></div>
        <motion.div
          initial={{
            x: "0%",
          }}
          animate={{ x: clicked ? "100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          className={`absolute w-[50%] h-screen bg-red-900 ${
            clicked ? "z-20" : "z-10"
          }`}
        ></motion.div>
      </div>

      {/* right option */}
      <div
        className="w-[50%] h-screen bg-red-200 cursor-pointer"
        onClick={() => setClicked1((clicked1) => !clicked1)}
      >
        <div className="absolute w-[50%] h-screen bg-green-900"></div>
        <motion.div
          initial={{
            x: "0%",
          }}
          animate={{ x: clicked1 ? "-100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          className={`absolute w-[50%] h-screen bg-red-200 ${zindex}`}
        ></motion.div>
      </div>
      {/* <div className="absolute w-[50%] h-screen bg-red-200"></div>
      <div className="absolute right-0 w-[50%] h-screen bg-red-900"></div> */}
    </div>
  );
}
