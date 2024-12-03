"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import Lander from "../components/ui/Lander";
import Person from "../components/ui/Person";
import Footer from "../components/ui/Footer";
// import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Page() {
  const { ref: consultantRef, inView: consultantRefInView } = useInView({
    threshold: 0.25, // Fully visible
    rootMargin: "0px 0px 0px 0px",
  });

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  console.log(consultantRefInView);
  useEffect(() => {
    if (consultantRefInView) {
      setLeft(true);
      setRight(true);
    } else {
      setLeft(false);
      setRight(false);
    }
  }, [consultantRefInView]);
  return (
    <>
      <Navbar left={left} right={right} />
      <Lander heading1={"Meet Our Team"} css="bg-black text-white"></Lander>
      <div
        className="w-screen min-h-screen h-fit items-center justify-center flex flex-col "
        ref={consultantRef}
      >
        <div className="flex w-full h-fit text-center justify-center my-20">
          <p className="md:text-6xl text-5xl text-center font-black">
            Consultants
          </p>
        </div>

        <div className="w-[70%] h-full grid md:grid-cols-3 grid-cols-2 gap-10 mb-10">
          <Person
            name="Aditya Charan"
            image="/team/consultants/cofounder1.jpg"
            position="50% 20%"
            role="Co-Founder"
            theme="dark"
            link="https://www.linkedin.com/in/aditya-chaaran-801434166/"
            des1={`Aditya Charan is a cross-functional consultant with expertise in public-policy advisory, communications design and strategic interventions.

            Aditya has spent his career in working with a diverse set of clients on complex problems which has enabled him to bringing a fresh perspective to the table for clients.

            Leveraging his knowledge of Government policy frameworks and of market and social factors, Aditya has helped clients of all shapes in developing and executing long-term policy-regulatory strategies, conceptualizing sectoral advocacy narratives, designing ecosystem engagement strategies, undertaking crisis interventions etc.`}
            des2="Some of the sectors wherein Aditya has designed and executed interventions for his clients include finance, digital economy, infrastructure, consumer-retail, healthcare, mobility etc."
          />
          <Person
            name="Sarthak Choudhary"
            image="/team/consultants/cofounder2.jpg"
            role="Co-Founder"
            position="50% 5%"
            theme="dark"
            link="https://www.linkedin.com/in/sarthak-choudhary-832760130/"
            des1="Sarthak is a multifaceted communications professional carrying diverse experience of shaping communications and positioning strategies for corporate, social and Government agencies.

Sarthak discovered his calling in communications through a complex non-traditional career that started with Journalism, which has equipped him with insights and nuances of media’s perspective across issues and sectors, enabling him to create a unique synergy between media’s priorities and communication layouts for the clients."
            des2="Sarthak has leveraged his insights in shaping communication strategies and delivering positive conversations for marquee start-ups such as MuscleBlaze, HealthKart, Magneto CleanTech, renowned hospitals like Fortis Hospitals, Motherhood Hospitals, Manipal Hospitals, and leading fertility chain Nova IVF along with Government agencies such as NITI Aayog, Ministry of Health & Family Welfare, Ministry of Agri & Development, Government of Electronics and Information Technology, National Institute of Rural Development and Panchayati Raj"
          />
          <Person
            name="Aishwarya Anup"
            image="/team/consultants/businessStrategy.jpg"
            role="Business Strategy & Operations Lead"
            theme="dark"
            position="50% 30%"
            link="https://www.linkedin.com/in/aishwarya-anup/"
            des1="Aishwarya Anup, currently serving as the Business Strategy & Operations Lead at Ardent Co with over 5 years of experience. With an unwavering commitment to the company‘s success, Aishwarya has been an integral part of the organization since its inception. In her role at Ardent Co., she spearheads the company’s business growth and expansion efforts, overseeing day-to-day operational needs. Aishwarya’s remarkable track record includes successfully onboarding a diverse range of clients, including healthcare, corporate, B2B, healthtech, and government entities."
            des2="With over 5 years of experience in the Sales & Marketing domain, Aishwarya has honed her skills working with renowned digital agency Techmagnate and PR agency named Teamwork, among others.Apart from work,Aishwarya loves to read mythological books and binge-watch OTT content."
          />
          <Person
            name="Tanush Handa"
            image="/team/consultants/assistantManager1.jpg"
            role="Assistant Manager, Public Policy"
            theme="dark"
            link="https://www.linkedin.com/in/tanush-handa/"
            position="50% 25%"
            des1="Tanush is working with us as an Assistant Manager - Public Policy at Ardent Co. is a public policy professional with more than 2 years of experience in the realm of policy & politics. As a public policy consultant, his primary role is to provide specialized advice and analysis regarding a broad spectrum of policy matters. He works closely alongside government agencies, non-profit organizations, and various stakeholders to identify and tackle societal challenges effectively. "
            des2="In the past, he has worked closely with the Govt. of Andhra Pradesh among a string of other politico-administrative entities in India on subject matters of development & public welfare, wherein he engaged with a multitude of key stakeholders. Tanush is high on sports and likes his coffee dark and bitter."
          />
          <Person
            name="Aradhna Anand"
            image="/team/consultants/assistantManager2.jpg"
            role="Assistant Manager, Human Resources"
            theme="dark"
            link="https://www.linkedin.com/in/aradhnaanand/"
            position="50% 60%"
            des1="Aradhna Anand is working with us as an Assistant Manager, Human Resources with 3 years of experience. At Ardent Co. she oversees people & culture and end to end recruitment. She brings a wealth of knowledge and expertise to her role, enabling her to effectively manage various HR functions within the company. What sets her apart is her genuine dedication to cultivating a positive work environment that goes beyond the ordinary corporate setting. Aradhna actively strives to incorporate a human touch into Ardent Co.’s culture, emphasizing open communication, empathy, and teamwork."
            des2="She has spent a career in human resources where she took care of various HR and Administrative functions. In her free time, Aradhna likes crocheting and baking, finding them to be outlets for relaxation and self-expression."
          />
          <Person
            name="Sristi Rai"
            image="/team/consultants/seniorAssociate1.jpg"
            role="Senior Associate, Media and Communications Strategy"
            theme="dark"
            link="https://www.linkedin.com/in/sristi-rai-b2a900183/"
            position="50% 30%"
            des1="Sristi Rai is working as Senior Public Relation Associate at Ardent Co with 2 years of experience. At Ardent co.,she handles the media relations and communications, along with documents work for the client. Earlier, her career revolved around political, commercial, edtech, healthcare, startups and lifestyle beats. Her expertise lies in strategic communication, media relations, and social skills. Sristi’s hobbies include traveling,music and dancing."
          />
          <Person
            name="Ekta Sharma"
            image="/team/consultants/assistantManager3.jpg"
            role="Assistant Manager, Digital Communications"
            theme="dark"
            link="https://www.linkedin.com/in/ekta4sure/"
            position="50% 10%"
            des1="Ekta Sharma is a seasoned professional, skilled in crafting cross-channel branding strategies that deeply resonate with audiences. Her journey artfully blends creativity with strategic prowess, amplifying brand visibility and consistency through dynamic marketing campaigns and media relations. Beyond the boardroom, Ekta is a music maker and an Indian hip-hop culture enthusiast, adding rhythm to both her professional and personal pursuits."
          />
          <Person
            name="Ishan Jain"
            image="/team/consultants/associate1.jpeg"
            role="Associate, Research and Content"
            theme="dark"
            link="https://www.linkedin.com/in/ishan-jain-7a8a58236/"
            position="50% 20%"
            des1="Ishan Jain is an avid researcher, debater and keeps an active interest in Political and Geopolitical landscape.With an Honours degree at both graduate and post-graduate levels in Political Science , from the Hindu College, Delhi University, Ishan is adamant to work in the space of policy and politics. With a previous experience of working with Members of Parliament as Political Consultant and with political parties across the spectrum , he loves to research and draft campaigns. A swimmer and a hobbyist cook, Ishan can be found munching on dark chocolate watching Modern Family reruns."
          />

          <Person
            name="Manya Singh"
            image="/team/consultants/seniorAssociate2.jpeg"
            role="Senior Associate, Media and Communications Strategy"
            theme="dark"
            link="https://www.linkedin.com/in/manya-singh-1b1789241/"
            position="50% 20%"
            des1="Manya is a PR professional with a bachelor’s degree in psychology from Delhi University. She brings to the table two years of experience across diverse sectors, including legal, healthcare, corporate, and power. Manya specializes in strategic communications, crafting compelling narratives, and building strong media relationships. Manya finds an escape in singing and dancing adding to her multifaceted personality."
          />
          <Person
            name="Manish"
            image="/team/consultants/graphicDesigner.jpeg"
            role="Graphic Designer"
            link="https://www.linkedin.com/in/manish-singh-71726b225/"
            theme="dark"
            position="50% 30%"
            des1="Manish is a prolific and detail-oriented graphic designer with extensive experience across various verticals, including B2B and B2C. He has developed exceptional proficiency in Adobe Creative Suite, excelling in branding, print design, and digital media. Always staying ahead of industry trends, his multifaceted and collaborative approach has earned him a reputation for perfectionism and a keen eye for detail. His work is not only strategically effective but also aesthetically captivating."
            des2="He is a fitness freak always striving to stay active and healthy, with keen interest in stock markets and investments he likes to monitor market trends. In his leisure he enjoys video games"
          />
          <Person
            name="Kevin Marks"
            image="/team/consultants/associate2.jpeg"
            role="Associate, Public Policy"
            link="https://www.linkedin.com/in/kevinmarks15/"
            theme="dark"
            position="50% 30%"
            des1="Kevin is a cross-disciplinary public policy consultant with a strong academic foundation, holding a degree in History from St. Stephen’s College, Delhi. He has diverse experience working with various government offices, bringing unique perspectives to the organization and driving positive change. He specializes in governmental operations. He enjoys the thrill of trail biking, off-roading and hiking exploring the outdoors. His artistic side is expressed through charcoal sketches and playing flute."
          />
          <Person
            name="Binaira Vaishno Panwar"
            image="/team/consultants/manager.jpeg"
            role="Manager, Media and Communications Strategy"
            theme="dark"
            link="https://www.linkedin.com/in/binaira-vaishno-panwar-a93386119/"
            position="50% 30%"
            des1="Binaira is an experienced communications professional with over four years in the industry. She began her career at Archetype, formerly known as Text100, and subsequently worked with Crosshairs’s, The Yellow Coin, and Jaipur Rugs as a corporate communications assistant manager. Recently, she transitioned to Ardent Co. as a PR manager. Throughout her career, Binaira has handled a diverse range of beats including auto, tech, business, lifestyle, consumer, education, health, social issues, art and culture, and MSME. Outside of work, Binaira enjoys spending time with animals, painting, reading, and cherishing moments at home."
          />
          <Person
            name="Vaishnavi Chauhan"
            image="/team/consultants/seniorAssociate3.jpeg"
            role="Senior Associate, Content and Research"
            theme="dark"
            link="https://www.linkedin.com/in/vaishnavichauhan7/"
            position="50% 45%"
            des1="Vaishnavi Chauhan is working with us as a Senior Research Associate with 2 years of xperience. At Ardent Co., she plays a pivotal role in shaping our public policy andcommunications initiatives by conducting in-depth research and advocating for issues that lie at the core of our clients’ mission. Vaishnavi Chauhan comes with experience in management consulting at Ernst and Young. She has worked extensively on projects across Biopharma, energy and utilities, and the digi-tech sectors. In her free time she likes to read about philosophy, brands, marketing, basically everything under the sun."
          />
        </div>

        <div className="flex w-full h-fit text-center justify-center my-20">
          <p className="md:text-6xl text-5xl text-center font-black">
            Advisors
          </p>
        </div>
        <div className="w-[70%] h-full grid md:grid-cols-3 grid-cols-2 gap-10 mb-10">
          <Person
            name="Kazim Rizvi"
            image="/team/advisors/1.jpeg"
            position="50% 20%"
            role="Advisor, Technology Policy
Founding Director, The Dialogue"
            theme="dark"
          />
          <Person
            name="Proful Lall"
            image="/team/person.jpg"
            position="50% 50%"
            role="Advisor, Corporate Affairs"
            theme="dark"
          />
          <Person
            name="Deepak Kumar Sahu"
            image="/team/advisors/3.jpeg"
            position="50% 20%"
            role="Advisor, Media and Communications"
            theme="dark"
          />
          <Person
            name="Deeksha Goel"
            image="/team/advisors/4.jpg"
            position="50% 20%"
            role="Advisor, Strategic Affairs
Deputy Director and Senior Research Fellow, India Foundation"
            theme="dark"
          />
          <Person
            name="Dr. Sabine Kapasi"
            image="/team/advisors/5.png"
            position="50% 20%"
            role="Advisor, Industry and Economy
President, India SME Forum"
            theme="dark"
          />
          <Person
            name="Vinod Kumar"
            image="/team/advisors/6.jpg"
            position="50% 20%"
            role="Advisor, Strategic Affairs
Deputy Director and Senior Research Fellow, India Foundation"
            theme="dark"
          />
          <Person
            name="Mr.Jai Prakash"
            image="/team/advisors/7.png"
            position="50% 20%"
            role="Advisor, Government Affairs.
Former OSD to Hon’ble Minister of Niti Aayog"
            theme="dark"
          />
          <Person
            name="Bhavani Giddu"
            image="/team/advisors/8.jpg"
            position="50% 20%"
            role="Advisor, Social Development and Education.
CEO, Footprint Global Communications"
            theme="dark"
          />
          <Person
            name="Varda Taneja"
            image="/team/advisors/9.jpg"
            position="50% 20%"
            role="Advisor, FDI & Market Entry
Founder, Inara Advisors & FDI Advisor to Sweden India Business Council"
            theme="dark"
          />
          <Person
            name="Saptarshi Sanyal"
            image="/team/advisors/10.png"
            position="50% 50%"
            role="Advisor, Media and Communications"
            theme="dark"
          />
        </div>
      </div>

      <Footer theme={"dark"} />
    </>
  );
}
