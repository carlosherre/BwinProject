import React, { Fragment } from "react";
import { FormSaldo } from "../components/formSaldo";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
export function Saldo(){
    return (
      <Fragment>
          <Header/>
          <FormSaldo/>
          <Footer/>
      </Fragment>
    )
}