import { TextField, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { AccountCircle, Lock } from '@material-ui/icons';

const login_Ussers = () => {

  return (
    <div className="container col-7 mt-5 rounded shadow bg-white mb-4">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
        <Box width="500px">
          <Box mb={4}>

            <Typography variant="h4" className="text-center mb-4">inicio de Seccion de usuarios</Typography>
            <br />
          </Box>
          <form>
            <Box mb={2}>
              <TextField label="Usuario" id="usuario" fullWidth variant="outlined" size="small" InputProps={{ startAdornment: <AccountCircle /> }} />
            </Box>
            <br />
            <Box mb={2}>
              <TextField label="Contraseña" id="passswordUsuario" type="password" fullWidth variant="outlined" size="small" InputProps={{ startAdornment: <Lock /> }} />
            </Box>
            <Box mb={4}>
              <br />
              <div className="d-grid">
                <span><Link className="btn bg-success nav-link col-2 my-auto mx-auto" to="/usuario/inicio">Iniciar sesión</Link></span>
              </div>
              <br />
              <div className="d-grid">
                <span><Link className="btn bg-danger nav-link col-2 my-auto mx-auto" to="/">Regresar</Link></span>
              </div>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
    // <div className="container w-75 bg-primary mt-5 rounded shadow">
    //   <div className="row align-items-stretch">
    //     <div className="col bg-white p-5 rounded-end">
    //       <div className="text-end">
    //         <img src={logo} alt="" width="14% px" />
    //       </div>
    //       <h2 className="fw-bold text-center py-5">Login de estudiantes </h2>

    //       {/* Formulario */}
    //       <form>
    //         <div className="form-group mb-4">
    //           <label for="exampleInputEmail1">Correo electronico</label>
    //           <input class="form-control" type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
    //             placeholder="Correo institucional" />
    //         </div>
    //         <div className="form-group">
    //           <label for="exampleInputPassword1">Contraseña</label>
    //           <input type="password" class="form-control" id="exampleInputPassword1" />
    //         </div>
    //         <br />
    //         <div className="d-grid">
    //           <span><Link className="btn bg-success nav-link col-4 my-auto mx-auto" to="/usuario/inicio">Iniciar sesión</Link></span>
    //         </div>
    //         <br />
    //         <div className="d-grid">
    //           <span><Link className="btn bg-danger nav-link col-4 my-auto mx-auto" to="/">Regresar</Link></span>
    //         </div>
    //       </form>
    /* Formulario 2 */
    /* <form>
      <div className="row mb-4">
        <label for="exampleInputEmail1" className="col-sm-3 col-form-label form-label">correo electronico:</label>
        <div className="col-sm-9">
          <input type="email" className="form-control" />
        </div>
      </div>
      <div className="row mb-4">
        <label for="exampleInputPassword1" className="col-sm-2 col-form-label form-label">Contraseña:</label>
        <div className="col-sm-10">
          <input type="password" class="form-control" />
        </div>
      </div>
      <div className="d-grid mb-4">
        <span><Link className="btn btn-success nav-link col-4 my-auto mx-auto" to="/solicitud">Iniciar sesión</Link></span>
      </div>
      <div className="d-grid mb-4">
        <span><Link className="btn btn-danger nav-link col-4 my-auto mx-auto" to="/">Regresar</Link></span>
      </div>
    </form> */
    //     </div>
    //   </div>
    // </div>
  )
}

export default login_Ussers