import React, { useState } from 'react';
import axios from 'axios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faImage } from '@fortawesome/free-solid-svg-icons';

const Formulario = () => {
  const [datosLibros, setDatosLibros] = useState({
    codigo:'',
    nombreLibro: '',
    autor: '',
    cantidad: '',
    descripcion: '',
    imagen: null
  });

  const [listaDatos, setListaDatos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosLibros({ ...datosLibros, [name]: value });
  };

  const handleImageChange = (event) => {
    const imagen = event.target.files[0];
    setDatosLibros({ ...datosLibros, imagen });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editandoIndex !== -1) {
      // Editar datos existentes
      const nuevosDatos = [...listaDatos];
      nuevosDatos[editandoIndex] = datosLibros;
      setListaDatos(nuevosDatos);
      setEditandoIndex(-1);
    } else {
      // Agregar nuevos datos
      setListaDatos([...listaDatos, datosLibros]);

      axios.post("http://127.0.0.1:8000/api/libro/", datosLibros)
        .then(response => {
          console.log('Datos guardados en la base de datos:', response.data);
        })
        .catch(error => {
          console.error('Error al guardar los datos:', error);
        });
    
    }

    setDatosLibros({ codigo: '',nombreLibro: '',descripcion: '',cantidad: '', autor: '', imagen: null });
  };

  const handleDelete = (index) => {
    setListaDatos(listaDatos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const datosEditados = listaDatos[index];
    setDatosLibros(datosEditados);
    setEditandoIndex(index);
  };

  return (
    <div className="container">
      <div className="col-5">
        <h2>Registro de libros de la Biblioteca</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Codigo:</label>
            <input
              type="text"
              className="form-control"
              name="codigo"
              required
              value={datosLibros.codigo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Nombre del Libro:</label>
            <input
              type="text"
              className="form-control"
              name="nombreLibro"
              required
              value={datosLibros.nombreLibro}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Autor:</label>
            <input
              type="text"
              className="form-control"
              name="autor"
              value={datosLibros.autor}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Descripcion:</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              value={datosLibros.descripcion}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>cantidad:</label>
            <input
              type="number"
              className="form-control"
              name="cantidad"
              value={datosLibros.cantidad}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Carrera:</label>
            <input
              type="text"
              className="form-control"
              name="carrera"
              value={datosLibros.carrera}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Categoria:</label>
            <input
              type="text"
              className="form-control"
              name="categoria"
              value={datosLibros.categoria}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Imagen:</label>
            <input
              type="file"
              className="form-control-file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {datosLibros.imagen && (
              <div className="mt-3">
                <img
                  src={URL.createObjectURL(datosLibros.imagen)}
                  alt="Imagen seleccionada"
                  className="mt-2"
                  style={{ maxWidth: '200px' }}
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            {editandoIndex !== -1 ? 'Guardar Edición' : 'Guardar'}
          </button>
        </form>
      </div>
      <div>
        <h2>Datos Guardados</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Nombre del Libro</th>
              <th>Autor</th>
              <th>Cantidad de Libro</th>
              <th>Descipcion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaDatos.map((datos, index) => (
              <tr key={index}>
                <td>{datos.codigo}</td>
                <td>{datos.nombreLibro}</td>
                <td>{datos.autor}</td>
                <td>{datos.cantidad}</td>
                <td>{datos.codigo}</td>
                <td>{datos.descripcion}</td>
                <td>{datos.imagen ? datos.imagen.name : ''}</td>
                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => handleDelete(index)}
                  >
                    Borrar
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Formulario;
