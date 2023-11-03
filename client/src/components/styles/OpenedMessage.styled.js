import styled from "styled-components"

export const OpenMessageContainer = styled.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: #A7A7A7;
    
`
export const ChatWrapper = styled.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 95%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`
export const MessageBarHeaderContainer =styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
` 
export const ContactsBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`
export const MessageHeaderContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: black;
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: #1B1B1B;
    }
    cursor: pointer;
`
export const ChatBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    height: 77%;
    overflow-y: scroll;
`
export const TextBoxContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`
export const SendButton = styled.button`
    background-color: #007bff; 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: blue;
    }
    cursor: pointer;
`
export const TextBox = styled.textarea`
   width: 80%;   
`
