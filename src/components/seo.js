import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    return (
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                {
                    name: "description",
                    content: data.site.siteMetadata.description,
                },
            ]}
        >
            {children}
        </Helmet>
    )
}

export default SEO
