import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import CryptoJS from "crypto-js";
import Inicio from "./components/inicio";
import LoginAdmin from "./admin/login_Admin";
import LoginUssers from "./usuario/login_Ussers";
import SolicitudPrestamoExterno from "./usuario/SolicitudPrestamoExterno";
import SolicitudPrestamoIntero from "./usuario/SolicitudPrestamoInterno";
import AgregarUssers from "./admin/agregarUsuarios";
import AgregarLibro from "./admin/agregar_Libro";
import NavbarAdmin from "./navbar/NavbarAdmin";
import NavbarUsuarios from "./navbar/NavbarUsuarios";
import InicioAdmin from "./admin/InicioAdmin";
import InicioUsuario from "./usuario/InicioUsuario";
import LibrosDisponibles from "./usuario/LibrosDisponibles";

function App() {
  return (
    <Router>
      <div class="container">
        <Switch>
          <Route path="/" exact>
            <Inicio />
            {/* Admin */}
          </Route>
          <Route path="/admin" exact>
            <LoginAdmin />
          </Route>
          <Route path="/admin/inicio" exact>
            <NavbarAdmin />
            <InicioAdmin />
          </Route>
          <Route path="/admin/agregarUsuarios" exact>
            <NavbarAdmin />
            <AgregarUssers />
          </Route>
          <Route path="/admin/agregarLibro" exact>
            <NavbarAdmin />
            <AgregarLibro />
          </Route>
          {/* Usuario */}
          <Route path="/usuario" exact>
            <LoginUssers />
          </Route>
          <Route path="/usuario/inicio" exact>
            <NavbarUsuarios />
            <InicioUsuario />
          </Route>
          <Route path="/usuario/libros_Disponibles" exact>
            <NavbarUsuarios />
            <LibrosDisponibles />
          </Route>
          <Route path="/usuario/prestamo_Externo" exact>
            <NavbarUsuarios />
            <SolicitudPrestamoExterno />
          </Route>
          <Route path="/usuario/prestamo_Interno" exact>
            <NavbarUsuarios />
            <SolicitudPrestamoIntero />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
