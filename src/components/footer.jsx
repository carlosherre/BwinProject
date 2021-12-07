import React from "react";

export function Footer(){
    return (

        <footer className="p-3 bg-black text-white d-flex">
            <div className="container d-flex flex-row">
                <div className="d-flex flex-wrap justify-content-start col">
                    Equipo 1 - NRC 1245
                </div>
                <div className="d-flex flex-wrap justify-content-end col">
                    Copyright 2021
                </div>
            </div>
        </footer>
    );
}