import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Wake() {
  const [active, setActive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(false); // Hide animation on activity

    timerRef.current = setTimeout(() => {
      if (!document.hidden) {
        setActive(true);
        playSound();
      }
    }, 5000);
  };

  const playSound = () => {
    const soundEffect = new Audio("/arrowSound.mp3");
    soundEffect.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };

  useEffect(() => {
    const events = ["mousemove", "mousedown", "keypress", "touchstart", "scroll"];

    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer(); // Initialize timer on mount

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    active && (
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "90vw" }}
        transition={{ duration: 1 }}
        className="fixed top-0 bottom-0 flex m-auto w-40 h-fit z-20"
      >
        <Image
          src="/arrow1.png"
          height={0}
          width={0}
          sizes="100% 100%"
          className="w-full h-full"
          alt=""
        />
      </motion.div>
    )
  );
}
