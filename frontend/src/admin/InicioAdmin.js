import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import logo from "../../src/img/logo_Integrador.jpeg";
import Figure from "react-bootstrap/Figure";

const InicioAdmin = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={12} className="mx-auto bg-white p-4 rounded">
          <Typography variant="h3" gutterBottom>
            Panel de Administrador
          </Typography>

          <Col md={12} className="mx-auto text-left">
            <Typography variant="body1">
              El Panel de Administrador proporciona acceso completo al sistema
              de gestión de bibliotecas. Permite dar de alta a usuarios y subir
              libros para que los usuarios puedan elegirlos y llenar el
              formulario de préstamo.
            </Typography>
          </Col>

          <div className="text-center mt-4">
            <Figure>
              <Figure.Image
                className="img-fluid"
                width={200}
                height={140}
                alt="171x180"
                src={logo}
              />
              <Figure.Caption>Java Crew</Figure.Caption>
            </Figure>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InicioAdmin;
