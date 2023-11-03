import styled from "styled-components"
import { Form, FormLabel } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Modal } from "react-bootstrap";

export const CreateAccountContainer = styled.div`
    width: 100vw;
    height: 100vh;  
    background-color: var(--black);
`

export const TitleText = styled.div`
    color: white;
    text-align: center;
    padding-top: 15vh;
`

export const InputFields = styled.div`
    color: white;
    padding-left: 45vw;
    margin-top: 5vh;
`

export const FormContainer = styled.div`
    padding-left: 2vw;
    padding-right: 2vw;
    margin-left: 30vw;
    margin-right: 30vw;
    padding-bottom: 5vh;
    border: 1px solid var(--black);
    border-radius: 10px;
    box-shadow: 1px 0 15px 2px var(--shadow);
`

export const CustomForm = styled(Form)`

    padding-top: 3vh;

    label {
        color: white;
    }

    p {
        color: white;
    }

    .spanLabel {
        display: inline-block;
        padding-left: 10px;
        cursor: pointer;
    }

    .spanCheckbox {
        display: inline-block;
    }


`

export const CustomFormControl = styled(Form.Control)`
    border-radius: 20px;
    background-color: var(--light-black);
    border: 0px;
    
    &::placeholder {
        color: var(--grey);
    }
`

export const CustomModal = styled(Modal)`
    .modal-content {
        background-color: var(--light-black);
        color: var(--white);
    }
    
`

export const H1 = styled.h1`
    text-align: center;
    padding-top: 10vh;
    padding-bottom: 5vh;
    color: white;
`

export const CustomButton = styled(Button)`
    margin-top: 5vw;
    margin-left: 13vw;
    width: 10vw;
    border-radius: 20px;
    background-color: var(--blue);
    border: 0px;
`

export const IconContainer = styled(ArrowBackIosNewIcon)`
    color: white;
    margin-left: -10vw;
    margin-top: 1vh;
    position: absolute;
    
`
