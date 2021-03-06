import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Patton = props => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "patton.jpg" }) {
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

export default Patton
