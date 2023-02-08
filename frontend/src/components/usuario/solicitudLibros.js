import React from 'react'
// import { DatePicker } from '@material-ui/pickers'
// import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css';
// import SignaturPad from 'react-signature-canvas'
// import logo from '../assets/img/logo_Integrador.jpeg'

const solicitudLibros = () => {
    return(
    <h1>solicitud</h1>

//   const [fechaInicio, cambiarFechaInicio] = useState(new Date());
//   const [fechaFin, cambiarFechaFin] = useState(new Date());
  
//   return (
//     <div className="container w-75 bg-light mt-5 rounded shadow">
//       <div className="col bg-white p-1 rounded-end">
//         <div className="text-end">
//           <img src={logo} alt="" width="100 px" />
//         </div>
//         <h2 className="fw-bold text-center py-5">Datos del libro.</h2>

//         {/* Agregar curso */}
//         <form>
//           <div className="mb-4">
//             <label for="text" className="form-label">Codigo interno:</label>
//             <input type="text" className="form-control" name="text" />
//           </div>
//           <div className="mb-4">
//             <label for="text" className="form-label">Titulo:</label>
//             <input type="text" className="form-control" name="text" />
//           </div>
//           <div className="mb-4">
//             <label for="text" className="form-label">Autor:</label>
//             <input type="text" className="form-control" name="text" />
//           </div>
//           <br />
//           <div className="mb-3 row col-sm-11">
//             <label for="selecDate" className="col-sm-4 col-form-label">Fecha de prestamo:</label>
//             <div className="col-sm-2 fecha">
//               <DatePicker value={fechaInicio} onChange={cambiarFechaInicio} />
//             </div >
//             <label for="selecDate" className="col-sm-4 col-form-label">Fecha de devolución:</label>
//             <div className="col-sm-2 fecha">
//               <DatePicker value={fechaFin} onChange={cambiarFechaFin} />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label for="text" className="form-label">Observaciones:</label>
//             <input type="text" className="form-control" name="text" />
//           </div>
//           <div className="mb-4">
//               <label for="text" className="form-label">Nombre y Firma del Solicitante:</label>
//               <input type="text" className="form-control" name="text" />
//               </div>
//               <div className="mb-4">
//               <Popup modal trigger={<label type="button" >Firma aqui</label>}>
//                 <SignaturPad canvasProps={{
//                   className: "signatureCanvas"
//                 }}/>
//               </Popup>
//             </div>
//             <div className="mb-4">
//               <label for="text" className="form-label">Nombre y Firma del Responsable de Biblioteca:</label>
//               <input type="text" className="form-control" name="text" />
//               </div>
//               <div className="mb-4">
//               <Popup modal trigger={<label type="button" >Firma aqui</label>}>
//                 <SignaturPad canvasProps={{
//                   className: "signatureCanvas"
//                 }}/>
//               </Popup>
//             </div>
//             <div className="mb-4">
//               <label for="text" className="form-label">Nombre y Firma de Devolución de la Identificación:</label>
//               <input type="text" className="form-control" name="text" />
//               </div>
//               <div className="mb-4">
//               <Popup modal trigger={<label type="button" >Firma aqui</label>}>
//                 <SignaturPad canvasProps={{
//                   className: "signatureCanvas"
//                 }}/>
//               </Popup>
//             </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-lg btn-success">Guardar</button>
//           </div>
//           <br />
//           <div className="d-grid">
//             <button type="reset" className="btn btn-lg btn-danger ">Eliminar</button>
//           </div>
//         </form>
//       </div>
//     </div>
  )
}

export default solicitudLibros