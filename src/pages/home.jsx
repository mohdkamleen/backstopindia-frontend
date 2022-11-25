import React from 'react'
import Navbar from '../component/navbar' 
import Services from '../component/services'
import Banner from '../component/banner'

const home = () => {
  return (
    <>
      <Navbar /> 
      <Banner />
      <Services />
    </>
  )
}

export default home