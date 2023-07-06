import React, { useState } from "react";

const FormularioDatosPersonales = () => {
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
    setApellidoP(event.target.value);
  };
  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };
  const handleTelefonoPChange = (event) => {
    setTelefono(event.target.value);
  };
  const handleEdadPChange = (event) => {
    setEdad(event.target.value);
  };
  const handleCarreraChange = (event) => {
    setCarrera(event.target.value);
  };
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };
  const handleUserPChange = (event) => {
    setUser(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (matricula.trim() !== "" &&nombrealumno.trim() !== "" && apellidoP.trim() !== ""&& 
    apellidoM.trim() !== ""&& correo.trim() !== ""&& 
    telefono.trim() !== ""&& edad.trim() !== "" && carrera !== "" &&
    genero.trim() !== "" && user.trim() !== "" && password.trim() !== "") {
      const nuevoDato = {
        
        matricula:"",
        nombrealumno: "",
        apellidoP: "",
        apellidoM: "",
        correo: "",
        telefono: "",
        edad: "",
        carrera: "",
        genero: "",
        user: "",
        password: "",
      };

      if (indiceEditar !== -1) {
        const nuevosDatos = [...datos];
        nuevosDatos[indiceEditar] = nuevoDato;
        setDatos(nuevosDatos);
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
    setEdad(datoEditar.edad);
    setCarrera(datoEditar.carrera);
    setGenero(datoEditar.genero);
    setUser(datoEditar.user);
    setPassword(datoEditar.password);
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
              value={nombrealumno}
              onChange={handleNombreAlumnoChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido:</label>
            <input
              type="text"
              className="form-control"
              value={apellidoM}
              onChange={handleApellidoMChange}
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
            {indiceEditar !== -1 ? "Actualizar" : "Guardar"}
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
