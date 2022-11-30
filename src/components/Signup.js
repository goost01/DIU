import React, { useState } from "react";
import {Form, Button, Card} from 'react-bootstrap'

const gendersData =  ["Masculino", "Femenino", "No binarie", "No especifica"];

export function Login(){

    const [{genero}, setData] = useState({
        genero : "No especifica"
      });

    const generos = gendersData.map((genre) => (
    <option key={genre} value={genre}>
        {genre}
    </option>
    ));

    function handleGenreChange(event) {
        setData(data => ({ genero: event.target.value }));
    }

    return(
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Registrarse</h2>
                <Form>
                    <Form.Group id="nombre">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="apellido">
                        <Form.Label>Apellido paterno</Form.Label>
                        <Form.Control type="text" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="genre">
                        <Form.Label>Genero</Form.Label>
                            <select value={genero} onChange={handleGenreChange}>
                                {generos}
                            </select>
                    </Form.Group>
                    <Form.Group id="edad">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Ingrese su e-mail</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    
                    <Form.Group id="email">
                        <Form.Label>Ingrese su e-mail</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Ingrese su e-mail</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>       
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Ya tienes una cuenta? Inicia sesión
        </div>
        </>
    )
}