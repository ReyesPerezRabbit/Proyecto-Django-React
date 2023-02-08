import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Inicio from "./components/inicio";
import LoginAdmin from "./components/admin/login_Admin";
import LoginUssers from "./components/usuario/login_Ussers";
import SolicitudLibros from "./components/usuario/solicitudLibros";
import AgregarUssers from "./components/admin/agregarUsuarios";
import AgregarLibro from "./components/admin/agregar_Libro";
//import axios from 'axios';

// // Components
// import Header from "./components/Header";
// import BlogForm from "./components/BlogForm";
// import Blogs from "./components/Blogs";


function App() {
  return (
    <Router>
      <div className="container">
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
          <NavLink to="/ussers" exact className="btn btn-dark">
            usuarios
          </NavLink>
          <NavLink to="/solicitud" exact className="btn btn-dark">
            solicitud
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/admin" exact>
            <LoginAdmin />
          </Route>
          <Route path="/ussers" exact>
            <LoginUssers />
          </Route>
          <Route path="/solicitud" exact>
            <SolicitudLibros />
          </Route>
          <Route path="/agregar_Usuarios" exact>
            <AgregarUssers />
          </Route>
          <Route path="/agregar_Libro" exact>
            <AgregarLibro />
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
    //    {/* <h1>Hola mundo :O</h1> */}

    //   </div>

    //   </>
  )
}

export default App;
