import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";

class BookCatalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          name: 'Ficción',
          books: [
            {
              author: 'Autor 1',
              title: 'Libro 1',
              description: 'Descripción del Libro 1',
              image: 'https://example.com/image1.jpg'
            },
            {
              author: 'Autor 2',
              title: 'Libro 2',
              description: 'Descripción del Libro 2',
              image: 'https://example.com/image2.jpg'
            },
            // Agrega más libros aquí
          ]
        },
        {
          name: 'No Ficción',
          books: [
            {
              author: 'Autor 3',
              title: 'Libro 3',
              description: 'Descripción del Libro 3',
              image: 'https://example.com/image3.jpg'
            },
            {
              author: 'Autor 4',
              title: 'Libro 4',
              description: 'Descripción del Libro 4',
              image: 'https://example.com/image4.jpg'
            },
            // Agrega más libros aquí
          ]
        },
        // Agrega más categorías aquí
      ],
      searchQuery: ''
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const { searchQuery } = this.state;

    const filteredCategories = this.state.categories.map(category => ({
      name: category.name,
      books: category.books.filter(book => {
        const title = book.title.toLowerCase();
        const author = book.author.toLowerCase();
        const query = searchQuery.toLowerCase();
        return title.includes(query) || author.includes(query);
      })
    })).filter(category => category.books.length > 0);

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
        {filteredCategories.map(category => (
          <div key={category.name}>
            <h2>{category.name}</h2>
            <div className="row">
              {category.books.map(book => (
                <div key={book.title} className="col-md-6">
                  <div className="card mb-3">
                    <img src={book.image} className="card-img-top" alt={book.title} />
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
