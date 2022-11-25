import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink } from 'react-router-dom'

export const Dis= () => {
    return(
        <div className = 'page'>
            <NavBar />
            <NavLink to = '/'>Inicio</NavLink>
            {'>'}
            Campaña
            <h1> Título:</h1>
            <h2> Imagen</h2>
            <h2> Localización:</h2>
            <h2> Descipción:</h2>
            <h2> Donaciones:</h2>
            <h2> Trabajo Voluntario:</h2>
            <h2> Teléfono de Contacto:</h2>
            <NavLink to = '/'>
                <button>Volver</button>
            </NavLink>
        </div>
        
    )
}

export default Dis