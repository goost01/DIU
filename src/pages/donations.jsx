import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink } from 'react-router-dom'


export const Donation = () => {
    return(
        <div className = 'page'>
            <NavBar />
            <NavLink to = '/'>Inicio</NavLink>
            {'>'}
            Ayúdanos a Seguir
            <h2 className = 'page__title'>Aceptaremos donaciones proximamente</h2>
            <NavLink to ='/'>
                <button>Volver</button>
            </NavLink>
        </div>
    )
}

export default Donation