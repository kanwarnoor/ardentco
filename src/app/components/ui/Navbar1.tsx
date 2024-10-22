import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [overlap, setOverlap] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate relative scroll positions
      const firstThreshold = 0.04 * windowHeight;  // 4% of viewport height
      const secondThreshold = 0.75 * windowHeight; // 75% of viewport height
      const thirdThreshold = 2.5 * windowHeight;   // 250% of viewport height
  
      if (scrollPosition > firstThreshold && scrollPosition < secondThreshold) {
        setOverlap("text-white");
      } else if (scrollPosition > secondThreshold && scrollPosition < thirdThreshold) {
        setOverlap("text-black");
      } else if (scrollPosition > thirdThreshold) {
        setOverlap("text-white");
      } else if (scrollPosition < firstThreshold) {
        setOverlap("text-black");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);  // Cleanup listener on unmount
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
