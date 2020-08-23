import React, { useState, useLayoutEffect } from "react"
import styled from "styled-components"

import Header from "../components/header"
import Candidate from "../components/candidate"
import { navigate } from "gatsby"

const SelectionPage = () => {
    const onClick = id => {
        localStorage.setItem("male", id)
        navigate("/female")
    }

    useLayoutEffect(() => {
        if (!localStorage.getItem("couponId")) {
            navigate("/", { replace: true })
        }
    }, [])

    return (
        <Container>
            <Header title="Candidates" subtitle="Male" color="#1c9fff" />
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

    top: -3%;

    @media screen and (min-width: 1024px) {
        position: relative;
        top: -6%;
    }
`

const CandidatesContainer = styled.div`
    margin-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1.25rem;
`
