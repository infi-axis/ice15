import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Boon = props => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "boon.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                    }
                }
            }
        }
    `)

    return <Img fluid={data.file.childImageSharp.fluid} {...props} />
}

export default Boon
