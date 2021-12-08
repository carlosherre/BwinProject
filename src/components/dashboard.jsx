import React, { Fragment } from "react";

export function ContetDashboard(){
    return (
        <Fragment>
           <div className="container position-static d-flex bg-secondary py-4 col " tabIndex="-1" role="dialog" id="modalSignin">
                
                <table className="table table-dark table-borderless table-striped table-hover">
                    <thead>
                        <tr className="bg-danger.bg-gradient">
                           <td colSpan="4" className="bg-warning h1 text-center text-black"> Dashboard</td>
                        </tr>
                        <tr className="bg-black">
                            <th className="bg-black text-center" scope="col">Apuestas Vigentes</th>
                            <th className="bg-black text-center" scope="col">Apuestas Finalizadas</th>
                            <th className="bg-black text-center" scope="col">Numero de Apostadores</th>
                            <th className="bg-black text-center" scope="col">Total Recaudado</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className="bg-black text-center">
                            <td>12</td>
                            <td>34</td>
                            <td>23</td>
                            <td>$39000000000</td>
                        </tr>
                      
                       
                    
                    </tbody>
                    
                </table>
                
                </div>
        </Fragment>
    )
}
