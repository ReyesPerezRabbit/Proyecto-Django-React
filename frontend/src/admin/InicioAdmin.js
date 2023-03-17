import React from "react";
//import { Link } from 'react-router-dom'
import { Typography } from "@material-ui/core";
import logo from "../../src/img/logo_Integrador.jpeg";
import Figure from "react-bootstrap/Figure";

const InicioAdmin = () => {
  return (
    <div>
      <container>
        <div className="container w-100 mt-5 rounded text-left">
          <Typography variant="h3" gutterBottom>
            Panel de Administrador
          </Typography>
        </div>
        <div className="w-90 mt-5 col-4 text-left">
          <p>
            {" "}
            El panel de Administrador tiene la funcion de permitir tener el
            acesso completo al sistema de Gestion de biblioteca. Las funciones
            que integra el Panel de Administrador es dar de alta a Usuarios y
            subir los libros existentes para asi los usuarios puedan elegir el
            libro y llenar el formato de prestamo{" "}
          </p>
        </div>
      </container>
      <div className="text-center">
        {/* Figura */}
        <Figure>
          <Figure.Image width={300} height={210} alt="171x180" src={logo} />
          <Figure.Caption>Java Crew.</Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};

export default InicioAdmin;
