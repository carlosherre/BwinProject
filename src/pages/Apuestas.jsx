import React, { Fragment } from "react";
import { FormApuestas } from "../components/formApuestas";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
export function Apuestas(){
    return (
      <Fragment>
          <Header/>
          <FormApuestas/>
          <Footer/>
      </Fragment>
    )
}