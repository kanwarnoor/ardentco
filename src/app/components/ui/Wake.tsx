import React, { useState, useEffect } from "react";
// import { easeInOut, easeOut, motion } from "framer-motion";
// import Image from "next/Image";

import { motion } from "framer-motion";

export default function Wake() {
  const [active, setActive] = useState(false);
  let timer: string | number | NodeJS.Timeout | undefined;

  const resetTimer = () => {
    clearTimeout(timer);
    setActive(false);
    timer = setTimeout(() => {
      setActive(true);
    }, 30000); // 30 seconds
  };

  useEffect(() => {
    // Reset timer on any of these events
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "touchstart",
      "scroll",
    ];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Initialize the timer when component mounts
    resetTimer();

    // Cleanup event listeners on component unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timer);
    };
  });

  return (
    active && (
      <>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="fixed w-screen h-screen z-50 flex "
        >
          <div className="text-center text-white flex m-auto flex-col">
            <p className="text-4xl font-black">
              You can&apos;t sleep on us like that!
            </p>
          </div>
        </motion.div>
      </>
    )

    // <motion.div className="fixed w-screen h-screen z-50 flex bg-black">
    //   <motion.div
    //     initial={{
    //       x: -155,
    //       y: -95,
    //       rotate: 45,
    //     }}
    //     animate={{
    //       x: [-155, 200, 400, 600, 700, 800, 1000, 1500],
    //       y: [-95, 455, 455, 155, 155, 455, 455, 955],
    //       rotate: [45, 45, -45, -45, 45, 45, -10, 45],
    //       transition: {
    //         duration: 2, // Increased duration for smoother movement
    //         ease: "linear", // Use linear easing for continuous motion
    //         times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], // Ensure consistent spacing
    //         repeat: Infinity, // Repeats infinitely
    //         repeatType: "loop", // Smooth looping
    //       },
    //     }}
    //     className="text-center text-white flex m-auto flex-col absolute "
    //   >
    //     <Image src="/arrow.png" width={200} height={200} alt="arrow"></Image>
    //   </motion.div>
    // </motion.div>
  );
}
