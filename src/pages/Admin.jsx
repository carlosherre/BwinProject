import React, { Fragment } from "react";
import { FormAdmin } from "../components/formAdmin";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
export function Admin(){
    return (
      <Fragment>
          <Header/>
          <FormAdmin/>
          <Footer/>
      </Fragment>
    )
}