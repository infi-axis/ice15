import styled from "styled-components"
import { motion } from "framer-motion"

export default styled(motion.button).attrs({
    whileHover: { scaleX: 1.04, scaleY: 1.07 },
    whileTap: { scaleX: 0.96, scaleY: 0.93, opacity: 0.6 },
    transition: { duration: 0.2 },
})`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.75rem;

    height: 48px;
    width: 100%;
    background: #2d74fe;

    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 600;
    color: white;

    border-radius: 14px;

    outline: none;
    border: none;
    appearance: none;
    cursor: pointer;
`
