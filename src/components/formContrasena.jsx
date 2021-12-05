import React, { Fragment } from "react";

export function FormContrasena(){
    return (
        <Fragment>
            <div className="modal modal-signin position-static d-block bg-secondary py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Cambiar contraseña</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit="" action="#">
                        
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control rounded-4" id="txtcorreo" placeholder="Ingrese su correo electrónico" required/>
                            <label htmlFor="txtcorreo">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" id="txtpassword" placeholder="Password" required/>
                            <label htmlFor="txtpassword">Nueva Contraseña</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" id="txtconfirmar" placeholder="Confirmar Password" required/>
                            <label htmlFor="txtconfirmar">Confirmar Nueva Contraseña</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Cambiar contraseña</button>
                        </form>
                        <br />
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}