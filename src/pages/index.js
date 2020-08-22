import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
`

const Title = styled.div`
  flex: 1;
  background: greenyellow;
`

const CodeBox = styled.div`
  flex: 1;
  background: lightblue;
`

const Button = styled.div`
  flex: 1;
  color: grey;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Title>
        <div>ICE15</div>
        <div>Head Election</div>
      </Title>
      <CodeBox>INPUT CODE HERE</CodeBox>
      <Link to="/selection/">
        <Button>NEXT</Button>
      </Link>
    </Container>
  </Layout>
)

export default IndexPage
