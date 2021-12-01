import React, { Fragment } from "react";

export function Header(){
    //const [ventana, setVentana] = useState("");
        
    return(
    <Fragment>
        <header className="p-3 bg-black text-white">
                
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                                <img className="bi me-2" width="60"  aria-label="Bootstrap" src="data:image/png;base64,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"/>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        
                            <li><a href="#" className="nav-link px-2 text-secondary" >  Inicio</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Contáctenos</a></li>
                            <li><a href="#" className="nav-link px-2 text-light">Apuestas</a></li>
                            <li><a href="#" className="nav-link px-2 text-light">Gestión de apuestas</a></li>
                            <li><a href="#" className="nav-link px-2 text-light">Zona Admin</a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control form-control-dark" placeholder="Buscar partido..." aria-label="Search"/>
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Ingresar</button>
                            <button type="button" className="btn btn-warning">Registrarse</button>
                        </div>
                    </div>
                </div>
               
            </header>
    </Fragment>
    );
}