import React from 'react'
import Enable from '../components/ui/Enable'
import Lander from '../components/ui/Lander'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

export default function page() {
  return (
    <>
    <Navbar left={false} right={false}/>
    <Lander heading1={'Services'} css="text-white"/>

    <div className='relative flex w-full  h-full'>
      <Enable/>
    </div>
    <Footer theme='dark'/>
    </>
  )
}
