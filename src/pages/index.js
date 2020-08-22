import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <div>ICE15</div>
      <div>Head Election</div>
    </div>
    <div>INPUT CODE HERE</div>
    <Link to="/selection/">
      <button>NEXT</button>
    </Link>
  </Layout>
)

export default IndexPage
