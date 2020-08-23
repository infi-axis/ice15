import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Poraor = props => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "poraor.jpg" }) {
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

export default Poraor
