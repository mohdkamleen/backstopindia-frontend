import React from 'react'
import Navbar from '../component/navbar' 
import Services from '../component/services'

const home = () => {
  return (
    <>
      <Navbar /> 
      <section className='banner' style={{background:"url(assest/image/crack-phone.jpg)"}}>
        {/* <h3>Lorem ipsum dolor sit amet.</h3> */} 
      </section> 
      <Services />
    </>
  )
}

export default home