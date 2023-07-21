import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import "../css/tamañoLibro.css";

const LibrosDisponibles = () => {
  // Mantenemos el estado de la lista original de libros
  const [libros, setLibros] = useState([]);

  // Mantenemos el estado del término de búsqueda
  const [searchQuery, setSearchQuery] = useState("");

  // Mantenemos el estado de los resultados filtrados
  const [filteredLibros, setFilteredLibros] = useState([]);

  // Función para cargar los libros desde el servidor (equivalente a useEffect en tu código)
  const cargarLibros = () => {
    axios
      .get("http://127.0.0.1:8000/api/libro/")
      .then((response) => {
        setLibros(response.data.libreria);
        setFilteredLibros(response.data.libreria); // Inicialmente, mostramos todos los libros sin filtrar
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Ejecutar la función de carga una vez al montar el componente
  useEffect(() => {
    cargarLibros();
  }, []);

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);

    // Filtrar la lista de libros basada en el término de búsqueda
    const filtered = libros.filter((libro) => {
      const nombreCompleto = `${libro.codigo} ${libro.nombreLibro} ${libro.autor} ${libro.descripcion} ${libro.cantidad} ${libro.carrera}`;
      return nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredLibros(filtered); // Actualizamos la lista filtrada
  };

  // Función para agrupar los libros por carrera
  const groupByCarrera = () => {
    const grouped = {};
    filteredLibros.forEach((libro) => {
      if (!grouped[libro.carrera]) {
        grouped[libro.carrera] = [];
      }
      grouped[libro.carrera].push(libro);
    });
    return grouped;
  };

  const groupedLibros = groupByCarrera();

  return (
    <Container className="text-center mt-5">
      <Row className="mb-3">
        <Col md={12} className="mx-auto bg-white p-4 rounded">
          <Container className="my-4">
            <Row className="mb-3">
              <Col>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar libros..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </Col>
            </Row>
            {Object.entries(groupedLibros).map(([carrera, librosCarrera]) => (
              <div key={carrera}>
                <h2>{carrera}</h2>
                <Row>
                  {/* Dividir los libros en dos columnas */}
                  <Col md={6}>
                    {librosCarrera
                      .slice(0, Math.ceil(librosCarrera.length / 2))
                      .map((libro) => (
                        <div key={libro.id} className="card mb-3">
                          {/* Contenido del libro */}
                          <img
                            src={libro.imagen}
                            className="card-img-top book-image"
                            alt={libro.nombreLibro}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{libro.nombreLibro}</h5>
                            <p className="card-text">Autor: {libro.autor}</p>
                            <p className="card-text">{libro.descripcion}</p>
                            <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              to="/usuario/prestamo_Externo"
                              style={{
                                marginRight: "10px",
                              }}
                            >
                              Prestamo Externo
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              to="/usuario/prestamo_Interno"
                              style={{
                                marginLeft: "10px",
                              }}
                            >
                              Prestamo Interno
                            </Button>
                          </div>
                        </div>
                      ))}
                  </Col>
                  <Col md={6}>
                    {librosCarrera
                      .slice(Math.ceil(librosCarrera.length / 2))
                      .map((libro) => (
                        <div key={libro.id} className="card mb-3">
                          {/* Contenido del libro */}
                          <img
                            src={libro.imagen}
                            className="card-img-top book-image"
                            alt={libro.nombreLibro}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{libro.nombreLibro}</h5>
                            <p className="card-text">Autor: {libro.autor}</p>
                            <p className="card-text">{libro.descripcion}</p>
                            <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              to="/usuario/prestamo_Externo"
                              style={{
                                marginRight: "10px",
                              }}
                            >
                              Prestamo Externo
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              to="/usuario/prestamo_Interno"
                              style={{
                                marginLeft: "10px",
                              }}
                            >
                              Prestamo Interno
                            </Button>
                          </div>
                        </div>
                      ))}
                  </Col>
                </Row>
              </div>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default LibrosDisponibles;
