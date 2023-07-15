import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography } from "@material-ui/core";
import logo from "../../src/img/logo_Integrador.jpeg";
import Figure from "react-bootstrap/Figure";

const InicioUsuario = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={12} className="mx-auto bg-white p-4 rounded">
          <Typography variant="h3" gutterBottom>
            Panel de Usuarios
          </Typography>

          <Col md={12} className="mx-auto text-left">
            <Typography variant="body1">
              Queridos usuarios, esta es la plataforma digital para poder hacer
              su solicutud de libros de la Escuela Politecnica de Tapachula la
              cual va a consistir en llenar unos formularios para poder hacer el
              prestamo del libro y asi poder tener el libro que usted va a
              requerir asi mismo al momento de rellenar los campos debera
              hacerlo de manera correcta para que no valla a ver problemas mas
              adelante son su peticion
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

export default InicioUsuario;
