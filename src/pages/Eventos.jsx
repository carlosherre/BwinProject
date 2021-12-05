import React, { Fragment } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ContentEventos } from "../components/contentEventos";

export function Eventos(){
    return(
        <Fragment>
            <Header/>
            <ContentEventos/>
            <Footer/>
        </Fragment>
    );
}