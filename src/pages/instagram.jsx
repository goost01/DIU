import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink } from 'react-router-dom'

export const Instagram = () => {
    return(
        <div className = 'page'>
            <NavBar />
            <NavLink to = '/'>Inicio</NavLink>
            {'>'}
            Instagram
            <h2 className = 'page__title'>Próximamente tendremos cuenta de Instagram :D</h2>
            <NavLink to ='/'>
                <button>Volver</button>
            </NavLink>
        </div>
    )
}

export default Instagram