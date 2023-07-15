import React from 'react';
import { Link } from 'react-router-dom';
import logoPrincipal from '../img/logo_Politecnica.png';
import '../css/navbar.css';

const NavbarAdmin = () => {
    return (
        <div className="mb-4">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logoPrincipal} className="Logo" alt="" width="85" />
                    <Link className="navbar-brand" to="/admin/inicio">Administrador</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/agregarUsuarios">Agregar usuarios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/agregarLibro">Subir libros</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/admin/prestamos">Prestamos solicitados</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Cerrar sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarAdmin;
