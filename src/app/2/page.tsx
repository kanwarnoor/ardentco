import Link from "next/link";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import Footer from "../components/ui/Footer";

export default function Home() {
  const links = ["Home", "Manifesto", "Services", "Connect"];
  const key = 1;

  const messages = [
    {
      message:
        "To our people, who work, trust and dare on this journey with us.",
      who: "Team",
    },
    {
      message:
        "To the brands, institutions and leaders who are with us on this journey.",
      who: "Partners",
    },
    {
      message: "To the industry, nation, and the world we live in.",
      who: "Ecosystem",
    },
  ];
  return (
    <>
      <main className="md:block hidden">
        <div className={`w-full h-16 text-black flex fixed z-50 bg-white`}>
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

        <div className="flex flex-col w-full h-[100vh] bg-black bg-grid-white/[0.2]">
          <div className="flex mt-16 pt-20 h-fit mx-auto ">
            <p className="text-6xl font-black text-black bg-yellow-400 px-4 py-2">
              THE IDEOLOGY
            </p>
          </div>
          <div className="flex flex-col w-1/3 m-auto">
            <span className="flex text-4xl font-black text-white w-fit rounded italic mb-5 ml-4">
              <FlipWords
                words={messages.map((item) => item.who)}
                duration={5000}
              />{" "}
              :
            </span>
            <span className="flex text-4xl font-bold text-white w-fit rounded text-center">
              <FlipWords
                words={messages.map((item) => item.message)}
                duration={5000}
              />
            </span>
            <br />
          </div>

          <p className="text-neutral-300 text-base font-medium text-center mx-auto pb-20">
            Ardent Co. will always be a sandbox for inspired, driven
            professionals. <br />
            Ardent Co. will never limit itself by any notions and perceptions.{" "}
            <br />
            Ardent Co. will encourage both thinkers and doers, and serve as an
            ecosystem for unleashing untapped potential.
          </p>
        </div>
        <Footer theme="dark" />
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
