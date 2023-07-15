import React from "react";
import cleancode from "../img/Clean Code.jpg";
import desing from "../img/Design Patterns.jpg";
import refact from "../img/Refactoring.jpg";
import { Link } from "react-router-dom";
import { Button, Box } from "@material-ui/core";
import { Row, Col, Container } from "react-bootstrap";

const LibrosDisponibles = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={12} className="mx-auto bg-white p-4 rounded">
          <div className="container-fluid">
            <div className="text-xl-center">
              <h1>Libros disponibles</h1>
            </div>

            <br />
            <div>
              <Row>
                <Col md={5}>
                  <div style={{ backgroundColor: "#eee" }}>
                    <h2 style={{ marginBottom: "10px" }}>
                      {" "}
                      Clean Code: A Handbook of Agile Software Craftsmanship
                    </h2>
                    <img
                      style={{ width: "20%", marginBottom: "10px" }}
                      src={cleancode}
                      alt="Descripción de la imagen"
                    />
                    <p style={{ marginBottom: "10px" }}>
                      Este libro de Robert C. Martin se enfoca en la escritura
                      de un código limpio y de calidad, abordando principios,
                      patrones y prácticas que permiten crear un software
                      sostenible a largo plazo.
                    </p>
                    <div class="btn-group mx-5" role="group">
                      <Box mt={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to="/usuario/prestamo_Externo"
                        >
                          Prestamo Externo
                        </Button>
                      </Box>
                      <Box mt={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to="/usuario/prestamo_Interno"
                        >
                          Prestamo Interno
                        </Button>
                      </Box>
                    </div>
                  </div>
                  <br />
                </Col>
                <Col md={2}></Col>
                <Col md={5}>
                  <div style={{ backgroundColor: "#ccc" }}>
                    <h2 style={{ marginBottom: "10px" }}>
                      Refactoring: Improving the Design of Existing Code de
                      Martin Fowler
                    </h2>
                    <img
                      style={{ width: "20%", marginBottom: "10px" }}
                      src={refact}
                      alt="Descripción de la imagen"
                    />
                    <p style={{ marginBottom: "10px" }}>
                      Se enfoca en enseñar a los desarrolladores a mejorar el
                      diseño de código existente mediante la refactorización. .
                    </p>
                    <div class="btn-group mx-5" role="group">
                      <Box mt={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to="/usuario/prestamo_Externo"
                        >
                          Prestamo Externo
                        </Button>
                      </Box>
                      <Box mt={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to="/usuario/prestamo_Interno"
                        >
                          Prestamo Interno
                        </Button>
                      </Box>
                    </div>
                  </div>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <div style={{ backgroundColor: "#aaa" }}>
                    <h2 style={{ marginBottom: "10px" }}>
                      The Pragmatic Programmer: From Journeyman to Master
                    </h2>
                    <img
                      style={{ width: "20%", marginBottom: "10px" }}
                      src={desing}
                      alt="Descripción de la imagen"
                    />
                    <p style={{ marginBottom: "10px" }}>
                      Se enfoca en enseñar a los desarrolladores a pensar de
                      manera pragmática y a tomar decisiones informadas sobre
                      cómo escribir software de alta calidad.
                    </p>
                    <div class="btn-group mx-5" role="group">
                      <Box mt={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to="/usuario/prestamo_Externo"
                        >
                          Prestamo Externo
                        </Button>
                      </Box>
                      <Box mt={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          component={Link}
                          to="/usuario/prestamo_Interno"
                        >
                          Prestamo Interno
                        </Button>
                      </Box>
                    </div>
                  </div>
                </Col>
                <Col md={2}></Col>
                <Col md={5}>
                  <div style={{ backgroundColor: "#bbb" }}>
                    <div style={{ backgroundColor: "#eee" }}>
                      <h2 style={{ marginBottom: "10px" }}>
                        {" "}
                        Clean Code: A Handbook of Agile Software Craftsmanship
                      </h2>
                      <img
                        style={{ width: "20%", marginBottom: "10px" }}
                        src={cleancode}
                        alt="Descripción de la imagen"
                      />
                      <p style={{ marginBottom: "10px" }}>
                        Este libro de Robert C. Martin se enfoca en la escritura
                        de un código limpio y de calidad, abordando principios,
                        patrones y prácticas que permiten crear un software
                        sostenible a largo plazo.
                      </p>
                      <div class="btn-group mx-5" role="group">
                        <Box mt={4}>
                          <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/usuario/prestamo_Externo"
                          >
                            Prestamo Externo
                          </Button>
                        </Box>
                        <Box mt={4}>
                          <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/usuario/prestamo_Interno"
                          >
                            Prestamo Interno
                          </Button>
                        </Box>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LibrosDisponibles;
