// // import React, { useState } from "react";

// // const AgregarUsuarios = () => {
// //     const [nombre, setNombre] = useState("");
// //     const [AP, setApellidop] = useState("");
// //     const [AM, setApellidom] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [sexo, setSexo] = useState("");
// //     const [carrera, setCarrera] = useState("");
// //     const [cuatri, setCuatri] = useState("");

// //     const handleSubmit = (event) => {
// //         event.preventDefault();

// //         // Enviar los datos a Django aquí
// //     };

// //     return (
// //         <div className="text-left mb-4">
// //             <h1>AGREGAR USUARIOS</h1>
// //             <div/>
// //             <div className="text mb-2"></div>
// //             <div className="container w-75 mt-5 rounded shadow">
// //                 <div class="container">
// //                     <form onSubmit={handleSubmit}>
// //                         <label htmlFor="nombre">Nombre(s):</label>
// //                         <input
// //                             type="text"
// //                             id="nombre"
// //                             value={nombre}
// //                             onChange={(event) => setNombre(event.target.value)}
// //                         />
// //                         <br />
// //                         <br />

// //                         <label htmlFor="AP">Apellido Paterno:</label>
// //                         <input
// //                             type="text"
// //                             id="AP"
// //                             value={AP}
// //                             onChange={(event) => setApellidop(event.target.value)}
// //                         />
// //                         <br />
// //                         <br />

// //                         <label htmlFor="AM">Apellido Materno:</label>
// //                         <input
// //                             type="text"
// //                             id="AM"
// //                             value={AM}
// //                             onChange={(event) => setApellidom(event.target.value)}
// //                         />

// //                         <br />
// //                         <br />
// //                         <label htmlFor="sexo">Sexo:</label>
// //                         <input
// //                             type="text"
// //                             id="sexo"
// //                             value={sexo}
// //                             onChange={(event) => setSexo(event.target.value)}
// //                         />
// //                         <br />
// //                         <br />

// //                         <label htmlFor="email">Correo Institucional:</label>
// //                         <input
// //                             type="email"
// //                             id="email"
// //                             value={email}
// //                             onChange={(event) => setEmail(event.target.value)}
// //                         />
// //                         <br />
// //                         <br />

// //                         <label htmlFor="cuatri">Cuatrimestre:</label>
// //                         <input
// //                             type="text"
// //                             id="cuatri"
// //                             value={cuatri}
// //                             onChange={(event) => setCuatri(event.target.value)}
// //                         />
// //                         <br />
// //                         <br />

// //                         <label htmlFor="carrera">Carrera:</label>
// //                         <input
// //                             type="text"
// //                             id="carrera"
// //                             value={carrera}
// //                             onChange={(event) => setCarrera(event.target.value)}
// //                         />
// //                         <br />
// //                         <br />

// //                         <button type="submit">Agregar Usuario</button>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AgregarUsuarios;



// //nuevo formulario para guardar los datos en añador usuarios
// import React, { useState } from 'react';

// const AgregarUsuarios = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = event => {
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         });
//     };

//     const handleSubmit = event => {
//         event.preventDefault();
//         fetch('/save_form_data/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });
//     };

//     return (
//         <div className="text-left mb-2">
//            <div className="container w-75 mt-5 rounded shadow">
//         <form onSubmit={handleSubmit}>
//            nombre <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//             />
//            email <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//            mensaje <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//             />
//             <button type="submit">Submit</button>
//         </form>
//         </div>
//          </div>

//     );
// };

// export default AgregarUsuarios;

///////////////////////


import { useState } from 'react';
import { TextField, Button, Box, Select, MenuItem, InputLabel } from '@material-ui/core';

function Registro() {
  const [name, setName] = useState('');
  const [paternalLastName, setPaternalLastName] = useState('');
  const [maternalLastName, setMaternalLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [career, setCareer] = useState('');
  const [gender, setGender] = useState('');

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
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
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
         <Box display="flex" flexDirection="column" alignItems="center" marginBottom={2}>
          <InputLabel id="career-label">Carrera</InputLabel>
          <Select
            labelId="career-label"
            value={career}
            onChange={handleCareerChange}
            margin="normal"
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
          <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Registrarse
          </Button>
        </Box>
      </Box>
      
     
    </form>
  );
}

export default Registro;