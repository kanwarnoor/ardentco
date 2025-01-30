"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./button";

interface Props {
  css?: string;
  heading1: string;
  heading2?: string;
  image: string;
  link: string;
  position?: string;
  buttonCss?: string;
  blurData?: string;
}

export default function ScreenCard({
  heading1,
  heading2,
  image,
  link,
  css,
  position,

  blurData,
}: Props) {
  return (
    <div
      className={`w-full md:h-screen h-fit ${css} flex flex-col m-auto`}
      // style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
      initial={{
        opacity: 0,

      }}
      whileInView={{
        opacity: 1,
        
      }}
      transition={{
        duration: 5,
      }}
       
        className="w-fit md:h-[70%] mx-auto"
      >
        {position == "left" ? (
          <div className="absolute -translate-x-[125%] -translate-y-[25%]  inset-0 w-[20%] h-[40%] m-auto rounded-full bg-gradient-radial from-teal-500 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none bg-ardent bg-opacity-80 -z-10"></div>
        ) : (
          <div className="absolute translate-x-[125%] -translate-y-[25%]  inset-0 w-[20%] h-[40%] m-auto rounded-full bg-gradient-radial from-teal-500 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none bg-ardent bg-opacity-80 -z-10"></div>
        )}

        <Image
          src={image}
          width={0}
          height={0}
          sizes="100% 100%"
          alt={""}
          {...(blurData ? { blurDataURL: blurData, placeholder: "blur" } : {})}
          className={`w-full h-full object-top ${
            position == "left" ? "rotate-12" : "rotate-0"
          }`}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="w-full h-[30%] flex flex-col justify-center md:mt-0 mt-10"
      >
        <div className="flex w-full">
          {heading2 ? (
            <p className="md:text-4xl text-xl font-bold text-center m-auto text-white">
              {heading1} <br /> {heading2}
            </p>
          ) : (
            <p>{heading1}</p>
          )}
        </div>

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
          className="w-full justify-center items-center flex mt-5"
        >
          {/* <a
            href={link}
            className={`rounded-full md:text-xl font-black duration-300 text-ardent border-2 border-ardent px-9 py-3 mt-5 ${buttonCss}`}
          >
            Read more
          </a> */}
          <Button link={link} />
        </motion.div>
      </motion.div>
    </div>
  );
}
