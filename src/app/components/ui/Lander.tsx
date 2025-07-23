"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./button";
import { FlipWords } from "./flip-words";

interface landerProps {
  image?: string;
  heading1: string;
  heading2?: string;
  description?: string;
  blurdata?: string;
  css?: string;
  buttonTxt?: string;
  buttonLink?: string;
  buttonTxt2?: string;
  buttonLink2?: string;
}

export default function Lander({
  image,
  heading1,
  heading2,
  description,
  buttonTxt,
  buttonLink,
  buttonTxt2,
  buttonLink2,
  blurdata,
  css,
}: landerProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="home"
      className={` relative w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-black  ${css} `}
    >
      <motion.div
        initial={{
          scale: 0.8,
          borderRadius: "1rem",
        }}
        animate={{
          scale: 1,
          borderRadius: "0px",
        }}
        transition={{
          duration: 0.3,
        }}
        className={`relative object-cover inset-0 w-full h-full scale-90 rounded-2xl opacity-100`}
      >
        {image && (
          <Image
            src={image}
            height={0}
            width={0}
            sizes="100% 100%"
            className={`absolute object-cover inset-0 w-full h-full scale-100 opacity-100 ${
              loaded ? "" : "blur"
            } duration-100`}
            alt=""
            {...(blurdata
              ? { blurDataURL: blurdata, placeholder: "blur" }
              : {})}
            no-select="true"
            onLoad={() => setLoaded(true)}
          ></Image>
        )}
      </motion.div>
      {image && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.7,
          }}
          transition={{
            duration: 2,
          }}
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle,white_10%,transparent_50%)]"
        ></motion.div>
      )}

      <div className="absolute">
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="md:text-7xl text-4xl font-black"
        >
          <FlipWords words={[heading1]} />

          {heading2 && (
            <>
              <FlipWords words={[heading2]} />
            </>
          )}

          {description && (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="md:text-xl text-sm font-bold mt-5 w-[60%] m-auto text-white/100"
            >
              {description}
            </motion.p>
          )}
        </motion.span>
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
          className="mt-10"
        >
          <a
            href={buttonLink}
            className="md:text-xl border-2 font-bold  bg-none border-ardent px-5 py-2 rounded-full bg-ardent text-black duration-300"
          >
            {buttonTxt}
          </a>
        </motion.div>

        <br />
      </div>
      {buttonTxt2 && buttonLink2 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-10">
          <a
            href={buttonLink2}
            className="text-sm  border-2 font-bold text-white bg-none  px-5 py-2 rounded-full hover:bg-white hover:text-black hover:border-black duration-300"
          >
            {buttonTxt2}
          </a>
        </div>
      )}
    </section>
  );
}
