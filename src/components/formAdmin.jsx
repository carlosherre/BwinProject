import React, { Fragment } from "react";
import {post} from "../api/nodebwin/http";

export function FormAdmin(){

    const crearUsuario = (event) =>{
        event.preventDefault();
        const data2 = new FormData(event.target);
        if(data2.get("txtpassword1")!==data2.get("txtconfirmar1")){
            alert("Las contraseñas no coinciden");
        }
        else{
            const newUser={
                nombre: data2.get("txtnombre1"),
                apellido: data2.get("txtapellido1"),
                celular: data2.get("txtcelular1"),
                email: data2.get("txtcorreo1"),
                password: data2.get("txtpassword1"),
                tipo: "2"
            };
            console.log(newUser);
            post("users", newUser);
            alert("Usuario interno creado con éxito");
        } 
    }
    return (
        <Fragment>
            <div className="modal modal-signin position-static d-block bg-secondary py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Registro Usuarios Internos</h2>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="" name="formRegistroI" onSubmit={crearUsuario}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" name="txtnombre1" id="txtnombre1" placeholder="Ingrese sus nombres" required/>
                            <label htmlFor="txtnombre">Nombres</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" name="txtapellido1" id="txtapellido1" placeholder="Ingrese sus apellidos" required/>
                            <label htmlFor="txtapellido">Apellidos</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control rounded-4" name="txtcelular1" id="txtcelular1" placeholder="Ingrese su número celular" required/>
                            <label htmlFor="txtcelular">Celular</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control rounded-4" name="txtcorreo1" id="txtcorreo1" placeholder="Ingrese su correo electrónico" required/>
                            <label htmlFor="txtcorreo">Correo electrónico</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" name="txtpassword1" id="txtpassword1" placeholder="Password" required/>
                            <label htmlFor="txtpassword">Contraseña</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-4" name="txtconfirmar1" id="txtconfirmar1" placeholder="Confirmar Password" required/>
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
    );
}