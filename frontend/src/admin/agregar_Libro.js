// import React, { Component } from 'react';

// class agregar_Libro extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       description: '',
//       image: null
//     };
//   }

//   handleTitleChange = (event) => {
//     this.setState({ title: event.target.value });
//   };

//   handleDescriptionChange = (event) => {
//     this.setState({ description: event.target.value });
//   };

//   handleImageChange = (event) => {
//     this.setState({ image: event.target.files[0] });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // aquí podrías enviar la información del título, descripción y imagen a un servidor o guardarla en algún lugar
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div className="container w-75 mt-5 rounded shadow">
      
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Título:
//           <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
//         </label>
//         <br />
//         <br />
//         <label>
//           Sinopsis:
//           <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
//         </label>
//         <br />
//         <br />
//         <label>
//           Imagen:
//           <input type="file" onChange={this.handleImageChange} />
//         </label>
//         <br />
//         <br />
//         <div class="container-fluid h-100 col text-center">
//         <button  type="submit">Enviar</button>
//         </div>
//       </form>
//       </div>
//     );
//   }
// }

// export default agregar_Libro;


//////////////////////////////

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function RegistroForm() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un objeto FormData para enviar los datos al servidor
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    // Realizar la petición al servidor utilizando AJAX o fetch
    // ...
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="titulo">
        <Form.Label>Título:</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el título" value={titulo} onChange={handleTituloChange} />
      </Form.Group>

      <Form.Group controlId="descripcion">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción" value={descripcion} onChange={handleDescripcionChange} />
      </Form.Group>

      <Form.Group controlId="imagen">
        <Form.Label>Imagen:</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={handleImagenChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
}
export default RegistroForm;