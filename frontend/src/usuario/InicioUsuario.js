import React from 'react'
import logo from '../../src/img/logo_Integrador.jpeg';
import Figure from 'react-bootstrap/Figure';
import { Typography } from "@material-ui/core";

const InicioUsuario = () => {
    return (
      //le pone contorno blanco sin dejar el efecto 
        // <div className="bg-white">
        
        <div >
            <container>
              <div className="container w-100 mt-5 rounded text-left">
          <Typography variant="h3" gutterBottom>
            Panel de Usuarios
          </Typography>
        </div>
                <div className="w-90 mt-5 col-4 text-left">
                    <p> Queridos usuarios, esta es la plataforma digital para poder hacer
                        su solicutud de libros de la Escuela Politecnica de Tapachula la cual va a consistir
                        en llenar unos formularios para poder hacer el prestamo del libro y asi poder tener el libro que usted
                        va a requerir asi mismo al momento de rellenar los campos debera hacerlo de manera correcta para que
                        no valla a ver problemas mas adelante son su peticion </p>
                </div>
                <div className="col-4 mx-auto">
                </div>
            </container>
            <div className="text-center">
        {/* Figura */}
      <Figure>
      <Figure.Image
        width={300}
        height={210}
        alt="171x180"
        src={logo}
      />
      <Figure.Caption>
       Java Crew.
      </Figure.Caption>
    </Figure>
      </div>
        </div>
    )
}

export default InicioUsuario