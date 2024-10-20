"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const navLinks : string[] = ["Home", "Services", "Manifesto", "Team", "Contact"]
  let key : number = 0;
  const loaction = usePathname();

  if(loaction == "/"){
    key = 0;
  }
  else if(loaction == "/services"){
    key = 1;
  }
  else if(loaction == "/manifesto"){
    key = 2;
  }
  else if(loaction == "/team"){
    key = 3;
  }
  else if(loaction == "/contact"){
    key = 4;
  }

  return (
    <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 h-16 bg-black rounded-full text-white text-center flex justify-center items-center mb-5 z-50'>
  <ul className='flex'>
    {navLinks.map((nav, index) => {
      return (
        <Link href={`/${navLinks[index].toLowerCase() == "home" ? "" : navLinks[index].toLowerCase()}`}
          className={`w-32 h-16 flex justify-center items-center text-center cursor-pointer transition duration-300 hover:px-10 rounded-full
            ${index === navLinks.length - 1 ? 'rounded-r-full' : ''}
            ${index === 0 ? 'rounded-l-full' : ''}
            ${index === key ? 'bg-yellow-400 text-black' : 'bg-black'}
          `}
          key={index}
        >
          {nav}
        </Link>
      );
    })}
  </ul>
</div>

  )
}
