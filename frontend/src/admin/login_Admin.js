import { TextField, Typography, Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { AccountCircle, Lock } from '@material-ui/icons';


function LoginForm() {
  return (

    <div className="container col-6 mt-5 rounded shadow">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
        <Box width="500px">
          <Box mb={4}>
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4" className="text-center">inicio de Seccion de Administrador</Typography>
            <br />
          </Box>
          <form>
            <Box mb={2}>
              <TextField label="Usuario" id="useradmin" fullWidth variant="outlined" size="small" InputProps={{ startAdornment: <AccountCircle /> }} />
            </Box>
            <br />
            <Box mb={2}>
              <TextField label="Contraseña" id="passswordadmin" type="password" fullWidth variant="outlined" size="small" InputProps={{ startAdornment: <Lock /> }} />
            </Box>
           <br/>
            <div id="contenedor" class="row">
              <div class="col-4 my-auto mx-auto">
                <Box mt={4}>
                  <Button variant="contained" color="primary" component={Link} to="/admin/inicio">Iniciar Seccion</Button>
                </Box>

              </div>
       
              <div class="col-4 my-auto mx-auto">
                <Box mt={4}>
                  <Button variant="contained" color="primary" component={Link} to="/">Regresar</Button>
                </Box>
              </div>
              </div>
            
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default LoginForm;
