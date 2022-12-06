import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Services from './pages/services'
import Terms from './pages/terms'
import Admin from './admin'
import NewUser from './admin/newUser'
import VerifiedUser from './admin/verifiedUser'
import Query from './admin/query'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="terms" element={<Terms />} />

        <Route path="/admin" element={<Admin />}>   
          <Route index element={<NewUser />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="verifiedUser" element={<VerifiedUser />} />
          <Route path="servicesUser" element={<NewUser />} />
          <Route path="query" element={<Query />} />
          <Route path="claim" element={<NewUser />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App