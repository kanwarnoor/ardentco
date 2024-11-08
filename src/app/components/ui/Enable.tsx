import { easeInOut, motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Enable() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);

  const [next, setNext] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNext((prev) => !prev);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col w-full h-fit m-auto justify-center items-center z-10">
      <motion.p
        initial={{
          opacity: 0,
          transform: "translateY(-50%)",
        }}
        whileInView={{
          opacity: 1,
          transform: "translateY(0%)",
        }}
        transition={{
          duration: 0.5,
          ease: easeInOut,
        }}
        viewport={{
          amount: 1,
        }}
        className="text-5xl font-black"
      >
        How we enable our clients
      </motion.p>

      <div className="flex w-fit m-auto space-x-5 mt-10">
        {!next && (
          <>
            {/* first */}
            <motion.div
              initial={{
                opacity: 0,
                x: "-10%",
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileHover={{
                scale: 1.02,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.1,
              }}
              viewport={{
                amount: 0.3,
              }}
              // onClick={() => setClicked1((clicked1) => !clicked1)}
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              {!clicked1 && (
                <div
                  className="flex flex-col bg-black h-full rounded-2xl"
                  onClick={() => setClicked1((clicked1) => !clicked1)}
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
                    className={`relative w-full duration-300 rounded-t-2xl`}
                  >
                    <Image
                      src="/SaturnRoman.jpg"
                      width={0}
                      height={0}
                      sizes="100% 100%"
                      alt="Saturn Roman"
                      className={`w-full h-full object-cover object-bottom duration-300 rounded-t-2xl`}
                    ></Image>
                    <p
                      className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                        clicked1 ? "hidden" : "block"
                      }`}
                    >
                      Temple of Saturn Roman - Rome
                    </p>
                  </motion.div>
                  <div
                    className={`w-fit h-fit m-auto transition ${
                      clicked1 ? "hidden" : "block"
                    }`}
                  >
                    <p className="text-white font-bold text-xl text-center">
                      Strategic Comunications & <br /> Public Relations
                    </p>
                  </div>
                </div>
              )}

              {clicked1 && (
                <>
                  <div className="flex justify-end p-5 cursor-default">
                    <motion.svg
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="size-9 cursor-pointer hover:scale-110 duration-150"
                      onClick={() => setClicked1((clicked1) => !clicked1)}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clip-rule="evenodd"
                      />
                    </motion.svg>
                  </div>
                  <div className="relative h-full p-10 text-white text-center cursor-default">
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                    >
                      sometext
                    </motion.p>

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
                    >
                      <Link
                        href=""
                        className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                      >
                        Know more
                      </Link>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>

            {/* second */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileHover={{
                scale: 1.02,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              viewport={{
                amount: 0.3,
              }}
              transition={{
                duration: 0.1,
              }}
              onClick={() => setClicked2((clicked2) => !clicked2)}
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              <motion.div
                className={`relative bg-black w-full duration-300  ${
                  clicked2 ? "h-[100%] rounded-2xl" : "h-[60%] rounded-t-2xl"
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: clicked2 ? 1 : 0,
                  }}
                  exit={{
                    transition: {
                      delay: 0,
                    },
                  }}
                  transition={{
                    delay: clicked2 ? 0.2 : 0,
                    duration: clicked2 ? 0.5 : 0.1,
                  }}
                  className={`absolute bottom-0 m-5`}
                >
                  <p className=" bg-black text-white px-2 rounded-lg bg-opacity-50">
                    The United Nations Headquarters symbolizes global
                    policy-making and regulation, mirroring Ardent Co.&apos;s
                    expertise in navigating public policy and regulatory affairs
                    to drive impactful change for clients.
                  </p>
                </motion.div>
                <Image
                  src="/unitednations.jpg"
                  width={0}
                  height={0}
                  sizes="100% 100%"
                  alt="Saturn Roman"
                  className={`w-full h-full object-cover duration-300 ${
                    clicked1 ? "rounded-2xl" : "rounded-t-2xl"
                  }`}
                ></Image>
                <p
                  className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                    clicked2 ? "hidden" : "block"
                  }`}
                >
                  United Nations Headquarters - Manhatten
                </p>
              </motion.div>
              <div
                className={`w-fit h-fit m-auto transition ${
                  clicked2 ? "hidden" : "block"
                }`}
              >
                <p className="text-white font-bold text-xl text-center">
                  Public Policy and & <br /> Regulatory Affairs
                </p>
              </div>
            </motion.div>

            {/* third */}
            <motion.div
              initial={{
                opacity: 0,
                x: "10%",
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileHover={{
                scale: 1.02,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              viewport={{
                amount: 0.3,
              }}
              transition={{
                duration: 0.1,
              }}
              onClick={() => setClicked3((clicked3) => !clicked3)}
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              <motion.div
                className={`relative bg-black w-full duration-300  ${
                  clicked3 ? "h-[100%] rounded-2xl" : "h-[60%] rounded-t-2xl"
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: clicked3 ? 1 : 0,
                  }}
                  exit={{
                    transition: {
                      delay: 0,
                    },
                  }}
                  transition={{
                    delay: clicked3 ? 0.2 : 0,
                    duration: clicked3 ? 0.5 : 0.1,
                  }}
                  className={`absolute bottom-0 m-5`}
                >
                  <p className=" bg-black text-white px-2 rounded-lg bg-opacity-50">
                    The Library of Alexandria, an ancient center of knowledge,
                    mirrors Ardent Co.&apos;s commitment to research and
                    insightful analysis. Just as the library expanded human
                    understanding, Ardent Co. empowers organizations to navigate
                    challenges and drive positive change.
                  </p>
                </motion.div>
                <Image
                  src="/LibraryAlexandriaEgypt.jpg"
                  width={0}
                  height={0}
                  sizes="100% 100%"
                  alt="Saturn Roman"
                  className={`w-full h-full object-cover object-bottom duration-300 ${
                    clicked3 ? "rounded-2xl" : "rounded-t-2xl"
                  }`}
                ></Image>
                <p
                  className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                    clicked3 ? "hidden" : "block"
                  }`}
                >
                  The Library of Alexandria - Egypt
                </p>
              </motion.div>
              <div
                className={`w-fit h-fit m-auto transition ${
                  clicked3 ? "hidden" : "block"
                }`}
              >
                <p className="text-white font-bold text-xl text-center">
                  Research & <br /> Collateral Development
                </p>
              </div>
            </motion.div>
          </>
        )}

        {next && (
          <>
            {/* first */}
            <motion.div
              initial={{
                opacity: 0,
                x: "-10%",
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileHover={{
                scale: 1.02,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.1,
              }}
              viewport={{
                amount: 0.3,
              }}
              onClick={() => setClicked1((clicked1) => !clicked1)}
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              <motion.div
                className={`relative bg-black w-full duration-300  ${
                  clicked1 ? "h-[100%] rounded-2xl" : "h-[60%] rounded-t-2xl"
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: clicked1 ? 1 : 0,
                  }}
                  exit={{
                    transition: {
                      delay: 0,
                    },
                  }}
                  transition={{
                    delay: clicked1 ? 0.2 : 0,
                    duration: clicked1 ? 0.5 : 0.1,
                  }}
                  className={`absolute bottom-0 m-5`}
                >
                  <p className=" bg-black text-white px-2 rounded-lg bg-opacity-50">
                    The Roman Forum, as the center of public life and discourse
                    in ancient Rome, parallels Ardent Co&apos;s role in shaping
                    public narratives through strategic communications and
                    engaging audiences to influence perceptions for its clients.
                  </p>
                </motion.div>
                <Image
                  src="/SaturnRoman.jpg"
                  width={0}
                  height={0}
                  sizes="100% 100%"
                  alt="Saturn Roman"
                  className={`w-full h-full object-cover object-bottom duration-300 ${
                    clicked1 ? "rounded-2xl" : "rounded-t-2xl"
                  }`}
                ></Image>
                <p
                  className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                    clicked1 ? "hidden" : "block"
                  }`}
                >
                  Temple of Saturn Roman - Rome
                </p>
              </motion.div>
              <div
                className={`w-fit h-fit m-auto transition ${
                  clicked1 ? "hidden" : "block"
                }`}
              >
                <p className="text-white font-bold text-xl text-center">
                  Stragetic Comunications & <br /> Public Relations
                </p>
              </div>
            </motion.div>

            {/* second */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileHover={{
                scale: 1.02,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              viewport={{
                amount: 0.3,
              }}
              transition={{
                duration: 0.1,
              }}
              onClick={() => setClicked2((clicked2) => !clicked2)}
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              <motion.div
                className={`relative bg-black w-full duration-300  ${
                  clicked2 ? "h-[100%] rounded-2xl" : "h-[60%] rounded-t-2xl"
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: clicked2 ? 1 : 0,
                  }}
                  exit={{
                    transition: {
                      delay: 0,
                    },
                  }}
                  transition={{
                    delay: clicked2 ? 0.2 : 0,
                    duration: clicked2 ? 0.5 : 0.1,
                  }}
                  className={`absolute bottom-0 m-5`}
                >
                  <p className=" bg-black text-white px-2 rounded-lg bg-opacity-50">
                    The United Nations Headquarters symbolizes global
                    policy-making and regulation, mirroring Ardent Co.&apos;s
                    expertise in navigating public policy and regulatory affairs
                    to drive impactful change for clients.
                  </p>
                </motion.div>
                <Image
                  src="/unitednations.jpg"
                  width={0}
                  height={0}
                  sizes="100% 100%"
                  alt="Saturn Roman"
                  className={`w-full h-full object-cover duration-300 ${
                    clicked1 ? "rounded-2xl" : "rounded-t-2xl"
                  }`}
                ></Image>
                <p
                  className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                    clicked2 ? "hidden" : "block"
                  }`}
                >
                  United Nations Headquarters - Manhatten
                </p>
              </motion.div>
              <div
                className={`w-fit h-fit m-auto transition ${
                  clicked2 ? "hidden" : "block"
                }`}
              >
                <p className="text-white font-bold text-xl text-center">
                  Public Policy and & <br /> Regulatory Affairs
                </p>
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div className="w-full h-fit flex m-auto text-center justify-center items-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-12 cursor-pointer hover:scale-105 duration-200"
          onClick={() => setNext(false)}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-12 cursor-pointer hover:scale-105 duration-200"
          onClick={() => setNext(true)}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
