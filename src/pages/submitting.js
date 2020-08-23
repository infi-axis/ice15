import React, { useEffect } from "react"
import axios from "axios"
import { navigate } from "gatsby"

import Wave from "../components/wave"

const url = "https://us-central1-ice15-e33ad.cloudfunctions.net/vote"
const options = { headers: { "Content-Type": "application/json" } }

const SubmittingPage = () => {
    useEffect(() => {
        const redeem = async () => {
            try {
                const body = {
                    couponId: localStorage.getItem("couponId"),
                    male: localStorage.getItem("male"),
                    female: localStorage.getItem("female"),
                }
                const res = await axios.post(url, body, options)
                if (res.status === 200) {
                    navigate("/farewell")
                }
            } catch (e) {
                console.log(e)
            }
        }

        redeem()
    })

    return <Wave color="#1c9fff" />
}

export default SubmittingPage
