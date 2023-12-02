import styled from "styled-components"

export const MessageBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border: 1px solid black;
    height: 150px;
    transition: 0.1s ease-in-out;
    &:hover{
        background-color: grey;
    }
`
export const MessageBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    height: 80%;
`
export const UserInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`
export const UserProfilePicture = styled.img`
    width: 60px;
    border-radius: 100px;
`
export const UserName = styled.div`
    font-size: 25px;
    color: var(--white);
`
export const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const MessageText = styled.div`
    font-size: 23px;
    color: var(--white);
`