import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const transition = {
    duration: 0.4,
    yoyo: Infinity,
}

const containerVariants = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const circleVariants = {
    start: {
        y: "120%",
    },
    end: {
        y: "0",
    },
}

const Wave = ({ color }) => {
    return (
        <Container animate="end" initial="start" variants={containerVariants}>
            <Circle
                color={color}
                transition={transition}
                variants={circleVariants}
            />
            <Circle
                color={color}
                transition={transition}
                variants={circleVariants}
            />
            <Circle
                color={color}
                transition={transition}
                variants={circleVariants}
            />
        </Container>
    )
}

export default Wave

const Container = styled(motion.div)`
    height: 1.5rem;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Circle = styled(motion.span)`
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background: ${props => props.color || "whtie"};
    border-radius: 50%;

    &:not(:first-child) {
        margin-left: 0.375rem;
    }
`
