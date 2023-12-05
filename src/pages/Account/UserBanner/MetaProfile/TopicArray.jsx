import React from "react";
import styled from "styled-components"


const TopicArrayContainer = styled.div`
    display: flex;
    padding: 10px 10px 10px 0px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`

const TopicChipContainer = styled.div`
    display: flex;
    padding: 4px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    background: #314B7E;
`

const H4Style = styled.p`
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #8CAFF4;
    align-self: stretch;
    background: #314B7E;
`


function TopicChip({topicName}){
    return ( 
        <TopicChipContainer>
            <H4Style>{topicName}</H4Style>
        </TopicChipContainer>
    )
}


function TopicArray({interests}){
    return ( 
        <TopicArrayContainer>
            {
            interests.map((it, i) => (
                    <TopicChip key = {i} topicName={it}/>
            ))
            }
        </TopicArrayContainer>
    )
}

export default TopicArray;