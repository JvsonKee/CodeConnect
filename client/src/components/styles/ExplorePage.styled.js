import styled from "styled-components"

export const ExplorePageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20vw;
    width: 80vw;
    background-color: var(--black);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    gap: 40px;
    width: 80%;
`

export const TopicsHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--white);
`

export const CheckboxLabel = styled.div`

`

export const TopicsCheckbox = styled.input`

`

export const TopicsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 2%;
    width: 100%;
`