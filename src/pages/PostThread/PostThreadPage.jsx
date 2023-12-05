import React from 'react';
import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from "../Home/HomePage.styled";
import { PageHeader } from "../../styles/PageHeader";
import NavBar from "../../components/NavBar/NavBar";
import PostBrowsing from "../../components/PostCards/PostBrowsing";
import { Container } from "../../styles/Container";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PostFullView from "./PostFullView";
import ReplyBrowsing from "./ReplyBrowsing";
import ReplyBrowsingFirstLevel from "./ReplyBrowsingFirstLevel";
import ReplyBrowsingLastLevel from "./ReplyBrowsingLastLevel";
import ReplyPersonalView from "./ReplyPersonalView";
import profilePicture from '../../assets/placeholder-profile-pic.png'
import { ReplyFeed, ReplyLevel } from "./ReplyBrowsing.styled";
import { postDatabase } from '../../database/db';
import BackButton from '../../components/BackButton/BackButton';

const user1 = {
    profilePicture: profilePicture,
    userName: "Placeholder-Username",
    topic: "Web Development",
    title: "Title",
    description: "This is a description with lots of information about nothing",
    likes: "123",
    comments: "50"
}

const user2 = {
    profilePicture: profilePicture,
    userName: "Other-Placeholder-Username",
    topic: "React",
    title: "Title",
    description: "This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing This is a description with lots of information about nothing ",
    likes: "123",
    comments: "50"
}

function PostThreadPage( ) {
    const [status, setStatus] =  useState('Recent')
    const { id } = useParams();
    const post = postDatabase[id];
    const comments = post.getPostInformation().comments;
    console.log(comments);
    
    return (  
        <Container>
            <NavBar />  
            <HomePageContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <PageHeader></PageHeader>
                        <BackButton></BackButton>
                        <Dropdown setStatus={setStatus}/>
                    </HeaderContainer>
                    <ReplyFeed>
                        <PostFullView/>
                        {
                            comments.map((replyLevel1, i) => (
                                <React.Fragment key={i}>
                                <ReplyBrowsingFirstLevel user={replyLevel1} />

                                {replyLevel1.comments && replyLevel1.comments.length > 0 && (
                                    <div>    
                                    
                                    {/* Level 2 nested comments */}
                                    {replyLevel1.comments.map((replyLevel2, j) => (
                                        <React.Fragment key={j}>
                                        <ReplyBrowsing user={replyLevel2} />
                                        
                                        {/* Level 3 nested comments */}
                                        {replyLevel2.comments && replyLevel2.comments.length > 0 && (
                                            <ReplyLevel> 
                                            {replyLevel2.comments.map((replyLevel3, k) => (
                                                <ReplyBrowsingLastLevel key={k} user={replyLevel3} />
                                            ))}
                                            </ReplyLevel>
                                        )}
                                        </React.Fragment>
                                    ))}

                                    </div>
                                )}
                                </React.Fragment>
                            ))
                        }
                    </ReplyFeed>
                </ContentContainer>
            </HomePageContainer>
        </Container>
    )
}

export default PostThreadPage;