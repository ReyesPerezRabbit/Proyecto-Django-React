import React from "react";
import "./css/App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/inicio";
import LoginAdmin from "./admin/login_Admin";
import LoginUssers from "./usuario/login_Ussers";
import SolicitudPrestamoExterno from "./usuario/SolicitudPrestamoExterno";
import SolicitudPrestamoIntero from "./usuario/SolicitudPrestamoInterno";
import AgregarUssers from "./admin/agregarUsuarios";
import AgregarLibro from "./admin/agregar_Libro";
import PaletaPrestamos from "./admin/Paleta_Prestamos";
import NavbarAdmin from "./navbar/NavbarAdmin";
import NavbarUsuarios from "./navbar/NavbarUsuarios";
import InicioAdmin from "./admin/InicioAdmin";
import InicioUsuario from "./usuario/InicioUsuario";
import LibrosDisponibles from "./usuario/LibrosDisponibles";
import BlogForm from "./admin/BlogForm"


// import "./components/css/navbar.css";
//import axios from 'axios';

// // Components
// import Header from "./components/Header";
// import BlogForm from "./components/BlogForm";
// import Blogs from "./components/Blogs";


function App() {
  return (
    
    <Router>    
     <div class="container">
        {/* <NavbarAdmin /> */}
        {/* <br />
        <div className="btn-group">
          <NavLink to="/" exact className="btn btn-dark">
            inicio
          </NavLink>
          <NavLink to="/admin" exact className="btn btn-dark">
            admin
          </NavLink>
          <NavLink to="/agregar_Usuarios" exact className="btn btn-dark">
            agregar usuarios
          </NavLink>
          <NavLink to="/agregar_Libro" exact className="btn btn-dark">
            agregar libro
          </NavLink>
          <NavLink to="/usuario" exact className="btn btn-dark">
            usuarios
          </NavLink>
          <NavLink to="/solicitud" exact className="btn btn-dark">
            solicitud
          </NavLink>
        </div>
        <hr /> */}
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
          <Route path="/admin/prestamos" exact>
            <NavbarAdmin />
            <PaletaPrestamos />
          </Route>
          <Route path="/admin/blogForm" exact>
           <NavbarAdmin/>
           <BlogForm/> 
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
            <NavbarUsuarios/>
            <SolicitudPrestamoIntero/>
          </Route>
        </Switch>
      </div>
    </Router>
    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //   axios.get('/get/')
    //   .then((response) => {
    //     setBlogs(response.data)
    //   }).catch(() => {
    //     alert('Algo fue mal!')
    //   })
    // }, [])

    // return (

    //   <>
    //   <Header/>
    //   <div className="container p-4">
    //    <BlogForm blogs={blogs} setBlogs={setBlogs}/>
    //    <Blogs blogs={blogs} setBlogs={setBlogs}/>

    //   </div>

    //   </>
  
  )
}


export default App;