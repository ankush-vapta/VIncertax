import React, { useState } from 'react'
import { Workspace } from './Workspace'
import { AboutUs } from '../workspacehome/pages/AboutUs'
import { OurAim } from '../workspacehome/pages/AboutUs'

const Dashboard = () => {

    let arr = { AboutUs, OurAim }
    const [alignment, setAlignment] = useState("OurAim")

    const updateFunction = () => {
        setAlignment("AboutUs")
    }


    let RenderComponent = arr[alignment]
    console.log(RenderComponent, "render");
    return (
        <div style={{ display: "flex" }}>
            <Workspace />
            {/* <RenderComponent /> */}
        </div>
    )
}

export default Dashboard