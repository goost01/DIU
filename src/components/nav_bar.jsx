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
        to='/about'
      >
        Nosotros
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/donations'
      >
        Ayúdanos a Seguir
      </NavLink>
      
      <div classname = 'redes'>
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
      </div>
      
    </nav>
    
  )
}

export default NavBar
