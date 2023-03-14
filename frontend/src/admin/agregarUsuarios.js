import { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';
import logo from '../img/logo_Integrador.jpeg'
// import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';

function AgregarUsuarios() {
  const [nombrealumno, setNombrealumno] = useState('');
  const [apellidoP, setApellidoP] = useState('');
  const [apellidoM, setApellidoM] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [edad, setEdad] = useState('');
  const [carrera, setCarrera] = useState('');
  const [genero, setGenero] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');


  const handleNombrealumnoChange = (event) => {
    setNombrealumno(event.target.value);
  }
  const handleApellidoPChange = (event) => {
    setApellidoP(event.target.value);
  }

  const handleApellidoMChange = (event) => {
    setApellidoM(event.target.value);
  }

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  }

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  }

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  }

  const handleCarreraChange = (event) => {
    setCarrera(event.target.value);
  }

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  }

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor
  }

  return (
    <div className="container w-75 bg-light mt-5 rounded shadow">
            <div className="col bg-white p-1 rounded-end">
      <div className="text-end">
                    <img src={logo} alt="" width="20% px" />
                </div>
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
       
      <TextField
          label="Nombre del Alumno"
          value={nombrealumno}
          onChange={handleNombrealumnoChange}
          margin="normal"
        />
         <TextField
          label="Apellido Paterno"
          value={apellidoP}
          onChange={handleApellidoPChange}
          margin="normal"
        />
        <TextField
          label="Apellido Materno"
          value={apellidoM}
          onChange={handleApellidoMChange}
          margin="normal"
        />
        <TextField
          label="Correo Electronico"
          value={correo}
          onChange={handleCorreoChange}
          margin="normal"
        />
        <TextField
          label="Telefono"
          value={telefono}
          type= "tel"
          onChange={handleTelefonoChange}
          margin="normal"
        />
        <TextField
          label="Edad"
          value={edad}
          onChange={handleEdadChange}
          margin="normal"
        />
        <TextField
          label="Usuario"
          value={usuario}
          onChange={handleUsuarioChange}
          margin="normal"
        />
        <TextField
          label="Contraseña"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
        />
         <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
          <InputLabel id="carrera">Carreras</InputLabel>
          <Select
            labelId="career-label"
            value={carrera}
            onChange={handleCarreraChange}
            margin="center"
          >
            <MenuItem value="Software">Ingeniería de Software</MenuItem>
            <MenuItem value="Ingenieria">Maestría en Ingeniería</MenuItem>
            <MenuItem value="Mecatronica">Ingeniería Mecatrónica</MenuItem>
            <MenuItem value="Financiera">Ingeniería Financiera</MenuItem>
            <MenuItem value="Ambiental">Ingeniería en Tecnología Ambiental</MenuItem>
            <MenuItem value="Automotrices">Ingeniería en Sistemas Automotrices</MenuItem>
            <MenuItem value="Nanotecnología">Ingeniería en Nanotecnología</MenuItem>
            <MenuItem value="Transporte">Ingeniería en Logística y Transporte</MenuItem>
            <MenuItem value="Energía">Ingeniería en Energía</MenuItem>
            <MenuItem value="Animacion">Ingeniería en Animación y Efectos Visuales</MenuItem>
            <MenuItem value="Agroindustrial">Ingeniería Agroindustrial</MenuItem>
            <MenuItem value="LenguasExtranjeras">Centro de Estudios de Lenguas Extranjeras</MenuItem>
          </Select>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
          <InputLabel id="genero">Género</InputLabel>
          <Select
            labelId="gender-label"
            value={genero}
            onChange={handleGeneroChange}
            margin="normal"
          >
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Femenino">Femenino</MenuItem>
            <MenuItem value="No binario">No binario</MenuItem>
            <MenuItem value="Prefiero no decirlo">Prefiero no decirlo</MenuItem>
          </Select>
        </Box>
        <br/>
          <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Dar de alta
          </Button>
        </Box>
      </Box>
      
     
    </form>
    {/* <br/>
    <div>
    <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
        </tr>
      </thead>
     
    </Table>
    </div> */}
    </div>
    
      
    </div>
    
  );
}

export default AgregarUsuarios;