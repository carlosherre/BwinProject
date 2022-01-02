import React, { Fragment, useEffect, useState } from "react";
import {get, post, patch, borrar} from "../api/nodebwin/http";

export function ContentEventos(){
    const [eventos,setEventos] = useState([]); 
    const [doRequest, setDoRequest]=useState(true);

    useEffect(()=>{
        console.log("Leyendo eventos desde la api");
        get("events").then(data=>{
            setEventos(data.eventos);
        })
    },[]);

    useEffect(()=>{
        if(doRequest){
            get("events").then(data=>{
                setEventos(data.eventos);
            })
            setDoRequest(false);
        }
    },[doRequest]);

    const showSelect=()=>{
        const idEvento=document.getElementById("selEvento").value;
        console.log(idEvento);
        eventos.forEach(element => {    
            
            if(element._id===idEvento){
                document.getElementById("local2").value=element.local;
                document.getElementById("visitante2").value=element.visitante;
                document.getElementById("fecha2").value=element.fecha;
                document.getElementById("hora2").value=element.hora;
            }
            if(idEvento==="default"){
                document.getElementById("local2").value="";
                document.getElementById("visitante2").value="";
                document.getElementById("fecha2").value="";
                document.getElementById("hora2").value="";
            }
        }) 
    }
    
    const crearEvento=(event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
        if(!data.get("local") || !data.get("visitante") || !data.get("fecha") || !data.get("hora")){
            alert("Debe llenar todos los campos");
        }else{
            const newEvento={
                local:data.get("local"),
                visitante: data.get("visitante"),
                fecha: data.get("fecha"),
                hora: data.get("hora")
            };
            post("events", newEvento);
            setDoRequest(true);
            alert("Evento creado con éxito");
        }
    }

    const finalizarEvento = (event) =>{
        event.preventDefault();
        if(!document.getElementById("selEvento").value){
            alert("Debe seleccionar un evento");
        }
        else if(!document.getElementById("selResultado").value){
            alert("Debe seleccionar un resultado");
        }
        else{
            const newEvento={
                id: document.getElementById("selEvento").value,
                resultado: document.getElementById("selResultado").value
            };
            const modApuestas={
                id_evento: document.getElementById("selEvento").value,
                resultado: document.getElementById("selResultado").value
            }
            patch("events", newEvento);
            patch("apuestas", modApuestas);
            patch("users", )
            setDoRequest(true);
            alert("Evento finalizado con éxito");
        }
    }

    const eliminarEvento = (event) =>{
        event.preventDefault();
        if(!document.getElementById("selEvento").value){
            alert("Debe seleccionar un evento");
        }
        else{
            const newEvento={
                id: document.getElementById("selEvento").value
            };
            borrar("events", newEvento);
            setDoRequest(true);
            alert("Evento eliminado con éxito");
        }
    }

    return(
        <Fragment>
            <div className="container position-static d-flex flex-wrap bg-secondary py-4" tabIndex="-1" role="dialog" id="contenedorEventos" >
                
                <div className="container position-static d-flex bg-secondary py-4 col " tabIndex="-1" role="dialog" id="contenedorTablas">
                    
                    <table className="table table-dark table-borderless table-striped table-hover">
                        <thead>
                            <tr className="bg-danger.bg-gradient">
                            <td colSpan="4" className="bg-warning h1 text-center text-black">Eventos activos</td>
                            </tr>
                            <tr className="bg-black">
                                <th className="bg-black text-center" scope="col">Local</th>
                                <th className="bg-black text-center" scope="col">Visitante</th>
                                <th className="bg-black text-center" scope="col">Fecha</th>
                                <th className="bg-black text-center" scope="col">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventos.filter(evento=>evento.estado==="activo").map(evento =>
                                <tr>
                                    <td className="text-center">{evento.local}</td>
                                    <td className="text-center">{evento.visitante}</td>
                                    <td className="text-center">{evento.fecha}</td>
                                    <td className="text-center">{evento.hora}</td>
                                </tr> 
                                )
                            }
                        </tbody>
                        
                    </table>
                    
                </div>
                
                <div className="container position-static d-flex align-self-start bd-highlight p-2 bg-secondary col ">
                    <div className="d-flex p-5 pt-0 bg-black position-static">
                        <form name="formEvento" onSubmit={crearEvento}>

                            <div className="row pt-4">
                                <div className="form-group col-6">
                                    <label htmlFor="local" className="text-white">Equipo Local</label>
                                    <input type="text" className="form-control" id="local" name="local" required/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="visitante" className="text-white">Equipo Visitante</label>
                                    <input type="text" className="form-control" id="visitante" name="visitante" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="fecha" className="text-white">Fecha del evento</label>
                                    <input type="date" className="form-control" id="fecha" name="fecha" required/>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="hora" className="text-white">Hora del evento</label>
                                    <input type="time" className="form-control" id="hora" name="hora" required/>
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
                    <select onChange={showSelect} className="text-center btn-warning btn mb-2" name="selEvento" id="selEvento">
                        <option className="text-center" value="" >Elija un evento</option>
                        {eventos.filter(evento=>evento.estado==="activo").map(evento => 
                            <option className="text-center" value={evento._id}>{evento.local+ " - "+evento.visitante}</option>
                        )}
                    </select>  
                    <select className="text-center btn-warning btn" name="selResultado" id="selResultado">
                        <option className="text-center" value="">Elija un Resultado</option>
                        <option className="text-center" value="Gana Local">Gana Local</option>
                        <option className="text-center" value="Empate">Empate</option>
                        <option className="text-center" value="Gana Visitante">Gana Visitante</option>
                    </select>  
                </div>
                

                <br />
                <div className="modal-body p-5 pt-0 bg-black col-8">
                    <form name="formMostrar">

                        <div className="row pt-4">
                            <div className="form-group col-6">
                                <label htmlFor="local2" className="text-white">Equipo Local</label>
                                <input type="text" className="form-control" id="local2" readOnly/>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="visitante2" className="text-white">Equipo Visitante</label>
                                <input type="text" className="form-control" id="visitante2" readOnly/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="fecha2" className="text-white">Fecha del evento</label>
                                <input type="text" className="form-control" id="fecha2" readOnly/>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="hora2" className="text-white">Hora del evento</label>
                                <input type="time" className="form-control" id="hora2" readOnly/>
                            </div>
                        </div>
                    <br/>
                        <div className="row justify-content-around">
                            <button className=" mb-0 btn btn-lg rounded-4 btn-primary btn-warning col-5" type="submit" id="editarEvento" onClick={finalizarEvento} >Finalizar evento</button>
                            <button className="mb-0 btn btn-lg rounded-4 btn-primary btn-warning col-5" type="submit" id="eliminarEvento" onClick={eliminarEvento} >Eliminar evento</button>
                        </div>
                    </form>
                </div>
            </div>            
           
        </Fragment>
    );


}