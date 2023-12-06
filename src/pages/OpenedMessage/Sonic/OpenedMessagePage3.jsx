import {MessageHeaderContainer, OpenMessageContainer, ChatWrapper, ChatContainer, ChatBox, ContactsBar, TextBox, TextBoxContainer, SendButton, MessageBarHeaderContainer, ExitButton, ReplyIcon} from "./OpenedMessagePage3.styled"
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

const mainUser ={
    message: "Words words words words. Words words words.",
    userName: "PixelPioneer",
    profilePic: profilePic
}

const openedMessageList = []
const sonicMessage1 = new Message("Sonic",profilePic3,"ya that project was wild! I'm happy I can talk about it during my internship hunt");
openedMessageList.push(sonicMessage1);
const mainUserMessage1 = new Message("PixelPioneer",profilePic,"Haha, absolutely! A lot of learning comes from struggling through projects. Let me know if you want tips on how to best showcase your hardwork!");
openedMessageList.push(mainUserMessage1);
const sonicMessage2 = new Message("Sonic",profilePic3,"actally that would be kinda awesome ^^");
openedMessageList.push(sonicMessage2);
const mainUserMessage2 = new Message("PixelPioneer",profilePic,"Oh cool! Well.. First, I would start with highlighting your skills on a cover letter. You can really convey a story there.");
openedMessageList.push(mainUserMessage2);
const sonicMessage3 = new Message("Sonic",profilePic3,"Ah no wayyyyy? I thought cover letters were obsolete");
openedMessageList.push(sonicMessage3);

// TODO: delete, redundant:
const user1 ={
    userName: "Kirby",
    profilePic: profilePic1
}
const user2 ={
    userName: "Boo",
    profilePic: profilePic2
}

const user3 ={
    message: "Gotta go fast bro",
    userName: "Sonic",
    profilePic: profilePic3
}

function OpenedMessage3() {
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
    return (
        <Container>
            <NavBar />
            <OpenMessageContainer>
                <ChatWrapper>
                    <ChatContainer>
                        <MessageHeaderContainer>
                            <UserProfilePicture src={profilePic3}></UserProfilePicture>
                            <UsersNameHeader>Sonic</UsersNameHeader>
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

export default OpenedMessage3;