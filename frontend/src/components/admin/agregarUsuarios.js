import React, { useState } from "react";

const AgregarUsuarios = () => {
  const [nombre, setNombre] = useState("");
  const [AP, setApellidop] = useState("");
  const [AM, setApellidom] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [carrera, setCarrera] = useState("");
  const [cuatri, setCuatri] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos a Django aquí
  };

  return (
    <div className="text-center">
      <h1>Dar de alta a Usuarios </h1>
    <div className="container w-75 mt-5 rounded shadow">
      <div class="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre(s):</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
          <br />
          <br />

          <label htmlFor="AP">Apellido Paterno:</label>
          <input
            type="text"
            id="AP"
            value={AP}
            onChange={(event) => setApellidop(event.target.value)}
          />
          <br />
          <br />

          <label htmlFor="AM">Apellido Materno:</label>
          <input
            type="text"
            id="AM"
            value={AM}
            onChange={(event) => setApellidom(event.target.value)}
          />

          <br />
          <br />
          <label htmlFor="sexo">Sexo:</label>
          <input
            type="text"
            id="sexo"
            value={sexo}
            onChange={(event) => setSexo(event.target.value)}
          />
          <br />
          <br />

          <label htmlFor="email">Correo Institucional:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <br />

          <label htmlFor="cuatri">Cuatrimestre:</label>
          <input
            type="text"
            id="cuatri"
            value={cuatri}
            onChange={(event) => setCuatri(event.target.value)}
          />
          <br />
          <br />

          <label htmlFor="carrera">Carrera:</label>
          <input
            type="text"
            id="carrera"
            value={carrera}
            onChange={(event) => setCarrera(event.target.value)}
          />
          <br />
          <br />

          <button type="submit">Agregar Usuario</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default AgregarUsuarios;
