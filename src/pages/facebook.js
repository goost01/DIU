import React from 'react'

import { NavLink } from 'react-router-dom'


export const Facebook = () => {
    return(
        <div className = 'page'>
            
            <NavLink to ='/'>Inicio</NavLink>
            {'>'}
            Facebook
            <h2 className = 'page__title'>Próximamente tendremos cuenta de Facebook :D</h2>
            <NavLink to ='/'>
                <button>Volver</button>
            </NavLink>
        </div>
    )
}

export default Facebook