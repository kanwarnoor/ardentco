import { easeInOut, motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Enable() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);

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
                    className={`w-fit h-fit m-auto transition`}
                  >
                    <p className="text-white font-bold text-xl text-center">
                      Strategic Comunications & <br /> Public Relations
                    </p>
                  </motion.div>
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
                      Our expertise in policy affairs and research equips our
                      communications interventions with a 360 degree
                      perspective, ensuring impactful outputs for your
                      organization and leadership.
                    </motion.p>

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
                      className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
                    >
                      <Link
                        href="/public-relations"
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
                scale: 0.9,
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
                scale: 1,
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
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              {!clicked2 && (
                <div
                  className="flex flex-col bg-black h-full rounded-2xl"
                  onClick={() => setClicked2((clicked2) => !clicked2)}
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
                    className={`relative w-full duration-300 rounded-t-2xl h-[276.5px]`}
                  >
                    <Image
                      src="/unitednations.jpg"
                      width={0}
                      height={0}
                      sizes="100% 100%"
                      alt="Saturn Roman"
                      className={`w-full h-full object-cover object-bottom duration-300 rounded-t-2xl`}
                    ></Image>
                    <p
                      className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                        clicked2 ? "hidden" : "block"
                      }`}
                    >
                      United Nations Headquarters - New York
                    </p>
                  </motion.div>
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
                    className={`w-fit h-fit m-auto transition`}
                  >
                    <p className="text-white font-bold text-xl text-center">
                      Public policy & <br />
                      Regulatory Affairs
                    </p>
                  </motion.div>
                </div>
              )}

              {clicked2 && (
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
                      onClick={() => setClicked2((clicked2) => !clicked2)}
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
                      Ardent Co. helps your organization in defining and
                      engaging with its public policy priorities through a
                      unique understanding of the stakeholder ecosystem and
                      powered by in-depth research driven policy insights.
                    </motion.p>

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
                      className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
                    >
                      <Link
                        href="/public-policy"
                        className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                      >
                        Know more
                      </Link>
                    </motion.div>
                  </div>
                </>
              )}
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
              transition={{
                duration: 0.1,
              }}
              viewport={{
                amount: 0.3,
              }}
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              {!clicked3 && (
                <div
                  className="flex flex-col bg-black h-full rounded-2xl"
                  onClick={() => setClicked3((clicked3) => !clicked3)}
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
                    className={`relative w-full duration-300 rounded-t-2xl h-[276.5px]`}
                  >
                    <Image
                      src="/LibraryAlexandriaEgypt.jpg"
                      width={0}
                      height={0}
                      sizes="100% 100%"
                      alt="Saturn Roman"
                      className={`w-full h-full object-cover object-bottom duration-300 rounded-t-2xl`}
                    ></Image>
                    <p
                      className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                        clicked3 ? "hidden" : "block"
                      }`}
                    >
                      United Nations Headquarters - New York
                    </p>
                  </motion.div>
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
                    className={`w-fit h-fit m-auto transition`}
                  >
                    <p className="text-white font-bold text-xl text-center">
                      Research & <br />
                      Collateral Development
                    </p>
                  </motion.div>
                </div>
              )}

              {clicked3 && (
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
                      onClick={() => setClicked3((clicked3) => !clicked3)}
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
                      Our experienced team of researchers and content experts
                      deliver quality analysis and reports, providing actionable
                      insights for our stakeholders across domains and sectors.
                    </motion.p>

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
                      className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
                    >
                      <Link
                        href="/research"
                        className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                      >
                        Know more
                      </Link>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}

        {/* add images is this section */}
        {next && (
          <>
            {/* fourth */}
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
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              {!clicked4 && (
                <div
                  className="flex flex-col bg-black h-full rounded-2xl"
                  onClick={() => setClicked4((clicked4) => !clicked4)}
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
                    className={`relative w-full duration-300 rounded-t-2xl h-[276.5px]`}
                  >
                    <Image
                      src="/places/silicon.jpg"
                      width={0}
                      height={0}
                      sizes="100% 100%"
                      alt="Saturn Roman"
                      className={`w-full h-full object-cover object-bottom duration-300 rounded-t-2xl`}
                    ></Image>
                    <p
                      className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                        clicked4 ? "hidden" : "block"
                      }`}
                    >
                      Silicon Valley - California
                    </p>
                  </motion.div>
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
                    className={`w-fit h-fit m-auto transition`}
                  >
                    <p className="text-white font-bold text-xl text-center">
                      Digital Communications
                    </p>
                  </motion.div>
                </div>
              )}

              {clicked4 && (
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
                      onClick={() => setClicked4((clicked4) => !clicked4)}
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
                      Ardent Co supports end-to-end management of social media
                      properties for our partners cutting across platforms. Our
                      team specializes in designing and executing tailored,
                      platform-centric social media strategies, aligned with
                      communication and business goals, and made richer with
                      perspective-driven content
                    </motion.p>

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
                      className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
                    >
                      <Link
                        href="/digital-comms"
                        className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                      >
                        Know more
                      </Link>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>

            {/* fifth */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
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
                scale: 1,
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
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              {!clicked5 && (
                <div
                  className="flex flex-col bg-black h-full rounded-2xl"
                  onClick={() => setClicked5((clicked5) => !clicked5)}
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
                    className={`relative w-full duration-300 rounded-t-2xl h-[276.5px]`}
                  >
                    <Image
                      src="/places/bangalore.jpg"
                      width={0}
                      height={0}
                      sizes="100% 100%"
                      alt="Saturn Roman"
                      className={`w-full h-full object-cover object-bottom duration-300 rounded-t-2xl`}
                    ></Image>
                    <p
                      className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                        clicked5 ? "hidden" : "block"
                      }`}
                    >
                      Silicon Valley of India - Bangalore
                    </p>
                  </motion.div>
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
                    className={`w-fit h-fit m-auto transition`}
                  >
                    <p className="text-white font-bold text-xl text-center">
                      Talent Nexus Solutions
                    </p>
                  </motion.div>
                </div>
              )}

              {clicked5 && (
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
                      onClick={() => setClicked5((clicked5) => !clicked5)}
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
                      Building upon our extensive experience as a dynamic young
                      advisory, we have now decided to leverage our expertise to
                      address challenges faced by other agencies when it comes
                      to manpower management through our latest initiative,
                      “Talent Nexus Solutions”
                    </motion.p>

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
                      className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
                    >
                      <Link
                        href="/talent-nexus"
                        className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                      >
                        Know more
                      </Link>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>

            {/* sixth */}
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
              transition={{
                duration: 0.1,
              }}
              viewport={{
                amount: 0.3,
              }}
              className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
            >
              {!clicked6 && (
                <div
                  className="flex flex-col bg-black h-full rounded-2xl"
                  onClick={() => setClicked6((clicked6) => !clicked6)}
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
                    className={`relative w-full duration-300 rounded-t-2xl h-[276.5px]`}
                  >
                    <Image
                      src="/places/florence.jpg"
                      width={0}
                      height={0}
                      sizes="100% 100%"
                      alt="Saturn Roman"
                      className={`w-full h-full object-cover object-bottom duration-300 rounded-t-2xl`}
                    ></Image>
                    <p
                      className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                        clicked6 ? "hidden" : "block"
                      }`}
                    >
                      Capital of artists - Florence
                    </p>
                  </motion.div>
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
                    className={`w-fit h-fit m-auto transition`}
                  >
                    <p className="text-white font-bold text-xl text-center">
                      Graphics Designing
                    </p>
                  </motion.div>
                </div>
              )}

              {clicked6 && (
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
                      onClick={() => setClicked6((clicked6) => !clicked6)}
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
                      Ardent Co creates impactful graphic design solutions,
                      enhancing your {"brand’s"} identity with precision-crafted
                      visuals and content. Our team develops brand-centric
                      designs that align with communication goals, bringing
                      ideas to life and driving strong audience engagement.
                    </motion.p>

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
                      className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 rounded-b-2xl"
                    >
                      <Link
                        href="/graphics-designing"
                        className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                      >
                        Know more
                      </Link>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </div>

      <div className="mt-10 w-full h-fit flex m-auto text-center justify-center items-center">
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
