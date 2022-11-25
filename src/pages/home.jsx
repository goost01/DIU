import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
  return (
      <div className='page'>
        <NavBar />
        Inicio
        <h2>Página de Inicio</h2>
        <div>
          Buscar <input type = 'text' id = 'search'/>
        </div>
        <NavLink to = '/newdis'>
          <button> Nueva Campaña </button>
        </NavLink>
      </div>
  )
}

export default HomePage