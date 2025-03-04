import React from 'react'
import Enable from '../components/ui/Enable'
import Lander from '../components/ui/Lander'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

export default function page() {
  return (
    <>
    <Navbar left={false} right={false}/>
    <Lander image='/banner/services.png' heading1={'Services'} css="text-white"/>

    <div className='relative flex w-full  h-full' id="more">
      <Enable/>
    </div>
    <Footer theme='dark'/>
    </>
  )
}
