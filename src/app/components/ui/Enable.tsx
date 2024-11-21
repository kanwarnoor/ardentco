import React, { useEffect } from "react";
import { useState } from "react";
import FullCard from "./FullCard";
import { motion } from "framer-motion";
import BabyKeem from "./BabyKeem";

export default function Enable() {
  const [nav, setNav] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nav == 2) {
        setNav(0);
      } else {
        setNav((prev) => prev + 1);
      }
    }, 10000);

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
              <BabyKeem theme="yellow" />
            </div>
            <div className="grid grid-rows-5 relative">
              <FullCard
                title="Public Policy & Regulatory Affairs"
                image="/publicRelations.jpg"
                theme="dark"
              />
              <BabyKeem theme="dark" />
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="m-10  absolute right-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100"
                onClick={() => setNav((prev) => prev + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-10"
                >
                  <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>
              </motion.div>
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
            <BabyKeem theme="yellow" />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="m-10 absolute left-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100 rotate-180"
              onClick={() => setNav((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title="Digital Communications"
              image="/publicRelations.jpg"
              theme="dark"
            />
            <BabyKeem theme="dark" />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="m-10  absolute right-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100"
              onClick={() => setNav((prev) => prev + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
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
            <BabyKeem theme="yellow" />
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="m-10 absolute left-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100 rotate-180"
              onClick={() => setNav((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title="Graphics Designing"
              image="/publicRelations.jpg"
              theme="dark"
            />
            <BabyKeem theme="dark" />
          </div>
        </div>
      )}
    </div>
  );
}
