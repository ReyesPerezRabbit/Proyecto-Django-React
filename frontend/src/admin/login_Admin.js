import React, { useState } from "react";
import { TextField, Typography, Box, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { AccountCircle, Lock } from "@material-ui/icons";
import Badge from "react-bootstrap/Badge";
import logo from "../img/logo_Integrador.jpeg";

function LoginAdmin() {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [esAutenticado, setEsAutenticado] = useState(false);

  // Datos ficticios para el formulario de inicio de sesión del administrador
  const usuarioFicticio = "admin";
  const contraseniaFicticia = "admin";

  const history = useHistory();

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleContraseniaChange = (event) => {
    setContrasenia(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario === usuarioFicticio && contrasenia === contraseniaFicticia) {
      // Autenticación exitosa
      setEsAutenticado(true);
      setMensaje("Inicio de sesión exitoso");
      // Redirige al usuario a la página de inicio del administrador después de un breve retraso (2 segundos)
      setTimeout(() => {
        history.push("/admin/inicio");
      }, 2000);
    } else {
      // Credenciales incorrectas
      setEsAutenticado(false);
      setMensaje("Datos incorrectos");
    }
  };

  return (
    <div className="container col-8 rounded mb-4 col bg-white p-5 rounded-end mt-5 rounded shadow">
      <div className="text-end">
        <img src={logo} alt="" width="20% px" />
      </div>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <div className="col bg-white p-5 rounded-end mt-5">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <Box width="100%">
                <Box mb={4}>
                  <Typography variant="h4" className="text-center mb-4">
                    <Badge bg="secondary">ADMINISTRADOR</Badge>
                  </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                  <Box mb={2}>
                    <TextField
                      label="Usuario"
                      id="useradmin"
                      fullWidth
                      variant="outlined"
                      size="small"
                      InputProps={{ startAdornment: <AccountCircle /> }}
                      value={usuario}
                      onChange={handleUsuarioChange}
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      label="Contraseña"
                      id="passswordadmin"
                      type="password"
                      fullWidth
                      variant="outlined"
                      size="small"
                      InputProps={{ startAdornment: <Lock /> }}
                      value={contrasenia}
                      onChange={handleContraseniaChange}
                    />
                  </Box>
                  <Box mb={4}>
                    <br />
                    <div className="d-grid">
                      <span>
                        <button className="btn bg-success nav-link col-12 my-auto">
                          Iniciar sesión
                        </button>
                      </span>
                    </div>
                    <br />
                    <div className="d-grid">
                      <span>
                        <Link
                          className="btn bg-danger nav-link col-12 my-auto"
                          to="/"
                        >
                          Regresar
                        </Link>
                      </span>
                    </div>
                  </Box>
                </form>
                {mensaje && (
                  <Box mb={2}>
                    <Typography
                      variant="body1"
                      style={{
                        color: esAutenticado ? "green" : "red",
                        textAlign: "center",
                      }}
                    >
                      {mensaje}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginAdmin;
