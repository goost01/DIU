import React from 'react'

import { NavLink } from 'react-router-dom'


export const Donation = () => {
    return(
        <div className = 'page'>
           
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