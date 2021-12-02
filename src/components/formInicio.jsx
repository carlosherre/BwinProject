import React, { Fragment } from "react";

export function FormInicio(){
    return (
        <Fragment>
            
            <div className="modal modal-signin position-static d-block bg-secondary py-5" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Inicio de sesión</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit="" action="#">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Ingresar</button>
                        <small className="text-muted">Al presionar en ingresar está aceptando los términos y condiciones</small>
                        </form>
                        <br />
                        <div className="mb-3 text-center">
                            <a href="/contrasena" >¿Olvidó su contraseña?</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            
        </Fragment>
    )
}