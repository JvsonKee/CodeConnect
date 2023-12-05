import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    width: clamp(500px, 100%, 1000px);
    display: flex;
    gap: 20px;
    align-items: center;
`

export const Search = styled.input`
    width: 100%;
    height: 70px;
    border-radius: 50px; 
    border: 0px;
    outline: none;
    font-size: 20px;
    padding: 0 30px;
    background-color: var(--light-black);
    color: var(--white);
    box-shadow: 0 5px 10px var(--shadow);
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(3px);
    }

    &::placeholder {
        color: var(--grey);
    }
`

export const SearchIcon = styled(FontAwesomeIcon)`
    color: var(--white);
`

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0px;
    background-color: var(--blue);
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(3px);
    }
`

export const ArrowIcon = styled(FontAwesomeIcon)`
    font-size: 17px;
    color: var(--white);
`