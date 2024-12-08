"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  left: boolean;
  right: boolean;
  button?: boolean;
}

export default function Navbar({}: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages = [
    {
      name: "Services",
      link: "/services",
      inside: true,
    },
    {
      name: "Our Manifesto",
      link: "/manifesto",
      inside: false,
    },
    {
      name: "Our Perspectives",
      link: "/our-perspectives",
      inside: false,
    },
    {
      name: "Our Team",
      link: "/team",
      inside: false,
    },
  ];

  return (
    <>
      <div
        className={`h-16 w-screen fixed select-none flex text-white duration-500 ${
          open ? "bg-ardenet z-50" : scrolled ? "bg-black z-30" : "bg-none z-30"

        } `}
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
          <a
            className="md:text-xl text-lg font-bold cursor-pointer"
            href="/"
          >
            Ardent Co.
          </a>
        </motion.div>
      </div>
      <div
        className={`h-16 w-fit z-50 fixed select-none flex right-0 duration-300 ${
          !open ? "text-black" : "text-white"
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
            delay: 0.3,
          }}
          className={`flex ml-auto text-center text-black justify-center items-center md:mr-10 mr-5 duration-300 transition-all`}
        >
          <a
            href="/#contact"
            className={`flex justify-center items-center md:w-32 md:h-10 w-28 h-9 rounded-full font-medium duration-300 md:text-base text-sm select-none ${
              scrolled || open ? "bg-white text-black" : " bg-ardent text-white"
            }`}
          >
            {"Let's Connect"}
          </a>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke={`white`}
              className="size-10 cursor-pointer ml-[0.625rem]"
              onClick={() => setOpen(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              // stroke={`${scrolled ? "black" : "white"}`}
              stroke="white"
              className="size-10 cursor-pointer ml-[0.625rem] duration-300"
              onClick={() => setOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
            className={`w-screen h-dvh bg-ardent fixed z-40`}
          >
            <div className="w-full h-screen grid grid-cols-1">
              <div className="w-full h-screen flex ">
                <ul className="flex m-auto flex-col md:gap-3 gap-2">
                  {pages.map((item, index) => {
                    return (
                      <>
                        <a href={item.link}>
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
                            onClick={() =>
                              item.inside || pathname == item.link
                                ? setOpen(false)
                                : {}
                            }
                            className="text-center flex justify-center items-center text-ardentLighter group md:text-2xl text-xl font-bold cursor-pointer select-none "
                          >
                            {pathname == item.link ? (
                              <p className=" no-underline duration-300">
                                {">"}
                              </p>
                            ) : (
                              <p className="group-hover:opacity-100 opacity-0 no-underline duration-300">
                                {">"}
                              </p>
                            )}
                            <p className="hover:underline">{item.name}</p>
                          </motion.li>
                        </a>
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
                  className="absolute flex bottom-0 mb-5 w-full h-fit  text-center justify-center md:items-center text-ardentLighter md:text-sm text-[10px] select-none items-end"
                >
                  Copyright © {new Date().getFullYear()} Ardent Co. All rights
                  reserved.
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
