import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Formulario = () => {
  const [datosPersonales, setDatosPersonales] = useState({
    nombre: "",
    apellido: "",
    imagen: null,
  });

  const [listaDatos, setListaDatos] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(-1);
  const [error, setError] = useState("");

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

    if (datosPersonales.nombre.trim() === "" || datosPersonales.apellido.trim() === "") {
      setError("Por favor, complete todos los campos pinche pendejo de mierda ojala te de un cancen el huevo derecho");
      return;
    }

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

    setDatosPersonales({ nombre: "", apellido: "", imagen: null });
    setError("");
  };

  const handleDelete = (index) => {
    setListaDatos(listaDatos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const datosEditados = listaDatos[index];
    setDatosPersonales(datosEditados);
    setEditandoIndex(index);
    setError("");
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col md={12} className="mx-auto bg-white p-4 rounded">
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
                <br />
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
                      className="mt-2 img-thumbnail"
                      style={{ maxWidth: "200px", margin: "0 auto" }}
                    />
                  </div>
                )}
              </div>
              {error && <div className="alert alert-danger mt-3">{error}</div>} {/* Agregar margen superior al mensaje de error */}
              <button type="submit" className="btn btn-primary mt-3">
                {editandoIndex !== -1 ? "Guardar Edición" : "Guardar"}
              </button>
            </form>
          </div>
          <div className="mt-4">
            <h2>Datos Guardados</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>codigo</th>
                  <th>Nombre del libro</th>
                  <th>Autor</th>
                  <th>descripcion</th>
                  <th>cantidad</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {listaDatos.map((datos, index) => (
                  <tr key={index}>
                    <td>{datos.codigo}</td>
                    <td>{datos.apellido}</td>
                    <td>
                      {datos.imagen && (
                        <img
                          src={URL.createObjectURL(datos.imagen)}
                          alt="Imagen seleccionada"
                          className="img-thumbnail"
                          style={{ maxWidth: "50px" }}
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

