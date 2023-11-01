import Dropdown from "./Dropdown"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import { Container } from "./styles/Container"
import { CheckboxContainer, CheckboxLabel, ContentContainer, ExplorePageContainer, TopicsCheckbox, TopicsContainer, TopicsHeaderContainer } from "./styles/ExplorePage.styled"
import { useState } from "react";
import { PageHeader } from "./styles/PageHeader"
import TopicBubble from "./TopicBubble"

function ExplorePage() {
    const [status, setStatus] =  useState('Recents')
    return (
        <Container>
            <NavBar />
            <ExplorePageContainer>
                <ContentContainer>
                    <SearchBar />
                    <Dropdown setStatus={setStatus}/>
                    <TopicsHeaderContainer>
                        <PageHeader>Topics</PageHeader>
                        <CheckboxContainer>
                            <CheckboxLabel>Select</CheckboxLabel>
                            <TopicsCheckbox type="checkbox" id="topics-checkbox"/>
                        </CheckboxContainer>
                    </TopicsHeaderContainer>
                    <TopicsContainer>
                        <TopicBubble topicName={"Web Development"}/>
                        <TopicBubble topicName={"React"}/>
                        <TopicBubble topicName={"Python"}/>
                        <TopicBubble topicName={"Dynamic Programming"}/>
                        <TopicBubble topicName={"JavaScript"}/>
                        <TopicBubble topicName={"Full-Stack Development"}/>
                    </TopicsContainer>
                </ContentContainer>
            </ExplorePageContainer>
        </Container>
    )
}

export default ExplorePage