import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Profiles from "./profiles"

const Candidate = ({ name, subname, onClick }) => {
    return (
        <Container onClick={onClick}>
            <ProfileImages name={name} />
            <InfoContainer>
                <Baseline>
                    <Name>{name}</Name>
                    <SubName>{subname}</SubName>
                </Baseline>
            </InfoContainer>
        </Container>
    )
}

export default Candidate

const ProfileImages = styled(Profiles)`
    width: 100%;
    border-radius: 14px 14px 0 0;
`

const Container = styled(motion.div).attrs({
    transition: {
        duration: 0.2,
    },
    whileHover: {
        scaleY: 1.04,
        scaleX: 1.06,
    },
    whileTap: {
        scaleY: 0.96,
        scaleX: 0.94,
    },
})`
    border-radius: 14px;
    width: 140px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.025), 0 4px 8px rgba(0, 0, 0, 0.032),
        0 8px 16px rgba(0, 0, 0, 0.032);
`

const InfoContainer = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;

    height: 3rem;
    width: 100%;

    border-radius: 0 0 14px 14px;
    background: #fff;
`

const Baseline = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
`

const Name = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #3d3d3d;
`

const SubName = styled(Name)`
    font-weight: 400;
    color: #b9b9b9;
`
