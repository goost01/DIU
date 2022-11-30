import React from 'react'
import { Col, Container, Row, Button, Card, NavLink, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import Campaigns from '../assets/records.json'
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

let campaigns = [{
  Titulo: "Incendio en Valparaiso",
  Descripcion: "Un petardo provocó un incendio forestal en las cercanías de valparaíso",
  Direccion: "Ministro Carvajal con Ministro Carvajal",
  Donacion: "BancoEstado",
  Cuenta: "1603739643",
  Trabajo: "Si",
  Telefono: "+56912345654",
  Img: "../assets/incendio_valpo.jpg"
}, {
  Titulo: "Inundación en Santa Laura",
  Descripcion: "Las constantes lluvias inundaron las calles de la gran avenida de Santa Laura y han dejado las calles un desastre",
  Direccion: "San Bernardo, Santa Laura",
  Donacion: "Banco Santander",
  Cuenta: "2345657654",
  Trabajo: "No",
  Telefono: "18929034",
}];

let i = 1;
const Linking = (campaign)=> {
  
  let link = "/" + i.toString();
  i++
  console.log(campaign)
  let campana = campaign
  return (
    <Col>

      <Card key={campaign}>
        <Card.Img variant="top" src={campaign.img} />
        <Nav.Link as={Link} 
          to= {link}
          state = {{campana : campaign, id : i}}
        >
            <Card.Body>
              <Card.Title>{campaign.titulo}</Card.Title>
              <Card.Text>
                {campaign.descripcion}
              </Card.Text>
            </Card.Body>
        </Nav.Link>
          
      </Card>
      </Col>
    
    
  
  )
}
//Array.from(campaigns).map((campaign, idx) =>
const Listar=()=>{
  
  
    return <Row xs={1} md={2} className="g-4">
            {
              <Row>
                { Campaigns.campaign.map( (campana) =>(
                  Linking(campana)))
                }
              </Row>

            } 
            
          </Row>
  
}

export const HomePage = () => {
  window.localStorage.clear(); 
  return (

      
        <Container fluid>
          <Row>
            <Container  className='bg-light'>
              <Row className='px-2 my-2'>
                <Col xs={7} md={8}>
                  Inicio
                </Col>
                
              </Row>  
            </Container>
          </Row>
          <Container className='px-4'>
            <h2>Tenemos campañas para ti!</h2>
            
            
            <Container>
              Listado de campañas:

              <Listar />
              
            </Container>
            <Container >
              <Row className='justify-content-center'>
                
                  Si presenciaste algún incidente o quieres inciar una campaña
                
              </Row>
              <Row  className='text-center'>
              
              
              
                <NavLink to = '/newdis'>
                  <Button> Haz Click Aquí </Button>
                </NavLink>
              </Row>
                
            </Container>

          </Container>
            
        </Container>
      
  )
}

export default HomePage