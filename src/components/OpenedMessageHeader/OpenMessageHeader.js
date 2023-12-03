import styled from "styled-components"
import { Link } from 'react-router-dom'

export const UsersNameHeader = styled(Link)`
    font-size: 60px;
    font-weight: 500;
    color: var(--white);
    text-decoration: none;
    background-color: transparent; 

    &:hover {
        text-decoration: underline; 
        text-decoration-thickness: 2px;
    }
`
export const UserProfilePicture = styled.img`
    width: 60px;
    border-radius: 100px;
`