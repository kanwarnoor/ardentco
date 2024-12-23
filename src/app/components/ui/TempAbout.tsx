import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Queen from "@/app/components/ui/Queen";

export default function About() {
  const [para, setPara] = useState(0);
  const [angle, setAngle] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const angles = [0, 90, 180, 270, 360];
    // setCompass(angles[para]);
    setAngle(para * 90);

    const interval = setInterval(() => {
      setPara((prev) => prev + 1);
    }, 10000);

    if (para >= angles.length) {
      setPara((prev) => prev - angles.length);
    }

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [para]);

  return (
    <div className="flex w-full md:h-[100vh] h-[120vh] min-h-screen z-10 ">
      <div className="w-fit flex m-auto md:flex-row flex-col">
        {/* compass */}

        <motion.div
          className="flex relative z-10 md:mr-20 md:w-[400px] w-fit md:h-[700px] h-[250px] md:justify-center md:items-center m-auto"
          initial={{
            opacity: 0,
            ...(isMobile ? { y: -50 } : { x: -50 }),
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            amount: 0.3,
          }}
        >
          <Queen angle={angle} />
        </motion.div>
        {/* <div className="h-fit">
          <Queen angle={0} />
        </div> */}
        {/* paras */}
        <div className="md:w-[700px] md:p-0 p-10 text-center md:text-left h-fit flex flex-col justify-center my-auto">
          {para == 0 && (
            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  transform: "translateY(-50%)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0%)",
                }}
                viewport={{
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                className="md:text-5xl text-2xl font-black mb-5 text-ardent"
              >
                About us
              </motion.p>
              <div className="">
                <motion.p
                  initial={{
                    opacity: 0,
                    transform: "translateY(10%)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0%)",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{
                    amount: 0.5,
                  }}
                  className="md:mr-10 md:text-xl text-[14px]"
                >
                  Ardent Co. is a dynamic communications, research, and public
                  policy advisory firm dedicated to crafting purpose-driven
                  strategies that empower clients to create meaningful impact.
                  With a focus on innovative, data-driven insights and powerful
                  storytelling, we bridge the gap between ambition and action,
                  helping organizations navigate complex landscapes to achieve
                  transformative outcomes. Our expertise lies in aligning public
                  policy, research, and communication to foster authentic
                  engagement, ensuring our clients not only meet their goals but
                  also drive positive change in the world.
                </motion.p>
              </div>
            </div>
          )}

          {para == 1 && (
            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  transform: "translateY(-50%)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0%)",
                }}
                viewport={{
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                className="md:text-5xl text-2xl font-black mb-5 text-ardent"
              >
                The Ideology
              </motion.p>
              <div className="">
                <motion.p
                  initial={{
                    opacity: 0,
                    transform: "translateY(10%)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0%)",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{
                    amount: 0.5,
                  }}
                  className="md:mr-10 md:text-xl text-[14px]"
                >
                  Ardent Co. is more than a company; it embodies a vision and
                  aspires to become an institution. Our journey through
                  communications, public policy, research, and brand advisory
                  shaped our aspirations for our work, teams, and ecosystem
                  role. Realizing these aspirations required courage to break
                  from convention, which is central to who we are and what we
                  attract. Envisioned in 2018 as a fictional entity, Ardent Co.
                  evolved into a tangible idea and became reality in late 2022.
                  This manifesto reflects our commitment to staying true to our
                  vision and our stakeholders.
                </motion.p>
              </div>
            </div>
          )}

          {para == 2 && (
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateY(-50%)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0%)",
                }}
                viewport={{
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                className="md:text-5xl text-2xl font-black mb-5 text-ardent"
              >
                “To our people, who work, trust and are on this journey with us”{" "}
                <p className="font-bold md:text-3xl text-lg italic"> - Team </p>
              </motion.div>

              <div className="">
                <motion.p
                  initial={{
                    opacity: 0,
                    transform: "translateY(10%)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0%)",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{
                    amount: 0.5,
                  }}
                  className="md:mr-10 md:text-xl text-[14px]"
                >
                  Ardent Co. will always be a sandbox for inspired, driven
                  professionals Ardent Co. will never limit itself by any
                  notions and perceptions Ardent Co. will encourage, both,
                  thinkers, and doers, and serve as an ecosystem for unleashing
                  inhibited potential
                </motion.p>
              </div>
            </div>
          )}

          {para == 3 && (
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateY(-50%)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0%)",
                }}
                viewport={{
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                className="md:text-5xl text-2xl font-black mb-5 text-ardent"
              >
                “To the brands, institutions and leaders who are with us on this
                journey”
                <br />{" "}
                <p className="font-bold md:text-3xl text-lg italic">
                  {" "}
                  - Partners{" "}
                </p>
              </motion.div>
              <div className="">
                <motion.p
                  initial={{
                    opacity: 0,
                    transform: "translateY(10%)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0%)",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{
                    amount: 0.5,
                  }}
                  className="md:mr-10 md:text-xl text-[14px]"
                >
                  Ardent Co. will always work as partners with you, harmonized
                  with an in-depth appreciation of your goals, targets, and
                  vision. Ardent Co.’s strategy and work will always be
                  intellectually sound, driven by our principles of research,
                  coherence, and cogent interventions. Ardent Co. will always
                  maintain a solution-oriented mindset, regardless of the
                  onerosity of the mandate
                </motion.p>
              </div>
            </div>
          )}

          {para == 4 && (
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translateY(-50%)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0%)",
                }}
                viewport={{
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.5,
                  ease: easeInOut,
                }}
                className="md:text-5xl text-2xl font-black mb-5 text-ardent"
              >
                “To the industry, nation, and the world we live in”
                <br />{" "}
                <p className="font-bold md:text-3xl text-lg italic">
                  {" "}
                  - Ecosystem{" "}
                </p>
              </motion.div>
              <div className="">
                <motion.p
                  initial={{
                    opacity: 0,
                    transform: "translateY(10%)",
                  }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(0%)",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  viewport={{
                    amount: 0.5,
                  }}
                  className="md:mr-10 md:text-xl text-[14px]"
                >
                  Ardent Co. is dedicated to developing fresh perspectives and
                  innovative approaches across all its operations. We aim to
                  support national growth by leveraging our expertise to
                  research, develop, and propose impactful solutions. Committed
                  to contributing positively to technological, environmental,
                  and societal transformations, we strive to leave a lasting
                  legacy in collaboration with like-minded individuals. Inspired
                  by history&apos;s greats—artists, leaders, scientists—our
                  journey centers on excellence in every endeavor.
                </motion.p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute w-screen bottom-0 text-center flex justify-center">
        <div className="mb-5 absolute bottom-0 w-[50%] h-10 flex items-center justify-center space-x-2">
          <div
            className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 ${
              para == 0 ? "bg-neutral-200" : "bg-neutral-500"
            } duration-300`}
            onClick={() => setPara(0)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 ${
              para == 1 ? "bg-neutral-200" : "bg-neutral-500"
            } duration-300`}
            onClick={() => setPara(1)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full cursor-pointer hover:scale-110 ${
              para == 2 ? "bg-neutral-200" : "bg-neutral-500"
            } duration-300`}
            onClick={() => setPara(2)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full  cursor-pointer hover:scale-110 ${
              para == 3 ? "bg-neutral-200" : "bg-neutral-500"
            } duration-300`}
            onClick={() => setPara(3)}
          ></div>
          <div
            className={`w-4 h-4 rounded-full  cursor-pointer hover:scale-110 ${
              para == 4 ? "bg-neutral-100" : "bg-neutral-500"
            } duration-300`}
            onClick={() => setPara(4)}
          ></div>
        </div>
      </div>

      <div
        className="absolute md:w-20 w-10 h-screen left-0 text-center mb-5 flex justify-center items-center cursor-pointer hover:scale-110 z-10"
        onClick={() => setPara((prev) => (prev != 0 ? prev - 1 : prev))}
      >
        <div className="absolute left-0 w-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <div
        className="absolute md:w-20 w-10 h-screen right-0 text-center mb-5 flex justify-center items-center cursor-pointer hover:scale-110"
        onClick={() => setPara((prev) => (prev != 4 ? prev + 1 : prev))}
      >
        <div className="absolute w-full flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
