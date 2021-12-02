import React, { Fragment } from "react";

export function FormContacto(){
    return (
        <Fragment>
            
            <div className="modal modal-signin position-static d-block bg-secondary py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Contáctenos</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit="" action="#">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="txtnombre" placeholder="Escriba su nombre" required/>
                            <label htmlFor="txtnombre">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control rounded-4" id="txtcorreo" placeholder="name@example.com" required/>
                            <label htmlFor="txtcorreo">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea rows="4" className="form-control rounded-4" id="txtmensaje" placeholder="Déjenos un mensaje" required></textarea>
                            <label htmlFor="txtmensaje">Mensaje</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Enviar</button>
                        </form>
                        <br />
                        
                    </div>
                    </div>
                </div>
                </div>
            
        </Fragment>
    )
}