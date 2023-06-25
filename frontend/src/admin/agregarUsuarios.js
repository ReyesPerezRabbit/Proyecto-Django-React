import React, { useState } from 'react';

const FormularioDatosPersonales = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [datos, setDatos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [indiceEditar, setIndiceEditar] = useState(-1);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim() !== '' && apellido.trim() !== '' && genero !== '') {
      const nuevoDato = {
        nombre,
        apellido,
        genero,
      };

      if (indiceEditar !== -1) {
        const nuevosDatos = [...datos];
        nuevosDatos[indiceEditar] = nuevoDato;
        setDatos(nuevosDatos);
        setIndiceEditar(-1);
      } else {
        setDatos([...datos, nuevoDato]);
      }

      setNombre('');
      setApellido('');
      setGenero('');
    }
  };

  const handleBorrarDato = (index) => {
    setDatos(datos.filter((_, i) => i !== index));
  };

  const handleEditarDato = (index) => {
    const datoEditar = datos[index];
    setNombre(datoEditar.nombre);
    setApellido(datoEditar.apellido);
    setGenero(datoEditar.genero);
    setIndiceEditar(index);
  };

  const handleBusquedaChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  const datosFiltrados = datos.filter((dato) => {
    const nombreCompleto = `${dato.nombre} ${dato.apellido}`;
    return nombreCompleto.toLowerCase().includes(terminoBusqueda.toLowerCase());
  });

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido:</label>
            <input
              type="text"
              className="form-control"
              value={apellido}
              onChange={handleApellidoChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Género:</label>
            <select
              className="form-select"
              value={genero}
              onChange={handleGeneroChange}
            >
              <option value="">Seleccionar</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            {indiceEditar !== -1 ? 'Actualizar' : 'Guardar'}
          </button>
        </form>
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar..."
          value={terminoBusqueda}
          onChange={handleBusquedaChange}
        />
      </div>
      <div className="mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Género</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.map((dato, index) => (
              <tr key={index}>
                <td>{dato.nombre}</td>
                <td>{dato.apellido}</td>
                <td>{dato.genero}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleBorrarDato(index)}
                  >
                    Borrar
                  </button>
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => handleEditarDato(index)}
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

export default FormularioDatosPersonales;
