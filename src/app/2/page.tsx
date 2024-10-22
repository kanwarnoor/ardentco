import Link from "next/link";
import React from "react";

export default function Home() {
  const links = ["Home", "Manifesto", "Services", "Connect"];
  const key = 1;
  return (
    <>
      <div className={`w-full h-16 text-black flex fixed z-50 `}>
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
      <div className="w-100 h-16 bg-white-200 "></div>

      <div className="flex w-full h-screen bg-red-200">
        <p className="flex m-auto text-4xl font-black">OUR IDEOLOGY</p>
      </div>
    </>
  );
}
