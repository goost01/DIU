import React from 'react'
import NavBar from '../components/nav_bar'
import { TextField } from "@mui/material";
import { NavLink } from 'react-router-dom'


export const Add_disaster = () => {
  return (
    <div className='page'>
      <NavBar />
      <NavLink to = '/'>Inicio</NavLink>
      {'>'}
       Publicar Causa
      <h1>Cuéntanos sobre la Campaña</h1>
      <div>
        Título <input type = 'text' id = 'title'/>
      </div>
      <div>
        <input type = 'text' id = 'description'/>
      </div>
      <div>
        Insertar imágenes
      </div>
      <div>
        Localización <input type = 'text' id = 'address' />
      </div>
      <div>
        Donaciones <select id = 'donations'>
          <option value = '1'>Si</option>
          <option value = '2'>No</option>
        </select>
      </div>
      <div>
        Trabajo Voluntario <select id = 'work'>
          <option value = '1'>Si</option>
          <option value = '2'>No</option>
        </select>
      </div>
      <div>
        Teléfono de Contacto <input type = 'text' id = 'phone' />
      </div>
      <div>
        <NavLink to = '/'>
          <button> Cancelar </button>
        </NavLink>
       <button> Publicar </button>
      </div>
    </div>
  )
}

export default Add_disaster
