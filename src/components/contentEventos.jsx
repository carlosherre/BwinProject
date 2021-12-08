import React, { Fragment, useState } from "react";
import eventosJSON from "../eventos.json"

export function ContentEventos(){

    const [eventos,setEventos] = useState(eventosJSON);

    const guardarEvento=()=>{
        let prueba = eventos;
        const nuevoEvento = {
            "local":document.getElementById("local").value,
            "visitante":document.getElementById("visitante").value,
            "tasaL":parseFloat(document.getElementById("tgl").value),
            "tasaE":parseFloat(document.getElementById("temp").value),
            "tasaV":parseFloat(document.getElementById("tgv").value),
            "fecha":document.getElementById("fecha").value,
            "hora":document.getElementById("hora").value
        }
        prueba.push(nuevoEvento);
        setEventos(prueba);
    }
    
    return(
        <Fragment>
            <div className="container position-static d-flex flex-wrap bg-secondary py-4" tabIndex="-1" role="dialog" id="contenedorEventos" >
                
                <div className="container position-static d-flex bg-secondary py-4 col " tabIndex="-1" role="dialog" id="contenedorTablas">
                    
                    <table className="table table-dark table-borderless table-striped table-hover">
                        <thead>
                            <tr className="bg-danger.bg-gradient">
                            <td colSpan="5" className="bg-warning h1 text-center text-black">Eventos activos</td>
                            </tr>
                            <tr className="bg-black">
                                <th className="bg-black text-center" scope="col">Partido</th>
                                <th className="bg-black text-center" scope="col">Gana loc.</th>
                                <th className="bg-black text-center" scope="col">Emp</th>
                                <th className="bg-black text-center" scope="col">Gana vis.</th>
                                <th className="bg-black text-center" scope="col">Fecha y hora</th>
                            </tr>
                        </thead>
                        <tbody >
                        {eventos.map(evento => 
                            <tr>
                                <td className="text-center">{evento.local+ " - "+evento.visitante}</td>
                                <td className="text-center">{evento.tasaL}</td>
                                <td className="text-center">{evento.tasaE}</td>
                                <td className="text-center">{evento.tasaV}</td>
                                <td className="text-center">{evento.fecha+" - "+evento.hora}</td>
                            </tr>
                        )}
                        </tbody>
                        
                    </table>
                    
                </div>
                
                <div className="container position-static d-flex align-self-start bd-highlight p-2 bg-secondary col ">
                    <div className="d-flex p-5 pt-0 bg-black position-static">
                        <form className="" id="formEvento" onSubmit={guardarEvento} action="#">

                            <div className="row pt-4">
                                <div className="form-group col-6">
                                    <label htmlFor="local" className="text-white">Equipo Local</label>
                                    <input type="text" className="form-control" id="local" required/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="visitante" className="text-white">Equipo Visitante</label>
                                    <input type="text" className="form-control" id="visitante" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-4">
                                    <label htmlFor="tgl" className="text-white" >Tasa Gana Local</label>
                                    <input type="number" className="form-control" id="tgl" step="any" required/>
                                </div>
                                <div className="form-group col-4">
                                    <label htmlFor="temp" className="text-white">Tasa Empate</label>
                                    <input type="number" className="form-control" id="temp" step="any" required/>
                                </div>
                                <div className="form-group col-4">
                                    <label htmlFor="tgv" className="text-white">Tasa Gana Visit.</label>
                                    <input type="number" className="form-control" id="tgv" step="any" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col">
                                    <label htmlFor="fecha" className="text-white">Fecha del evento</label>
                                    <input type="date" className="form-control" id="fecha" required/>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="hora" className="text-white">Hora del evento</label>
                                    <input type="time" className="form-control" id="hora" required/>
                                </div>
                            </div>
                        <br/>
                            <div className="row justify-content-center">
                                <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit" id="agregarEvento">Agregar Evento</button>
                                <a href="/dashboard"><button className="w-100 mb-0 btn btn-lg rounded-4 btn-primary btn-warning" type="button" id="dash">Dashboard</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container position-static d-flex flex-wrap bg-secondary py-4" tabIndex="-1" role="dialog" id="modalSignin" >
                <div className="container d-grid bg-secondary col-4 align-content-start">
                    <select onChange="" className="text-center btn-warning btn" name="selEvento" id="selEvento">
                        <option className="text-center" value="default">Elija un evento</option>
                        {eventos.map(evento => 
                            <option className="text-center" value={evento.id}>{evento.local+ " - "+evento.visitante}</option>
                        )}
                    </select>  
                </div>
                

                <br />
                <div className="modal-body p-5 pt-0 bg-black col-8">
                    <form className="" id="formEvento" onSubmit={guardarEvento} action="#">

                        <div className="row pt-4">
                            <div className="form-group col-6">
                                <label htmlFor="local" className="text-white">Equipo Local</label>
                                <input type="text" className="form-control" id="local" required/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="visitante" className="text-white">Equipo Visitante</label>
                                <input type="text" className="form-control" id="visitante" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-4">
                                <label htmlFor="tgl" className="text-white" >Tasa Gana Local</label>
                                <input type="number" className="form-control" id="tgl" step="any" required/>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="temp" className="text-white">Tasa Empate</label>
                                <input type="number" className="form-control" id="temp" step="any" required/>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="tgv" className="text-white">Tasa Gana Visit.</label>
                                <input type="number" className="form-control" id="tgv" step="any" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="fecha" className="text-white">Fecha del evento</label>
                                <input type="date" className="form-control" id="fecha" required/>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="hora" className="text-white">Hora del evento</label>
                                <input type="time" className="form-control" id="hora" required/>
                            </div>
                        </div>
                    <br/>
                        <div className="row justify-content-around">
                            <button className=" mb-0 btn btn-lg rounded-4 btn-primary btn-warning col-5" type="submit" id="editarEvento" >Editar evento</button>
                            <button className="mb-0 btn btn-lg rounded-4 btn-primary btn-warning col-5" type="submit" id="eliminarEvento" >Eliminar evento</button>
                        </div>
                    </form>
                </div>
            </div>            
           
        </Fragment>
    );
}