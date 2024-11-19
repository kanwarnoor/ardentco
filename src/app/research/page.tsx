"use client";

import React from "react";
import Navbar from "../components/ui/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";

export default function page() {
  return (
    <>
      <Navbar />
      <Lander
        image="/research.jpg"
        heading1="Research &"
        heading2="Collateral Development"
      />

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
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                    clipRule="evenodd"
                  />
                  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Write-Papers & <br /> Policy Briefs
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  Ardent Co. offers thorough preparation of white papers and
                  policy briefs that delve deep into the intricacies of complex
                  issues. By identifying and analyzing the fundamental drivers
                  and challenges at the core of both policy and industry
                  landscapes, we enable our clients in acquiring a deeper
                  understanding of their issues of interest, while harnessing
                  insights and evidence which can complement their discussions.
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Market Identification <br /> & Analysis
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  Ardent Co specializes in assisting companies with market
                  identification and analysis to design effective market-entry
                  strategies. We provide comprehensive insights into market
                  dynamics, including sector drivers, key market players,
                  non-market influencers, and regulatory landscape. By aligning
                  with the future trajectory of the market, we equip
                  organizations with in-depth understanding and offer strategic
                  guidance for their “India Journey”
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
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>

                <p className="text-black text-4xl font-bold m-auto">
                  Annual Reports & <br /> Corporate Collaterals
                </p>
                <p className="text-black text-sm px-10 mt-5">
                  Ardent Co is enhancing the concept of Organizational Impact
                  Reports, providing a fresh perspective to how organizations
                  define and quantify their market operations’ impact. We
                  collaborate closely with clients to design parameters for
                  measuring impact of their operations, develop data collection
                  methodologies, and create compelling “impact reports” which
                  can underline the organization’s significance within their
                  regions and sectors.
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
