import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export const PostContainer = styled(Link)`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-black);
    border-radius: 10px;
    width: 100%;
    height: auto;
    color: var(--white);
    padding: 30px 0;
    box-shadow: 0 10px 20px var(--shadow);
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover{
        transform: translateY(-4px);
        color: var(--black);
    }
`

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
    cursor: pointer;
`

export const PostMatrix = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const PostInformationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PostUserInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--grey);
`

export const PostReaction = styled.div`
    font-size: 30px;
`

export const UserProfilePicture = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
`

export const UserName = styled.div`

`

export const TimePosted = styled.div`
    font-size: 12px;
`

export const PostMainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PostTitle = styled.div`
    font-size: 30px;
    color: white;
`

export const PostDescription = styled.div`
    font-size: 15px;
    line-height: 20px;
    color: var(--grey);
`

export const TopicsContainer = styled.div`
    display: flex;
`

export const TopicOutline = styled.div`
    border-radius: 50px;
    background-color: var(--blue-low);
    height: 30px;
`

export const PostTopic = styled.div`
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: var(--light-blue);
`

export const PostAnalytics = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    color: var(--tan);
    z-index: 1;
`

export const AnalyticIcon = styled(FontAwesomeIcon)`

`

export const Analytic = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--grey);
`


