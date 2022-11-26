import React from 'react'
import Navbar from '../component/navbar' 
import Services from '../component/services'
import Banner from '../component/banner' 
import About from '../component/about' 
import Testimonials from '../component/testimonials'

const home = () => {
  return (
    <>
      <Navbar /> 
      <Banner /> 
      <About />
      <Testimonials />
      <Services />
    </>
  )
}

export default home
