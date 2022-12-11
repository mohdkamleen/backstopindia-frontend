import React from 'react'
import Navbar from '../component/navbar' 
import Services from '../component/services'
import Banner from '../component/banner' 
import About from '../component/about' 
import Contact from '../component/contact' 
import Testimonials from '../component/testimonials'
import Footer from '../component/footer'

const home = () => {
  return (
    <> 
      <Navbar /> 
      <Banner /> 
      <Services /> <br />
      <Testimonials /> <br />
      <Contact /> <br />
      <About />  <br />
      <Footer />
    </>
  )
}

export default home
