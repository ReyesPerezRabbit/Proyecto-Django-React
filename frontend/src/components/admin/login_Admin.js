import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
