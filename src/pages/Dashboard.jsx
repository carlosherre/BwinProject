import React, { Fragment } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ContetDashboard } from "../components/dashboard";


export function Dashboard(){
    return (
        <Fragment >
            <Header  />
            <ContetDashboard />
            <Footer />
        </Fragment>
    )
}