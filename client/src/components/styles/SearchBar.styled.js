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
    background-color: var(--light-brown);
    color: var(--off-white);
    box-shadow: 0 10px 10px var(--shadow);

    &::placeholder {
        color: var(--tan);
    }
`

export const SearchIcon = styled(FontAwesomeIcon)`
    color: var(--off-white);
`

export const SearchButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--green);
`

export const ArrowIcon = styled(FontAwesomeIcon)`
    font-size: 17px;
    color: var(--off-white);
`