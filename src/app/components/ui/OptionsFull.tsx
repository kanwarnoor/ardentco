"use client";

import React, { ReactNode, useState, useEffect } from "react";
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

  const [item, setItem] = useState(40);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setItem(windowWidth <= 768 ? 25 : 40);
    setPos(0);
  }, [windowWidth]);

  return (
    <>
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: -[pos] + "rem" }}
        transition={{
          duration: 1,
          type: "spring",
        }}
        className="w-full grid grid-flow-col md:overflow-x-visible overflow-x-auto"
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
            // whileTap={{ scale: 1.1 }}
            onClick={() =>
              setClicked((prev) => ({
                clicked: prev.index === index ? false : true,
                index: prev.index === index ? null : index,
              }))
            }
            className="md:w-[40rem] w-[25rem] h-[30rem] p-10 flex flex-col justify-center items-center m-auto cursor-pointer"
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
                    <p className="md:text-xl text-sm font-bold text-justify">
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
                  <div className="w-fit flex md:size-12 size-7 text-black">
                    {item.svg}
                  </div>
                  <div className="w-full h-fit text-left">
                    <p className="md:text-5xl text-3xl font-bold">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Controls */}
      <div className="md:flex flex-row ml-auto w-fit h-fit hidden absolute left-0 bottom-0 ">
        <motion.div
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 1.1,
          }}
          className="cursor-pointer bg-white rounded-full p-5 h-fit flex mr-auto mt-auto m-5"
          onClick={() => {
            if (clicked.clicked) {
              setClicked({ clicked: false, index: null });
            }
            setPos((prev) =>
              prev != 0 ? prev - item : item * (content.length - 1)
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="md:size-7 size-3 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </motion.div>
      </div>
      <div className="md:flex flex-row ml-auto w-fit h-[30rem] hidden absolute right-0 bottom-0 ">
        <motion.div
          initial={{
            scale: 1,
          }}
          whileTap={{
            scale: 1.1,
          }}
          className="cursor-pointer bg-white rounded-full p-5 ml-2 h-fit flex mt-auto m-5"
          onClick={() => {
            if (clicked.clicked) {
              setClicked({ clicked: false, index: null });
            }
            setPos((prev) =>
              prev != item * (content.length - 1) ? prev + item : 0
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="black"
            className="md:size-7 size-3 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </motion.div>
      </div>
    
    </>
  );
}
