import { CreateAccountContainer, InputFields, TitleText, FormContainer, CustomForm, H1, CustomButton, IconContainer } from "./styles/CreateAccount.styled";
import { Container } from "./styles/Container";

import 'bootstrap/dist/css/bootstrap.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//import { Modal } from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Modal } from "react-bootstrap";



function CreateAccount() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (  
        <Container>
            
            <CreateAccountContainer>
            
                <H1>
                    <a href = "./components/HomePage"><IconContainer/></a>
                    CREATE ACCOUNT
                </H1>

                <FormContainer>

                    <CustomForm>
                        <Form.Group className = "createAcct" controlId = "email">
                            <Form.Label> Email address </Form.Label>
                            <br/>
                            <Form.Control type = "email" placeholder = "Enter email" size = "md" />
                        </Form.Group>
                    </CustomForm>

                    <CustomForm>
                        <Form.Group className = "createAcct" controlId = "username">
                            <Form.Label> Username </Form.Label>
                            <br/>
                            <Form.Control type = "text" placeholder = "Enter username" size = "md" />
                        </Form.Group>
                    </CustomForm>

                    <CustomForm>
                        <Form.Group className = "createAcct" controlId = "password">
                            <Form.Label> Password </Form.Label>
                            <br/>
                            <Form.Control type = "password" placeholder = "Enter password" size = "md" />
                        </Form.Group>
                    </CustomForm>

                    <CustomForm>
                        <Form.Group className = "createAcct" controlId = "confirmPassword">
                            <Form.Label> Confirm Password </Form.Label>
                            <br/>
                            <Form.Control type = "password" placeholder = "Confirm password" size = "md" />
                        </Form.Group>
                    </CustomForm>

                    <CustomForm>
                        <label onClick = {handleShow}>
                            <Form.Check type = "checkbox" label = "Agree to Terms and Conditions" id = "terms"/>
                        </label>
                        
                    </CustomForm>
                    

                    <Modal show = {show} onHide = {handleClose} animation = {false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Terms and Conditions</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            fjndrijfngdfgjndijrfngjndrg
                        </Modal.Body>
                    </Modal>

                    <CustomButton variant = "outline-light">
                        SUBMIT
                    </CustomButton>

                </FormContainer>
            </CreateAccountContainer>

            
        </Container>
    )
}

export default CreateAccount;