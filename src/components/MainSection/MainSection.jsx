import React, { useState } from "react"
import './MainSection.css'

function MainSection({
    id,
    click,
}) {
    

    return(
        <>
        
        <div className={click ? 'mainsection-hide' : 'mainsection-main'}>
            <h1>Building Name: {id}</h1>
            <h2>Main Section Content</h2>
        </div>
        </>
    );
}

export default MainSection;