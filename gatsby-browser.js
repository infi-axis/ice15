import React from "react"

import "firebase/firestore"
import "firebase/functions"

import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}
