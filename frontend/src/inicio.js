import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Button } from '@material-ui/core';

const inicio = () => {
  return (
    <div className="container w-75 text-center">
      <div className="row align-items-stretch">
        <div className="col bg-white p-5 rounded-end mt-5">
          <Typography variant="h3" gutterBottom>Sistema de Documentos de biblioteca</Typography>
          <Typography variant="h5" gutterBottom>Queridos usuarios, esta es la plataforma digital para poder hacer
            su solicutud de libros de la Escuela Politecnica de Tapachula la cual va a consistir
            en llenar unos formularios para poder hacer el prestamo del libro y asi poder tener el libro que usted
            va a requerir asi mismo al momento de rellenar los campos debera hacerlo de manera correcta para que
            no valla a ver problemas mas adelante son su peticion</Typography>
          <div className="col-4 mx-auto">
          </div>
          <div id="contenedor" class="row">
            <div id="naranja" class="col-2 my-auto mx-auto">
              <Box mt={4}>
                <Button variant="contained" color="primary" component={Link} to="/admin">Administrador</Button>
              </Box>
            </div>

            <div id="verde" class="col-2 my-auto mx-auto">
              <Box mt={4}>
                <Button variant="contained" color="primary" component={Link} to="/usuario">Usuarios</Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default inicio