import React, { Fragment } from "react";
import { FormInicio } from "../components/formInicio";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
export function Inicio(){
    return (
        <Fragment>
            <Header />
            <FormInicio />
            <Footer />
        </Fragment>
    )
}