import React from "react";
import styled from "styled-components"
import NoPostDialogue from "./NoPosts/NoPostsDialogue";
import PostBrowsing from "../../../../components/PostCards/PostBrowsing";

const MiddleSurfaceStyle = styled.div`
    display: flex;
    padding: 16px 18px 16px 18px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch;
    background: #2a2d37;
`

const HeaderStyle  = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    align-self: stretch;
`


function PostsHeader(){
    return (  
        <HeaderStyle>Posts</HeaderStyle>
    )
}


function MiddleSurface({posts}){
    return (  
        <MiddleSurfaceStyle>
            <PostsHeader/>
            {posts.length > 0 ? (
                posts.map((it, i) => (
                    <PostBrowsing key = {i} information={it}/>
                ))
            ) : (
                <NoPostDialogue/>
            )}
        </MiddleSurfaceStyle>
    )
}

export default MiddleSurface;
