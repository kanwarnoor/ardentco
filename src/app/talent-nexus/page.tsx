"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/ui/Footer";

export default function page() {
  return (
    <>
      <Navbar />
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
            src="/places/bangalore.jpg"
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
            className="text-7xl font-black text-black bg-yellow-400"
          >
            Talent Nexus <br /> Solutions
          </motion.span>
          <br />
        </div>
      </section>

      <section
        className="relative bg-white bg-dot-black/[0.5] w-full h-auto min-h-screen"
        id="about"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)] z-0"></div>

        <div className="relative m-auto flex flex-col w-full h-auto py-20 z-10 justify-center items-center min-h-screen gap-5">
          <div className="flex flex-wrap justify-center w-full h-fit text-center gap-5 mx-auto ">
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col w-[400px] h-[400px] border-2 border-black border-dashed rounded-2xl items-center"
            >
              <div className="flex flex-col h-fit m-auto justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Streamlined <br /> Recruitment
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  We expedite hiring processes by leveraging our extensive
                  industry network and expertise. Our pre-screening involves HR
                  professionals and industry experts, ensuring access to
                  top-tier communication professionals. Industry Expertise:
                  Corporate Affairs, Communications, Public Policy and
                  Technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col w-[400px] h-[400px] border-2 border-black border-dashed rounded-2xl  items-center"
            >
              <div className="flex flex-col h-fit  m-auto justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Economical Dedicated <br /> Resources
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  We offer cost-effective solutions for accessing skilled
                  resources in corporate affairs, communications and marketing.
                  Our experienced professionals integrate seamlessly within your
                  organization, delivering optimal performance. Industry
                  Expertise: Corporate Affairs, Communications, Public Policy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="flex flex-col w-[400px] h-[400px] border-2 border-black border-dashed rounded-2xl  items-center"
            >
              <div className="flex flex-col h-fit  m-auto justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Expertise Building <br /> Services
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  We assist clients in structuring internal teams
                  for success. With deep industry knowledge and guidance from
                  our esteemed board of advisors, we provide strategic insights
                  to optimize team dynamics and enhance communication
                  strategies. Industry Expertise: Corporate Affairs,
                  Communications, Public Policy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
