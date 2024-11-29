import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  css: string;
  heading1: string;
  heading2?: string;
  image: string;
  link: string;
  position: string;
  buttonCss: string;
  blurData?: string;
}

export default function ScreenCard({
  heading1,
  heading2,
  image,
  position,
  link,
  css,
  buttonCss,
  blurData,
}: Props) {
  return (
    <div
      className={` w-full h-screen ${css} flex flex-col `}
      // style={{ backgroundImage: `url(${image})` }}
    >
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
        className="w-full h-1/2 flex"
      >
        <div className="flex w-full ">
          {heading2 ? (
            <p className="text-4xl font-bold text-center m-auto">
              {heading1} <br /> {heading2}
            </p>
          ) : (
            <p>{heading1}</p>
          )}
        </div>
      </motion.div>
      <div className="w-full h-1/2 flex ">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100% 100%"
          alt={""}
          {...(blurData ? { blurDataURL: blurData, placeholder: "blur" } : {})}
          className={`w-full h-full object-cover object-${position}`}
        />
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
        className="absolute w-1/2 h-10 top-1/2 -translate-y-5 justify-center items-center flex"
      >
        <Link
          href={link}
          className={`px-9 py-4 rounded-full text-xl font-black duration-300 ${buttonCss}`}
        >
          Read more
        </Link>
      </motion.div>
    </div>
  );
}
