import React, { Fragment, useEffect, useState} from "react";
import {get, patch} from "../api/nodebwin/http";

export function FormSaldo(){
    const [user, setUser]=useState([]);
    const [doChange, setDoChange]=useState(false);

    useEffect(()=>{
        console.log("Leyendo eventos desde la api");
        get("users").then(data=>{
            setUser(data.usuarios);
        })
    },[]);

    useEffect(()=>{
        if(doChange){
            get("users").then(data=>{
                setUser(data.usuarios);
            })
            setDoChange(false); 
        }
    },[doChange]);

    const aumentarSaldo = (event) =>{
        event.preventDefault();
        const nuevoSaldo=parseInt(document.getElementById("txtmonto").value)+parseInt(document.getElementById("txtsaldo").value);
        const id=document.getElementById("selApostador").value;
        console.log({id:id, saldo:nuevoSaldo});
        const datos={id:id, saldo:nuevoSaldo}
        patch("users", datos);
        setDoChange(true);
        document.getElementById("txtsaldo").value="";
        alert("Saldo agregado con éxito");
    }

    const cargarSaldos = (event) =>{
        event.preventDefault();
        const iduser=document.getElementById("selApostador").value;
        const saldoActual=user.filter(usu=>usu._id===iduser).map(usu=>usu.saldo);
        document.getElementById("txtmonto").value=saldoActual;
    }

    return(
    <Fragment>
        <div className="modal modal-signin position-static d-block bg-secondary py-2" tabIndex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog " role="document">
                    <div className="modal-content rounded-5 shadow bg-black ">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0 text-white">Saldo</h2>
                    </div>
                    <div className="d-flex form-floating mb-3 justify-content-center">
                            <select onChange={cargarSaldos} className="text-center btn-warning btn-lg" name="selApostador" id="selApostador">
                            <option className="text-center" value="">Elija su Nombre</option>
                            {user.filter(usu=>usu.tipo==="1").map(usuario => 
                                <option className="text-center" value={usuario._id}>{usuario.nombre+ " "+usuario.apellido}</option>
                            )}
                            </select>  
                        </div> 
                    <div className="modal-body p-5 pt-0">
                        <form className="" onSubmit={aumentarSaldo} action="#">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="txtmonto" readOnly />
                            <label htmlFor="txtmonto">Saldo Actual</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control rounded-4" id="txtsaldo"  />
                            <label htmlFor="txtmonto">Saldo a Agregar</label>
                        </div>
                        
                        <div className="form-floating mb-3">
                        
                        </div>  
                        <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary btn-warning" type="submit">Agregar Saldo</button>
                        
                        </form>
                        <br />
                        
                    </div>
                    </div>
                </div>
                </div>
</Fragment>
    )}