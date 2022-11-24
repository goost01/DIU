import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add_disaster from '../pages/add_disaster'
import Facebook from '../pages/facebook'

import HomePage from '../pages/home'
import Instagram from '../pages/instagram'
import Register from '../pages/register'
import Twitter from '../pages/twitter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/twitter' element={<Twitter />} />
        <Route path='/instagram' element={<Instagram />} />
        <Route path='/facebook' element={<Facebook />} />
        <Route path='/newdis' element={<Add_disaster />} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
