import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink, useParams } from 'react-router-dom'

export const Dis= () => {
    let {id} = useParams()

    let campaign = JSON.parse(localStorage.getItem("Campañas"));
    
    return(
        <div className = 'page'>
            <NavBar />
            <NavLink to = '/'>Inicio</NavLink>
            {'>'}
            Campaña
            <h1> Título: {campaign[id-1]["Titulo"]}</h1>
            <h2> Localización: {campaign[id-1]["Direccion"]}</h2>
            <h2> Descipción: {campaign[id-1]["Descripcion"]}</h2>
            <h2> Donaciones: {campaign[id-1]["Donacion"]} {campaign[id-1]["Cuenta"]}</h2>
            <h2> Trabajo Voluntario: {campaign[id-1]["Trabajo"]}</h2>
            <h2> Teléfono de Contacto: {campaign[id-1]["Telefono"]}</h2>
            <NavLink to = '/'>
                <button>Volver</button>
            </NavLink>
            <NavLink to = {`/${id}/register`}>
                <button> Registrarse</button>
            </NavLink>
        </div>
        
    )
}

export default Dis