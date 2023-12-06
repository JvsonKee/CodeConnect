import {MessageHeaderContainer, OpenMessageContainer, ChatWrapper, ChatContainer, ChatBox, ContactsBar, TextBoxContainer, MessageBarHeaderContainer, ExitButton, ReplyIcon, ReplyButton, SendButton} from "./OpenedMessage.styled"
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
const kirbyMessage1 = new Message("Kirby",profilePic1,"Hey, just finished my embedded project using Arduino. It's a temperature monitoring system. Excited to share!");
openedMessageList.push(kirbyMessage1);
const mainUserMessage1 = new Message("PixelPioneer",profilePic,"That sounds interesting! What sensors did you use for the temperature monitoring, and how did you implement it?");
openedMessageList.push(mainUserMessage1);
const kirbyMessage2 = new Message("Kirby",profilePic1,"I used a DS18B20 temperature sensor. The Arduino reads the data and displays it on an OLED screen.");
openedMessageList.push(kirbyMessage2);
const kirbyMessage3 = new Message("Kirby",profilePic1,"I'm facing some power consumption issues, though. Any advice on optimizing power usage in embedded projects?");
openedMessageList.push(kirbyMessage3);
const mainUserMessage2 = new Message("PixelPioneer",profilePic,"Absolutely. For power optimization, consider putting the Arduino to sleep between readings and using low-power components. Also, explore different sleep modes.");
openedMessageList.push(mainUserMessage2);
const kirbyMessage4 = new Message("Kirby",profilePic1,"Thanks! I'll experiment with sleep modes. Have you worked on any embedded projects recently?");
openedMessageList.push(kirbyMessage4);

// TODO: delete, redundant:
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

function OpenedMessagePage() {
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
        let postURL = '/CodeConnect/profile/Kirby'
        navigate(postURL);
    }

    return (
        <Container>
            <NavBar />
            <OpenMessageContainer>
                <ChatWrapper>
                    <ChatContainer>
                        <MessageHeaderContainer>
                            <UserProfilePicture src={profilePic1}></UserProfilePicture>
                            <UsersNameHeader onClick={openProfile} >Kirby</UsersNameHeader>
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

export default OpenedMessagePage;