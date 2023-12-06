import styled from "styled-components"
import { Form } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Container } from "../../styles/Container";
import { Link } from "react-router-dom";

export const CreateContainer = styled(Container)`
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const CreateAccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--black);
    width: 40%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-bottom: 5vh;
    border: 1px solid var(--black);
    background-color: var(--light-black);
    border-radius: 20px;
    box-shadow: 0px 10px 15px 2px var(--shadow);
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

    .spanLabel:hover {
        text-decoration: underline;
        text-decoration-color: var(--white);
    }

    .spanCheckbox {
        display: inline-block;
    }
`

export const TermHolder = styled.p`
    background-color: var(--light-black);
`

export const TermsTitle = styled.a`
    color: white;
    background-color: var(--light-black);
`

export const CustomFormControl = styled(Form.Control)`
    border-radius: 20px;
    background-color: var(--black);
    border: 0px;
    color: var(--white);

    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0 none;
        color: var(--white);
        background-color: var(--black);
    }
    
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

export const CreateHeader = styled.h1`
    margin: 0 auto;
    color: var(--white);
`

export const CustomButton = styled(Button)`
    margin-top: 20px;
    align-self: center;
    width: 10vw;
    border-radius: 20px;
    background-color: var(--blue);
    border: 0px;
    transition: 0.3s ease-in-out;

    &:hover {
        background-color: var(--blue);
        transform: translateY(-3px);
    }
`

export const CreateBackButton = styled(Link)`
    margin-top: 10px;
    width: 30px;
    display: flex;
    align-items: center;
    background-color: var(--light-black);
    height: 40px;
    font-size: 20px;
    transition: 0.3s ease-in-out;

    &:hover {
        transform: translateX(-3px);
    }
`