import React from "react"
import { GlobalStyle } from "../theme/globalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
