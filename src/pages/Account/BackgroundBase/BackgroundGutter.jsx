import React from "react";
import styled from "styled-components"

const BackgroundGutterStyle = styled.div`
    width: 100px;
    align-self: stretch;
    background: #2B2D37;
`

function BackgroundGutter(){
    return (  
        <BackgroundGutterStyle/>
    )
}

export default BackgroundGutter;