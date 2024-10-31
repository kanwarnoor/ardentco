"use client";

import React from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

export default function about() {
  return (
    <div className="flex h-screen ">
      <div className="w-full h-fit px-10 flex m-auto">
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-10%)",
          }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0%)",
          }}
          className="flex w-1/2 translate-y-6 mx-10 "
        >
          <Image
            src="/compass.gif"
            height={700}
            width={700}
            alt="compass"
            className="flex m-auto hover:scale-105 hover:transition transition mt-10"
          ></Image>
        </motion.div>
        <div className="w-[70%]  h-fit flex flex-col justify-center my-auto ">
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
            viewport={{ amount: 0.5 }}
            className="text-5xl font-black mb-10"
          >
            Who are we?
          </motion.p>
          <div className="w-[70%]">
            <motion.p
              initial={{
                opacity: 0,
                transform: "translateY(10%)",
              }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0%)",
              }}
              viewport={{ amount: 0.5 }}
              transition={{
                duration: 0.5,
              }}
              className="mr-10 text-xl"
            >
              Ardent Co. is a dynamic communications, research, and public
              policy advisory firm dedicated to crafting purpose-driven
              strategies that empower clients to create meaningful impact. With
              a focus on innovative, data-driven insights and powerful
              storytelling, we bridge the gap between ambition and action,
              helping organizations navigate complex landscapes to achieve
              transformative outcomes. Our expertise lies in aligning public
              policy, research, and communication to foster authentic
              engagement, ensuring our clients not only meet their goals but
              also drive positive change in the world.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
