import React from "react";
import { Home } from "./pages/Home";
import { Inicio } from "./pages/Inicio";
import { Registro } from "./pages/Registro";
import { Contrasena } from "./pages/Contrasena";
import { Contacto } from "./pages/Contacto";

export function App (){
    const ruta = window.location.pathname;
    //console.log(window.location.pathname)
    if(ruta==="/") return <Home />
    if(ruta==="/inicio") return <Inicio />
    if(ruta==="/registro") return <Registro />
    if(ruta==="/contrasena") return <Contrasena />
    if(ruta==="/contacto") return <Contacto />
}