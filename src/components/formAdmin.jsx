import React, { Fragment } from "react";

export function FormAdmin(){
    return (
        <Fragment>
            <div className="modal modal-signin position-static d-block bg-secondary py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Registro Usuarios Internos</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit="" action="#">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="txtnombre" placeholder="Ingrese sus nombres" required/>
                            <label htmlFor="txtnombre">Nombres</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="txtapellido" placeholder="Ingrese sus apellidos" required/>
                            <label htmlFor="txtapellido">Apellidos</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control rounded-4" id="txtcelular" placeholder="Ingrese su número celular" required/>
                            <label htmlFor="txtcelular">Celular</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control rounded-4" id="txtcorreo" placeholder="Ingrese su correo electrónico" required/>
                            <label htmlFor="txtcorreo">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" id="txtpassword" placeholder="Password" required/>
                            <label htmlFor="txtpassword">Contraseña</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" id="txtconfirmar" placeholder="Confirmar Password" required/>
                            <label htmlFor="txtconfirmar">Confirmar Contraseña</label>
                        </div>
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Registrar</button>
                        <small className="text-muted">Al presionar en Registrar está aceptando los términos y condiciones de uso de política de privacidad de datos</small>
                        </form>
                        <br />
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}