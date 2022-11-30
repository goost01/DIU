import React from 'react'

import { NavLink, useParams } from 'react-router-dom'

let arraycampanas = JSON.parse(localStorage.getItem("Campañas"));

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

function save_register(a,b,c,d,e,f,g){
    let id = useParams()
    let user = {
        Campaña: id,
        Nombre: a,
        Apellido: b,
        Género: c,
        Edad: d,
        Teléfono: e,
        Correo: f,
        Dirección: g,
    };

    arraycampanas.push(user);
    console.log(arraycampanas);
    localStorage.setItem(`${id}`, JSON.stringify(arraycampanas, getCircularReplacer()));    
}

export const Register = () => {
    return(
        <div className = 'page'>
       
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
                <NavLink to = '/'>
                    <button>Cancelar</button>
                </NavLink>
                <NavLink to = '/'>
                    <button onClick = {() => save_register(document.getElementById('name').value, 
                    document.getElementById('surname').value,
                    document.getElementById('gender').value,
                    document.getElementById('age').value,
                    document.getElementById('phone').value,
                    document.getElementById('mail').value,
                    document.getElementById('address').value)} >Listo</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Register