import React from 'react'
import { Link } from 'react-router-dom'

const InicioUsuario = () => {
    return (
        <container>
            <div className="container w-75 mt-5 rounded shadow text-center">
                <h1>Hola Bienvenidos al inicio de usuario</h1>
            </div>
            <div className="container w-75 mt-5 rounded shadow text-center">
                <p> Queridos usuarios, esta es la plataforma digital para poder hacer
                    su solicutud de libros de la Escuela Politecnica de Tapachula la cual va a consistir
                    en llenar unos formularios para poder hacer el prestamo del libro y asi poder tener el libro que usted
                    va a requerir asi mismo al momento de rellenar los campos debera hacerlo de manera correcta para que
                    no valla a ver problemas mas adelante son su peticion </p>
            </div>
            <div className="col-4 mx-auto">
            </div>
            <div id="contenedor" class="row">
                <div id="naranja" class="col-4 my-auto mx-auto">
                    <span><Link className="btn btn-success nav-link" to="/inicio_Usuario">Agregar usuarios</Link></span>
                </div>
                <div id="verde" class="col-4 my-auto mx-auto">
                    <span><Link className="btn btn-primary nav-link" to="/agregar_Libro">Subir libros</Link></span>
                </div>
            </div>
        </container>
    )
}

export default InicioUsuario
