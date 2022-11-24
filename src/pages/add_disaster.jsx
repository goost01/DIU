import React from 'react'
import NavBar from '../components/nav_bar'
import { TextField } from "@mui/material";

export const Add_disaster = () => {
  return (
    <div className='page'>
      <NavBar />
      <h1>Cuéntanos sobre la Campaña</h1>
      <div>
        Título <TextField value={name}/>
      </div>
      <div>
        <TextField label='Descripción'/>
      </div>
      <div>
        Insertar imágenes
      </div>
      <div>
        Localización <TextField />
      </div>
      <div>
        Donaciones <TextField />
      </div>
      <div>
        Trabajo Voluntario
      </div>
      <div>
        Teléfono de Contacto <TextField />
      </div>
      <div>
      <button> Cancelar </button> <button> Publicar </button>
      </div>
    </div>
  )
}

export default Add_disaster
