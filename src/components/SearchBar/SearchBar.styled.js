import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchBarContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
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
    box-shadow: 0 5px 10px var(--shadow);

    &::placeholder {
        color: var(--grey);
    }
`

export const SearchIcon = styled(FontAwesomeIcon)`
    color: var(--white);
`

export const SearchButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--blue);
`

export const ArrowIcon = styled(FontAwesomeIcon)`
    font-size: 17px;
    color: var(--white);
`