import React from 'react'
import { TextField } from "@mui/material";


import NavBar from '../components/nav_bar'

export const HomePage = () => {
  return (
      <div className='page'>
        <NavBar />
        <h2>Página de Inicio</h2>
        <div>
          <TextField
            value={name}
            label="Buscar"
          />
        </div>
        <button> Nueva Campaña </button>
      </div>
  )
}

export default HomePage