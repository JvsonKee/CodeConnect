import React from "react";
import styled from "styled-components"
import TopicBubble from "../../../../components/TopicBubble/TopicBubble";


const TopicArrayContainer = styled.div`
    display: flex;
    padding: 10px 10px 10px 0px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

function TopicArray({interests}){
    return ( 
        <TopicArrayContainer>
            {
            interests.map((it, i) => (
                    <TopicBubble topicName={it}/>
            ))
            }
        
        </TopicArrayContainer>
    )
}

export default TopicArray;