import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Row, Col, Container } from "react-bootstrap";
import portadaThePragmaticProgrammer from "../../src/img/The Pragmatic Programmer.jpg";
import portadaCrackingtheCodingInterview from "../../src/img/Cracking the Coding Interview.jpg";
import portadaProgramminginScala from "../../src/img/Programming in Scala.jpg";
import portadaTheArtofComputerProgramming from "../../src/img/The Art of Computer Programming.jpg";
import "../css/tamañoLibro.css";

class LibrosDisponibles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: "Ingeniera en Software",
          books: [
            {
              author: "Andrew Hunt y Dave Thomas",
              title: "The Pragmatic Programmer",
              description:
                "Los autores de este libro se centran en dar toda una serie de consejos para convertirte en mejor programador de software y obtener mejores resultados.",
              image: portadaThePragmaticProgrammer,
            },
            {
              author: "Gayle Laakmann McDowell",
              title: "Cracking the Coding Interview",
              description:
                "El libro está centrado en el aspecto práctico de algoritmos y estructuras de datos.",
              image: portadaCrackingtheCodingInterview,
            },
            {
              author: "Martin Odersky",
              title: "Programming in Scala",
              description:
                "Con este libro aprenderás a programar en Scala, muy usado en proyectos big data.",
              image: portadaProgramminginScala,
            },
            {
              author: "Donald E. Knuth",
              title: "The Art of Computer Programming",
              description:
                "Este libro es un clásico del desarrollo de software. Aporta una visión fundamental y en profundidad de los algoritmos y estructuras de datos.",
              image: portadaTheArtofComputerProgramming,
            },
          ],
        },

        // Resto de las categorías y libros...
      ],
      searchQuery: "",
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { searchQuery } = this.state;

    const filteredCategories = this.state.categories
      .map((category) => ({
        name: category.name,
        books: category.books.filter((book) => {
          const title = book.title.toLowerCase();
          const author = book.author.toLowerCase();
          const query = searchQuery.toLowerCase();
          return title.includes(query) || author.includes(query);
        }),
      }))
      .filter((category) => category.books.length > 0);

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
                    onChange={this.handleSearchChange}
                  />
                </Col>
              </Row>
              {filteredCategories.map((category) => (
                <div key={category.name}>
                  <h2>{category.name}</h2>
                  <Row>
                    {category.books.map((book) => (
                      <Col key={book.title} md={6}>
                        <div className="card mb-3">
                          <img
                            src={book.image}
                            className="card-img-top book-image"
                            alt={book.title}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-text">Autor: {book.author}</p>
                            <p className="card-text">{book.description}</p>
                            <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              to="/usuario/prestamo_Externo"
                              style={{ marginRight: "10px" }} // Ajusta el valor del margen según tus necesidades
                            >
                              Prestamo Externo
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              component={Link}
                              to="/usuario/prestamo_Interno"
                              style={{ marginLeft: "10px" }} // Ajusta el valor del margen según tus necesidades
                            >
                              Prestamo Interno
                            </Button>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LibrosDisponibles;
