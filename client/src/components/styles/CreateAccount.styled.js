import styled from "styled-components"
import { Form, FormLabel } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const CreateAccountContainer = styled.div`
    width: 100vw;
    height: 100vh;  
    background-color: #242424;
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
    padding-left: 30vw;
    padding-right: 30vw;

`

export const CustomForm = styled(Form)`

    padding-top: 3vh;

    label {
        color: white;
    }

    #termsConditions {
        padding-left: 50vw;
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
    margin-left: 15vw;
    width: 10vw;
`

export const IconContainer = styled(ArrowBackIosNewIcon)`
    color: white;
    margin-left: -10vw;
    margin-top: 1vh;
    position: absolute;
    
`
