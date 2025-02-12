"use client";

import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Options from "../components/ui/Options";

export default function Page() {
  const content = [
    {
      title: "Team Development",
      description:
        "When creating a new vertical or team, we assist you in defining the roles, responsibilities, and structure to align talent with organisational objectives.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Targeted Talent Acquisition",
      description:
        "We provide customized hiring solutions by deeply understanding your organization’s unique needs. Our tailored recruitment strategies help you attract the right talent that aligns with your company’s culture and long-term vision.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      title: "Executive Search and Fitment",
      description:
        "We advise senior management in identifying top-tier leadership talent for critical roles. Our experts conduct comprehensive market analysis to find the right fit, ensuring your senior team brings the expertise necessary for growth and innovation.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      ),
    },
    {
      title: "Remote HR Office",
      description:
        "We offer a complete remote HR solution, minimizing the need for external HR support. Our services include policy development, culture-building engagement programs, psychometric assessments, strategic planning, and compliance management designed to drive organizational effectiveness.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    },
    {
      title: "Learning and Development",
      description:
        "We help identify skill gaps within your company and create customized learning and development plans to build proficiency across roles. By bringing in veterans from the industry and developing a tailored curriculum, we support your organization in enhancing capability and achieving strategic objectives.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="  duration-300 stroke-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
  ];

  const { ref: ref, inView: refInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (refInView) {
      setIntersecting(true);
    } else {
      setIntersecting(false);
    }
    // console.log("Home: " + enableInView);

    // console.log("enable: " + enableInView);
  }, [refInView]);

  return (
    <>
      <Navbar left={intersecting} right={intersecting} />
      <Lander
        image="/banner/nexus.png"
        heading1="Talent Nexus"
        heading2="Solutions"
        css="text-white"
      />

      <section
        className="relative bg-neutral-950 text-white bg-dot-black/[0.5] w-full h-auto min-h-screen"
        id="more"
        ref={ref}
      >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(circle,white_10%,transparent_100%)] z-0"></div> */}

        <div className="relative m-auto flex flex-col w-full h-auto pt-20 z-10 justify-center items-center min-h-screen gap-5">
          <div className="flex flex-wrap justify-center w-full h-fit text-center gap-5 mx-auto ">
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className=" flex flex-col m-auto mt-20 justify-center items-center"
            >
              <p className="md:text-5xl text-2xl font-black px-20 pb-10 text-center">
                Digital Communications
              </p>
              <p className="md:px-32 px-20 md:text-2xl text-base text-center opac">
                Our Digital Communications vertical builds your brand&apos;s
                online presence with targeted social media planning and
                execution, powerful brand campaigns, and influencer work that
                drives and lifts engagement. We leverage performance marketing
                to maximize ROI, optimize visibility through SEO advisory, and
                bring your vision to life with innovative creative design and
                development. Together, we craft integrated campaigns that drive
                measurable success.
              </p>
            </motion.div>
            <div className="w-1/3 h-1 bg-white/20 rounded-full my-10"></div>
            <Options content={content} />
            
          <div className="mb-20"></div>
          </div>
        </div>
      </section>

      <Footer theme={"dark"} />
    </>
  );
}
