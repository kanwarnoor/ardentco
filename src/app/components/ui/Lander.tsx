import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

interface landerProps{
  image: string,
  heading1: string,
  heading2?: string,
}

export default function Lander({image, heading1, heading2}: landerProps) {
  return (
    <section
    id="home"
    className="relative w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-white"
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
      className="relative object-cover inset-0 w-full h-full scale-90 rounded-2xl opacity-100"
    >
      <Image
        src={image}
        height={0}
        width={0}
        sizes="100% 100%"
        className="absolute object-cover inset-0 w-full h-full scale-100 opacity-100"
        alt="athens"
        no-select="true"
      ></Image>
    </motion.div>
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
      className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_50%)]"
    ></motion.div>
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
        className="text-7xl font-black text-black"
      >
        {heading1} 
        {heading2 && (
          <>
          <br />
          {heading2}
          </>
        )}

      </motion.span>
      <br />
    </div>
  </section>
  )
}
