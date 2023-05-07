import Head from "next/head";
import React from "react";
import { biodata } from "../basicData";
import Header from "./header";
import Navbar from "./Navbar";

const Layout = ({children}: {children: any}) => {

    return(
        <div className="container">
            <Head>
                <title>{biodata.name}</title>
                <meta name="description" content={biodata.tagline} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Navbar />
        </div>
    )
}

export default Layout;