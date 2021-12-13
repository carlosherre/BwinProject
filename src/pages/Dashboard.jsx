import React, { Fragment } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ContentDashboard } from "../components/contentDashboard";


export function Dashboard(){
    return (
        <Fragment >
            <Header  />
            <ContentDashboard />
            <Footer />
        </Fragment>
    )
}