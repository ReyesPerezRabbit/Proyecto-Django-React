import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const Formulario = () => {
  const [datosLibros, setDatosLibros] = useState({
    codigo: "",
    nombreLibro: "",
    autor: "",
    cantidad: "",
    descripcion: "",
    carrera: "",
    imagen: null,
  });

  const [listaDatos, setListaDatos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(-1);
  const [error] = useState("");

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

      axios
        .post("http://127.0.0.1:8000/api/libro/", datosLibros)
        .then((response) => {
          console.log("Datos guardados en la base de datos:", response.data);
        })
        .catch((error) => {
          console.error("Error al guardar los datos:", error);
        });
    }

    setDatosLibros({
      codigo: "",
      nombreLibro: "",
      descripcion: "",
      cantidad: "",
      autor: "",
      carrera: "",
      imagen: null,
    });
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
    <Container className="text-center mt-5">
      <Row>
        <Col md={12} className="mx-auto bg-white p-4 rounded">
          <div className="table-container">
            <div className="col-12">
              <h2>Registro de libros de la biblioteca</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="mb-1">
                      <label className="form-label">Código:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="codigo"
                        required
                        value={datosLibros.codigo}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nombre del Libro:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombreLibro"
                        required
                        value={datosLibros.nombreLibro}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Autor:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="autor"
                        required
                        value={datosLibros.autor}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="form-label">Cantidad:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="cantidad"
                        required
                        value={datosLibros.cantidad}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Descripción:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="descripcion"
                        required
                        value={datosLibros.descripcion}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Carrera:</label>
                      <select
                        className="form-select"
                        name="carrera"
                        required
                        value={datosLibros.carrera}
                        onChange={handleChange}
                      >
                        <option selected>Selección de carreras.</option>
                        <option value="Ingeniería Agroindustrial">
                          Ingeniería Agroindustrial
                        </option>
                        <option value="Ingeniería de Software">
                          Ingeniería de Software
                        </option>
                        <option value="Ingeniería en Animación y Efectos Visuales">
                          Ingeniería en Animación y Efectos Visuales
                        </option>
                        <option value="Ingeniería en Energía">
                          Ingeniería en Energía
                        </option>
                        <option value="Ingeniería en Logística y Transporte">
                          Ingeniería en Logística y Transporte
                        </option>
                        <option value="Ingeniería en Nanotecnología">
                          Ingeniería en Nanotecnología
                        </option>
                        <option value="Ingeniería en Sistemas Automotrices">
                          Ingeniería en Sistemas Automotrices
                        </option>
                        <option value="Ingeniería en Tecnología Ambiental">
                          Ingeniería en Tecnología Ambiental
                        </option>
                        <option value="Ingeniería Financiera">
                          Ingeniería Financiera
                        </option>
                        <option value="Ingeniería Mecatrónica">
                          Ingeniería Mecatrónica
                        </option>
                        <option value="Maestría en Ingeniería">
                          Maestría en Ingeniería
                        </option>
                      </select>
                    </div>

                    {error && (
                      <div className="alert alert-danger mt-3">{error}</div>
                    )}
                  </Col>
                </Row>
                <div className="mb-3">
                  <label className="form-label">Imagen:</label>
                  <br />
                  <input
                    type="file"
                    className="form-control-file"
                    accept="image/*"
                    required
                    onChange={handleImageChange}
                  />
                  {datosLibros.imagen && (
                    <div className="mt-3">
                      <img
                        src={URL.createObjectURL(datosLibros.imagen)}
                        alt="Imagen seleccionada"
                        className="mt-2"
                        style={{ width: "100px" }}
                      />
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  {editandoIndex !== -1 ? "Guardar Edición" : "Guardar"}
                </button>
              </form>
            </div>
          </div>
          <div className="mt-4">
            <h2>Datos Guardados</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre del Libro</th>
                  <th>Autor</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Carrera</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {listaDatos.map((datos, index) => (
                  <tr key={index}>
                    <td>{datos.codigo}</td>
                    <td>{datos.nombreLibro}</td>
                    <td>{datos.autor}</td>
                    <td>{datos.descripcion}</td>
                    <td>{datos.cantidad}</td>
                    <td>{datos.carrera}</td>
                    <td>
                      {datos.imagen && (
                        <img
                          src={URL.createObjectURL(datos.imagen)}
                          alt="Imagen seleccionada"
                          className="img-thumbnail"
                          style={{ width: "100px" }}
                        />
                      )}
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-danger me-2"
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
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Formulario;