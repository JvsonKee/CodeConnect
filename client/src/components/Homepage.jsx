import { ContentContainer, HeaderContainer, HomePageContainer, Feed } from "./styles/HomePage.styled";
import { PageHeader } from "./styles/PageHeader";
import NavBar from "./NavBar";
import { Container } from "./styles/Container";
import Dropdown from "./Dropdown";
import { useState } from "react";
import PostBrowsing from "./PostBrowsing";

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
                        <PostBrowsing />
                    </Feed>
                </ContentContainer>
            </HomePageContainer>
        </Container>
    )
}

export default HomePage;