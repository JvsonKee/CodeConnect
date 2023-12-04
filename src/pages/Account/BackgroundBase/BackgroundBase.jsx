import React from "react";
import styled from "styled-components"
import BackgroundGutter from "./BackgroundGutter";
import MiddleSurface from "./MiddleSurface/MiddleSurface";

const BackgroundBaseStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
    background: #161314;
`

function BackgroundBase({posts}){
    return (  
        <BackgroundBaseStyle>
            <BackgroundGutter/>
            <MiddleSurface posts={posts}/>
            <BackgroundGutter/>

        </BackgroundBaseStyle>
    )
}

export default BackgroundBase;