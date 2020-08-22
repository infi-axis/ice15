import React from "react"
import Helmet from "react-helmet"
import { GlobalStyle } from "../theme/globalStyle"

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>ICE15 - Head Election</title>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
                </style>
            </Helmet>
            <GlobalStyle />
            {children}
        </>
    )
}

export default Layout
