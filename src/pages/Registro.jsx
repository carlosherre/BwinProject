import React, { Fragment } from "react";
import { FormRegistro } from "../components/formRegistro";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
export function Registro(){
    return (
        <Fragment>
            <Header />
            <FormRegistro />
            <Footer />
        </Fragment>
    )
}