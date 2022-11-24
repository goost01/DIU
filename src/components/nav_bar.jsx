import React from 'react'
import { NavLink } from 'react-router-dom'
import Instagram from "../assets/Instagram.png"
import Facebook from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"


export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h2>RescatesYA</h2>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Nosotros
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Ayúdanos a Seguir
      </NavLink>
      <NavLink to='/facebook'
      >
      <button><img src={Facebook} width = {20} /></button>
      </NavLink>
      <NavLink to='/instagram'
      >
      <button><img src={Instagram} width = {20} /></button>
      </NavLink>
      <NavLink to='/twitter'
      >
      <button><img src={Twitter} width = {20} /></button>
      </NavLink>
    </nav>
    
  )
}

export default NavBar
