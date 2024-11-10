import React, { useState, useEffect } from "react";
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
  }, []);

  return (
    // active && (
    //   <>
        
    //   </>
    // )

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
              You can't sleep on us like that!
            </p>
          </div>
        </motion.div>
  );
}
