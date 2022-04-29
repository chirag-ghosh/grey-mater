import Head from "next/head";
import React from "react";
import Header from "./header";

const Layout = ({children}: {children: any}) => {

    return(
        <div className="container">
            <Head>
                <title>Grey Mater</title>
                <meta name="description" content="A minimal portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
        </div>
    )
}

export default Layout;