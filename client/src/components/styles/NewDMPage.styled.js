import styled from "styled-components"

export const NewDMPageContainer = styled.div`
    display: flex;
    width: 80vw;
    background-color: #1B1B1B;
    
`
export const NewDMWrapper = styled.div`
    display: flex;
    width: 83%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
`
export const NewDMContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    background-color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    border: 1px solid black;
`
export const ContactsBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`
export const ContactsBarHeaderContainer =styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center; 
    height: 8%;
`
export const SearchContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: black;
    padding: 0 10px;
    height: 30%;
`
export const HeaderContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    background-color: #1B1B1B;
    padding: 0 10px;
    height: 17%;
    border-radius: 10px 10px 0 0;

`
export const MessageBoxContainer = styled.div`
    display: flex;
    align-items: center; 

    height: 77%;
    overflow-y: scroll;
    justify-content: center;
`
export const SearchButton = styled.button`
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
export const SearchBox = styled.textarea`
   width: 80%;   
   background-color: grey;
`
export const MessageBox = styled.textarea`
   width: 90%;   
   height: 80%;
   background-color: grey;
`
export const BottomContainer = styled.div`
    display: flex;
    align-items: center; 
    background-color: #1B1B1B;
    height: 20%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`
export const SendButton = styled.button`
    background-color: grey; 
    color: white;
    padding: 7px 15px;
    border: none;
    border-radius: 5px;
    align-items: center; 
    &:hover{
        background-color: blue;
    }
    cursor: pointer;
`