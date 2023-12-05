import styled from "styled-components"
import { Link } from 'react-router-dom'

export const MessageContainer = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    border-radius: 10px;
    width: 90%;
    height: 200px;
    box-shadow: 0 10px 20px var(--shadow);
    transition: 0.2s ease-in-out;
    &:hover{
        background-color: var(--shadow);
    }
    cursor: pointer;
`

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    height: 80%;
`

export const DMUserInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`

export const DMUserProfilePicture = styled.img`
    width: 60px;
    border-radius: 100px;
`

export const DMUserName = styled(Link)`
    font-size: 25px;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`
export const MessageMainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const MessageText = styled.div`
    font-size: 19px;
    color: var(--grey);
`