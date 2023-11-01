import styled from "styled-components"

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: green; */
`

export const Search = styled.input`
    width: 85%;
    height: 70px;
    border-radius: 50px; 
    border: 0px;
    outline: none;
    font-size: 20px;
    padding: 0 30px;
    background-color: var(--light-black);
    color: var(--white);

    &::placeholder {
        color: var(--grey);
    }
`

export const SearchButton = styled.button`
    width: 5%;
    height: 40px;
`