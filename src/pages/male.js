import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"

import Candidate from "../components/candidate"
import { navigate } from "gatsby"

const SelectionPage = () => {
    const [code, setCode] = useState("")

    const onClick = id => {
        localStorage.setItem("male", id)
        navigate("/female")
    }

    useLayoutEffect(() => {
        if (!localStorage.getItem("couponId")) {
            navigate("/", { replace: true })
        } else {
            setCode(localStorage.getItem("couponId"))
        }
    }, [])

    return (
        <Container>
            <SubTitle>Your Code</SubTitle>
            <Title>
                {code.slice(0, 3)} <Dash /> {code.slice(3, 6)}
            </Title>
            <CandidatesContainer>
                <Candidate
                    name="Guide"
                    subname="ไกด์"
                    onClick={() => onClick(1)}
                />
                <Candidate
                    name="Boon"
                    subname="บุ๋น"
                    onClick={() => onClick(2)}
                />
                <Candidate
                    name="Patton"
                    subname="แพตตั้น"
                    onClick={() => onClick(3)}
                />
                <Candidate
                    name="Punn"
                    subname="ปัน"
                    onClick={() => onClick(4)}
                />
            </CandidatesContainer>
        </Container>
    )
}

export default SelectionPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: auto;
    width: 300px;

    @media screen and (min-width: 1024px) {
        position: relative;
        top: -3%;
    }
`

const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    text-transform: none;
    color: #1c9fff;
    margin-top: 0.75rem;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 28px;
    color: #4d4d4d;
`

const Dash = styled.div`
    display: inline-block;
    width: 9px;
    height: 3px;
    background: #d1d1d1;
    vertical-align: center;
    margin: 0 0.25rem;
`

const CandidatesContainer = styled.div`
    margin-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1.25rem;
`
