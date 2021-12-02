import { Header } from "../components/header";
import { Footer } from "../components/footer";
import react, { Fragment } from "react";
import { FormContacto } from "../components/formContacto";

export function Contacto(){
    return (
        <Fragment>
            <Header />
            <FormContacto />
            <Footer />
        </Fragment>
    )
}