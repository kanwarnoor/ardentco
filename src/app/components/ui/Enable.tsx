import React, { useEffect } from "react";
import { useState } from "react";
import FullCard from "./FullCard";
import { motion } from "framer-motion";

export default function Enable() {
  const [nav, setNav] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nav == 2) {
        setNav(0);
      } else {
        setNav((prev) => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nav]);

  return (
    <div className="flex w-full h-full z-10">
      {nav == 0 && (
        <>
          <div className="w-full h-full grid grid-cols-2">
            <div className="relative grid grid-rows-5">
              <FullCard
                title="Strategic Communication & Public Relations"
                image="/publicRelations.jpg"
                theme="light"
              />
              {[50, 100, 200, 300, 400].map((shade, index) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className={`bg-yellow-${shade}`}
                    key={index}
                  ></motion.div>
                );
              })}
            </div>
            <div className="grid grid-rows-5 relative">
              <FullCard
                title="Public Policy & Regulatory Affairs"
                image="/publicRelations.jpg"
                theme="dark"
              />
              {[500, 600, 700, 800, 900].map((shade, index) => {
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className={`bg-neutral-${shade}`}
                    key={index}
                  ></motion.div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {nav == 1 && (
        <div className="w-full h-full grid grid-cols-2">
          <div className="relative grid grid-rows-5">
            <FullCard
              title="Research & Collateral Development"
              image="/publicRelations.jpg"
              theme="light"
            />
            {[50, 100, 200, 300, 400].map((shade, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`bg-yellow-${shade}`}
                  key={index}
                ></motion.div>
              );
            })}
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title="Digital Communications"
              image="/publicRelations.jpg"
              theme="dark"
            />
            {[500, 600, 700, 800, 900].map((shade, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`bg-neutral-${shade}`}
                  key={index}
                ></motion.div>
              );
            })}
          </div>
        </div>
      )}

      {nav == 2 && (
        <div className="w-full h-full grid grid-cols-2">
          <div className="relative grid grid-rows-5">
            <FullCard
              title="Talent Nexus Solutions"
              image="/publicRelations.jpg"
              theme="light"
            />
            {[50, 100, 200, 300, 400].map((shade, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`bg-yellow-${shade}`}
                  key={index}
                ></motion.div>
              );
            })}
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title="Graphics Designing"
              image="/publicRelations.jpg"
              theme="dark"
            />
            {[500, 600, 700, 800, 900].map((shade, index) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`bg-neutral-${shade}`}
                  key={index}
                ></motion.div>
              );
            })}
          </div>
        </div>
      )}

      <div className="absolute w-screen bottom-0 text-center flex justify-center z-20">
        <div className="absolute bottom-0 w-[50%] h-10 flex items-center justify-center space-x-2">
          {[0, 1, 2].map((loc, index) => {
            const isHighLoc = loc >= 10; // Determine if loc is 3 or higher
            return (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 cursor-pointer hover:scale-110 duration-300 ${
                  isHighLoc
                    ? `border-white ${nav === loc ? "bg-white" : "bg-black"}`
                    : `border-black ${nav === loc ? "bg-black" : "bg-white"}`
                }`}
                onClick={() => setNav(loc)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
