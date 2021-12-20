import React, {Fragment, useEffect, useState} from "react";
import { get, post } from "../api/nodebwin/http";

export function FormApuestas(){
    const [user, setUser]=useState([]);
    const [apuestas, setApuestas]=useState([]);
    const [eventos, setEventos]=useState([]);
    const [doRequest, setDoRequest]=useState(false);
    
    useEffect(()=>{
        get("users").then(data=>{
            console.log("leyendo usuarios\n",data);
            setUser(data.usuarios);
        })
        get("events").then(data=>{
            console.log("leyendo eventos\n",data);
            setEventos(data.eventos);
        })
        get("apuestas").then(data=>{
            console.log("leyendo apuestas\n",data);
            setApuestas(data.apuestas);
        })
    },[]);

    useEffect(()=>{
        if(doRequest){
            get("events").then(data=>{
                setEventos(data.eventos);
            })
            get("users").then(data=>{
                setUser(data.usuarios);
            })
            get("apuestas").then(data=>{
                setApuestas(data.apuestas);
            })
            setDoRequest(false);
        }
    },[doRequest]);

    const crearApuesta = (event)=>{
        event.preventDefault();
        if(!document.getElementById("selApostador").value){
            alert("Debe seleccionar un apostador");
        }
        else if(!document.getElementById("selEvento").value){
            alert("Debe seleccionar un evento");
        }
        else if(!document.getElementById("selOpcion").value){
            alert("Debe elegir una opción de apuesta");
        }
        else if(!document.getElementById("txtmonto").value){
            alert("Debe poner un precio para la apuesta");
        }
        else{
            const newApuesta ={
                id_apostador:document.getElementById("selApostador").value,
                id_evento:document.getElementById("selEvento").value,
                monto:parseInt(document.getElementById("txtmonto").value),
                seleccion:document.getElementById("selOpcion").value
            }
            post("apuestas", newApuesta);
            setDoRequest(true);
        }
    }

    return(
        <Fragment>
            <div className="container position-static d-flex flex-wrap bg-secondary py-4" tabIndex="-1" role="dialog" id="contenedorEventos" >
                
                <div className="modal-dialog col" role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Apuestas</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" >
                        <div className="d-flex form-floating mb-3 justify-content-center">
                            <select onChange={get("apuestas").then(data=>{setApuestas(data.apuestas);})} className="text-center btn-warning btn-lg" name="selApostador" id="selApostador">
                            <option className="text-center" value="">Elija su Nombre</option>
                            {user.filter(usu=>usu.tipo==="1").map(usuario => 
                                <option className="text-center" value={usuario._id}>{usuario.nombre+ " "+usuario.apellido}</option>
                            )}
                            </select>  
                        </div>   
                        <div className="d-flex form-floating mb-3 justify-content-center">
                            <select className="text-center btn-warning btn-lg" name="selEvento" id="selEvento">
                            <option className="text-center" value="">Elija un Evento</option>
                            {eventos.filter(eve=>eve.estado==="activo").map(evento => 
                                <option className="text-center" value={evento._id}>{evento.local+ " - "+evento.visitante}</option>
                            )}
                            </select>  
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control rounded-4" id="txtmonto" required/>
                            <label htmlFor="txtmonto">Valor Apostar</label>
                        </div>
                        <div className="d-flex form-floating mb-3 justify-content-center">
                        <select onChange="" className="text-center btn-warning btn-lg" name="selOpcion" id="selOpcion">
                            <option className="text-center" value="">Elija una opcion</option>
                            <option className="text-center" value="gana local">Gana Local</option>
                            <option className="text-center" value="empate">Empate</option>
                            <option className="text-center" value="gana visitante">Gana visitante</option>
                        </select>  
                        </div>  
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit" onClick={crearApuesta}>Crear Apuesta</button>
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
                                    <td className="text-center">{eventos.filter(even=>even._id===apu.id_evento).map(a=>a.local)+ " - " + eventos.filter(even=>even._id===apu.id_evento).map(a=>a.visitante)}</td>
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