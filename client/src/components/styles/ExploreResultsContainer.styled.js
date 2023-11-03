import styled from "styled-components"
import { Card } from "react-bootstrap";


export const ExploreResultsContainer = styled.div`
    width: 80vw;
    height: 100vh;  
    margin-left: 20vw;
    background-color: var(--black);
`

export const CustomCard = styled(Card)`
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 5vh;
    background-color: black;
`

export const CustomCardBody = styled(Card.Body)`

    p {
        color: white;
    }
    .img-span {
        display: inline-block;
    }

    .username {
        display:inline-block;
        padding-left: 1vw;
        padding-right: 2vw;
    }

    .topic {
        display: inline-block;
        border: 2px solid;
        color: green;
        border-radius: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .profileImg {
        height: 10px;
        width: 10px;
    }

    #generalPic {
        padding-left: 15vw;
    }

`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10vw;
    padding-right: 10vw;
    gap: 40px;
    padding-top: 10vh;
`

export const CustomCardText = styled(Card.Text)`
    padding-top: 2vw;
    padding-bottom: 2vw;
    background-color: black;
`

export const InteractButtons = styled.div`
    color: white;
    padding-top: 10px;
    

`