import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class BookCatalog extends React.Component {
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
              image: "https://example.com/image1.jpg",
            },
            {
              author: "Gayle Laakmann McDowell",
              title: "Cracking the Coding Interview",
              description:
                "El libro está centrado en el aspecto práctico de algoritmos y estructuras de datos.",
              image: "https://example.com/image1.jpg",
            },
            {
              author: "Martin Odersky",
              title: "Programming in Scala",
              description:
                "Con este libro aprenderás a programar en Scala, muy usado en proyectos big data.",
              image: "https://example.com/image1.jpg",
            },
            {
              author: "Donald E. Knuth",
              title: "The Art of Computer Programming",
              description:
                "Este libro es un clásico del desarrollo de software. Aporta una visión fundamental y en profundidad de los algoritmos y estructuras de datos.",
              image: "https://example.com/image2.jpg",
            },
          ],
        },

        {
          name: "Ingeniera en Animacion y Efectos visuales",
          books: [
            {
              author: "Richard Williams",
              title: "The Animator's Survival Kit",
              description:
                "Este libro clásico es una guía completa para animadores de todos los niveles",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "Jeremy Birn",
              title: "Digital Lighting and Rendering",
              description:
                "Este libro es una referencia fundamental para aprender sobre iluminación y renderizado en la animación digital. ",
              image: "https://exampzle.com/image4.jpg",
            },
          ],
        },
        {
          name: "Ingeniera en Nanotecnologia ",
          books: [
            {
              author: "Charles P. Poole Jr. y Frank J. Owens",
              title: "Introduction to Nanotechnology",
              description:
                "Este libro ofrece una introducción completa a la nanotecnología y sus aplicaciones en diversos campos.",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "Ben Rogers, Sumita Pennathur y Jesse Adams",
              title: "Nanotechnology: Understanding Small Systems",
              description:
                "Este libro proporciona una introducción práctica a la nanotecnología, centrándose en los aspectos físicos y aplicaciones prácticas de los sistemas a escala nanométrica.",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        {
          name: "Ingeniería Agroindustrial",
          books: [
            {
              author:
                "Gustavo V. Barbosa-Cánovas, María S. Tapia, M. Pilar Cano y Pablo Juliano",
              title: "Introducción a la Ingeniería Agroindustrial",
              description:
                "Proporciona una introducción completa a la ingeniería agroindustrial, abordando los principios y conceptos fundamentales de esta disciplina.",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "Carmen González-Laredo y Gustavo V. Barbosa-Cánovas",
              title: "Ingeniería Agroindustrial: Teoría y práctica",
              description:
                "Este libro combina la teoría y la práctica de la ingeniería agroindustrial, brindando una visión integral de los procesos y operaciones en esta área.",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        {
          name: "Ingeniería en Energía",
          books: [
            {
              author: "Frank Kreith y Susan Krumdieck",
              title: "Principles of Sustainable Energy Systems",
              description:
                "Este libro proporciona una visión completa de los principios y conceptos fundamentales de los sistemas de energía sostenible.",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "Francis Vanek, Louis D. Albright y Largus Angenent",
              title:
                "Energy Systems Engineering: Evaluation and Implementation",
              description:
                "Este libro se enfoca en la evaluación y la implementación de sistemas energéticos eficientes y sostenibles.",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        {
          name: "Ingeniería en Logística y Transporte",
          books: [
            {
              author: "Sunil Chopra y Peter Meindl",
              title:
                "Supply Chain Management: Strategy, Planning, and Operation",
              description:
                "Este libro es una referencia completa sobre la gestión de la cadena de suministro, abarcando estrategias, planificación y operaciones. ",
              image: "https://example.com/image3.jpg",
            },
            {
              author:
                "ohn J. Coyle, Robert A. Novack, Brian Gibson y Edward J. Bardi",
              title: "Transportation: A Global Supply Chain Perspective",
              description:
                "Este libro se centra en la perspectiva global de la gestión del transporte y su papel en la cadena de suministro. ",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        {
          name: "Ingeniería en Sistemas Automotrices",
          books: [
            {
              author: "James D. Halderman",
              title:
                "Automotive Technology: Principles, Diagnosis, and Service",
              description:
                "Este libro abarca los principios fundamentales de la tecnología automotriz, el diagnóstico y el servicio de vehículos. ",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "James E. Duffy",
              title: "Modern Automotive Technology",
              description:
                "Este libro ofrece una visión completa de la tecnología automotriz moderna, incluyendo los sistemas electrónicos y de control presentes en los vehículos actuales.",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        {
          name: "Ingeniería Financiera",
          books: [
            {
              author: "John C. Hull",
              title: "Options, Futures, and Other Derivatives",
              description:
                "Este libro es un recurso completo sobre derivados financieros, incluyendo opciones, futuros, swaps y otros instrumentos financieros. ",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "Tanya S. Beder y Cara M. Marshall",
              title: "Financial Engineering: The Evolution of a Profession",
              description:
                "Este libro ofrece una visión general de la ingeniería financiera como profesión, abordando su evolución, los marcos conceptuales y las herramientas utilizadas en el campo. ",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        {
          name: "Ingeniería Mecatrónica",
          books: [
            {
              author: "Godfrey C. Onwubolu",
              title: "Mechatronics: Principles and Applications",
              description:
                " Este libro ofrece una introducción completa a los principios y aplicaciones de la mecatrónica.",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "W. Bolton",
              title: "Mechatronics: Electronic Control Systems in Mechanical",
              description:
                " Este libro presenta los principios y aplicaciones de los sistemas de control electrónico en ingeniería mecánica y eléctrica.",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        {
          name: "Maestría en Ingeniería",
          books: [
            {
              author: "Ranjit Kumar",
              title: "Research Methodology: A Step-by-Step Guide for Beginners",
              description:
                "Este libro es una guía paso a paso para la investigación científica en ingeniería. ",
              image: "https://example.com/image3.jpg",
            },
            {
              author: "Stuart G. Walesh",
              title:
                "Engineering Your Future: The Professional Practice of Engineering",
              description:
                "Este libro se centra en el aspecto profesional de la ingeniería, proporcionando orientación sobre el desarrollo de una carrera exitosa en el campo de la ingeniería.",
              image: "https://example.com/image4.jpg",
            },
            // Agrega más libros aquí
          ],
        },
        // Agrega más categorías aquí
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
      <div className="container">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar libros..."
            value={searchQuery}
            onChange={this.handleSearchChange}
          />
        </div>
        {filteredCategories.map((category) => (
          <div key={category.name}>
            <h2>{category.name}</h2>
            <div className="row">
              {category.books.map((book) => (
                <div key={book.title} className="col-md-6">
                  <div className="card mb-3">
                    <img
                      src={book.image}
                      className="card-img-top"
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
                      >
                        Prestamo Externo
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/usuario/prestamo_Interno"
                      >
                        Prestamo Interno
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BookCatalog;
