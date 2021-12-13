import React, { Fragment, useState } from "react";
const eventosJSON=[
    {
        "key": 1,
        "local":"Tigres",
        "visitante":"Chivas",
        "fecha":"04/12/2021",
        "hora":"10:00",
        "estado":"finalizado",
        "resultado":"gana visitante",
        "apuestas": [{
            "id":12345678,
            "monto":2000,
            "apuesta":"gana local"
        },
        {
            "id":987654321,
            "monto":3000,
            "apuesta":"gana visitante"
        },
        {
            "id":458139763,
            "monto":1000,
            "apuesta":"gana local"
        }]
    },
    {
        "key": 2,
        "local":"Leones",
        "visitante":"Burros",
        "fecha":"05/12/2021",
        "hora":"21:00",
        "estado":"finalizado",
        "resultado":"gana local",
        "apuestas": [{
            "id":12345678,
            "monto":2000,
            "apuesta":"gana local"
        },
        {
            "id":987654321,
            "monto":10000,
            "apuesta":"gana visitante"
        },
        {
            "id":458139763,
            "monto":1000,
            "apuesta":"gana local"
        }]
    },
    {
        "key": 3,
        "local":"Fresas",
        "visitante":"Mandarinas",
        "fecha":"08/12/2021",
        "hora":"21:00",
        "estado":"finalizado",
        "resultado":"empate",
        "apuestas": [{
            "id":12345678,
            "monto":2000,
            "apuesta":"gana local"
        },
        {
            "id":987654321,
            "monto":15000,
            "apuesta":"gana visitante"
        },
        {
            "id":458139763,
            "monto":1000,
            "apuesta":"gana local"
        }]
    },
    {
        "key": 4,
        "local":"Papayas",
        "visitante":"Mangos",
        "fecha":"16/12/2021",
        "hora":"11:00",
        "estado":"finalizado",
        "resultado":"gana local",
        "apuestas": [{
            "id":12345678,
            "monto":20000,
            "apuesta":"gana local"
        },
        {
            "id":987654321,
            "monto":25000,
            "apuesta":"gana visitante"
        },
        {
            "id":458139763,
            "monto":21000,
            "apuesta":"gana local"
        }]
    }
]
export function ContentDashboard(){
    const [apostadores, setApostadores]=useState([0,0,0]);

    const montoTotal = (idEvento) =>{
        var montoEvento=0;
        eventosJSON.forEach(evento => {
            if(evento.key==idEvento){
                evento.apuestas.forEach(apuesta => {
                   montoEvento+=apuesta.monto 
                }    
            )};
        });
        return montoEvento;
    }

    const mayorMonto = () =>{
        var montoMayor=0;
        var eventoMayor="";
        var montoEvento=0;
        eventosJSON.forEach(evento => {
            evento.apuestas.forEach(apuesta => {
                montoEvento+=apuesta.monto 
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
        eventosJSON.forEach(evento => {
            evento.apuestas.forEach(apuesta => {
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
        var idEvento=0;
        var nuevaApuesta=[];
        idEvento = document.getElementById("selevento").value;
        eventosJSON.filter(eventos => eventos.key==idEvento).forEach(evento =>{
        
            evento.apuestas.forEach(apuesta =>{
                nuevaApuesta.push([apuesta.id, apuesta.monto, apuesta.apuesta])
            })
            setApostadores([...nuevaApuesta]);
           
        })
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
                                {eventosJSON.filter(evento => evento.estado=="finalizado").map(evento =>
                                <tr className="text-center">
                                    <td>{evento.local+ " - "+evento.visitante}</td>
                                    <td>{evento.resultado}</td>
                                    <td>${montoTotal(evento.key)}</td>
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
                            {eventosJSON.filter(evento=>evento.estado==="finalizado").map(evento => 
                                <option className="text-center" value={evento.key}>{evento.local+ " - "+evento.visitante}</option>
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
                                    <th className="bg-black text-center" scope="col">ID apostador</th>
                                    <th className="bg-black text-center" scope="col">Monto apostado</th>
                                    <th className="bg-black text-center" scope="col">Apuesta seleccionada</th>
                                </tr>
                            </thead>
                            <tbody >
                                {apostadores.map(apuesta=>
                                    
                                    <tr className="text-center">
                                        <td>{apuesta[0]}</td>
                                        <td>${apuesta[1]}</td>
                                        <td>{apuesta[2]}</td>
                                    </tr>
                                )
                                }
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
