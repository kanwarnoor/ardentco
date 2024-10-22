"use client";

import { FlipWords } from "@/app/components/ui/flip-words";
import { Spotlight } from "@/app/components/ui/Spotlight";
import Link from "next/link";
import Navbar from "../components/ui/Navbar1";
import BottomNav from "../components/ui/BottomNav1";
import Image from "next/image";

export default function Home() {
  const avail: string[] = [
    "Rewiring",
    "Transforming",
    "Rewriting",
    "Modernizing",
    "Elevating",
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-row w-100 h-[82vh] bg-black rounded-3xl mx-5 pl-20">
        <Spotlight className="right-0" />
        <div className="flex w-[70%] my-auto flex-col z-20">
          <div className="relative w-[400px] mb-32">
            <FlipWords
              words={avail}
              duration={3000}
              className="absolute text-9xl font-bold text-white w-full text-center"
            />
          </div> 
          <p className="text-9xl font-bold text-white text-opacity-50 mb-10">
            Status Quo
          </p>

          <Link
            href="/contact"
            className="text-white border-2 border-white px-5 py-3 rounded-full text-lg hover:opacity-100 hover:transition-all transition-all opacity-100 w-fit"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex w-[50%] h-[100%] mr-auto mt-auto">
          <Image
            src="/buildings.png"
            width={600}
            height={600}
            alt="buildings"
            className="flex mx-auto"
          />
        </div>
      </div>

      <div className="w-full h-[100vh] px-10 flex m-10">
        <div className="flex w-1/2 translate-y-6 ">
          <Image
            src="/compass.gif"
            height={700}
            width={700}
            alt="compass"
            className="flex m-auto hover:scale-105 hover:transition transition "
          ></Image>
        </div>
        <div className="w-[70%]  h-fit flex flex-col justify-center my-auto ">
          <p className="text-5xl font-black mb-10">Who are we?</p>
          <div className="w-[70%] ">
            <p className="mr-10 text-xl">
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
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[100vh] flex flex-col pt-10">
        <div className="h-fit flex flex-col my-auto">
          <p className="text-5xl font-black mb-10 text-center">
            How we empower our clients?
          </p>

          <div className="flex px-10 pt-10 space-x-10 justify-center">
            <div className="flex w-96 h-96 bg-black rounded-3xl cursor-pointer hover:scale-105 duration-300">
              <div className="h-fit mx-auto my-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#facc15"
                  className="size-10 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="text-xl font-bold text-white px-10 text-center">
                  Strategic Communications & Public Relations
                </p>
              </div>
            </div>

            <div className="flex w-96 h-96 bg-black rounded-3xl cursor-pointer hover:scale-105 duration-300">
              <div className="h-fit mx-auto my-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#facc15"
                  className="size-10 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                  />
                </svg>

                <p className="text-xl font-bold text-white px-10 text-center">
                  Public Policy & <br />
                  Regulatory Affairs
                </p>
              </div>
            </div>

            <div className="flex w-96 h-96 bg-black rounded-3xl cursor-pointer hover:scale-105 duration-300">
              <div className="h-fit mx-auto my-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#facc15"
                  className="size-10 mx-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <p className="text-xl font-bold text-white px-10 text-center">
                  Research &<br />
                  Collateral Devlopment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-100 h-[100vh] bg-black">
        <div className=" flex m-auto h-fit">
          <p className="text-white text-3xl font-bold">Client & Work Ui</p>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
