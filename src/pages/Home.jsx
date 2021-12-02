import React, { Fragment } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ContentHome } from "../components/contentHome";
export function Home(){
    
    return (
        <Fragment>
            <Header />
            <ContentHome />
            <Footer />
        </Fragment>
    )
}