import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import Accordion from "react-bootstrap/Accordion";
import Figure from "react-bootstrap/Figure";
import logo from "../../src/img/logo_Integrador.jpeg";

const Inicio = () => {
  return (
    <div className="container w-100 text-center">
      <div className="row align-items-stretch">
        <div className="col-md-8 col-lg-6 mx-auto bg-white p-5 rounded mt-5">
          <Typography variant="h3" gutterBottom>
            Gestión de Sistema de Biblioteca
          </Typography>
          <div className="d-flex justify-content-between">
            <div className="col-5 my-4">
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/admin"
                fullWidth
              >
                Administrador
              </Button>
            </div>
            <div className="col-5 my-4">
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/usuario"
                fullWidth
              >
                Usuarios
              </Button>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* Acordeon */}
      <div className="d-flex justify-content-between moved-div">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dato importante </Accordion.Header>
            <Accordion.Body>
              El sistema de gestión de biblioteca tiene como función agilizar el
              servicio de préstamos de libros de casa y externos, haciendo
              posible tener acceso más rápido a los libros que dispone la
              biblioteca de la universidad politécnica de Tapachula
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
      {/* Figura */}
      <div className="d-flex justify-content-center">
        <Figure>
          <Figure.Image width={300} height={210} alt="171x180" src={logo} />
          <Figure.Caption>Java Crew.</Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default Inicio;