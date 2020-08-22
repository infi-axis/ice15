import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`
