import React from 'react'
import NavBar from '../components/nav_bar'
import { Button, TextField } from "@mui/material";
import { NavLink } from 'react-router-dom'


export const Register = () => {
    return(
        <div className = 'page'>
            <NavBar />
            <NavLink to = '/'>Inicio</NavLink>
            {'>'}
            Causa
            {'>'}
            Registrarse
            <div>
                Nombre <input type = 'text' id = 'name' />
            </div>
            <div>
                Apellido Paterno <input type = 'text' id = 'surname' />
            </div>
            <div>
                Género <select id = 'gender'>
                    <option value = '1'> </option>
                    <option value = '2'> Hombre </option>
                    <option value = '3'> Mujer </option>
                    <option value = '4'> No binario</option>
                    <option value = '5'> Prefiero no decir</option>
                </select>
            </div>
            <div>
                Edad <input type = 'text' id = 'age'/>
            </div>
            <div>
                Teléfono de Contacto <input type ='text' id ='phone' />
            </div>
            <div>
                Correo de Contacto <input type = 'text' id = 'mail' />
            </div>
            <div>
                Dirección <input type = 'text' id = 'address'/>
            </div>
            <div>
                <button>Cancelar</button> <button>Listo</button>
            </div>
        </div>
    )
}

export default Register