//import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/AgregarUsuarios.css";
import axios from "axios";

const AgregarUsuarios = () => {
  const [matricula, setMatricula] = useState("");
  const [nombrealumno, setNombreAlumno] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [edad, setEdad] = useState("");
  const [carrera, setCarrera] = useState("");
  const [genero, setGenero] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [indiceEditar, setIndiceEditar] = useState(-1);
  const [guardadoExitoso, setGuardadoExitoso] = useState(false);
  const [errorCampos, setErrorCampos] = useState(false);
  const [errorNumerico, setErrorNumerico] = useState(false);

  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  };
  const handleNombreAlumnoChange = (event) => {
    setNombreAlumno(event.target.value);
  };

  const handleApellidoPChange = (event) => {
    setApellidoP(event.target.value);
  };

  const handleApellidoMChange = (event) => {
    setApellidoM(event.target.value);
  };
  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };
  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };
  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };
  const handleCarreraChange = (event) => {
    setCarrera(event.target.value);
  };
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };
  const handleUsuarioChange = (event) => {
    setUser(event.target.value);
  };
  const handleContrasenaChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      matricula.trim() !== "" &&
      nombrealumno.trim() !== "" &&
      apellidoP.trim() !== "" &&
      apellidoM.trim() !== "" &&
      correo.trim() !== "" &&
      telefono.trim() !== "" &&
      edad.trim() !== "" &&
      carrera !== "" &&
      genero.trim() !== "" &&
      user.trim() !== "" &&
      password.trim() !== ""
    ) {
      if (isNaN(parseInt(telefono)) || isNaN(parseInt(edad))) {
        setErrorNumerico(true);
        setErrorCampos(false);
        return;
      }

      const nuevoDato = {
        matricula: matricula,
        nombrealumno: nombrealumno,
        apellidoP: apellidoP,
        apellidoM: apellidoM,
        correo: correo,
        telefono: telefono,
        edad: edad,
        carrera: carrera,
        genero: genero,
        user: user,
        password: password,
      };

      // Make an HTTP POST request to save the data
      axios
        .post("http://127.0.0.1:8000/api/user/", nuevoDato)
        .then((response) => {
          console.log(response.data);
          setGuardadoExitoso(true);
        })
        .catch((error) => {
          console.error(error);
          setGuardadoExitoso(false);
        });

      if (indiceEditar !== -1) {
        const datosActualizados = datos.map((dato, index) => {
          if (index === indiceEditar) {
            return nuevoDato;
          }
          return dato;
        });

        setDatos(datosActualizados);
        setIndiceEditar(-1);
      } else {
        setDatos([...datos, nuevoDato]);
      }

      setMatricula("");
      setNombreAlumno("");
      setApellidoP("");
      setApellidoM("");
      setCorreo("");
      setTelefono("");
      setEdad("");
      setCarrera("");
      setGenero("");
      setUser("");
      setPassword("");
      setErrorCampos(false);
      setErrorNumerico(false);
    } else {
      setErrorCampos(true);
      setErrorNumerico(false);
    }
  };

  const handleBorrarDato = (index) => {
    setDatos(datos.filter((_, i) => i !== index));
  };

  const handleEditarDato = (index) => {
    const datoEditar = datos[index];

    setMatricula(datoEditar.matricula);
    setNombreAlumno(datoEditar.nombrealumno);
    setApellidoP(datoEditar.apellidoP);
    setApellidoM(datoEditar.apellidoM);
    setCorreo(datoEditar.correo);
    setTelefono(datoEditar.telefono);
    setEdad(datoEditar.edad);
    setCarrera(datoEditar.carrera);
    setGenero(datoEditar.genero);
    setUser(datoEditar.user);
    setPassword(datoEditar.password);
    setIndiceEditar(index);
    setErrorCampos(false);
    setErrorNumerico(false);
  };

  const handleBusquedaChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  useEffect(() => {
    // Fetch data from the API and store it in the 'datos' state
    axios
      .get("http://127.0.0.1:8000/api/user/")
      .then((response) => {
        setDatos(response.data.useregister); // Assuming the API response has a 'useregister' key with the user data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // ... (rest of the code)
  const datosFiltrados = datos.filter((dato) => {
    const nombreCompleto = `${dato.matricula} ${dato.nombrealumno} ${dato.apellidoP} ${dato.apellidoM} ${dato.correo} ${dato.edad} ${dato.carrera} ${dato.genero} ${dato.user} ${dato.password}`;
    return nombreCompleto.toLowerCase().includes(terminoBusqueda.toLowerCase());
  });

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={12} className="mx-auto bg-white p-4 rounded">
          <div className="col-12">
            <h2>Registro de usuarios de la biblioteca</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <div className="mb-1">
                    <label className="form-label">Matricula:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={matricula}
                      required
                      onChange={handleMatriculaChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={nombrealumno}
                      required
                      onChange={handleNombreAlumnoChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Apellido Paterno:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={apellidoP}
                      required
                      onChange={handleApellidoPChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Apellido Materno:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={apellidoM}
                      required
                      onChange={handleApellidoMChange}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Correo:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={correo}
                      required
                      onChange={handleCorreoChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Telefono:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={telefono}
                      required
                      onChange={handleTelefonoChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Edad:</label>
                    <input
                      type="number"
                      className="form-control"
                      value={edad}
                      required
                      onChange={handleEdadChange}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Género:</label>
                    <select
                      className="form-select"
                      value={genero}
                      required
                      onChange={handleGeneroChange}
                    >
                      <option value="">Seleccionar</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Carrera:</label>
                    <select
                      className="form-select"
                      value={carrera}
                      required
                      onChange={handleCarreraChange}
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
                      <option value="Centro de Estudios de Lenguas Extranjeras">
                        Centro de Estudios de Lenguas Extranjeras
                      </option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Usuario:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={user}
                      required
                      onChange={handleUsuarioChange}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={password}
                      required
                      onChange={handleContrasenaChange}
                    />
                  </div>
                </Col>
              </Row>
              <button type="submit" className="btn btn-primary">
                {indiceEditar !== -1 ? "Actualizar" : "Guardar"}
              </button>
            </form>
            {errorCampos && (
              <div className="alert alert-danger mt-4">
                Por favor, completa todos los campos.
              </div>
            )}
            {errorNumerico && (
              <div className="alert alert-danger mt-4">
                Por favor, ingresa un valor numérico válido en los campos de
                teléfono y edad.
              </div>
            )}
            {guardadoExitoso && (
              <div className="alert alert-success mt-4">
                Los datos se guardaron correctamente.
              </div>
            )}
            {guardadoExitoso === false && (
              <div className="alert alert-danger mt-4">
                Hubo un error al guardar los datos.
              </div>
            )}
          </div>
          <div className="mt-4 col-12">
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Buscar por usuario..."
              value={terminoBusqueda}
              onChange={handleBusquedaChange}
            />
          </div>
          <div className="mt-4">
            <h2>Datos Guardados</h2>
            <div className="table-container">
              <table className="table tableproperties">
                <thead>
                  <tr>
                    <th>Matricula</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Edad</th>
                    <th>Género</th>
                    <th>Carrera</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {datosFiltrados.map((dato, index) => (
                    <tr key={index}>
                      <td>{dato.matricula}</td>
                      <td>{dato.nombrealumno}</td>
                      <td>{dato.apellidoP}</td>
                      <td>{dato.apellidoM}</td>
                      <td>{dato.correo}</td>
                      <td>{dato.telefono}</td>
                      <td>{dato.edad}</td>
                      <td>{dato.genero}</td>
                      <td>{dato.carrera}</td>
                      <td>{dato.user}</td>
                      <td>{dato.password}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-danger me-2"
                            onClick={() => handleBorrarDato(index)}
                          >
                            Borrar
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleEditarDato(index)}
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AgregarUsuarios;
