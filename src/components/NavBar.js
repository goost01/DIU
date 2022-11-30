import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import InstagramImg from "../assets/Instagram.png"
import FacebookImg from "../assets/Facebook.png"
import TwitterImg from "../assets/Twitter.png"
import { Navbar, Nav, NavLink,   Form, Button, NavDropdown, Container, Stack, Row, Col  } from 'react-bootstrap'


export default class  NavBarComp extends Component{
    render(){
      return (
      
        <div>
          <Navbar collapseOnSelect expand='sm' bg='dark' variant={'dark'} >
            <Navbar.Brand href='#'>RescatesYA</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll'/>
            <Navbar.Collapse id="navbarScroll">
              <Nav 
                className='me-auto' 
                style={{ maxHeight: '100px' }} 
                navbarScroll>

                  <NavLink as={Link} to="/">Inicio</NavLink>
                  <NavLink as={Link} to="/about">
                    Nosotros
                  </NavLink>
                  <NavDropdown  title='Siguenos' id='NavbarScrollingDropdown'>
                    <NavDropdown.Item >
                      <NavLink as={Link} to='/facebook'>
                        <Row>
                          <Col md="auto">
                            <img src={FacebookImg} width = {30} /> 
                          </Col>
                          <Col className='dropdown-item-text ' md="auto">
                            <div >Facebook</div> 
                          </Col>
                        </Row>
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink as={Link} to='/instagram'>
                      <Row>
                          <Col md="auto">
                            <img src={InstagramImg} width = {30} /> 
                          </Col>
                          <Col className='dropdown-item-text ' md="auto">
                            <div >Instagram</div> 
                          </Col>
                        </Row>
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink as={Link} to='/twitter'>
                      <Row>
                          <Col md="auto">
                            <img src={TwitterImg} width = {30} /> 
                          </Col>
                          <Col className='dropdown-item-text ' md="auto">
                            <div >Twitter</div> 
                          </Col>
                        </Row>
                      </NavLink>
                    </NavDropdown.Item>
                    

                  </NavDropdown>
                  
                </Nav>
                <Nav >
                  
                  <Nav>
                  <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant='dark'>Buscar</Button>
                  </Form>
                </Nav>
                
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        
      
    )}
}


