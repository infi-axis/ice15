import { useLayoutEffect } from "react"
import { navigate } from "gatsby"

const NotFoundPage = () => {
    useLayoutEffect(() => {
        navigate("/")
    })

    return null
}

export default NotFoundPage
