import {MessageHeaderContainer, OpenMessageContainer, ChatWrapper, ChatContainer, ChatBox, ContactsBar, TextBox, TextBoxContainer, SendButton, MessageBarHeaderContainer, ExitButton, ReplyIcon} from "./OpenedMessagePage2.styled"
import {UsersNameHeader, UserProfilePicture} from "../../../components/OpenedMessageHeader/OpenMessageHeader"
import NavBar from "../../../components/NavBar/NavBar"
import { AddButton } from "../../../components/NewDMButton/NewDMButton.styled";
import { MessageBarHeader } from "../../../components/ContactBar/MessageBarHeader";
import { Container } from "../../../styles/Container"
import MessageBox from "../MessageBox";
import MessageBar from "../../../components/ContactBar/messageBar"
import profilePic1 from "../../../assets/userPfp.png"
import profilePic2 from "../../../assets/userPfp2.png"
import profilePic3 from "../../../assets/userPfp3.png"
import profilePic from "../../../assets/MainUserPfp.png"
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Message from "../../../database/Message";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

// messages are created and stored locally here, not in database
const mainUser ={
    message: "Words words words words. Words words words.",
    userName: "PixelPioneer",
    profilePic: profilePic
}

const openedMessageList = []
const booMessage1 = new Message("Boo",profilePic2,"hey what is up! long time no talk");
openedMessageList.push(booMessage1);
const booMessage2 = new Message("Boo",profilePic2,"i wanted to let you know that I got through my big interview");
openedMessageList.push(booMessage2);
const booMessage3 = new Message("Boo",profilePic2,"haha i'm mainly reaching out about what to expect after. honestly, i think it went pretty okay");
openedMessageList.push(booMessage3);
const mainUserMessage1 = new Message("PixelPioneer",profilePic,"That's awesome! Congrats on finishing the interview cycle. When do you hear back?");
openedMessageList.push(mainUserMessage1);
const booMessage4 = new Message("Boo",profilePic2,"well it's been 2 weeks and i've heard nothing. should i follow up?");
openedMessageList.push(booMessage4);

// TODO: delete, redundant:
const user1 ={
    userName: "Kirby",
    profilePic: profilePic1
}
const user2 ={
    message: "HAHAHHAHAHAH.",
    userName: "Boo",
    profilePic: profilePic2
}
const user3 ={
    userName: "Sonic",
    profilePic: profilePic3
}

function OpenedMessage2() {
    const [rerenderDM, setRerenderDM] = useState(false);
    const [formData, setFormData] = useState({
        content: ''
    });

    const navigate = useNavigate();

    // Define target URLs for each user
    const user1TargetUrl = '/CodeConnect/dm-boo';
    const user2TargetUrl = '/CodeConnect/dm-kirby';
    const user3TargetUrl = '/CodeConnect/dm-sonic';

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSendDM = () => {
        const {content} = formData;
        const messageToPost = new Message("PixelPioneer",profilePic,content);
        openedMessageList.push(messageToPost);
        // hack: flipflop this state to rerender the page
        setRerenderDM(!rerenderDM);
        setFormData({
            ...formData,
            content: ''
        });
    }
    const openProfile = () => {
        let postURL = '/CodeConnect/profile/Boo'
        navigate(postURL);
    }

    return (
        <Container>
            <NavBar />
            <OpenMessageContainer>
                <ChatWrapper>
                    <ChatContainer>
                        <MessageHeaderContainer>
                            <UserProfilePicture src={profilePic2}></UserProfilePicture>
                            <UsersNameHeader onClick={openProfile}>Boo</UsersNameHeader>
                            <ExitButton to='/CodeConnect/direct-messages'>X</ExitButton>
                        </MessageHeaderContainer>
                        <ChatBox>
                            {openedMessageList.map((message, i) => (
                                <MessageBox key={i} message={message}/>
                            ))}
                        </ChatBox>
                        <TextBoxContainer>
                            <div style={{ width: '90%' }}>
                                <Form>
                                    <Row>
                                        <Col xs={11}>
                                            <Form.Group>
                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                cols={20}
                                                id="content"
                                                name="content"
                                                value={formData.content}
                                                onChange={handleChange}
                                                placeholder="message..."
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={1}>
                                            <Button className="SendButton" onClick={onSendDM}>
                                                Send <ReplyIcon icon={faArrowRight} size = "xl"/>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </TextBoxContainer>
                    </ChatContainer>
                </ChatWrapper>
                <ContactsBar>
                    <MessageBarHeaderContainer>
                        <MessageBarHeader>Messages</MessageBarHeader>
                    </MessageBarHeaderContainer>
                    <MessageBar user={user2} url={user1TargetUrl}/>
                    <MessageBar user={user1} url={user2TargetUrl}/>
                    <MessageBar user={user3} url={user3TargetUrl}/>
                </ContactsBar>
                <AddButton to="/CodeConnect/new-direct-message">New +</AddButton>
            </OpenMessageContainer>
        </Container>
    )
    
}

export default OpenedMessage2;