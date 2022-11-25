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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/instagram' element={<Instagram />} />
        <Route path='/facebook' element={<Facebook />} />
        <Route path='/newdis' element={<Add_disaster />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element ={<About />} />
        <Route path='/donations' element ={<Donation />} /> 
        <Route path='/Dis' element= {<Dis/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
