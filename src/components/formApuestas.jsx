import React, {Fragment, useState} from "react";
import even  from "../eventos.json";
import usuarios from "../usuarios.json";
import apue from "../apuestas.json";

export function FormApuestas(){
    const [user, setUser]=useState(usuarios);
    const [apuestas, setApuestas]=useState(apue);
    const [eventos, setEventos]=useState(even);

    return(
        <Fragment>
            <div className="container position-static d-flex flex-wrap bg-secondary py-4" tabIndex="-1" role="dialog" id="contenedorEventos" >
                
                <div className="modal-dialog col" role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Apuestas</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit="" action="#">
                        <div className="d-flex form-floating mb-3 justify-content-center">
                            <select onChange="" className="text-center btn-warning btn-lg" name="selApostador" id="selApostador">
                            <option className="text-center" value="ev01">Elija su Nombre</option>
                            {user.filter(usu=>usu.tipo==="1").map(usuario => 
                                <option className="text-center" value={usuario._id}>{usuario.nombre+ " "+usuario.apellido}</option>
                            )}
                            </select>  
                        </div>   
                        <div className="d-flex form-floating mb-3 justify-content-center">
                            <select onChange="" className="text-center btn-warning btn-lg" name="selEvento" id="selEvento">
                            <option className="text-center" value="default">Elija una apuesta</option>
                            {eventos.map(evento => 
                                <option className="text-center" value={evento.id}>{evento.local+ " - "+evento.visitante}</option>
                            )}
                            </select>  
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control rounded-4" id="txtmonto" required/>
                            <label htmlFor="txtmonto">Valor Apostar</label>
                        </div>
                        <div className="d-flex form-floating mb-3 justify-content-center">
                        <select onChange="" className="text-center btn-warning btn-lg" name="selEvento" id="selEvento">
                            <option className="text-center" value="default">Elija una opcion</option>
                            <option className="text-center" value="1">Gana Local</option>
                            <option className="text-center" value="2">Empate</option>
                            <option className="text-center" value="3">Gana visitante</option>
                        </select>  
                        </div>  
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Crear Apuesta</button>
                        <a href="/saldo"><button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="button">Ver Saldo</button></a>
                        </form>
                        <br />
                        
                    </div>
                    </div>
                </div>
                <div className="container position-static d-flex bg-secondary py-4 col " tabIndex="-1" role="dialog" id="contenedorTablas">
                    
                    <table className="table table-dark table-borderless table-striped table-hover">
                        <thead>
                            <tr className="bg-danger.bg-gradient">
                            <td colSpan="5" className="bg-warning h1 text-center text-black">Apuestas Realizadas</td>
                            </tr>
                            <tr className="bg-black">
                                <th className="bg-black text-center" scope="col">Partido</th>
                                <th className="bg-black text-center" scope="col">Monto</th>
                                <th className="bg-black text-center" scope="col">Opcion Escogida</th>
                                <th className="bg-black text-center" scope="col">Estado</th>
                                <th className="bg-black text-center" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody >
                            {apuestas.filter(apu => apu.id_apostador===document.getElementById("selApostador").value).map(
                                apu=>
                                <tr>
                                    <td className="text-center">{eventos.filter(even=>even._id==apu.id_evento).local + " - " + eventos.filter(even=>even._id==apu.id_evento).visitante}</td>
                                    <td className="text-center">{apu.monto}</td>
                                    <td className="text-center">{apu.seleccion}</td>
                                    <td className="text-center">{apu.estado}</td>
                                    <td className="text-center"><button className="btn-sm btn-warning rounded-4">X</button></td>
                                </tr>
                            )}
                        </tbody>
                        
                    </table>
                    
                </div>
            </div>              
            
        </Fragment>
    )
}