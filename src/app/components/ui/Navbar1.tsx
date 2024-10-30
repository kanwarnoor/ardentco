import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-16 text-black flex fixed z-50 ${
          scrolled ? "text-black bg-white" : "text-white "
        } duration-300 shadow-`}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`flex justify-center items-center pl-10`}
        >
          <Link className="text-xl font-bold cursor-pointer" href="/">
            Ardent Co.
          </Link>
        </motion.div>

        <div
          className={`flex ml-auto text-center justify-center items-center mr-10 ${
            scrolled ? "show" : "hidden"
          }`}
        >
          <Link
            href=""
            className="flex justify-center items-center w-32 h-10 bg-yellow-400 rounded-full font-medium"
          >
            {"Let's Connect"}
          </Link>
        </div>
      </div>
    </>
  );
}
