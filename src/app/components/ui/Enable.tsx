import { easeInOut, motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function Enable() {
  const [clicked1, setClicked1] = useState(false);

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
        className="text-5xl font-black"
      >
        How we enable our clients
      </motion.p>

      {/* edit here */}
      <div className="flex w-fit m-auto space-x-5 mt-10">
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
          onClick={() => setClicked1((clicked1) => !clicked1)}
          className="flex flex-col cursor-pointer w-[400px] h-[450px] bg-black rounded-2xl"
        >
          <motion.div
            className={`relative bg-black w-full duration-300  ${
              clicked1 ? "h-[100%] rounded-2xl" : "h-[60%] rounded-t-2xl"
            }`}
          >
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
            transition: {
              duration: 0.1,
            },
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
            },
          }}
          transition={{
            duration: 0.1,
          }}
          className="flex flex-col w-[400px] h-[450px] bg-black rounded-2xl cursor-pointer"
        >
          <div className="bg-red-200 w-full h-[60%] rounded-t-2xl">
            <Image
              src="/unitednations.jpg"
              width={0}
              height={0}
              sizes="100% 100%"
              alt="Saturn Roman"
              className="w-full h-full rounded-t-2xl object-cover object-center"
            ></Image>
            <p className="text-center text-white text-xs font-medium mt-1 opacity-80">
              United Nations Headquarters - Manhatten
            </p>
          </div>
          <div className="w-fit h-fit m-auto">
            <p className="text-white font-bold text-xl text-center">
              Public Policy and <br /> Regulatory Affairs
            </p>
          </div>
        </motion.div>

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
          className="flex flex-col w-[400px] h-[450px] bg-black rounded-2xl cursor-pointer"
        >
          <div className="bg-red-200 w-full h-[60%] rounded-t-2xl">
            <Image
              src="/LibraryAlexandriaEgypt.jpg"
              width={400}
              height={500}
              sizes="100% 100%"
              alt="Saturn Roman"
              className="w-full h-full rounded-t-2xl object-cover object-bottom"
            ></Image>
            <p className="text-center text-white text-xs font-medium mt-1 shadow-2xl opacity-80">
              The Library of Alexandria - Egypt
            </p>
          </div>
          <div className="w-fit h-fit m-auto">
            <p className="text-white font-bold text-xl text-center">
              Research & <br /> Collateral Development
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
