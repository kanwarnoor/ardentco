"use client"

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-fit absolute top-0 bottom-0 left-0 right-0 m-auto text-center flex flex-col justify-center items-center">
      <p className="font-bold mb-5 sm:text-5xl text-3xl">Different Options</p> 
      <Link href="/1" className="flex w-fit text-center justify-center px-5 py-3 bg-black text-white mb-2 hover:bg-opacity-80 transition hover:transition">Option 1</Link>
      <Link href="/2" className="flex w-fit text-center justify-center px-5 py-3 bg-black text-white mb-2 hover:bg-opacity-80 transition hover:transition">Option 2</Link>
      <Link href="/3" className="flex w-fit text-center justify-center px-5 py-3 bg-black text-white mb-2 hover:bg-opacity-80 transition hover:transition">Option 3</Link>
    </div>
  );
}
