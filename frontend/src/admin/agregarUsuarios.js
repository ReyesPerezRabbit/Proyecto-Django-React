import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/AgregarUsuarios.css";

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
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [datos, setDatos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [indiceEditar, setIndiceEditar] = useState(-1);

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
    setUsuario(event.target.value);
  };
  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
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
      usuario.trim() !== "" &&
      contrasena.trim() !== ""
    ) {
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
        usuario: usuario,
        contrasena: contrasena,
      };

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
      setUsuario("");
      setContrasena("");
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
    setUsuario(datoEditar.usuario);
    setContrasena(datoEditar.contrasena);
    setIndiceEditar(index);
  };

  const handleBusquedaChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  const datosFiltrados = datos.filter((dato) => {
    const nombreCompleto = `${dato.matricula} ${dato.nombrealumno}${dato.apellidoP}${dato.apellidoM}
    ${dato.correo}${dato.edad}${dato.carrera}${dato.genero}${dato.usuario}${dato.contrasena}`;
    return nombreCompleto.toLowerCase().includes(terminoBusqueda.toLowerCase());
  });

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
                      <label className="form-label">Matricula:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={matricula}
                        onChange={handleMatriculaChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nombre:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={nombrealumno}
                        onChange={handleNombreAlumnoChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Apellido Paterno:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={apellidoP}
                        onChange={handleApellidoPChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Apellido Materno:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={apellidoM}
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
                        onChange={handleCorreoChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Telefono:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={telefono}
                        onChange={handleTelefonoChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Edad:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={edad}
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
                        onChange={handleCarreraChange}
                      >
                        <option selected>Selección de carreras.</option>
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
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="form-label">Usuario:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={usuario}
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
                        value={contrasena}
                        onChange={handleContrasenaChange}
                      />
                    </div>
                  </Col>
                </Row>
                <button type="submit" className="btn btn-primary">
                  {indiceEditar !== -1 ? "Actualizar" : "Guardar"}
                </button>
              </form>
            </div>
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
          <div className="table-wrapper">
            <div className="table">
              <table className="table-responsive">
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
                      <td>{dato.usuario}</td>
                      <td>{dato.contrasena}</td>
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
