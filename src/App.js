import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Faq from './pages/faq'
import Contact from './pages/contact'
import Services from './pages/services'
import Terms from './pages/terms'
import Admin from './admin'
import NewUser from './admin/newUser' 
import Query from './admin/query'
import AdminLogin from './admin/login'
import User from './admin/user'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="terms" element={<Terms />} />

        <Route path='admin' element={<AdminLogin />} />
        
        <Route path="/admin" element={<Admin />}>
          <Route path="user" element={<User />} /> 
          <Route path="query" element={<Query />} />
          <Route path="claim" element={<NewUser />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App