import React, { Fragment } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
export function Inicio(){
    return (
        <Fragment>
            <Header />
            <div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
                <div class="modal-dialog " role="document">
                    <div class="modal-content rounded-5 shadow bg-black ">
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <h2 class="fw-bold mb-0 text-white">Inicio de sesión</h2>
                    </div>

                    <div class="modal-body p-5 pt-0">
                        <form class="">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control rounded-4" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Correo electrónico</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control rounded-4" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Contraseña</label>
                        </div>
                        <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Ingresar</button>
                        <small class="text-muted">Al presionar en ingresar está aceptando los términos y condiciones</small>
                        </form>
                        <br />
                        <div class="mb-3 text-center">
                            <a href="#" >¿Olvidó su contraseña?</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            <Footer />
        </Fragment>
    )
}