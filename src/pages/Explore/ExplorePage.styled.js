import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ExplorePageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20vw;
    /* width: clamp(500px, 90%, 900px); */
    width: 80vw;
    background-color: var(--black);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    /* padding: 5vh 0; */
    width: clamp(500px, 90% 900px);
    height: 80%;
`

export const DropdownContainer = styled.div`
    width: 88%;
    display: flex;
    justify-content: flex-end;
`

export const TopicsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 80%;
`

export const TopicsHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
`

export const SelectContainer = styled.div`
    display: flex;
    gap: 10px;
    
    div {
        color: var(--grey);
    }
`

export const CheckBox = styled.input`

`

export const FireIcon = styled(FontAwesomeIcon)`

`

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 5%;
`

export const Carousel = styled.div`
    display: flex;
    margin: 0 auto;
    overflow-x: auto;
    width: 950px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
`

export const CarouselSlide = styled.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: var(--white);
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
`

export const CarouselImage = styled.img`
    flex: 3;
    max-width: 950px;
    scroll-snap-align: start;
    filter: brightness(50%);
    border-radius: 10px;
`

export const CarouselLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    font-weight: 600;
    width: 100%;
    height: 100%;
`

export const CarouselNav = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;

    a {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--white);
        opacity: 0.75;
        transition: opacity ease 250ms;

        &:hover {
            opacity: 100%;
        }
    }
`

export const TopicsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 950px;
    margin: 0 auto;
    padding-bottom: 10%;
`