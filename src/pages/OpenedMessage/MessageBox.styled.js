import styled from "styled-components"

export const MessageBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border: 5px solid var(--black);
    height: 150px;
    transition: 0.1s ease-in-out;
`
export const MessageBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    gap: 10px;
    width: 90%;
    height: 150px;
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
    font-size: 22px;
    color: var(--white);
`
export const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const MessageText = styled.div`
    font-size: 17px;
    color: var(--white);
`