"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Lander from "../components/ui/Lander";
import InfoCard from "../components/ui/InfoCard";
import { useInView } from "react-intersection-observer";

export default function Page() {
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
      <Navbar intersecting={intersecting}/>
      <Lander
        image={"/perspective.jpg"}
        heading1={"Our"}
        heading2="Perspectives"
      />
      <section className=" w-full min-h-screen h-fit bg-white bg-dot-black/[0.5] flex" ref={ref}>
        <div className="flex md:flex-row flex-col gap-10 m-auto py-20">
          <InfoCard
            title1={"Making Sense of"}
            title2="Union Budget"
            description={
              "As echoed by one of the most respected Secretaries to have led the Department of Economic Affairs, the Union-Budget assumes an unparalleled significance for our country."
            }
            animation="left"
            image={"/budget.png"}
            link="/budget.pdf"
          />

          <InfoCard
            title1={"Strengthening India’s Focus on"}
            title2="Investments in Climate Adaptation"
            description={
              "The world experienced its hottest day ever on Tuesday, July 4, breaking a record set just the day before. Last week, China experienced its highest-ever temperature"
            }
            animation="center"
            image={"/climate.png"}
            link="/climate.pdf"
          />

          <InfoCard
            title1={"Brief On Strengthening Quantum "}
            title2="Applications Ecosystem in India"
            description={
              "The Department of Science & Technology (DST), which operates under the Ministry of Science & Technology, will be responsible for implementing the National Mission for Quantum Technologies and Applications (NM-QTA) between 2023-24 and 2030-31."
            }
            animation="right"
            image={"/NQM.png"}
            link="/NQM.pdf"
          />
        </div>
      </section>
      <Footer theme="dark" />
    </>
  );
}
