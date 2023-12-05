import styled from "styled-components"
import { Link } from 'react-router-dom'

export const OpenMessageContainer = styled.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    height: 100vh;
    background-color: var(--black) ;
    
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
    border: 0.5px solid black;
    box-shadow: 0 10px 20px var(--shadow);
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
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
`
export const MessageHeaderContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: var(--black);
    padding: 0 10px;
    height: 13%;
    border-radius: 10px 10px 0 0;
    transition: 0.2s ease-in-out;

`
export const ChatBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-black);
    height: 77%;
    overflow-y: scroll;
`
export const TextBoxContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 10%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`
export const SendButton = styled.button`
    background-color: var(--blue); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--blue-low);
    }
    cursor: pointer;
`
export const TextBox = styled.textarea`
    color: white;
    border: 1px solid black;
    background-color: var(--black);
    width: 80%;   
`
export const ExitButton = styled(Link)`

    margin-left: 40.15vw;
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 20px;
    color: grey;
    &:hover{
        color: var(--white);
    }
`