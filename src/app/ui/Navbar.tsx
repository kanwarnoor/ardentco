import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <div className="w-full h-16 text-black flex fixed  z-10">
        <div className="flex pl-10 justify-center items-center">
            <Link className='text-xl font-bold cursor-pointer' href="/">Ardent Co.</Link>
        </div>

        <div className='flex ml-auto text-center justify-center items-center mr-10'>
            <p></p>
            <Link href="/contact" className='flex justify-center items-center w-32 h-10 bg-yellow-400 rounded-full font-medium'>{"Let's Connect"}</Link>
        </div>
    </div>
    <div className='w-100 h-screen bg-red-200 bottom-10'></div>
    </>
  )
}
