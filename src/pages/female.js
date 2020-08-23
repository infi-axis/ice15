import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Center from "../components/center"
import Candidate from "../components/candidate"
import Button from "../components/button"
import { navigate } from "gatsby"
import axios from "axios"

const SelectionPage = () => {
    const [selection, setSelection] = useState("")
    const [load, setLoad] = useState(false)
    const [code] = useState(localStorage.getItem("couponId"))

    const handleSelect = cid => {
        setSelection(cid)
    }

    const handleSubmit = event => {
        event.preventDefault()
        verifyInput()
    }

    const verifyInput = () => {
        if (!selection) {
            alert("Select a candidate")
        } else {
            localStorage.setItem("female", selection)
            submitVote()
        }
    }

    const submitVote = () => {
        console.log({
            couponId: localStorage.getItem("couponId"),
            male: localStorage.getItem("male"),
            female: localStorage.getItem("female"),
        })

        axios
            .post(
                "https://us-central1-ice15-e33ad.cloudfunctions.net/vote",
                {
                    couponId: localStorage.getItem("couponId"),
                    male: localStorage.getItem("male"),
                    female: localStorage.getItem("female"),
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then(res => {
                if (res.status === 200) {
                    navigate("/farewell")
                }
            })
            .catch(err => {
                alert(err.response?.data || err.message)
            })
    }

    useEffect(() => {
        if (!localStorage.getItem("couponId")) {
            navigate("/", { replace: true })
        } else if (!localStorage.getItem("male")) {
            navigate("/male", { replace: true })
            alert("Select male candidate first")
        } else {
            setLoad(true)
        }
    }, [])

    return load ? (
        <Layout>
            <Center>
                <Container>
                    <SubTitle>Your Code</SubTitle>
                    <Title>
                        {code.slice(0, 3)} <Dash /> {code.slice(3, 6)}
                    </Title>
                    <CandidatesContainer onSubmit={handleSubmit} id="female">
                        <Candidate
                            name="Poraor"
                            cid="1"
                            subname="ปอ-ออ"
                            selected={selection}
                            onClick={handleSelect}
                        />
                        <Candidate
                            name="Looknam"
                            cid="2"
                            subname="ลูกนํ้า"
                            selected={selection}
                            onClick={handleSelect}
                        />
                        <Candidate
                            name="Chaba"
                            cid="3"
                            subname="ชบา"
                            selected={selection}
                            onClick={handleSelect}
                        />
                    </CandidatesContainer>
                    <Button type="submit" form="female">
                        Vote now!
                    </Button>
                </Container>
            </Center>
        </Layout>
    ) : null
}

export default SelectionPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: auto;
    width: 340px;

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

const CandidatesContainer = styled.form`
    margin-top: 1.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 20px;
`
