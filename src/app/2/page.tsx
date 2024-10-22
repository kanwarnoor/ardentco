import Link from "next/link";
import React from "react";
// import { FlipWords } from "../components/ui/flip-words";

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
      <div className={`w-full h-16 text-black flex fixed z-50 bg-white`}>
        <div className={`flex pl-10 justify-center items-center duration-300`}>
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

      <div className="flex flex-col w-full h-screen bg-black bg-grid-white/[0.2]">
      <div className="flex mt-16 pt-20 h-fit mx-auto">
            <p className="text-6xl font-black text-white">
              THE IDEOLOGY
            </p>
      </div>
        <div className="flex flex-col m-auto ">
          {messages.map((message, index) => {
            return (
              <>
                <p className="flex text-4xl font-bold text-white" key={index}>
                  {/* <FlipWords/> */}
                  {message.message}
                </p>{" "}
                <br />
                <p
                  className="flex ml-auto italic text-3xl font-bold text-white mb-10"
                  key={index}
                >
                  {"-" + message.who}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
