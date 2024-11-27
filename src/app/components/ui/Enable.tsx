import React from "react";
import { useState } from "react";
import FullCard from "./FullCard";
import { motion } from "framer-motion";
import BabyKeem from "./BabyKeem";
import Image from "next/image";
import Link from "next/link";

export default function Enable() {
  const [nav, setNav] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (nav == 2) {
  //       setNav(0);
  //     } else {
  //       setNav((prev) => prev + 1);
  //     }
  //   }, 100000000);

  //   return () => clearInterval(interval);
  // }, [nav]);

  return (
    <div className="flex w-full h-full z-10">
      {nav == 0 && (
        <>
          <div className="w-full md:h-screen grid md:grid-cols-2 grid-rows-2 ">
            <div className="relative h-screen bg-ardent justify-center items-center flex flex-col">
              <div className="justify-center items-center flex flex-col md:h-[660px] md:-translate-y-4 m-auto">
                <div className="md:w-[400px] w-[300px] h-fit flex flex-col leading-tight">
                  <div className="flex flex-row w-fit h-fit ml-auto leading-tight">
                    <p className="md:text-4xl text-2xl text-white font-black text-right mr-2 leading-7">
                      Strategic Communications
                    </p>
                    <p className="md:text-8xl  text-6xl text-white font-black text-right md:-translate-y-1 -translate-y-0">
                      &
                    </p>
                  </div>
                  <p className="md:text-4xl text-2xl text-white font-black text-right h-fit md:-translate-y-4 -translate-y-1">
                    Public Relations
                  </p>
                </div>
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-ardentLighter rounded-xl  z-0 flex">
                  <Image
                    src="/publicRelations.jpg"
                    height={0}
                    width={0}
                    sizes="100% 100%"
                    alt=""
                    className="w-[90%] h-[90%] rounded-xl shadow-2xl justify-center m-auto flex"
                  ></Image>
                </div>

                <Link
                  href="/public-relations"
                  className="justify-center items-center flex flex-col  "
                >
                  <div className="md:w-[200px] md:h-[60px] w-[150px] h-[50px] bg-ardentLight rounded-full flex absolute md:bottom-9 bottom-[12rem] cursor-pointer hover:scale-105 duration-100">
                    <p className="flex m-auto md:text-2xl text-xl text-black font-black">
                      Read More
                    </p>
                  </div>
                </Link>
              </div>
              <div
                className="w-10 h-10 absolute left-0 bottom-0 top-[50%] m-5 cursor-pointer rotate-180"
                onClick={() => setNav(0)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="size-10 hover:scale-105 duration-100"
                >
                  <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>
              </div>
            </div>

            <div className="relative h-screen bg-ardentLight justify-center items-center flex flex-col">
              <div className="justify-center items-center flex flex-col md:h-[660px] md:-translate-y-4 m-auto">
                <div className="md:w-[400px] w-[300px] h-fit flex flex-col leading-tight">
                  <div className="flex flex-row w-fit h-fit mr-auto leading-tight ">
                    <p className="md:text-4xl text-2xl text-black font-black text-left mr-2 leading-7">
                      Public <br /> Policy
                    </p>
                    <p className="md:text-8xl text-6xl text-black font-black text-left md:-translate-y-1 -translate-y-0">
                      &
                    </p>
                  </div>
                  <p className="md:text-4xl text-2xl text-black font-black text-left h-fit md:-translate-y-4 -translate-y-1">
                    Regulatory Affairs
                  </p>
                </div>
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-ardent rounded-xl  z-0 flex">
                  <Image
                    src="/publicPolicy.jpg"
                    height={0}
                    width={0}
                    sizes="100% 100%"
                    alt=""
                    className="w-[90%] h-[90%] rounded-xl shadow-2xl justify-center m-auto flex object-cover object-left"
                  ></Image>
                </div>

                <Link
                  href="/public-policy"
                  className="justify-center items-center flex flex-col"
                >
                  <div className="md:w-[200px] md:h-[60px] w-[150px] h-[50px] bg-black rounded-full flex absolute md:bottom-9 bottom-[12rem] cursor-pointer hover:scale-105 duration-100">
                    <p className="flex m-auto md:text-2xl text-xl text-white font-black">
                      Read More
                    </p>
                  </div>
                </Link>
              </div>
              <div
                className="w-10 h-10 absolute right-0 top-[50%] m-5 cursor-pointer"
                onClick={() => setNav(1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="size-10 hover:scale-105 duration-100"
                >
                  <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                </svg>
              </div>
            </div>
          </div>
        </>
      )}

      {nav == 1 && (
        <div className="w-full h-full grid grid-cols-2">
          <div className="relative grid grid-rows-5">
            <FullCard
              title1="Research &"
              title2="Collateral Development"
              description="Our experienced team of researchers and content experts deliver quality analysis and reports, providing actionable insights for our stakeholders across domains and sectors."
              link="/research"
              image="/research.jpg"
              theme="light"
            />
            <BabyKeem theme="yellow" />
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
              className="m-10 absolute left-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100 rotate-180"
              onClick={() => setNav((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title1="Digital"
              title2="Communications"
              description="Ardent Co manages social media properties end-to-end, crafting tailored strategies across platforms. We align content with business goals, delivering platform-centric, perspective-driven solutions."
              link="/digital-comms"
              image="/digitalComms.png"
              theme="dark"
            />
            <BabyKeem theme="dark" />
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
              className="m-10  absolute right-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100"
              onClick={() => setNav((prev) => prev + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>
        </div>
      )}

      {nav == 2 && (
        <div className="w-full h-full grid grid-cols-2">
          <div className="relative grid grid-rows-5">
            <FullCard
              title1="Talent"
              title2="Nexus Solutions"
              description="Building upon our extensive experience as a dynamic young advisory, we have now decided to leverage our expertise to address challenges faced by other agencies when it comes to manpower management through our latest initiative, “Talent Nexus Solutions”"
              link="/talent-nexus"
              image="/nexus.jpg"
              theme="light"
            />
            <BabyKeem theme="yellow" />
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
              className="m-10 absolute left-0 bottom-0 hover:scale-110 cursor-pointer z-10 duration-100 rotate-180"
              onClick={() => setNav((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="size-10"
              >
                <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
              </svg>
            </motion.div>
          </div>

          <div className="grid grid-rows-5 relative">
            <FullCard
              title1="Graphics"
              title2="Designing"
              description="Ardent Co creates impactful graphic design solutions, enhancing your brand’s identity with precision-crafted visuals and content. Our team develops brand-centric designs that align with communication goals, bringing ideas to life and driving strong audience engagement."
              link="/graphics-designing"
              image="/graphics.jpg"
              theme="dark"
            />
            <BabyKeem theme="dark" />
          </div>
        </div>
      )}
    </div>
  );
}
