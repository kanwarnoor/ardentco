import { easeInOut, motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Enable() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  return (
    <div className="flex flex-col w-full h-fit m-auto justify-center items-center">
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
                The Roman Forum, as the center of public life and discourse in
                ancient Rome, parallels Ardent Co&apos;s role in shaping public
                narratives through strategic communications and engaging
                audiences to influence perceptions for its clients.
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
                The United Nations Headquarters symbolizes global policy-making
                and regulation, mirroring Ardent Co.&apos;s expertise in
                navigating public policy and regulatory affairs to drive
                impactful change for clients.
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
                mirrors Ardent Co.&apos;s commitment to research and insightful
                analysis. Just as the library expanded human understanding,
                Ardent Co. empowers organizations to navigate challenges and
                drive positive change.
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
      </div>
    </div>
  );
}
