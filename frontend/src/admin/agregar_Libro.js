import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const AgregarLibros = () => {
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
  const [errorCampos,] = useState(false);
  const [errorNumerico, ] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);
  const [borradoExitoso, setBorradoExitoso] = useState(false);
  
  // useEffect(() => {
  //   // Fetch data from the API and store it in the 'listaDatos' state
  //   axios
  //     .get("http://127.0.0.1:8000/api/libro/")
  //     .then((response) => {
  //       setListaDatos(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

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
          console.log(response.data);
          setGuardadoExitoso(true);
        })
        .catch((error) => {
          console.error(error);
          setGuardadoExitoso(false);
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
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/libro/") // Cambia la URL por la correcta del backend
      .then((response) => {
        setListaDatos(response.data.libreria); // Asigna los datos obtenidos al estado listaDatos
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (index) => {
    setListaDatos(listaDatos.filter((_, i) => i !== index));
    setBorradoExitoso(true);

    const libroABorrar = listaDatos[index];
    axios
      .delete(`http://127.0.0.1:8000/api/libro/${libroABorrar.id}/`)
      .then((response) => {
        console.log("Dato eliminado de la base de datos:", response.data);
      })
      .catch((error) => {
        console.error("Error al eliminar el dato:", error);
      });
  };

  const handleEdit = (index) => {
    const datosEditados = listaDatos[index];
    setDatosLibros(datosEditados);
    setEditandoIndex(index);
  };

  const handleBusquedaChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  const datosFiltrados = listaDatos.filter((dato) => {
    const nombreCompleto = `${dato.codigo} ${dato.nombreLibro} ${dato.autor} ${dato.descripcion} ${dato.cantidad} ${dato.carrera}`;
    return nombreCompleto.toLowerCase().includes(terminoBusqueda.toLowerCase());
  });

  // useEffect(() => {
  //   if (guardadoExitoso || borradoExitoso) {
  //     const timer = setTimeout(() => {
  //       setGuardadoExitoso(false);
  //       setBorradoExitoso(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [guardadoExitoso, borradoExitoso]);

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={12} className="mx-auto bg-white p-4 rounded">
          <div className="table-container">
            <div className="col-12">
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <div className="mb-1">
                      <label className="form-label">Código:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="codigo"
                        value={datosLibros.codigo}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nombre del Libro:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombreLibro"
                        value={datosLibros.nombreLibro}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Autor:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="autor"
                        value={datosLibros.autor}
                        required
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
                        value={datosLibros.cantidad}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Descripción:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="descripcion"
                        value={datosLibros.descripcion}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Carrera:</label>
                      <select
                        className="form-select"
                        name="carrera"
                        value={datosLibros.carrera}
                        required
                        onChange={handleChange}
                      >
                        <option value="">Selección de carreras.</option>
                        <option value="Ingeniería Agroindustrial">Ingeniería Agroindustrial</option>
                        <option value="Ingeniería de Software">Ingeniería de Software</option>
                        <option value="Ingeniería en Animación y Efectos Visuales">
                          Ingeniería en Animación y Efectos Visuales
                        </option>
                        <option value="Ingeniería en Energía">Ingeniería en Energía</option>
                        <option value="Ingeniería en Logística y Transporte">
                          Ingeniería en Logística y Transporte
                        </option>
                        <option value="Ingeniería en Nanotecnología">Ingeniería en Nanotecnología</option>
                        <option value="Ingeniería en Sistemas Automotrices">
                          Ingeniería en Sistemas Automotrices
                        </option>
                        <option value="Ingeniería en Tecnología Ambiental">
                          Ingeniería en Tecnología Ambiental
                        </option>
                        <option value="Ingeniería Financiera">Ingeniería Financiera</option>
                        <option value="Ingeniería Mecatrónica">Ingeniería Mecatrónica</option>
                        <option value="Maestría en Ingeniería">Maestría en Ingeniería</option>
                        <option value="Centro de Estudios de Lenguas Extranjeras">
                          Centro de Estudios de Lenguas Extranjeras
                        </option>
                      </select>
                    </div>
                  </Col>
                </Row>
                <Row>
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
                </Row>
                <button type="submit" className="btn btn-primary">
                  {editandoIndex !== -1 ? "Actualizar" : "Guardar"}
                </button>
              </form>
              {errorCampos && (
                <div className="alert alert-danger mt-4">
                  Por favor, completa todos los campos.
                </div>
              )}
              {errorNumerico && (
                <div className="alert alert-danger mt-4">
                  Por favor, ingresa un valor numérico válido en el campo de cantidad.
                </div>
              )}
              {guardadoExitoso && (
                <div className="alert alert-success mt-4">
                  Los datos se guardaron correctamente.
                </div>
              )}
              {borradoExitoso && (
                <div className="alert alert-success mt-4">
                  El dato se eliminó correctamente.
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 col-12">
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Buscar por código, nombre del libro, autor, descripción, cantidad o carrera..."
              value={terminoBusqueda}
              onChange={handleBusquedaChange}
            />
          </div>
          <div className="table-wrapper">
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
                  {datosFiltrados.map((dato, index) => (
                    <tr key={index}>
                      <td>{dato.codigo}</td>
                      <td>{dato.nombreLibro}</td>
                      <td>{dato.autor}</td>
                      <td>{dato.descripcion}</td>
                      <td>{dato.cantidad}</td>
                      <td>{dato.carrera}</td>
                      <td>
                        {/* Establecer el tamaño de la imagen */}
                        {dato.imagen && (
                          <img
                            src={URL.createObjectURL(dato.imagen)}
                            alt="Imagen del libro"
                            style={{ width: "100px", height: "auto" }} // Cambiar el tamaño aquí
                          />
                        )}
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
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

export default AgregarLibros;

