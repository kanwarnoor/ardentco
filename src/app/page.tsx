"use client"

import Link from "next/link";
import { FlipWords } from "./components/ui/flip-words";

export default function Home() {
  const avail : string[] = ["Rewiring" ,"Transforming", "Rewriting", "Modernizing", "Elevating"]


  return (
   <>
      <div className='w-100 h-screen bg-slate-600 rounded-3xl mx-5 p-10' >

        <FlipWords words={avail} duration={3000} className="text-9xl font-bold text-white"/>

        <p className="text-9xl font-bold">Status Quo</p>
      </div>

   </>
  );
}
