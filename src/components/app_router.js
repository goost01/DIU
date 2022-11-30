import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/aboutus'
import Add_disaster from '../pages/add_disaster'
import Dis from '../pages/disaster'
import Donation from '../pages/donations'
import Facebook from '../pages/facebook'

import HomePage from '../pages/home'
import Instagram from '../pages/instagram'
import Register from '../pages/register'
import Twitter from '../pages/twitter'
import NavBarComp from './NavBar'

const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <NavBarComp/>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/instagram' element={<Instagram />} />
        <Route path='/facebook' element={<Facebook />} />
        {/* <Route path='/newdis' element={<Add_disaster />} /> */}
        <Route path='/about' element ={<About />} />
        <Route path='/donations' element ={<Donation />} /> 
        <Route path='/:id' element= {<Dis/>} />
        <Route path='/:id/register' element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
