import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const PostCountContent = styled.div`
    color: var(--grey);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 5vh 0;
    width: 80%;
`

export const Matrix = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const BackButton = styled(Link)`
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
        transform: translateX(-3px);
    }
`

export const ArrowLeft = styled(FontAwesomeIcon)`
    color: white;
`

export const SearchContainer = styled.div`
    width: 98%;
`