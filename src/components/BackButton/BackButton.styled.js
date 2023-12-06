import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const BackbuttonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0px;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(-3px);
        background-color: var(--blue);
        cursor: pointer;
    }
`

export const ArrowLeft = styled(FontAwesomeIcon)`
    color: white;
`
