import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink } from 'react-router-dom'


export const About = () => {
    return(
        <div className = 'page'>
            <NavBar />
            <NavLink to ='/'> Inicio</NavLink>
            {'>'}
            Nosotros
            <h2 className = 'page__title'>Página en construcción</h2>
            <NavLink to ='/'>
                <button>Volver</button>
            </NavLink>
        </div>
        
    )
}

export default About