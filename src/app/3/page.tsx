"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/ui/Footer";

export default function Home() {
  const links = ["Home", "About us", "Manifesto", "Connect"];
  const key = 1;
  const year = new Date().getFullYear();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return (
    <>
      <main className="md:block hidden">
        <div
          className={`w-full h-16 flex fixed z-50 duration-300 ${
            scrolled ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div
            className={`flex pl-10 justify-center items-center duration-300`}
          >
            <Link className="text-xl font-bold cursor-pointer" href="/">
              Ardent Co.
            </Link>
          </div>

          <div className="flex flex-row ml-auto mr-10 ">
            <ul className="flex space-x-10 m-auto">
              {links.map((link, index) => {
                return (
                  <>
                    <Link
                      href={link == "Home" ? "/" : ""}
                      className={`${
                        key == index ? "underline" : ""
                      } cursor-pointer`}
                      key={index}
                    >
                      {link}
                    </Link>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pt-16 h-fit">
          <p className="text-6xl font-black text-center mx-auto  w-fit mt-20">
            About us
          </p>
          <div className="w-[60%] mx-auto">
            <p className="text-xl font-bold text-center mt-5">
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

          <p className="text-6xl font-black text-center mx-auto w-fit mt-20">
            Our perspectives
          </p>
          <div className="flex flex-row w-fit h-fit mt-10 space-x-10 mx-auto flex-wrap">
            <div className="flex w-96 h-96 bg-[url(/money.jpg)] bg-cover bg-[center_top_70%] rounded-xl cursor-pointer hover:scale-[1.05] duration-300">
              <div className="flex w-full h-[30%] mt-auto rounded-b-xl">
                <p className="flex text-center m-auto text-white font-bold text-xl">
                  Making Sense of Union <br /> Budget {year - 1} - {year}
                </p>
              </div>
            </div>

            <div className="flex w-96 h-96 bg-[url(/globe3.jpg)] bg-cover bg-[50%_50%] rounded-xl cursor-pointer hover:scale-[1.05] duration-300">
              <div className="flex w-full h-[30%] mt-auto rounded-b-xl">
                <p className="flex text-center m-auto text-white font-bold text-xl">
                  Strengthening India&apos;s Focus on Investments in Climate
                  Adaptation
                </p>
              </div>
            </div>

            <div className="flex w-96 h-96 bg-[url(/abstract.jpg)] bg-cover bg-[50%_50%] rounded-xl cursor-pointer hover:scale-[1.05] duration-300">
              <div className="flex w-full h-[30%] mt-auto rounded-b-xl">
                <p className="flex text-center m-auto text-white font-bold text-xl">
                  Brief on Strengthening Quantum Applications Ecosystem in India
                </p>
              </div>
            </div>
          </div>

          <p className="text-6xl font-black text-center mx-auto w-fit mt-20">
            Our views in media
          </p>

          <div className="flex flex-wrap mx-auto mt-5 py-5 px-20 gap-5 text-white cursor-pointer w-fit justify-center">
            <div className="flex w-[400px] h-[200px] bg-black rounded-xl hover:scale-105 duration-300">
              <div className="w-[170px] h-[170px] my-auto ml-4 rounded-xl bg-[url(/globe2.jpg)] bg-cover bg-center duration-300"></div>
              <div className="flex flex-col w-[192px] my-4 mx-auto rounded-xl">
                <p className="font-bold text-xl">
                  Navigating Climate Financing
                </p>
                <a
                  className="flex font-medium text-base mt-auto underline"
                  href=""
                >
                  Read more {"->"}
                </a>
              </div>
            </div>

            <div className="flex w-[400px] h-[200px] bg-black rounded-xl hover:scale-105 duration-300">
              <div className="w-[170px] h-[170px] my-auto ml-4 rounded-xl bg-[url(/upi.webp)] bg-cover bg-[35%]"></div>
              <div className="flex flex-col w-[192px] my-4 mx-auto rounded-xl">
                <p className="font-bold text-xl">
                  UPI&apos;s global rise shows India as a digital trailblazer
                </p>
                <a
                  className="flex font-medium text-base mt-auto underline"
                  href=""
                >
                  Read more {"->"}
                </a>
              </div>
            </div>

            <div className="flex w-[400px] h-[200px] bg-black rounded-xl hover:scale-105 duration-300">
              <div className="w-[170px] h-[170px] my-auto ml-4 rounded-xl bg-[url(/workplace.jpg)] bg-cover bg-[35%]"></div>
              <div className="flex flex-col w-[192px] my-4 mx-auto rounded-xl">
                <p className="font-bold text-xl">
                  Embracing empathy in the workplace landscape
                </p>
                <a
                  className="flex font-medium text-base mt-auto underline"
                  href=""
                >
                  Read more {"->"}
                </a>
              </div>
            </div>

            <div className="flex w-[400px] h-[200px] bg-black rounded-xl hover:scale-105 duration-300">
              <div className="w-[170px] h-[170px] my-auto ml-4 rounded-xl bg-[url(/baby.jpg)] bg-cover bg-center"></div>
              <div className="flex flex-col w-[192px] my-4 mx-auto rounded-xl">
                <p className="font-bold text-xl">
                  India&apos;s neonatal burden and the challenges ahead
                </p>
                <a
                  className="flex font-medium text-base mt-auto underline"
                  href=""
                >
                  Read more {"->"}
                </a>
              </div>
            </div>

            <div className="flex w-[400px] h-[200px] bg-black rounded-xl hover:scale-105 duration-300">
              <div className="w-[170px] h-[170px] my-auto ml-4 rounded-xl bg-[url(/metal.jpg)] bg-cover bg-[35%]"></div>
              <div className="flex flex-col w-[192px] my-4 mx-auto rounded-xl">
                <p className="font-bold text-xl">
                  Making India the Clean Durable Metals Hub
                </p>
                <a
                  className="flex font-medium text-base mt-auto underline"
                  href=""
                >
                  Read more {"->"}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20"></div>
        <Footer theme="dark"/>
      </main>

      <main className="md:hidden block">
        <div className="flex w-full h-[100vh] bg-black">
          <div className="flex flex-col w-fit h-fit m-auto  text-center">
            <p className="text-white text-3xl font-black">View on desktop</p>
            <p className="text-white text-xs font-medium">
              mobile version not complete yet.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
