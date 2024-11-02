import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";

export default function Contact() {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [zindex, setZindex] = useState("z-10");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!clicked1) {
      timer = setTimeout(() => {
        setZindex("z-0");
      }, 500);
    } else {
      setZindex("z-20");
    }

    return () => {
      clearTimeout(timer);
    };
  }, [clicked1]);

  return (
    <div className="flex flex-row w-[100%]">
      {/* left option */}
      <div className="w-[50%] h-screen">
        <div className="flex flex-col absolute w-[50%] h-screen bg-yellow-200">
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: clicked ? 1 : 0,
            }}
            transition={{
              delay: clicked ? 0.5 : 0,
              duration: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            onClick={() => setClicked(false)}
            className={`flex size-10 mt-5 ml-auto mr-5 hover:scale-110 transition hover:transition cursor-pointer z-50`}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </motion.svg>
          <div
            className={`flex flex-col items-center p-8 w-fit h-fit max-w-md m-auto `}
          >
            <form action="" className="space-y-4 w-full">
              <div className="flex justify-between space-x-2">
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="firstName"
                    className="text-black font-bold mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    className="px-4 py-2 border-black border-2 rounded focus:outline-none "
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="lastName"
                    className="text-black font-bold mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    className="px-4 py-2 border-black border-2 rounded"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-black font-bold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="px-4 py-2 border-black border-2 rounded"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-black font-bold mb-1">
                  Phone number
                </label>
                <div className="flex space-x-2">
                  <select className="px-4 py-2 border-black border-2 rounded bg-yellow-400 text-black font-bold">
                    <option>IND</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91xxxxxxxxxx"
                    className="px-4 py-2 border-black border-2 rounded flex-grow"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-black font-bold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us Message"
                  className="px-4 py-2 border-black border-2 rounded resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex  mx-auto mt-4 bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-black duration-300"
              >
                BOOK A CALL WITH US
              </button>
            </form>
          </div>
        </div>
        <motion.div
          initial={{
            x: "0%",
            backgroundSize: "100%",
          }}
          whileInView={{
            backgroundSize: "110%",
          }}
          viewport={{
            amount: 0.5,
          }}
          animate={{ x: clicked ? "100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          onClick={() => setClicked(true)}
          className={`absolute w-[50%] h-screen bg-[url('/handshake.jpg')] bg-center bg-cover bg-no-repeat ${
            clicked ? "z-20 cursor-auto" : "z-10 cursor-pointer"
          }`}
        >
          <div className="flex flex-col w-fit h-fit m-auto pt-5 mt-10">
            <motion.p
              initial={{
                opacity: 0,
                y: "-50%",
              }}
              whileInView={{
                opacity: 1,
                y: "0%",
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                amount: 0.3,
              }}
              className="text-black text-5xl font-bold text-center"
            >
              i am a <br />
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: "-50%",
              }}
              whileInView={{
                opacity: 1,
                y: "0%",
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                amount: 0.3,
              }}
              className="text-black text-9xl font-black"
            >
              CLIENT
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* right option */}
      <div className="flex w-[50%] h-screen bg-neutral-300">
        <div className="flex flex-col absolute w-[50%] h-screen">
          <motion.svg
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: clicked1 ? 1 : 0,
            }}
            transition={{
              delay: clicked1 ? 0.5 : 0,
              duration: 0,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            onClick={() => setClicked1(false)}
            className={`flex size-10 mt-5 mr-auto ml-5 hover:scale-110 transition hover:transition cursor-pointer z-50 `}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clipRule="evenodd"
            />
          </motion.svg>
          <div
            className={`flex flex-col items-center p-8 w-fit h-fit max-w-md m-auto `}
          >
            <form action="" className="space-y-4 w-full">
              <div className="flex justify-between space-x-2">
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="firstName"
                    className="text-black font-bold mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First name"
                    className="px-4 py-2 border-black border-2 rounded focus:outline-none "
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label
                    htmlFor="lastName"
                    className="text-black font-bold mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last name"
                    className="px-4 py-2 border-black border-2 rounded"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-black font-bold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="px-4 py-2 border-black border-2 rounded"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-black font-bold mb-1">
                  Phone number
                </label>
                <div className="flex space-x-2">
                  <select className="px-4 py-2 border-black border-2 rounded bg-yellow-400 text-black font-bold">
                    <option>IND</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91xxxxxxxxxx"
                    className="px-4 py-2 border-black border-2 rounded flex-grow"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-black font-bold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Leave us Message"
                  className="px-4 py-2 border-black border-2 rounded resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex  mx-auto mt-4 bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 hover:text-black duration-300"
              >
                BOOK A CALL WITH US
              </button>
            </form>
          </div>
        </div>
        <motion.div
          initial={{
            x: "0%",
          }}
          animate={{ x: clicked1 ? "-100%" : "0%" }}
          transition={{
            duration: 0.5,
            ease: easeInOut,
          }}
          onClick={() => setClicked1(true)}
          className={`flex absolute w-[50%] h-screen bg-neutral-900 ${zindex} ${
            clicked1 ? "cursor-auto" : "cursor-pointer"
          }`}
        >
          <div className={`h-fit w-fit m-auto pt-5`}>
            <motion.p
              initial={{
                opacity: 0,
                y: "50%",
              }}
              whileInView={{
                opacity: 1,
                y: "0%",
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                amount: 0.3,
              }}
              className="text-white text-5xl font-bold top-5 "
            >
              i wanna <br />
              work with <br />
            </motion.p>
            <motion.p
              initial={{
                opacity: 0,
                y: "50%",
              }}
              whileInView={{
                opacity: 1,
                y: "0%",
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                amount: 0.3,
              }}
              className="text-white text-9xl font-black underline"
            >
              YOU
            </motion.p>
          </div>
        </motion.div>
      </div>
      {/* <div className="absolute w-[50%] h-screen bg-red-200"></div>
      <div className="absolute right-0 w-[50%] h-screen bg-red-900"></div> */}
    </div>
  );
}
