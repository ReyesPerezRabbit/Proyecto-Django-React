import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button} from "@material-ui/core";
import Accordion from "react-bootstrap/Accordion";
import Figure from 'react-bootstrap/Figure';
import logo from '../../src/img/logo_Integrador.jpeg';


const inicio = () => {
  return (
    <div className="container w-75 text-center ">
      
      <div className="row align-items-stretch rounded w-80 ">
        <div className="col bg-white p-5 rounded-end mt-5">
          <Typography variant="h3" gutterBottom>
            Gestion de Sistema de Biblioteca
          </Typography>
          <div className="col-4 mx-auto"></div>
          <div id="contenedor" class="row">
            <div id="naranja" class="col-2 my-auto mx-auto">
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/admin"
                >
                  Administrador
                </Button>
              </Box>
            </div>

            <div id="verde" class="col-2 my-auto mx-auto">
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/usuario"
                >
                  Usuarios
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Acordeon */}
      {/* <div className="d-flex justify-content-center align-items-center centered-div"> */}
      <div className="d-flex justify-content-between moved-div">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dato importante </Accordion.Header>
            <Accordion.Body>
              El sistemas de gestión de bibloteca tiene como funcion, agilizar
              el servicio de préstamos de libros de casa y externos, haciendo
              posible tener acceso más rápido a los libros que dispone la
              bibloteca de la universidad politécnica de Tapachula
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br></br>
      {/* Figura */}
      <Figure>
      <Figure.Image
        width={300}
        height={210}
        alt="171x180"
        src={logo}
      />
      <Figure.Caption>
       Java Crew.
      </Figure.Caption>
    </Figure>
    </div>
  );
};

export default inicio;
