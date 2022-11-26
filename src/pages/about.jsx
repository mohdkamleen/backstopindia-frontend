import React from 'react'
import Navbar from '../component/navbar' 
import Services from '../component/services'
import Banner from '../component/banner'
import About from '../component/about'
import Footer from '../component/footer'

const home = () => {
  return (
    <>
      <Navbar />  
      <About />  <br /><br />
      <Footer />
    </>
  )
}

export default home