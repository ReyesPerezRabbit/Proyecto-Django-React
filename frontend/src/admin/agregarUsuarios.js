import { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';

function AgregarUsuarios() {
  const [matricula, setMatricula] = useState('');
  const [name, setName] = useState('');
  const [paternalLastName, setPaternalLastName] = useState('');
  const [maternalLastName, setMaternalLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [edad, setEdad] = useState('');
  const [career, setCareer] = useState('');
  const [gender, setGender] = useState('');


  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handlePaternalLastNameChange = (event) => {
    setPaternalLastName(event.target.value);
  }

  const handleMaternalLastNameChange = (event) => {
    setMaternalLastName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  }

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  }

  const handleCareerChange = (event) => {
    setCareer(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor
  }

  return (
    <div className="container col-3 mt-5 rounded shadow">
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
       
      <TextField
          label="Matricula"
          value={matricula}
          onChange={handleMatriculaChange}
          margin="normal"
        />
        <TextField
          label="Nombre"
          value={name}
          onChange={handleNameChange}
          margin="normal"
        />
        <TextField
          label="Apellido paterno"
          value={paternalLastName}
          onChange={handlePaternalLastNameChange}
          margin="normal"
        />
        <TextField
          label="Apellido materno"
          value={maternalLastName}
          onChange={handleMaternalLastNameChange}
          margin="normal"
        />
        <TextField
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={handleEmailChange}
          margin="normal"
        />
        <TextField
          label="Teléfono"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          margin="normal"
        />
        <TextField
          label="Edad"
          type="tel"
          value={edad}
          onChange={handleEdadChange}
          margin="normal"
        />
         <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
          <InputLabel id="career-label">Carrera</InputLabel>
          <Select
            labelId="career-label"
            value={career}
            onChange={handleCareerChange}
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
          <InputLabel id="gender-label">Género</InputLabel>
          <Select
            labelId="gender-label"
            value={gender}
            onChange={handleGenderChange}
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
            Registrarse
          </Button>
        </Box>
      </Box>
      
     
    </form>
    </div>
  );
}

export default AgregarUsuarios;