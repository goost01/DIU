import React from 'react'
import NavBar from '../components/nav_bar'
import { Button, TextField } from "@mui/material";

export const Register = () => {
    return(
        <div className = 'page'>
            <NavBar />
            <div>
                Nombre <TextField />
            </div>
            <div>
                Apellido Paterno <TextField />
            </div>
            <div>
                Género
            </div>
            <div>
                Edad
            </div>
            <div>
                Teléfono de Contacto <TextField />
            </div>
            <div>
                Correo de Contacto <TextField />
            </div>
            <div>
                Dirección
            </div>
            <div>
                <button>Cancelar</button> <button>Listo</button>
            </div>
        </div>
    )
}

export default Register