import React, { useState } from "react";
import { TextField, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AccountCircle, Lock } from "@material-ui/icons";
import Badge from "react-bootstrap/Badge";
import logo from "../img/logo_Integrador.jpeg";

function LoginAdmin() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleUsuarioChange = (event) => {
    const textoIngresado = event.target.value;
    setUsuario(textoIngresado);
  };

  const handleContrasenaChange = (event) => {
    const textoIngresado = event.target.value;
    setContrasena(textoIngresado);
  };

  return (
    <div className="container col-8 rounded mb-4 col bg-white p-5 rounded-end mt-5 rounded shadow">
      <div className="text-end">
        <img src={logo} alt="" width="20% px" />
      </div>
      <div className="row align-items-stretch">
        <div className="col bg-white p-5 rounded-end mt-5">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Box width="500px">
              <Box mb={4}>
                <Typography variant="h4" className="text-center mb-4 ">
                  <Badge bg="secondary">ADMINISTRADOR</Badge>
                </Typography>
                <br />
              </Box>
              <form>
                <Box mb={2}>
                  <TextField
                    label="Usuario"
                    id="useradmin"
                    fullWidth
                    variant="outlined"
                    size="small"
                    InputProps={{ startAdornment: <AccountCircle /> }}
                    value={usuario}
                    onChange={handleUsuarioChange}
                  />
                </Box>
                <br />
                <Box mb={2}>
                  <TextField
                    label="Contraseña"
                    id="passswordadmin"
                    type="password"
                    fullWidth
                    variant="outlined"
                    size="small"
                    InputProps={{ startAdornment: <Lock /> }}
                    value={contrasena}
                    onChange={handleContrasenaChange}
                  />
                </Box>
                <Box mb={4}>
                  <br />
                  <div className="d-grid">
                    <span>
                      <Link
                        className="btn bg-success nav-link col-2 my-auto mx-auto"
                        to="/admin/inicio"
                      >
                        Iniciar sesión
                      </Link>
                    </span>
                  </div>
                  <br />
                  <div className="d-grid">
                    <span>
                      <Link
                        className="btn bg-danger nav-link col-2 my-auto mx-auto"
                        to="/"
                      >
                        Regresar
                      </Link>
                    </span>
                  </div>
                </Box>
              </form>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;


// import { TextField, Typography, Box } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import { AccountCircle, Lock } from "@material-ui/icons";
// import Badge from "react-bootstrap/Badge";
// import CryptoJS from "crypto-js";
// import logo from "../img/logo_Integrador.jpeg";

// function loginAdmin() {
//   const cifrar = (texto) => {
//     var textoCifrado = CryptoJS.AES.encrypt(texto, "@borjascript").toString();
//     return textoCifrado;
//   };

//   const descifrar = (texto) => {
//     var bytes = CryptoJS.AES.decrypt(texto, "@borjascript");
//     var textoCifrado = bytes.toString(CryptoJS.enc.Utf8);
//     return textoCifrado;
//   };
//   return (
//     <div className="container col-8 rounded mb-4 col bg-white p-5 rounded-end mt-5 rounded shadow">
//       <div className="text-end">
//         <img src={logo} alt="" width="20% px" />
//       </div>
//       <div className="row align-items-stretch">
//         <div className="col bg-white p-5 rounded-end mt-5">
//           <Box
//             display="flex"
//             flexDirection="column"
//             justifyContent="center"
//             alignItems="center"
//             height="100vh"
//           >
//             <Box width="500px">
//               <Box mb={4}>
//                 <Typography variant="h4" className="text-center mb-4 ">
//                   <Badge bg="secondary">ADMINISTRADOR</Badge>
//                 </Typography>
//                 <br />
//               </Box>
//               <form>
//                 <Box mb={2}>
//                   <TextField
//                     label="Usuario"
//                     id="useradmin"
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                     InputProps={{ startAdornment: <AccountCircle /> }}
//                   />
//                 </Box>
//                 <br />
//                 <Box mb={2}>
//                   <TextField
//                     label="Contraseña"
//                     id="passswordadmin"
//                     type="password"
//                     fullWidth
//                     variant="outlined"
//                     size="small"
//                     InputProps={{ startAdornment: <Lock /> }}
//                   />
//                 </Box>
//                 <Box mb={4}>
//                   <br />
//                   <div className="d-grid">
//                     <span>
//                       <Link
//                         className="btn bg-success nav-link col-2 my-auto mx-auto"
//                         to="/admin/inicio"
//                       >
//                         Iniciar sesión
//                       </Link>
//                     </span>
//                   </div>
//                   <br />
//                   <div className="d-grid">
//                     <span>
//                       <Link
//                         className="btn bg-danger nav-link col-2 my-auto mx-auto"
//                         to="/"
//                       >
//                         Regresar
//                       </Link>
//                     </span>
//                   </div>
//                 </Box>
//               </form>
//             </Box>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default loginAdmin;