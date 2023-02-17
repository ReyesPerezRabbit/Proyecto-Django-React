import React from 'react'
//import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core';


const InicioAdmin = () => {
  return (
    <div className="bg-white">
      <container>
        <div className="container w-100 mt-5 rounded text-center">
          <Typography variant="h3" gutterBottom>Querido administrador este es tu panel</Typography>
        </div>
        <div className="container w-90 mt-5 rounded shadow text-center">
          <p> Queridos usuarios, esta es la plataforma digital para poder hacer
            su solicutud de libros de la Escuela Politecnica de Tapachula la cual va a consistir
            en llenar unos formularios para poder hacer el prestamo del libro y asi poder tener el libro que usted
            va a requerir asi mismo al momento de rellenar los campos debera hacerlo de manera correcta para que
            no valla a ver problemas mas adelante son su peticion </p>
        </div>
      </container>
    </div>
  )
}

export default InicioAdmin;
