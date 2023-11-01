import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ExplorePageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 20vw;
    width: 80vw;
    height: 100%;
    background-color: var(--black);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 5vh 0;
    width: 80%;
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
`

export const TopicsHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const FireIcon = styled(FontAwesomeIcon)`

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