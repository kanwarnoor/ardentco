"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

export default function About() {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (clicked) {
      timer = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else {
      setVisible(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [clicked]);

  return (
    <div className="flex h-screen">
      <div className="w-fit h-fit flex m-auto">
        <motion.div
          initial={{
            opacity: 0,
            x: "-10%",
            rotateY: 0,
          }}
          animate={{
            rotateY: clicked ? 180 : 0,
            transition: {
              duration: 0.5,
            },
          }}
          whileInView={{
            opacity: 1,
            x: 0,
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
          transition={{
            duration: 0.1,
          }}
          onClick={() => setClicked(!clicked)}
          className={`flex flex-col mr-10 w-[400px] h-[400px]  cursor-pointer rounded-2xl bg-black`}
        >
          {visible && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              style={{
                rotateY: -180,
              }}
            >
              <p
                className={`text-white px-10 pt-10 pb-5 text-center text-2xl font-bold`}
              >
                Nalanda Mahavihara
              </p>
              <p className="text-white px-10 text-center text-sm ">
                Ardent Co. embodies the spirit of Nalanda University by serving
                as a modern center for knowledge and impactful dialogue. Just as
                Nalanda attracted scholars from around the world to exchange
                ideas and foster learning, Ardent Co. brings together diverse
                insights and expertise to craft innovative, purpose-driven
                strategies. Our commitment to bridging ambition and action
                mirrors {"Nalanda’s"} dedication to intellectual advancement,
                ensuring that we empower our clients to navigate complex
                landscapes and create meaningful impact in society.
              </p>
            </motion.div>
          )}

          <Image
            src="/places/Nalanda.jpg"
            height={0}
            width={0}
            sizes="100%, 100%"
            alt="compass"
            className={`flex w-[400px] h-[400px] bg-red-200 transition rounded-2xl cursor-pointer duration-[350ms] ${
              clicked ? "opacity-0" : "opacity-100"
            }`}
          ></Image>
        </motion.div>

        <div className="w-[700px] h-fit flex flex-col justify-center my-auto ">
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
            className="text-5xl font-black mb-5"
          >
            Who are we?
          </motion.p>
          <div className="">
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
