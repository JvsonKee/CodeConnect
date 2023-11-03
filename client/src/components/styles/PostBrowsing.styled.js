import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const PostContainer = styled.div`  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--light-brown);
    border-radius: 10px;
    width: 100%;
    /* height: 300px;   */
    height: auto;
    color: var(--off-white);
    padding: 30px 0;
    box-shadow: 0 10px 20px var(--shadow);
`

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 90%;
    height: 80%;
`

export const PostMatrix = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const PostUserInformation = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--tan);
`

export const UserProfilePicture = styled.img`
    width: 60px;
    border-radius: 100px;
`

export const UserName = styled.div`

`

export const PostMainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PostTitle = styled.div`
    font-size: 30px;
`

export const PostDescription = styled.div`
    font-size: 15px;
    color: var(--tan);
`

export const TopicsContainer = styled.div`
    display: flex;
`

export const TopicOutline = styled.div`
    border-radius: 50px;
    background-color: var(--green-low);
    height: 30px;
`

export const PostTopic = styled.div`
    padding: 0 10px;
    font-size: 12px;
    line-height: 30px;
    color: var(--green);
`

export const PostAnalytics = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    color: var(--tan);
`

export const AnalyticIcon = styled(FontAwesomeIcon)`

`

export const Analytic = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`


