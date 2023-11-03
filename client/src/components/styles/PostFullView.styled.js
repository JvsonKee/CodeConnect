import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PinButton = styled.div`
    width: 60px;
    height: 60px;
    float: right;
    flex: 0;
    display: flex;
    align-items: center;
    padding: 23px;
    border-radius: 50%;
    background-color: grey;
    color: white;
`

export const PinIcon = styled(FontAwesomeIcon)`

`

export const PostUserInformationFullView = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`

export const UserProfilePictureFullView = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`

export const UserNameFullView = styled.div`
    flex: 1;
`