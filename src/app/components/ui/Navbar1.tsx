import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [overlap, setOverlap] = useState("");

  useEffect(() => {
    const element = () => {
      console.log(window.scrollY);
      
      if (window.scrollY > 40 && window.scrollY < 796) {
        setOverlap("text-white");
      } else if (window.scrollY > 796 && window.scrollY < 2712) {
        setOverlap("text-black");
      } else if (window.scrollY > 2712) {
        setOverlap("text-white");
      } else if (window.scrollY < 40) {
        setOverlap("text-black");
      }
    };
    window.addEventListener("scroll", element);

    return () => {
      window.addEventListener("scroll", element);
    };
  });
  return (
    <>
      <div className={`w-full h-16 text-black flex fixed z-50`}>
        <div
          className={`flex pl-10 justify-center items-center duration-300 ${overlap}`}
        >
          <Link className="text-xl font-bold cursor-pointer" href="/">
            Ardent Co.
          </Link>
        </div>

        <div className="flex ml-auto text-center justify-center items-center mr-10">
          <Link
            href="/contact"
            className="flex justify-center items-center w-32 h-10 bg-yellow-400 rounded-full font-medium"
          >
            {"Let's Connect"}
          </Link>
        </div>
      </div>
      <div className="w-100 h-16 bg-white "></div>
    </>
  );
}
