import React, { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombrealumno: "",
    apellidoP: "",
    edad: "",
    telefono: "",
    carrera: "",
    genero: "",
  });

  const [datosTabla, setDatosTabla] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  const [edicion, setEdicion] = useState(false);
  const [indiceEdicion, setIndiceEdicion] = useState(null);

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edicion) {
      // Editar datos existentes
      const nuevosDatos = [...datosTabla];
      nuevosDatos[indiceEdicion] = datos;
      setDatosTabla(nuevosDatos);
      setEdicion(false);
      setIndiceEdicion(null);
    } else {
      // Agregar nuevos datos
      axios
        .get("http://127.0.0.1:8000/api/user/", datos)
        .then((response) => {
          console.log(response.data);
          setDatosTabla([...datosTabla, response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setDatos({
      nombrealumno: "",
      apellidoP: "",
      edad: "",
      telefono: "",
      carrera: "",
      genero: "",
    });
  };

  const handleEdit = (indice) => {
    const datosEditados = datosTabla[indice];
    setDatos(datosEditados);
    setEdicion(true);
    setIndiceEdicion(indice);
  };

  const handleDelete = (indice) => {
    const nuevosDatos = datosTabla.filter((item, index) => index !== indice);
    setDatosTabla(nuevosDatos);
  };

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const datosFiltrados = datosTabla.filter(
    (item) =>
      item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.edad.toString().includes(busqueda) ||
      item.telefono.includes(busqueda)
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <h2>Formulario</h2>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido:
              </label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                name="apellido"
                value={datos.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="edad" className="form-label">
                Edad:
              </label>
              <input
                type="number"
                className="form-control"
                id="edad"
                name="edad"
                value={datos.edad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono:
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                name="telefono"
                value={datos.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="carrera" className="form-label">
                Carrera:
              </label>
              <select
                className="form-select"
                id="carrera"
                name="carrera"
                value={datos.carrera}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una carrera</option>
                <option value="Software">Ingeniería de Software</option>
                <option value="Ingenieria">Maestría en Ingeniería</option>
                <option value="Mecatronica">Ingeniería Mecatrónica</option>
                {/* Agrega las demás opciones de carrera aquí */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="genero" className="form-label">
                Género:
              </label>
              <select
                className="form-select"
                id="genero"
                name="genero"
                value={datos.genero}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un género</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="binario">No binario</option>
                <option value="indefinido">Prefiero no decirlo</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              {edicion ? "Editar" : "Enviar"}
            </button>
          </form>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="busqueda" className="form-label">
              Buscar:
            </label>
            <input
              type="text"
              className="form-control"
              id="busqueda"
              value={busqueda}
              onChange={handleBusquedaChange}
            />
          </div>
          <h2>Datos Ingresados</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Teléfono</th>
                <th>Carrera</th>
                <th>Género</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datosFiltrados.map((item, index) => (
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.edad}</td>
                  <td>{item.telefono}</td>
                  <td>{item.carrera}</td>
                  <td>{item.genero}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(index)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
