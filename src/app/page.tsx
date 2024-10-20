"use client"

import Link from "next/link";
import { FlipWords } from "./components/ui/flip-words";
import { Spotlight } from "./components/ui/Spotlight";

export default function Home() {
  const avail : string[] = ["Rewiring" ,"Transforming", "Rewriting", "Modernizing", "Elevating"]

  return (
   <>
      <div className='w-100 h-[520px] bg-black rounded-3xl mx-5 p-20' >
        <Spotlight className="right-0"/>
        <FlipWords words={avail} duration={3000} className="text-9xl font-bold text-white"/>
        <p className="text-9xl font-bold text-white text-opacity-50 mb-10">Status Quo</p>

        <Link href="/contact" className="text-white border-2 border-white px-5 py-3 rounded-full text-lg hover:opacity-100 hover:transition-all transition-all opacity-100">Get in Touch</Link>

      </div>
   </>
  );
}
