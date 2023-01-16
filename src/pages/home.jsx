import React from 'react'
import Navbar from '../component/navbar'
import Services from '../component/services'
import Banner from '../component/banner'
import About from '../component/about'
import Contact from '../component/contact'
import Testimonials from '../component/testimonials'
import Footer from '../component/footer'
import moment from 'moment'

const Home = () => {  


  return (
    <>
      <Navbar />  
      <Banner />
      <Services /> <br />
      <Contact /> <br />
      <About />  <br />
      <Testimonials /> <br />
      <Footer />
    </>
  )
}

export default Home
