import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [overlap, setOverlap] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = window.outerHeight;

      if (height >= 1000) {
        if (scroll >= 48 && scroll <= 798) {
          setOverlap("text-white");
        } else if (scroll >= 798 && scroll <= 2712) {
          setOverlap("text-black");
        } else if (scroll >= 2712) {
          setOverlap("text-white");
        } else {
          setOverlap("text-black");
        }
      } else if (height >= 800) {
        if (scroll >= 45 && scroll <= 641) {
          setOverlap("text-white");
        } else if (scroll >= 641 && scroll <= 2204) {
          setOverlap("text-black");
        } else if (scroll >= 2204) {
          setOverlap("text-white");
        } else {
          setOverlap("text-black");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

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
