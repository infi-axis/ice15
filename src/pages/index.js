import React, { useEffect, useCallback } from "react"
import styled from "styled-components"
import useDigitInput from "react-digit-input"
import axios from "axios"
import { motion } from "framer-motion"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Center from "../components/center"
import Politician from "../components/politician"
import Button from "../components/button"
import Wave from "../components/wave"

const url = "https://us-central1-ice15-e33ad.cloudfunctions.net/verifyCode"
const options = { headers: { "Content-Type": "application/json" } }

const inputVariants = {
    normal: {
        border: "2px solid hsl(349, 92%, 54%, 0)",
    },
    invalid: {
        border: "2px solid hsl(349, 92%, 54%, 1)",
        transition: {
            duration: 0.3,
        },
    },
}

const IndexPage = () => {
    const [couponId, setCouponId] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [invalid, setInvalid] = React.useState(false)

    const onChange = useCallback(
        value => {
            setCouponId(value.toUpperCase())
            if (invalid) {
                setInvalid(false)
            }
        },
        [invalid, setCouponId, setInvalid]
    )

    const digits = useDigitInput({
        acceptedCharacters: /^\w+$/,
        value: couponId,
        onChange,
        length: 6,
    })

    const onClick = async () => {
        if (loading) {
            return
        }

        try {
            setLoading(true)
            const body = { couponId }
            const res = await axios.post(url, body, options)
            if (res.status === 200) {
                localStorage.setItem("couponId", couponId)
                navigate("/male")
            }
        } catch (err) {
            setLoading(false)
            setInvalid(true)
        }
    }

    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <Layout>
            <Center>
                <Container>
                    <Politician />
                    <SubTitle>ICE15</SubTitle>
                    <Title>Head Election</Title>
                    <InputsContainer
                        initial="normal"
                        animate={invalid ? "invalid" : "normal"}
                    >
                        {digits.slice(0, 3).map((digit, index) => (
                            <Input
                                key={index}
                                variants={inputVariants}
                                inputMode="decimal"
                                {...digit}
                            />
                        ))}
                        <Dash />
                        {digits.slice(3, 6).map((digit, index) => (
                            <Input
                                key={index + 3}
                                variants={inputVariants}
                                inputMode="decimal"
                                {...digit}
                            />
                        ))}
                    </InputsContainer>
                    <Button onClick={onClick}>
                        {loading ? <Wave /> : "Next"}
                    </Button>
                </Container>
            </Center>
        </Layout>
    )
}

export default IndexPage

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    width: auto;

    @media screen and (min-width: 1024px) {
        position: relative;
        top: -3%;
    }
`

const SubTitle = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1%;
    color: #1c9fff;
    margin-top: 0.75rem;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: #3d3d3d;
`

const InputsContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 2rem;

    & > *:not(:first-child) {
        margin-left: 0.5rem;
    }
`

const Input = styled(motion.input).attrs({ type: "text" })`
    min-height: 48px;
    width: 36px;
    background: #f5f5f5;
    border-radius: 9px;

    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;

    color: #3d3d3d;

    border: none;
    outline: none;
    appearance: none;
`

const Dash = styled.div`
    width: 12px;
    height: 2px;
    background: #b1b1b1;
`
