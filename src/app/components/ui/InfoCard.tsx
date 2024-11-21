import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface InfoCardProps {
  title1: string;
  title2?: string;
  imageDescription?: string;
  description: string;
  image: string;
  link?: string;
  animation: "left" | "center" | "right";
}

export default function InfoCard({
  title1,
  title2,
  image,
  imageDescription,
  description,
  animation,
  link,
}: InfoCardProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: animation == "left" ? "-10%" : animation === "center" ? "0" : "10%",
        y: animation == "center" ? "10%" : "0%",
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
        y: 0,
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
      {!clicked && (
        <div
          className="flex flex-col bg-black h-full rounded-2xl"
          onClick={() => setClicked((clicked) => !clicked)}
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
              src={image}
              width={0}
              height={0}
              sizes="100% 100%"
              alt="Saturn Roman"
              className={`w-full h-full object-cover object-center duration-300 rounded-t-2xl`}
            ></Image>
            <p
              className={`text-center text-white text-xs opacity-80 font-bold mt-1 transition ${
                clicked ? "hidden" : "block"
              }`}
            >
              {imageDescription}
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
              {title1}
              {title2 && (
                <>
                  <br />
                  {title2}
                </>
              )}
            </p>
          </motion.div>
        </div>
      )}

      {clicked && (
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
              onClick={() => setClicked((clicked) => !clicked)}
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
              {description}
            </motion.p>

            {link && (
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
                  href={link}
                  className="px-5 py-2 border-2 border-white rounded-full hover:scale-110 duration-200"
                >
                  Know more
                </Link>
              </motion.div>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}
