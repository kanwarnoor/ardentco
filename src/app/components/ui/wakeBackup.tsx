import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the GSAP plugin if it's the client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

export default function ParentComponent() {
  const [active, setActive] = useState<boolean>(false); // Explicitly typing the state

  let timer: NodeJS.Timeout | undefined;

  const resetTimer = () => {
    // Clear previous timer
    if (timer) clearTimeout(timer);

    // Set a new timer
    timer = setTimeout(() => {
      setActive(true); // Show the arrow after 5 seconds of inactivity
    }, 5000); // 5 seconds of inactivity
  };

  useEffect(() => {
    // Add event listeners for user interactions
    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "touchstart",
      "scroll",
    ];

    // Reset the timer on any of these events
    events.forEach((event) => window.addEventListener(event, resetTimer));

    // Initialize the timer on component mount
    resetTimer();

    // Cleanup event listeners on component unmount
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer) clearTimeout(timer); // Cleanup timer
    };
  });

  return (
    active && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed w-screen h-screen z-50 flex"
      >
        <Arrow setActive={setActive} />
      </motion.div>
    )
  );
}

interface ArrowProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>; // Typing the prop to handle the state change
}

function Arrow({ setActive }: ArrowProps) {
  useEffect(() => {
    // GSAP animation for the arrow
    const animateArrow = () => {
      const arrow = document.getElementById("arrow");
      const motionPath = document.getElementById("motionPath");

      // Check if the elements exist before applying GSAP animation
      if (arrow && motionPath) {
        // Use GSAP's motionPath plugin with correct type assertion
        gsap.to(arrow, {
          duration: 3, // Total animation time in seconds
          repeat: 0, // No repeat
          ease: "power1.inOut", // Smooth easing
          motionPath: {
            path: motionPath, // Reference to the path
            align: motionPath, // Align arrow to the path
            autoRotate: true, // Make arrow rotate along path direction
            alignOrigin: [0.5, 0.5], // Adjust alignment point of the arrow
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any, // Type assertion to avoid TS error
        });
      } else {
        console.error("Arrow or motionPath element not found.");
      }
    };

    animateArrow();

    // Play sound when the animation starts
    const soundEffect = new Audio("/sound-effect.mp3"); // Replace with your actual sound file path
    soundEffect.play().catch((error) => {
      console.error("Error playing sound:", error);
    });

    // Set a timeout for 3 seconds to unmount the component
    const timeout = setTimeout(() => {
      // After the animation duration (3 seconds), set active to false
      setActive(false);
    }, 3000); // 3 seconds to match the animation duration

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout);
  }, [setActive]); // Adding setActive to dependencies to ensure correct function reference

  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 1000 562.50"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Motion Path */}
      <path
        id="motionPath"
        d="m 0 0 c 0 0 0 500 500 200 c 0 0 350 -200 500 360"
        stroke="none"
        fill="transparent"
      />
      {/* Arrow */}
      <image
        id="arrow"
        href="/arrow.png"
        x="0" // Initial position
        y="0" // Initial position
        width="100"
        height="100"
      />
    </svg>
  );
}
