import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Title = styled.div`
  background: greenyellow;
`

const CodeBox = styled.div`
  background: lightblue;
`

const Button = styled.div`
  color: grey;
`

const IndexPage = () => (
  <Layout>
    <Title>
      <div>ICE15</div>
      <div>Head Election</div>
    </Title>
    <CodeBox>INPUT CODE HERE</CodeBox>
    <Link to="/selection/">
      <Button>NEXT</Button>
    </Link>
  </Layout>
)

export default IndexPage
