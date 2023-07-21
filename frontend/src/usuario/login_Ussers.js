import React from "react";
import { TextField, Typography, Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AccountCircle, Lock } from "@material-ui/icons";
import Badge from "react-bootstrap/Badge";
import logo from "../img/logo_Integrador.jpeg";

const login_Ussers = () => {
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
                    <Badge bg="secondary">USUARIOS</Badge>
                  </Typography>
                </Box>
                <form>
                  <Box mb={2}>
                    <TextField
                      label="Usuario"
                      id="usuario"
                      fullWidth
                      variant="outlined"
                      size="small"
                      InputProps={{ startAdornment: <AccountCircle /> }}
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      label="Contraseña"
                      id="passswordUsuario"
                      type="password"
                      fullWidth
                      variant="outlined"
                      size="small"
                      InputProps={{ startAdornment: <Lock /> }}
                    />
                  </Box>
                  <Box mb={4}>
                    <br />
                    <div className="d-grid">
                      <span>
                        <Link
                          className="btn bg-success nav-link col-12 my-auto"
                          to="/usuario/inicio"
                        >
                          Iniciar sesión
                        </Link>
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
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default login_Ussers;