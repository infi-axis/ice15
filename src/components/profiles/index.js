import React from "react"

import Boon from "./boon"
import Chaba from "./chaba"
import Guide from "./guide"
import Looknam from "./looknam"
import Patton from "./patton"
import Poraor from "./poraor"
import Punn from "./punn"

const dictionaries = {
    Boon,
    Chaba,
    Guide,
    Looknam,
    Patton,
    Poraor,
    Punn,
}

const Profiles = ({ name, ...props }) => {
    const CandidateImage = dictionaries[name]
    return <CandidateImage {...props} />
}

export default Profiles
