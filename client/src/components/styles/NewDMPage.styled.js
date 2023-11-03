import styled from "styled-components"

export const NewDMPageContainer = styled.div`
    margin-left: 20vw;
    display: flex;
    width: 80vw;
    background-color: var(--black);
    height: 100vh;
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
    box-shadow: 0 10px 20px var(--shadow);
    //border: 1px solid black;
`
export const ContactsBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 17%;
    height: 100%;
    background-color: var(--black);
    box-shadow: 0 10px 20px var(--shadow);
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
    padding: 0 10px;
    height: 30%;
`
export const HeaderContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center; 
    padding: 0 10px;
    height: 27%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

`
export const MessageBoxContainer = styled.div`
    display: flex;
    align-items: center; 

    height: 77%;
    overflow-y: scroll;
    justify-content: center;
`
export const SearchButton = styled.button`
    background-color: var(--blue-low); 
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    &:hover{
        background-color: var(--light-blue);
    }
    cursor: pointer;
`
export const SearchBox = styled.textarea`
   width: 80%;   
   background-color: grey;
   color: white;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`
export const MessageBox = styled.textarea`
   width: 90%;   
   height: 80%;
   color: white;
   background-color: grey;
   border: 1px solid var(--light-black);
   background-color:var(--light-black);
`
export const BottomContainer = styled.div`
    display: flex;
    align-items: center; 
    height: 20%;
    justify-content: space-around;
    border-radius: 0 0 10px 10px;
`
export const SendButton = styled.button`
    background-color: var(--blue-low); 
    color: white;
    padding: 7px 15px;
    border: none;
    border-radius: 50px;
    align-items: center; 
    &:hover{
        background-color: var(--light-blue);
    }
    cursor: pointer;
`