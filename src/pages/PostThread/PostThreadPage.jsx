import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from "../Home/HomePage.styled";
import { PageHeader } from "../../styles/PageHeader";
import NavBar from "../../components/NavBar/NavBar";
import PostBrowsing from "../../components/PostCards/PostBrowsing";
import { Container } from "../../styles/Container";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
import PostFullView from "./PostFullView";
import ReplyBrowsing from "./ReplyBrowsing";
import ReplyBrowsingFirstLevel from "./ReplyBrowsingFirstLevel";
import ReplyPersonalView from "./ReplyPersonalView";
import profilePicture from '../../assets/placeholder-profile-pic.png'
import { ReplyContainer, ReplyLevel, ReplyLine } from "./ReplyBrowsing.styled";

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

function PostThreadPage() {
    const [status, setStatus] =  useState('Recent')

    return (  
        <Container>
            <NavBar />  
            <HomePageContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <PageHeader></PageHeader>
                        <Dropdown setStatus={setStatus}/>
                    </HeaderContainer>
                    <Feed>
                        <PostFullView user={user1}/>
                            <ReplyBrowsingFirstLevel user={user2}/>
                            <ReplyBrowsingFirstLevel user={user2}/>
                                <ReplyLevel>
                                    <ReplyPersonalView user={user2}/>
                                </ReplyLevel>
                                <ReplyLevel> 
                                    <ReplyBrowsing user={user2}/>
                                </ReplyLevel>
                            <ReplyBrowsingFirstLevel user={user2}/>
                        {/* <PostBrowsing />
                        <PostBrowsing /> */}
                    </Feed>
                </ContentContainer>
            </HomePageContainer>
        </Container>
    )
}

export default PostThreadPage;