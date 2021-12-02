import react, { Fragment } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FormContrasena } from "../components/formContrasena";


export function Contrasena(){
    return (
        <Fragment >
            <Header />
            <FormContrasena />
            <Footer />
        </Fragment>
    )
}