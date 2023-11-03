import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from "./styles/HomePage.styled";
import { PageHeader } from "./styles/PageHeader";
import NavBar from "./NavBar";
import { Container } from "./styles/Container";
import Dropdown from "./Dropdown";
import { useState } from "react";
import PostBrowsing from "./PostBrowsing";
import profilePicture1 from '../assets/placeholder-profile-pic.png'
import profilePicture2 from '../assets/profile2.jpg'


const user1 = {
    profilePicture: profilePicture1,
    userName: "JasonSucksAtCoding69",
    title: "Learning React",
    time: "19 minutes ago",
    description: "I need to learn React for a project for one of my courses, what are the best resources to learn from?",
    topic: "React",
    likes: "43",
    comments: "59"
}

const user2 = {
    profilePicture: profilePicture2,
    userName: "RealEyesRealizeRealLies",
    title: "Growtopia - My new game!",
    time: "1hr ago",
    description: "I've been developing a farming game, Growtopia, for the last 2 years. I am excited to finally announce a public beta. I would appreciate if you guys checked it out!",
    topic: "Game Development",
    likes: "203",
    comments: "122"
}


function HomePage() {
    const [status, setStatus] =  useState('Recent')

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