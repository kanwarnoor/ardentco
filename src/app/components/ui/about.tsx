// link para and i together

"use client";

import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  const [compass, setCompass] = useState(0);
  const [para, setPara] = useState(0);

  useEffect(() => {
    const angles = [0, 90, 180, 270, 360];
    let i = 1;
    const interval = setInterval(() => {
      setCompass(angles[i]);
      setPara(i);
      i++;

      if (i >= angles.length) {
        i = 0;
      }
    }, 10000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen z-10">
      <div className="w-fit h-fit flex m-auto">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            amount: 0.3,
          }}
          className="relative z-10 mr-10 w-[400px] h-screen flex justify-center items-center"
        >
          <Image
            src="/compass.png"
            height={400}
            width={400}
            className="absolute rounded-full"
            alt="compass "
          ></Image>
          <motion.div
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: compass,
            }}
            className="absolute w-[400px] h-[400px]  rounded-full"
          >
            <Image
              src="/compassPointer.png"
              height={0}
              width={0}
              sizes="100% 100%"
              className="absolute w-full h-full"
              alt="compass"
            ></Image>
          </motion.div>
        </motion.div>

        <div className="w-[700px] h-fit flex flex-col justify-center my-auto">
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
                className="text-5xl font-black mb-5"
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
                  className="mr-10 text-xl"
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
                className="text-5xl font-black mb-5"
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
                  className="mr-10 text-xl"
                >
                  Ardent Co, in its shape today is a company. In its soul,{" "}
                  {"it’s"}a vision. In its intentions {"it’s"} journeying to
                  become an institution.In our experience of working in the
                  fields of communications, public policy, research, and brand
                  advisory, we developed aspirations of how the work, teams, and
                  our role in the ecosystem should be.But aspirations are only
                  dreams. Until, there is the madness (read: courage) to throw
                  your hands in the sand, and depart from the safety of
                  conventionality. That is what we did, and that is what we
                  attract. In 2018, Ardent Co. was envisioned as an unnamed
                  fictional entity. In the next three and a half years it was
                  shaped into the idea of a company. In late 2022, it was born.
                  As founders, to stay honest to the vision of Ardent Co, we
                  have written this manifesto to engrave our commitments to our
                  stakeholders, of what Ardent Co will always be.
                </motion.p>
              </div>
            </div>
          )}

          {para == 2 && (
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
                className="text-5xl font-black mb-5"
              >
                “To our people, who work, trust and are on this journey with us”{" "}
                <br /> <p className="font-bold text-3xl italic"> - Team </p>
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
                  className="mr-10 text-xl"
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
                className="text-5xl font-black mb-5"
              >
                “To the brands, institutions and leaders who are with us on this
                journey”
                <br /> <p className="font-bold text-3xl italic"> - Partners </p>
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
                  className="mr-10 text-xl"
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
                className="text-5xl font-black mb-5"
              >
                “To the industry, nation, and the world we live in”
                <br />{" "}
                <p className="font-bold text-3xl italic"> - Ecosystem </p>
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
                  className="mr-10 text-xl"
                >
                  Ardent Co. will always strive towards developing fresh
                  perspectives and novel approaches in all the verticals we
                  operate in. Ardent Co. will seek to support the nation’s
                  growth and priorities, by leveraging its capacities and
                  expertise for researching, developing, and recommending
                  innovative solutions and interventions. Ardent Co. will seek
                  to positively contribute to the planet’s metamorphosis,
                  standing at the cusp of a technological transformation,
                  environmental transition, and societal evolution As founders,
                  we are committed to the vision of creating a legacy, achieved
                  in collaboration with a cohort of right individuals.In a world
                  of billions of human beings, it takes a committed, driven, and
                  resolute human to leave a mark. A mark which survives through
                  generations.Inspired by the great artists, leaders, scientists
                  who shaped the world we live in today, we are on a journey to
                  incubate the touch of excellence in all of our work and
                  actions.That is who we are. What we believe in, and what we
                  will always attract.
                </motion.p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* add bottom navigation on paras */}
      <div className="absolute bg-red-200 w-screen bottom-0 text-center mb-5 flex justify-center">
        <div className="absolute bottom-0 w-[50%] h-10 bg-green-200 flex items-center justify-center">
          dfsadas
        </div>
      </div>

      <div
        className="absolute w-20 h-screen left-0 text-center mb-5 flex justify-center items-center cursor-pointer hover:scale-110"
        onClick={() => setPara((prev) => (prev != 0 ? prev - 1 : prev))}
      >
        <div className="absolute left-0 w-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
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
        className="absolute w-20 h-screen right-0 text-center mb-5 flex justify-center items-center cursor-pointer hover:scale-110"
        onClick={() => setPara((prev) => (prev != 4 ? prev + 1 : prev))}
      >
        <div className="absolute w-full flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
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
