import Head from "next/head";
import React from "react";

const Layout = ({children}: {children: any}) => {

    return(
        <div>
            <Head>
                <title>Grey Mater</title>
                <meta name="description" content="A minimal portfolio website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='home'>
                {children}
            </div>
        </div>
    )
}

export default Layout;