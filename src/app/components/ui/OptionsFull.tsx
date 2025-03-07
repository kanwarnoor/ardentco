"use client";

import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  content: { title: string; description: string; svg: ReactNode }[];
}

export default function OptionsFull({ content }: Props) {
  const [pos, setPos] = useState(0);
  const [clicked, setClicked] = useState<{
    clicked: boolean;
    index: number | null;
  }>({
    clicked: false,
    index: null,
  });

  const item = 40;

  return (
    <>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: -[pos] + "rem" }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        className="w-full grid grid-flow-col"
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              backgroundColor: `rgba(0, 216,   214, ${1 - index * 0.1})`,
            }}
            animate={{
              backgroundColor: `rgba(0, 216, 214, ${1 - index * 0.1})`,
            }}
            whileHover={{
              backgroundColor: `rgba(100, 216, 214, ${(index + 1) * 0.1})`,
            }}
            whileTap={{ scale: 1.1 }}
            onClick={() =>
              setClicked((prev) => ({
                clicked: prev.index === index ? false : true,
                index: prev.index === index ? null : index,
              }))
            }
            className="w-[40rem] h-[30rem] p-10 flex flex-col justify-center items-center m-auto cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {clicked.clicked && clicked.index === index ? (
                <>
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-fit text-left"
                  >
                    <p className="text-xl font-bold text-justify">
                      {item.description}
                    </p>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  key="collapsed" // Different key ensures state reset
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: !clicked.clicked ? 0.5 : 0.4 }}
                >
                  <div className="w-fit flex size-12 text-black">
                    {item.svg}
                  </div>
                  <div className="w-full h-fit text-left">
                    <p className="text-5xl font-bold">{item.title}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Controls */}
      <div className="w-fit flex flex-row ml-auto mr-5 mb-10">
        <motion.p
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 1.1,
          }}
          className="cursor-pointer bg-white rounded-full p-5"
          onClick={() => {
            if (clicked.clicked) {
              setClicked({ clicked: false, index: null });
            }
            setPos((prev) => (prev != 0 ? prev - item : prev));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </motion.p>
        <motion.p
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 1.1,
          }}
          className="cursor-pointer bg-white rounded-full p-5 ml-2"
          onClick={() => {
            if (clicked.clicked) {
              setClicked({ clicked: false, index: null });
            }
            setPos((prev) =>
              prev != item * (content.length - 2) ? prev + item : prev
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="size-7 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </motion.p>
      </div>
    </>
  );
}
