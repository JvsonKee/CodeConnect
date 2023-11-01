import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DropdownContainer = styled.div`
    padding-top: 11px;
    width: 120px;
    position: relative;
`

export const Select = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 10px;
    padding: 5px 0;
    color: var(--grey);
    border-radius: 50px;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
       color: var(--white);
        background-color: var(--light-black);
    }
`

export const Selected = styled.span`
    font-size: 16px;
`

export const Caret = styled(FontAwesomeIcon)`
    font-size: 15px;
    transition: 0.4s;

    &:hover {
        color: var(--purple);
    }

    &.active {
        transform: rotate(180deg);
    }
`

export const Menu = styled.div`
    background-color: var(--light-black); 
    position: absolute;
    opacity: 0;
    display: none;
    transition: 0.2s;
    z-index: 1;
    width: 120px;
    height: 100px;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;

    div {
        width: 100px;
        font-size: 14px;
        color: var(--grey);

        &:hover {
            color: var(--white);
        }
    }

    &.active {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        opacity: 1;
    }
`

