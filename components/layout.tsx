import Head from "next/head";
import React from "react";
import { biodata } from "../basicData";
import Header from "./header";
import Navbar from "./Navbar";

const Layout = ({children}: {children: any}) => {

    return(
        <div className="container">
            <Head>
                <title>Chirag Ghosh</title>
                <meta name="title" content="Chirag Ghosh" />
                <meta name="description" content={biodata.tagline} />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.chiragghosh.dev/" />
                <meta property="og:title" content="Chirag Ghosh" />
                <meta property="og:description" content={biodata.tagline} />
                <meta property="og:image" content="/metatag.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.chiragghosh.dev/" />
                <meta property="twitter:title" content="Chirag Ghosh" />
                <meta property="twitter:description" content={biodata.tagline} />
                <meta property="twitter:image" content="/metatag.jpg" />
            </Head>
            <Header />
            {children}
            <Navbar />
        </div>
    )
}

export default Layout;