import React, { Fragment } from "react";
import enVivo from "../enVivo.json";

export function ContentHome(){
   const partidos = enVivo;
  
   
       
   
    return (
        <Fragment>
            <div className="container position-static d-flex bg-secondary py-4 col " tabIndex="-1" role="dialog" id="modalSignin">
                
            <table className="table table-dark table-borderless table-striped table-hover">
                <thead>
                    <tr className="bg-danger.bg-gradient">
                       <td colSpan="3" className="bg-warning h1 text-center text-black"> Partidos en Vivo</td>
                    </tr>
                    <tr className="bg-black">
                        <th className="bg-black text-center" scope="col">Local</th>
                        <th className="bg-black text-center" scope="col">Marcador</th>
                        <th className="bg-black text-center" scope="col">Visitante</th>
                        
                    </tr>
                </thead>
                <tbody >
                  {partidos.map(partido => 
                    <tr>
                        <td className="text-center">{partido.local}</td>
                        <td className="text-center">{partido.resultado}</td>
                        <td className="text-center">{partido.visitante}</td>
                    </tr>
                  )}
                </tbody>
                
            </table>
            
            </div>
            
        </Fragment>
    )
}