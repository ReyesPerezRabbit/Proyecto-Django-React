import React from 'react'
import { Link } from 'react-router-dom'

const inicio = () => {
  return (
    <container>
      <div className="container w-75 mt-5 rounded shadow text-center">
        <h1>Hola Bienvenidos</h1>
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
        <span><Link className="btn bg-success nav-link" to="/admin">Admin</Link></span>
        </div>

        <div id="verde" class="col-4 my-auto mx-auto">
        <span><Link className="btn bg-success nav-link" to="/ussers">Estudiantes</Link></span>
        </div>
      </div>


    </container>
  )
}


export default inicio