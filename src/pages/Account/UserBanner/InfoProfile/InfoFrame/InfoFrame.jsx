import React from "react";
import styled from "styled-components"
import H1 from "../../../typography/h1";
import H6 from "../../../typography/h6";
import SocialLink from "./SocialLink";


const InfoFrameContainer = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`

function InfoFrame({username, biography, socialLinks}){
    return (  
        <InfoFrameContainer>
            <H1>{username}</H1>
            <H6>{biography}</H6>
            {
                socialLinks.map((it, i) => (
                    <SocialLink key={i} network={it.getSocialMedia()} username={it.getUsername()}/>
                ))
            }
        </InfoFrameContainer>
    )
}

export default InfoFrame;