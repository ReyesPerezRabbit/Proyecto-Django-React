import React, { Component } from 'react';

class agregar_Libro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image: null
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // aquí podrías enviar la información del título, descripción y imagen a un servidor o guardarla en algún lugar
    console.log(this.state);
  };

  render() {
    return (
      <div className="container w-75 mt-5 rounded shadow">
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Título:
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
        </label>
        <br />
        <br />
        <label>
          Descripción:
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        </label>
        <br />
        <br />
        <label>
          Imagen:
          <input type="file" onChange={this.handleImageChange} />
        </label>
        <br />
        <br />
        <div class="container-fluid h-100 col text-center">
        <button  type="submit">Enviar</button>
        </div>
      </form>
      </div>
    );
  }
}

export default agregar_Libro;
