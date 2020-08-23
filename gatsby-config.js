module.exports = {
    siteMetadata: {
        title: `ICE15 | Head Election`,
        description: `Head selection webapp for ICE 15 students `,
        author: `@winnaries @bosswt @wasurocks`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ICE15 Election Webapp`,
                short_name: `Election`,
                start_url: `/`,
                icon: "src/images/politician.png",
            },
        },
        {
            resolve: "gatsby-plugin-firebase",
            options: {
                credentials: {
                    apiKey: "",
                    authDomain: "",
                    databaseURL: "",
                    projectId: "ice15-e33ad",
                    storageBucket: "ice15-e33ad.appspot.com",
                    messagingSenderId: "531109842552",
                    appId: "1:531109842552:web:1f213bac7c60dfb244278d",
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-styled-components`,
    ],
}
