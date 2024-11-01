"use client";

import { easeInOut, motion } from "framer-motion";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import Navbar from "./components/ui/Navbar";
import About from "./components/ui/about";
import Footer from "./components/ui/Footer";
import Counter from "./components/ui/Counter";
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
      <Counter />
      <Navbar />
      <section
        id="home"
        className="w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-black text-black "
      >
        <motion.video
          initial={{
            scale: 0.8,
            borderRadius: "1rem",
          }}
          animate={{
            scale: 1,
            borderRadius: "0px",
          }}
          transition={{
            duration: 0.3,
          }}
          src="/street.mp4"
          autoPlay
          loop
          muted
          className="absolute object-cover inset-0 w-full h-full scale-90 rounded-none"
        >
          Your browser does not support the video tag.
        </motion.video>
        <div>
          <FlipWords
            words={avail}
            duration={3000}
            className="text-9xl font-bold text-center"
          />
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
            }}
            transition={{
              duration: 1,
            }}
            className="text-7xl font-bold"
          >
            Status Quo
          </motion.p>{" "}
          <br />
          <motion.div
            className="w-fit flex mx-auto absolute justify-center text-center left-0 right-0"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 1,
              transition: { duration: 0.1 },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.9 } }}
          >
            <Link
              href=""
              className="text-xl border-2 font-bold border-black px-5 py-2 rounded-full"
            >
              Book a call
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-white w-full h-screen" id="about">
        <About />
      </section>

      <section className="bg-white flex w-full h-screen" id="enable">
        <div className="flex flex-col w-full h-fit m-auto justify-center items-center">
          <motion.p
            initial={{
              opacity: 0,
              transform: "translateY(-50%)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateY(0%)",
            }}
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
            
            viewport={{ amount: 0.5 }}
            className="text-5xl font-black"
          >
            How we enable our clients
          </motion.p>

          {/* edit here */}
          <div className="flex w-fit m-auto space-x-5 mt-10">
            <motion.div
              initial={{
                opacity: 0,
                x: "-10%",
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                amount: 0.5
              }}
              className="flex flex-col w-[30vw] h-[450px] bg-black rounded-2xl"
            >
              <motion.div className="bg-red-200 w-full h-[60%] rounded-t-2xl">
                <Image
                  src="/SaturnRoman.jpg"
                  width={0}
                  height={0}
                  sizes="100% 100%"
                  alt="Saturn Roman"
                  className="w-full h-full rounded-t-2xl object-cover object-bottom"
                ></Image>
                <p className="text-center text-white text-xs font-medium mt-1 opacity-80">
                  Temple of Saturn Roman - Rome
                </p>
              </motion.div>
              <div className="w-fit h-fit m-auto">
                <p className="text-white font-bold text-xl text-center">
                  Stragetic Comunications & <br /> Public Relations
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                },
              }}

              transition={{
                duration: 0.5,
              }}
              viewport={{
                amount: 0.5
              }}
              className="flex flex-col w-[30vw] h-[450px] bg-black rounded-2xl"
            >
              <div className="bg-red-200 w-full h-[60%] rounded-t-2xl">
                <Image
                  src="/unitednations.jpg"
                  width={0}
                  height={0}
                  sizes="100% 100%"
                  alt="Saturn Roman"
                  className="w-full h-full rounded-t-2xl object-cover object-center"
                ></Image>
                <p className="text-center text-white text-xs font-medium mt-1 opacity-80">
                  United Nations Headquarters - Manhatten
                </p>
              </div>
              <div className="w-fit h-fit m-auto">
                <p className="text-white font-bold text-xl text-center">
                  Public Policy and <br /> Regulatory Affairs
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: "10%",
              }}
              animate={{
                transition: {
                  duration: 0.5,
                },
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                amount: 0.5
              }}
              className="flex flex-col w-[30vw] h-[450px] bg-black rounded-2xl"
            >
              <div className="bg-red-200 w-full h-[60%] rounded-t-2xl">
                <Image
                  src="/LibraryAlexandriaEgypt.jpg"
                  width={400}
                  height={500}
                  sizes="100% 100%"
                  alt="Saturn Roman"
                  className="w-full h-full rounded-t-2xl object-cover object-bottom"
                ></Image>
                <p className="text-center text-white text-xs font-medium mt-1 shadow-2xl opacity-80">
                  The Library of Alexandria - Egypt
                </p>
              </div>
              <div className="w-fit h-fit m-auto">
                <p className="text-white font-bold text-xl text-center">
                  Research & <br /> Collateral Development
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer theme="dark" />
    </>
  );
}
