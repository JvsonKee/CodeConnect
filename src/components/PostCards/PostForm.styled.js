import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from "react-bootstrap";
export const UploadIcon = styled(FontAwesomeIcon)`

`

export const Upload = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 30%;
    left: 40%;
    height: 12px;
    width: 12px;
`

export const GeneratePostModal = styled(Modal)`
    .modal-content {
        background-color: var(--light-black);
        color: var(--white);
        border-bottom: 20px var(--blue);
    }
`
export const GeneratePostModalHeader = styled(Modal.Header)`
    .close {
        color: #ff0000 !important;
    }
`

export const CustomPostForm = styled.form`
    background-color: var(--blue);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    color: var(--white);
    width: 70%;
    
`;

export const CustomPostInputField = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid var(--grey);
    border-radius: 5px;
    align-items: center;
    color: var(--white);
    background-color: var(--black);
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
    font-size: 17px;
    color: var(--white);
`
