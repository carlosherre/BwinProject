import React from "react";
import { Home } from "./pages/Home";
import { Inicio } from "./pages/Inicio";
import { Registro } from "./pages/Registro";
import { Contrasena } from "./pages/Contrasena";
import { Contacto } from "./pages/Contacto";
import { Eventos } from "./pages/Eventos";
import { Admin } from "./pages/Admin";
import { Apuestas } from "./pages/Apuestas";
import { Saldo } from "./pages/Saldo";
import { Dashboard } from "./pages/Dashboard";

export function App (){
    const ruta = window.location.pathname;
    //console.log(window.location.pathname)
    if(ruta==="/") return <Home />
    if(ruta==="/inicio") return <Inicio />
    if(ruta==="/registro") return <Registro />
    if(ruta==="/contrasena") return <Contrasena />
    if(ruta==="/contacto") return <Contacto />
    if(ruta==="/eventos") return <Eventos />
    if(ruta==="/adm") return <Admin />
    if(ruta==="/apuestas") return <Apuestas />
    if(ruta==="/saldo") return <Saldo />
    if(ruta==="/dashboard") return <Dashboard />
   

}