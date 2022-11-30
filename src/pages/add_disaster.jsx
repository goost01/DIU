import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink } from 'react-router-dom'

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
  let user = {
      Titulo: a,
      Descripcion: b,
      Direccion: c,
      Donacion: d,
      Cuenta: e,
      Trabajo: f,
      Telefono: g,
  };
  
  arraycampanas = JSON.parse(localStorage.getItem("Campañas"))
  arraycampanas.push(user);
  localStorage.setItem("Campañas", JSON.stringify(arraycampanas, getCircularReplacer()));
}

export const Add_disaster = () => {
  return (
    <div className='page'>
      <NavBar />
      <NavLink to = '/'>Inicio</NavLink>
      {'>'}
       Publicar Causa
      <h1>Cuéntanos sobre la Campaña</h1>
      <div>
        Título <input type = 'text' id = 'title'/>
      </div>
      <div>
        Descripciopn<input type = 'text' id = 'description'/>
      </div>
      <div>
        Localización <input type = 'text' id = 'address' />
      </div>
      <div>
        Donaciones <select id = 'Donaciones'>
          <option value = 'BancoEstado'>BancoEstado</option>
          <option value = 'Banco Santander'>Banco Santander</option>
        </select>
        <input tpye = 'text' id = 'numero cuenta'/>
      </div>
      <div>
        Trabajo Voluntario <select id = 'work'>
          <option value = 'Si'>Si</option>
          <option value = 'No'>No</option>
        </select>
      </div>
      <div>
        Teléfono de Contacto <input type = 'text' id = 'phone' />
      </div>
      <div>
        <NavLink to = '/'>
          <button> Cancelar </button>
        </NavLink>
        <NavLink to = '/'>
       <button onClick={() => save_register(document.getElementById('title').value,
                              document.getElementById('description').value,
                              document.getElementById('address').value,
                              document.getElementById('Donaciones').value,
                              document.getElementById('numero cuenta').value,
                              document.getElementById('work').value,
                              document.getElementById('phone').value)}> Publicar </button>
      </NavLink>
      </div>
    </div>
  )
}

export default Add_disaster
