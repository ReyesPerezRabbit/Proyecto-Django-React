import React, { useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faImage } from '@fortawesome/free-solid-svg-icons';

const Formulario = () => {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: '',
    apellido: '',
    imagen: null
  });

  const [listaDatos, setListaDatos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosPersonales({ ...datosPersonales, [name]: value });
  };

  const handleImageChange = (event) => {
    const imagen = event.target.files[0];
    setDatosPersonales({ ...datosPersonales, imagen });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editandoIndex !== -1) {
      // Editar datos existentes
      const nuevosDatos = [...listaDatos];
      nuevosDatos[editandoIndex] = datosPersonales;
      setListaDatos(nuevosDatos);
      setEditandoIndex(-1);
    } else {
      // Agregar nuevos datos
      setListaDatos([...listaDatos, datosPersonales]);
    }

    setDatosPersonales({ nombre: '', apellido: '', imagen: null });
  };

  const handleDelete = (index) => {
    setListaDatos(listaDatos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const datosEditados = listaDatos[index];
    setDatosPersonales(datosEditados);
    setEditandoIndex(index);
  };

  return (
    <div className="container">
      <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={datosPersonales.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={datosPersonales.apellido}
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
            {datosPersonales.imagen && (
              <div className="mt-3">
               
                <img
                  src={URL.createObjectURL(datosPersonales.imagen)}
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
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaDatos.map((datos, index) => (
              <tr key={index}>
                <td>{datos.nombre}</td>
                <td>{datos.apellido}</td>
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
