import React from 'react'

import { NavLink } from 'react-router-dom'

export const Instagram = () => {
    return(
        <div className = 'page'>
          
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