import { Container } from "./styles/Container";
import NavBar from "./NavBar";
import {NewDMPageContainer, NewDMWrapper, NewDMContainer, ContactsBar, ContactsBarHeaderContainer, SearchContainer, MessageBoxContainer, SearchButton, SearchBox, BottomContainer, SendButton, MessageBox, HeaderContainer} from "./styles/NewDMPage.styled"
import MessageBar from "../../components/MessageBar"
import { NewDMHeader } from "./styles/NewDMHeader";
import { MessageBarHeader } from "../../components/styles/MessageBarHeader";
import profilePic1 from "../assets/userPfp.png"
import profilePic2 from "../assets/userPfp2.png"
import profilePic3 from "../assets/userPfp3.png"

const user1 ={
    message: "Words words words words. Words words words.",
    userName: "Kirby",
    profilePic: profilePic1
}
const user2 ={
    userName: "Boo",
    profilePic: profilePic2
}

const user3 ={
    userName: "Sonic",
    profilePic: profilePic3

}
const user4 ={
    userName: "Bob",
    profilePic: profilePic2
}

const user5 ={
    userName: "Sam",
    profilePic: profilePic3

}

const user6 ={
    userName: "Toad",
    profilePic: profilePic3

}

function NewDMPage() {
    return(
        <Container>
            <NavBar />
            <NewDMPageContainer>
                <NewDMWrapper>
                    <NewDMContainer>
                        <HeaderContainer>
                            <NewDMHeader>New Direct Message</NewDMHeader>
                        </HeaderContainer>
                        <SearchContainer>
                            <SearchBox rows="2" cols="30"></SearchBox>
                            <SearchButton>Search</SearchButton>
                        </SearchContainer>
                        <MessageBoxContainer>
                            <MessageBox rows="2" cols="30"></MessageBox>
                        </MessageBoxContainer>
                        <BottomContainer>
                            <SendButton>Send</SendButton>
                        </BottomContainer>
                    </NewDMContainer>
                </NewDMWrapper>
                    <ContactsBar>
                        <ContactsBarHeaderContainer>
                            <MessageBarHeader>Messages</MessageBarHeader>
                        </ContactsBarHeaderContainer>
                        <MessageBar user={user1}/>
                        <MessageBar user={user3}/>
                        <MessageBar user={user2}/>
                    </ContactsBar>
            </NewDMPageContainer>
        </Container>

    )

}

export default NewDMPage