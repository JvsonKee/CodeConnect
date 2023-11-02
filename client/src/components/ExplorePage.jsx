import Dropdown from "./Dropdown"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import { Container } from "./styles/Container"
import { CheckboxContainer, CheckboxLabel, ContentContainer, ExplorePageContainer, FireIcon, TopicsCheckbox, TopicsContainer, TopicsHeaderContainer, TopicsSection } from "./styles/ExplorePage.styled"
import { useState } from "react"
import { PageHeader } from "./styles/PageHeader"
import TopicBubble from "./TopicBubble"
import { faFire } from "@fortawesome/free-solid-svg-icons"

function ExplorePage() {
    const [status, setStatus] =  useState('Recent')
    return (
        <Container>
            <NavBar />
            <ExplorePageContainer>
                <ContentContainer>
                    <SearchBar />
                    {/* <DropdownContainer>
                        <Dropdown setStatus={setStatus}/>
                    </DropdownContainer> */}
                    <TopicsSection>
                        <TopicsHeaderContainer>
                            <PageHeader>
                                <div> <FireIcon icon={faFire}/> Trending Topics</div>
                            </PageHeader>
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
                    </TopicsSection>
                </ContentContainer>
            </ExplorePageContainer>
        </Container>
    )
}

export default ExplorePage