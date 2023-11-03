import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ReplyContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5% 95%;
`
export const ReplyLine = styled.div`
    width: 100%;
    height: 50%;
    background-color: none;
    border-left: 5px solid;
    border-bottom: 5px solid;
    border-color: grey;
`
export const ReplyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--light-black);
    border-radius: 0px 10px 10px 0px;
    width: 100%;
    border-left: 5px solid;
    border-color: grey;
    padding: 30px 30px;
    margin: 1.5% 0 0 0;
`

export const ReplyLevel = styled.div`
    margin-left: 5%;
`

export const ReplyForm = styled.div`
    background-color: var(--light-black) !important;
    border-radius: 10px;
    gap: 20px;
`

export const CustomAccordion = styled.div`
    border-radius: 10px;
`;

export const CustomAccordionItem = styled.div`
    color: white;
    border-radius: 10px;
    gap: 20px;
`;

export const CustomAccordionButton = styled.button`

`;

export const CustomAccordionContent = styled.div`
`;

export const ReplyIcon = styled(FontAwesomeIcon)`
    color: var(--white);
`

export const ReplyButton = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    text-align: center;
    padding: 7px;
    height: 40px;
    width: 100px;
`
