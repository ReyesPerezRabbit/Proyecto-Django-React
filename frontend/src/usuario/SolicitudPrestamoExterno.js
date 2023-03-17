import React, { useState, useRef } from 'react'
import { DatePicker } from '@material-ui/pickers'
import { Link } from 'react-router-dom'
import { Box } from '@material-ui/core';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import SignaturPad from 'react-signature-canvas'
import '../css/sigCanvas.css'
import '../css/libros.css'
import logo from '../img/logo_Integrador.jpeg'

const SolicitudPrestamoExterno = () => {

  // Fechas
  const [fechaInicio, cambiarFechaInicio] = useState(new Date());
  const [fechaFin, cambiarFechaFin] = useState(new Date());

  //Firmas de solicitante
  const [FirmaSolicitante, setImageURLSolicitante] = useState(null)
  const sigCanvasSolicitante = useRef({})
  const limpiarFirmaSolicitante = () => sigCanvasSolicitante.current.clear()
  const guardarImagenSolicitante = () =>
    setImageURLSolicitante(sigCanvasSolicitante.current.getTrimmedCanvas().toDataURL("image/png"))

  //Firmas de responsable de biblioteca
  const [FirmaResponsable, setImageURLResponsable] = useState(null)
  const sigCanvasResponsable = useRef({})
  const limpiarFirmaResponsable = () => sigCanvasResponsable.current.clear()
  const guardarImagenResponsable = () =>
    setImageURLResponsable(sigCanvasResponsable.current.getTrimmedCanvas().toDataURL("image/png"))

  //Firmas de devolucion
  const [FirmaDevolucion, setImageURLDevolucion] = useState(null)
  const sigCanvasDevolucion = useRef({})
  const limpiarFirmaDevolucion = () => sigCanvasDevolucion.current.clear()
  const guardarImagenDevolucion = () =>
    setImageURLDevolucion(sigCanvasDevolucion.current.getTrimmedCanvas().toDataURL("image/png"))


  return (
    <div className="container w-75 bg-light mt-5 rounded shadow">
      <div className="col bg-white p-1 rounded-end">
        <div className="text-end">
          <img src={logo} alt="" width="10% px" />
        </div>
        <form>
          <p className="text-end py-1">Registro</p>
          <h5 className="fw-bold text-end py-1">Paleta de préstamo</h5>
          <hr color="black" width="100%" align="right" size="10" noshade="noshade" />
          <div className="row mb-4 text-end">
            <label for="colFormLabel" className="col-sm-8 col-form-label">FOLIO:</label>
            <div className="col-sm-4">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-4">
            <label for="colFormLabel" className="col-sm-4 col-form-label">NOMBRE DEL SOLICITANTE:</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row g-2 mb-4">
            <label for="colFormLabel" className="col-sm-2 col-form-label">MATRICULA:</label>
            <div className="col-sm-2">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md ">
              <label for="colFormLabel" className="col-sm-2 col-form-label">INGENIERIA:</label>
            </div>
            <div className="col-sm-6">
              <select className="form-select" aria-label="Default select example">
                <option selected>Selección de carreras.</option>
                <option value="1">Ingeniería Agroindustrial</option>
                <option value="2">Ingeniería de Software</option>
                <option value="3">Ingeniería en Animación y Efectos Visuales</option>
                <option value="4">Ingeniería en Energía</option>
                <option value="5">Ingeniería en Logística y Transporte</option>
                <option value="6">Ingeniería en Nanotecnología</option>
                <option value="7">Ingeniería en Sistemas Automotrices</option>
                <option value="8">Ingeniería en Tecnología Ambiental</option>
                <option value="9">Ingeniería Financiera</option>
                <option value="10">Ingeniería Mecatrónica</option>
                <option value="11">Maestría en Ingeniería</option>
                <option value="12">Centro de Estudios de Lenguas Extranjeras</option>
              </select>
            </div>
          </div>
          <div className="row g-2 mb-4">
            <label for="colFormLabel" className="col-sm-2 col-form-label">CUATRIMESTRE:</label>
            <div className="col-sm-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md">
              <label for="colFormLabel" className="col-sm-2 col-form-label ">TURNO:</label>
            </div>
            <div className="form-check col-sm-2 col-form-label">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">MATUTINO</label>
            </div>
            <div className="form-check col-sm-3 col-form-label">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
              <label className="form-check-label" for="flexRadioDefault2">VESPERTINO</label>
            </div>
          </div>
          <div>
            <div className="row g-2 mb-4">
              <div className="col fom-check col-sm-2">
                <label for="colFormLabel" className="col-sm-1 col-form-label">ESTUDIANTE:</label>
              </div>
              <div className="col col-sm-3">
                <input type="text" className="form-control" />
              </div>
              <div className="col fom-check col-sm-1">
                <label for="colFormLabel" className="col-sm-1 col-form-label">PTC:</label>
              </div>
              <div className="col col-sm-2">
                <input type="text" className="form-control" />
              </div>
              <div className="col fom-check col-sm-1">
                <label for="colFormLabel" className="col-sm-1 col-form-label">PA:</label>
              </div>
              <div className="col col-sm-2">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </form>
        {/* Datos del libro */}
        <form>
          <div className="mb-4">
            <h4 className="datosLibro fw-bold text-center py-1 mb-4">DATOS DEL LIBRO</h4>
            <div className="row mb-4">
              <label for="colFormLabel" className="col-sm-3 col-form-label">CODIGO INTERNO:</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <label for="colFormLabel" className="col-sm-1 col-form-label">TITULO:</label>
            <div className="col-sm-11">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="row mb-4">
            <label for="colFormLabel" className="col-sm-1 col-form-label">AUTOR:</label>
            <div className="col-sm-11">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-4 row col-sm-14">
            <label for="selecDate" className="col-sm-3 col-form-label">FECHA DE PRESTAMOS:</label>
            <div className="col-sm-2 fecha">
              <DatePicker value={fechaInicio} onChange={cambiarFechaInicio} />
            </div >
            <label for="selecDate" className="col-sm-3 col-form-label">FECHA DE DEVOLUCION:</label>
            <div className="col-sm-2 fecha">
              <DatePicker value={fechaFin} onChange={cambiarFechaFin} />
            </div>
          </div>
          <div className="row mb-4">
            <label for="colFormLabel" className="col-sm-2 col-form-label">OBSERVACIONES:</label>
            <div className="col-sm-10">
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
          </div>
          <div className="row mb-4">
            <label for="colFormLabel" className="col-sm-4 col-form-label">Nombre y Firma del Solicitante:</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-4">
            <Popup modal trigger={<button type="button" >Firma aqui</button>} closeOnDocumentClick={false}>
              {close => (
                <>
                  <SignaturPad ref={sigCanvasSolicitante} canvasProps={{
                    className: "signatureCanvas"
                  }} />
                  <button onClick={close}>Cerrar</button>
                  <button onClick={limpiarFirmaSolicitante}>Limpiar</button>
                  <button onClick={guardarImagenSolicitante}>Guardar</button>
                </>
              )}
            </Popup>
            {FirmaSolicitante ? (<img src={FirmaSolicitante} alt="Firma" className="firma" />) : null}
          </div>
          <hr className="firmas" />
          <div className="row mb-4">
            <label for="colFormLabel" className="col-sm-6 col-form-label">
              Nombre y Firma del Responsable de Biblioteca:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-4">
            <Popup modal trigger={<button type="button" >Firma aqui</button>} closeOnDocumentClick={false}>
              {close => (
                <>
                  <SignaturPad ref={sigCanvasResponsable} canvasProps={{
                    className: "signatureCanvas"
                  }} />
                  <button onClick={close}>Cerrar</button>
                  <button onClick={limpiarFirmaResponsable}>Limpiar</button>
                  <button onClick={guardarImagenResponsable}>Guardar</button>
                </>
              )}
            </Popup>
            {FirmaResponsable ? (<img src={FirmaResponsable} alt="Firma" className="firma" />) : null}
          </div>
          <hr className="firmas" />
          <div className="row mb-4">
            <label for="colFormLabel" className="col-sm-6 col-form-label">
              Nombre y Firma de Devolución de la Indentificación:</label>
            <div className="col-sm-6">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="mb-4">
            <Popup modal trigger={<button type="button" >Firma aqui</button>} closeOnDocumentClick={false}>
              {close => (
                <>
                  <SignaturPad ref={sigCanvasDevolucion} canvasProps={{
                    className: "signatureCanvas"
                  }} />
                  <button onClick={close}>Cerrar</button>
                  <button onClick={limpiarFirmaDevolucion}>Limpiar</button>
                  <button onClick={guardarImagenDevolucion}>Guardar</button>
                </>
              )}
            </Popup>
            {FirmaDevolucion ? (<img src={FirmaDevolucion} alt="Firma" className="firma" />) : null}
          </div>
          <hr className="firmas" />
          <Box mb={4}>
              <br />
              <div className="d-grid">
                <span><Link className="reset btn btn-success nav-link col-2 my-auto mx-auto" to="/usuario/inicio">Guardar</Link></span>
              </div>
              <br />
              <div className="d-grid">
                <span><Link className="btn btn-danger nav-link col-2 my-auto mx-auto" to="/">Regresar</Link></span>
              </div>
            </Box>
        </form>
      </div>
    </div>
  )
}

export default SolicitudPrestamoExterno