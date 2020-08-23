import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import GlobalStyle from "../theme/globalStyle"

const variants = {
    initial: {
        translateY: "100vh",
        opacity: 0,
    },
    enter: {
        translateY: 0,
        opacity: 1,
    },
    exit: {
        translateY: "-100vh",
        opacity: 0,
    },
}

const transition = {
    type: "spring",
    duration: 0.12,
    damping: 13,
}

const Layout = ({ children, location }) => {
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
            <Container>
                <AnimatePresence>
                    <Center
                        key={location.pathname}
                        variants={variants}
                        transition={transition}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        {children}
                    </Center>
                </AnimatePresence>
            </Container>
        </>
    )
}

export default Layout

const Container = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const Center = styled(motion.div)`
    position: absolute;
`
