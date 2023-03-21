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

const SolicitudPrestamoInterno = () => {
    // Fechas
    const [fechaRecibido, cambiarFechaRecibido] = useState(new Date());

    //Firmas de recibido
    const [FirmaRecibido, setImageURLRecibido] = useState(null)
    const sigCanvasRecibido = useRef({})
    const limpiarFirmaRecibido = () => sigCanvasRecibido.current.clear()
    const guardarImagenRecibido = () =>
        setImageURLRecibido(sigCanvasRecibido.current.getTrimmedCanvas().toDataURL("image/png"))

    //Firmas de entregado
    const [FirmaEntregado, setImageURLEntregado] = useState(null)
    const sigCanvasEntregado = useRef({})
    const limpiarFirmaEntrgado = () => sigCanvasEntregado.current.clear()
    const guardarImagenEntregado = () =>
        setImageURLEntregado(sigCanvasEntregado.current.getTrimmedCanvas().toDataURL("image/png"))

    return (
        // {/*Prestamo interno*
        <div className="container w-75 bg-light mt-5 rounded shadow">
            <div className="col bg-white p-1 rounded-end">
                <div className="text-end">
                    <img src={logo} alt="" width="10% px" />
                </div>
                <form>
                    <div className="mb-4">
                        <h4 className="datosLibro fw-bold text-center py-1 mb-4">PRESTAMO INTERNO</h4>
                        <div className="row mb-4">
                            <label for="colFormLabel" className="col-sm-1 col-form-label">NOMBRE:</label>
                            <div className="col-sm-11">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <label for="exampleInputEmail1" className="col-sm-1 col-form-label form-label">CORREO:</label>
                        <div className="col-sm-11">
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-2 mb-4">
                        <label for="colFormLabel" className="col-sm-2 col-form-label">CUATRIMESTRE:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-2 mb-4">
                        <label for="colFormLabel" className="col-sm-2 col-form-label">CARRERA:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-2 mb-4">
                        <label for="colFormLabel" className="col-sm-1 col-form-label">TITULO:</label>
                        <div className="col-sm-11">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-2 mb-4">
                        <label for="colFormLabel" className="col-sm-1 col-form-label">AUTOR:</label>
                        <div className="col-sm-11">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <label for="colFormLabel" className="col-sm-4 col-form-label">Firma recibido</label>
                    </div>
                    <div className="mb-4">
                        <Popup modal trigger={<button type="button" >Firma aqui</button>} closeOnDocumentClick={false}>
                            {close => (
                                <>
                                    <SignaturPad ref={sigCanvasRecibido} canvasProps={{
                                        className: "signatureCanvas"
                                    }} />
                                    <button onClick={close}>Cerrar</button>
                                    <button onClick={limpiarFirmaRecibido}>Limpiar</button>
                                    <button onClick={guardarImagenRecibido}>Guardar</button>
                                </>
                            )}
                        </Popup>
                        {FirmaRecibido ? (<img src={FirmaRecibido} alt="Firma" className="firma" />) : null}
                    </div>
                    <hr className="firmas" />
                    <div className="mb-4 row col-sm-12">
                        <label for="selecDate" className="col-sm-1 col-form-label">FECHA:</label>
                        <div className="col-sm-2 ">
                            <DatePicker value={fechaRecibido} onChange={cambiarFechaRecibido} />
                        </div >
                    </div>
                    <div className="row mb-4">
                        <label for="colFormLabel" className="col-sm-4 col-form-label">Firma entregado</label>
                    </div>
                    <div className="mb-4">
                        <Popup modal trigger={<button type="button" >Firma aqui</button>} closeOnDocumentClick={false}>
                            {close => (
                                <>
                                    <SignaturPad ref={sigCanvasEntregado} canvasProps={{
                                        className: "signatureCanvas"
                                    }} />
                                    <button onClick={close}>Cerrar</button>
                                    <button onClick={limpiarFirmaEntrgado}>Limpiar</button>
                                    <button onClick={guardarImagenEntregado}>Guardar</button>
                                </>
                            )}
                        </Popup>
                        {FirmaEntregado ? (<img src={FirmaEntregado} alt="Firma" className="firma" />) : null}
                    </div>
                    <hr className="firmas" />
                    <Box mb={4}>
                        <br />
                        <div className="d-grid">
                            <span><Link className="btn btn-success nav-link col-4 my-auto mx-auto" to="/usuario/inicio">Guardar</Link></span>
                        </div>
                        <br />
                        <div className="d-grid">
                            <span><Link className="btn btn-danger nav-link col-4 my-auto mx-auto" to="/">Regresar</Link></span>
                        </div>
                    </Box>
                </form>
            </div>
        </div>
    )
}

export default SolicitudPrestamoInterno