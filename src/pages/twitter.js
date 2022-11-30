import React from 'react'

import { NavLink } from 'react-router-dom'

export const Twitter = () => {
    return(
        <div className = 'page'>
         
            <NavLink to = '/'>Inicio</NavLink>
            {'>'}
            Twitter
            <h2 className = 'page__title'>Próximamente tendremos cuenta de Twitter :D</h2>
            <NavLink to ='/'>
                <button>Volver</button>
            </NavLink>
        </div>
    )
}

export default Twitter