// import React from 'react'
// import { Link } from 'react-router-dom'
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Dashboard, People, Event, Settings } from '@material-ui/icons';

function InicioAdmin({ children }) {
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <Box bgcolor="primary.main" color="primary.contrastText" p={2} width="250px">
        <Typography variant="h5" gutterBottom>Admin Panel</Typography>
        <Divider />
        <List>
          <ListItem button component={Link} to="/admin/inicio">
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/admin/agregarUsuarios">
            <ListItemIcon><People /></ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/events">
            <ListItemIcon><Event /></ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/settings">
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>
      <Box flexGrow={1} p={2}>
        {children}
      </Box>
    </Box>
  );
}

export default InicioAdmin;
// const InicioAdmin = () => {
//   return (
//     <container>
//       <div className="container w-75 mt-5 rounded shadow text-center">
//         <Typography variant="h3" gutterBottom>Querido administrador este es tu panel</Typography>
//       </div>
//       <div className="container w-75 mt-5 rounded shadow text-center">
//         <p> Queridos usuarios, esta es la plataforma digital para poder hacer
//           su solicutud de libros de la Escuela Politecnica de Tapachula la cual va a consistir
//           en llenar unos formularios para poder hacer el prestamo del libro y asi poder tener el libro que usted
//           va a requerir asi mismo al momento de rellenar los campos debera hacerlo de manera correcta para que
//           no valla a ver problemas mas adelante son su peticion </p>
//       </div>
//     </container>
//   )
// }

//export default InicioAdmin
