import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from "./styles/HomePage.styled";
import { PageHeader } from "./styles/PageHeader";
import NavBar from "./NavBar";
import { Container } from "./styles/Container";
import Dropdown from "./Dropdown";
import { useState } from "react";
import PostBrowsing from "./PostBrowsing";
import profilePicture from '../assets/placeholder-profile-pic.png'

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


function HomePage() {
    const [status, setStatus] =  useState('Recents')

    return (  
        <Container>
            <NavBar />  
            <HomePageContainer>
                <ContentContainer>
                    <HeaderContainer>
                        <PageHeader>Home</PageHeader>
                        <Dropdown setStatus={setStatus}/>
                    </HeaderContainer>
                    <Feed>
                        <PostBrowsing user={user1}/>
                        <PostBrowsing user={user2}/>
                        {/* <PostBrowsing />
                        <PostBrowsing /> */}
                    </Feed>
                </ContentContainer>
            </HomePageContainer>
        </Container>
    )
}

export default HomePage;