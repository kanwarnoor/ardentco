"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  intersecting: boolean;
}

export default function Navbar({ intersecting }: Props) {
  const [open, setOpen] = useState(false);

  const pages = [
    {
      name: "Services",
      link: "/#enable",
    },
    {
      name: "Our Manifesto",
      link: "/manifesto",
    },
    {
      name: "Views in Media",
      link: "/media",
    },
    {
      name: "Our Perspectives",
      link: "/our-perspectives",
    },
    {
      name: "Our Team",
      link: "/team",
    },
  ];

  return (
    <>
      <div
        className={`h-16 flex w-full flex-row ml-auto fixed z-30 duration-300 bg-blend-difference select-none ${
          intersecting && !open ? "text-black" : "text-white"
        }`}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`flex justify-center items-center md:pl-10 pl-5`}
        >
          <Link
            className="md:text-xl text-lg font-bold cursor-pointer mix-blend-difference"
            href="/"
          >
            Ardent Co.
          </Link>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className={`flex ml-auto text-center text-black justify-center items-center md:mr-10 mr-5 duration-300 transition-all`}
        >
          <Link
            href="/#contact"
            className={`flex justify-center items-center md:w-32 md:h-10 w-28 h-9 rounded-full font-medium duration-300 md:text-base text-sm select-none ${
              open ? "bg-white text-black" : " bg-ardent text-white"
            }`}
          >
            {"Let's Connect"}
          </Link>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke={`white`}
              className="size-10 cursor-pointer ml-[0.625rem]"
              onClick={() => setOpen(false)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke={`${intersecting ? "black" : "white"}`}
              className="size-10 cursor-pointer ml-[0.625rem] duration-300"
              onClick={() => setOpen(true)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: open ? 1 : 0,
            }}
            exit={{
              opacity: 0,
            }}
            className={`w-screen h-screen bg-ardent fixed z-20`}
          >
            <div className="w-full h-screen grid grid-cols-1">
              <div className="w-full h-screen flex ">
                <ul className="flex m-auto flex-col md:gap-3 gap-2">
                  {pages.map((item, index) => {
                    return (
                      <>
                        <Link href={item.link}>
                          <motion.li
                            initial={{
                              opacity: 0,
                              y: 100,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.2 * (index + 1),
                            }}
                            key={index}
                            className="text-center flex justify-center items-center text-ardentLighter group md:text-2xl text-xl font-bold cursor-pointer select-none "
                          >
                            <p className="group-hover:opacity-100 opacity-0 no-underline duration-300">
                              {">"}
                            </p>
                            <p className="hover:underline">{item.name}</p>
                          </motion.li>
                        </Link>
                      </>
                    );
                  })}
                </ul>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                  }}
                  className="absolute flex bottom-0 w-full h-16 md:mb-0 mb-10 text-center justify-center md:items-center text-ardentLighter md:text-sm text-[10px] select-none"
                >
                  Copyright © 2024 Apple Inc. All rights reserved.
                </motion.div>
              </div>
              {/* <div className="w-full h-full"></div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
