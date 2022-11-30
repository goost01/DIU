import React from 'react'

import { NavLink, useLocation, useParams } from 'react-router-dom'

export const Dis= () => {
    

    // let campaign = JSON.parse(localStorage.getItem("Campañas"));
    let location  = useLocation();
    if (location.state == null){
        console.log(location)
    }else{
        console.log(location.state)
    }
    const { campana, id } = location.state;
    
    return(
        <div className = 'page'>
           
            <NavLink to = '/'>Inicio</NavLink>
            {'>'}
            Campaña
            <h1> Título: {campana.titulo}</h1>
            <h2> Localización: {campana.direccion}</h2>
            <h2> Descipción: {campana.descripcion}</h2>
            <h2> Donaciones: {campana.donacion} {campana.cuenta}</h2>
            <h2> Trabajo Voluntario: {campana.trabajo}</h2>
            <h2> Teléfono de Contacto: {campana.telefono}</h2>
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