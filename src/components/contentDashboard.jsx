import React, { Fragment, useEffect, useState } from "react";
import { get } from "../api/nodebwin/http";

export function ContentDashboard(){
    const [apostadores, setApostadores]=useState([0,0,0]);
    const [eventos, setEventos]=useState([]);
    const [apuestas, setApuestas]=useState([]);
    const [user, setUser]=useState([]);

    useEffect(()=>{
        get("events").then((data)=>{
            setEventos(data.eventos);
        })
        get("apuestas").then((data)=>{
            setApuestas(data.apuestas);
        })
        get("users").then((data)=>{
            setUser(data.usuarios);
        })
    },[])

    const montoTotal = (idEvento) =>{
        var montoEvento=0;
        apuestas.forEach(apuesta => {
            if(apuesta.id_evento===idEvento){
                montoEvento+=apuesta.monto;
            }    
        });
        return montoEvento;
    }

    const mayorMonto = () =>{
        var montoMayor=0;
        var eventoMayor="";
        var montoEvento=0;
        eventos.forEach(evento => {
            apuestas.filter(apu=>apu.id_evento===evento._id).forEach(apuesta => {
                montoEvento+=apuesta.monto; 
            })
            if(montoEvento>montoMayor){
                montoMayor=montoEvento;
                eventoMayor=evento.local+" - "+evento.visitante;
            }
            montoEvento=0;
        })    
        return [eventoMayor, montoMayor];
    }
    const menorMonto = () =>{
        var montoMenor=Infinity;
        var eventoMenor="";
        var montoEvento=0;
        eventos.forEach(evento => {
            apuestas.filter(apu=>apu.id_evento===evento._id).forEach(apuesta => {
                montoEvento+=apuesta.monto 
            })
            if(montoEvento<montoMenor){
                montoMenor=montoEvento;
                eventoMenor=evento.local+" - "+evento.visitante;
            }
            montoEvento=0;
        })    
        return [eventoMenor, montoMenor];
    }
    const apue = () =>{
        const idEvento = document.getElementById("selevento").value;
        let datos=[];
        apuestas.filter(apuesta => apuesta.id_evento===idEvento).map(apuesta =>
            
             datos.push([user.filter(usu=>usu._id===apuesta.id_apostador).map(usu=>usu.nombre+" "+usu.apellido),
                 apuesta.monto, 
                 apuesta.seleccion])
            )
            
        setApostadores([...datos]);
    }

    return (
        <Fragment>
           <div className="container position-static d-flex flex-wrap bg-secondary py-4 col justify-content-center" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="row w-100">
                    <div className="col-8">
                        <table className="table table-dark table-borderless table-striped table-hover">
                            <thead>
                                <tr className="bg-danger.bg-gradient">
                                <td colSpan="3" className="bg-warning h1 text-center text-black"> Eventos finalizados</td>
                                </tr>
                                <tr className="bg-black">
                                    <th className="bg-black text-center" scope="col">Partido</th>
                                    <th className="bg-black text-center" scope="col">Resultado</th>
                                    <th className="bg-black text-center" scope="col">Monto recaudado</th>
                                </tr>
                            </thead>
                            <tbody >
                                {eventos.filter(evento => evento.estado==="finalizado").map(evento =>
                                <tr className="text-center">
                                    <td>{evento.local+ " - "+evento.visitante}</td>
                                    <td>{evento.resultado}</td>
                                    <td>${montoTotal(evento._id)}</td>
                                </tr>
                                )}
                            </tbody>
                        </table> 
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <table className="table table-dark table-borderless table-striped table-hover">
                                <thead>
                                    <tr className="bg-danger.bg-gradient">
                                    <td colSpan="2" className="bg-warning h2 text-center text-black">Evento con mayor monto recaudado</td>
                                    </tr>
                                    <tr className="bg-black">
                                        <th className="bg-black text-center" scope="col">Evento</th>
                                        <th className="bg-black text-center" scope="col">Monto</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className="text-center">                                        
                                        <td>{mayorMonto()[0]}</td>
                                        <td>{mayorMonto()[1]}</td>                                     
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <table className="table table-dark table-borderless table-striped table-hover">
                                <thead>
                                    <tr className="bg-danger.bg-gradient">
                                    <td colSpan="2" className="bg-warning h2 text-center text-black">Evento con menor monto recaudado</td>
                                    </tr>
                                    <tr className="bg-black">
                                        <th className="bg-black text-center" scope="col">Evento</th>
                                        <th className="bg-black text-center" scope="col">Monto</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr className="text-center">
                                        <td>{menorMonto()[0]}</td>
                                        <td>{menorMonto()[1]}</td>      
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row w-100 d-flex flex-wrap justify-content-start">
                    <div className="col-4 d-grid bg-secondary col-4 align-content-start">
                        <select onChange={apue} className="text-center btn-warning btn mb-2" name="selevento" id="selevento">
                            <option className="text-center" value="0" >Elija un evento</option>
                            {eventos.filter(evento=>evento.estado==="finalizado").map(evento => 
                                <option className="text-center" value={evento._id}>{evento.local+ " - "+evento.visitante}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-8 d-flex flex-wrap justify-content-center">
                        <table className="table table-dark table-borderless table-striped table-hover">
                            <thead>
                                <tr className="bg-danger.bg-gradient">
                                    <td colSpan="3" className="bg-warning h1 text-center text-black"> Apuestas del evento</td>
                                </tr>
                                <tr className="bg-black">
                                    <th className="bg-black text-center" scope="col">Apostador</th>
                                    <th className="bg-black text-center" scope="col">Monto apostado</th>
                                    <th className="bg-black text-center" scope="col">Apuesta seleccionada</th>
                                </tr>
                            </thead>
                            <tbody >
                                {apostadores.map(apos=>
                                <tr className="text-center">
                                    <td>{apos[0]}</td>
                                    <td>${apos[1]}</td>
                                    <td>{apos[2]}</td>
                                </tr>    
                                )}
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
