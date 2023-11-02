import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchBarContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    gap: 20px;
    align-items: center;
    /* background-color: green; */
`

export const Search = styled.input`
    width: 75%;
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

export const SearchIcon = styled(FontAwesomeIcon)`
    color: white;
`

export const SearchButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--purple);
`

export const ArrowIcon = styled(FontAwesomeIcon)`
    font-size: 17px;
    color: var(--white);
`