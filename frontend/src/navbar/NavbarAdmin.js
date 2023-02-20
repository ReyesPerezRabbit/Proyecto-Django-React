import React from 'react'
import { Link } from 'react-router-dom'
import logoPrincipal from '../img/logo_Politecnica.png'
import '../css/navbar.css'

const NavbarAdmin = () => {
    return (
        <div className="mb-4">
            <br/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={logoPrincipal} className="Logo" alt="" width="85" />
                <Link className="navbar-brand" to="/admin/inicio">Administrador</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/agregarUsuarios">Agregar usuarios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/agregarLibro">Subir libros</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/admin/prestamos">prestamos solicitados</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Cerrar sesión</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        </div>
    )
}

export default NavbarAdmin