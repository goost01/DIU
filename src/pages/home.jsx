import React from 'react'
import NavBar from '../components/nav_bar'
import { NavLink,Link } from 'react-router-dom'

const Remake = () =>{
  i = 1;
  return i;
}

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

let arraycampanas = [{
  Titulo: "Incendio en Valparaiso",
  Descripcion: "Un petardo provocó un incendio forestal en las cercanías de valparaíso",
  Direccion: "Ministro Carvajal con Ministro Carvajal",
  Donacion: "BancoEstado",
  Cuenta: "1603739643",
  Trabajo: "Si",
  Telefono: "+56912345654",
}, {
  Titulo: "Inundación en Santa Laura",
  Descripcion: "Las constantes lluvias inundaron las calles de la gran avenida de Santa Laura y han dejado las calles un desastre",
  Direccion: "San Bernardo, Santa Laura",
  Donacion: "Banco Santander",
  Cuenta: "2345657654",
  Trabajo: "No",
  Telefono: "18929034",
}];

var i = 1;
const Linking = (A)=> {
  let Title = A["Titulo"]
  let Desc = A["Descripcion"]
  let link = "/" + i.toString();
  i++;
  return (<div>
    <NavLink to = {link}>
      <button> {Title}</button>
    </NavLink>
    {Desc}
  </div>
  )
}

const Listar=()=>{
  let campaigns = JSON.parse(localStorage.getItem("Campañas"));
  if (campaigns === null){
    return [];
  }
  else{
    return campaigns.map(x => Linking(x))
  }
}

export const HomePage = () => {
  if (localStorage.getItem("Campañas")=== null){
    localStorage.setItem("Campañas", JSON.stringify(arraycampanas, getCircularReplacer()));
  }  
  return (

      <div className='page'>
        <NavBar />
        Inicio
        <h2>Página de Inicio</h2>
        <div>
          Buscar <input type = 'text' id = 'search'/>
        </div>
        <NavLink to = '/newdis'>
          <button> Nueva Campaña </button>
        </NavLink>
        <div>
          Listado de campañas:

          <Listar />
          <Remake />
        </div>
      </div>
  )
}

export default HomePage