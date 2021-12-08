import {React, Fragment} from "react";
import eventos  from "../eventos.json";

export function FormApuestas(){
    return(
        <Fragment>
            <div className="container position-static d-flex flex-wrap bg-secondary py-4" tabIndex="-1" role="dialog" id="contenedorEventos" >
                
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
                            </tr>
                        </thead>
                        <tbody >
                       
                            <tr>
                                <td className="text-center">Burro-Corseles</td>
                                <td className="text-center">$120000000</td>
                                <td className="text-center">Gana Local</td>
                            </tr>
                            <tr>
                                <td className="text-center">Caballo-Yeguas</td>
                                <td className="text-center">$13400000</td>
                                <td className="text-center">Empate</td>
                            </tr>
                        
                        </tbody>
                        
                    </table>
                    
                </div>
                </div>
            <div className="modal modal-signin position-static d-block bg-secondary py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Apuestas</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit="" action="#">
                        <div className="form-floating mb-3">
                            <select onChange="" className="text-center btn-warning btn" name="selEvento" id="selEvento">
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
                        <div className="form-floating mb-3">
                        <select onChange="" className="text-center btn-warning btn" name="selEvento" id="selEvento">
                            <option className="text-center" value="default">Elija una opcion</option>
                            <option className="text-center" value="1">Gana Local</option>
                            <option className="text-center" value="2">Gana Visitante</option>
                            <option className="text-center" value="3">Empate</option>
                        </select>  
                        </div>  
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Enviar</button>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Cancelar Apuestas</button>
                        <a href="/saldo"><button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="button">Ver Saldo</button></a>
                        </form>
                        <br />
                        
                    </div>
                    </div>
                </div>
                </div>
                
            
        </Fragment>
    )
}