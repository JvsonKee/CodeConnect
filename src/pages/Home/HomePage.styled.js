import styled from "styled-components"

export const HomePageContainer = styled.div`
    margin-left: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    background-color: var(--black);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: clamp(500px, 90%, 900px);
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 100%;
`