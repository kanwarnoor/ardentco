import React from 'react'

export default function BottomNav() {
  const navLinks : string[] = ["Home", "Services", "Manigesto", "Team", "Contact"]
  const key = 0;

  return (
    <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 h-16 bg-black rounded-full text-white text-center flex justify-center items-center mb-5 '>
      <ul className='flex'>
        {navLinks.map((nav, index) => {
          return (
            <li className={`w-32 h-16 flex justify-center items-center text-center cursor-pointer 
            ${index == navLinks.length - 1 ? "rounded-r-full" : ""}
            ${index == 0 ? "rounded-l-full" : ""}
            ${index == key ? "bg-yellow-400 rounded-full text-black" : "bg-black"}`} key={index}>
              {nav}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
