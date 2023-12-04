import React from "react";
import styled from "styled-components"

const BackgroundBaseStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    background-color: #2B2D37;
    flex-direction: column;
`

function BackgroundBase({posts}){
    return (  
        <BackgroundBaseStyle>

        </BackgroundBaseStyle>
    )
}

export default BackgroundBase;