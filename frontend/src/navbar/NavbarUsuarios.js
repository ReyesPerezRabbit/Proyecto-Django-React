import React from 'react'
import { Link } from 'react-router-dom'
import logoPrincipal from '../img/logo_Politecnica.png'
import '../css/navbar.css'

const NavbarUsuarios = () => {
    return (
        <div>
            <br />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logoPrincipal} className="Logo" alt="" width="85" />
                    <Link className="navbar-brand" to="/usuario/inicio">UPTAP</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuario/libros_Disponibles">Libros disponibles</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuario/prestamo_Externo">prestamos externos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/usuario/prestamo_Interno">prestamos internos</Link>
                            </li>
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

export default NavbarUsuarios