import {PageContainer, LoginForm, InputField, LogInButton, ContinueLink, LogoText, LogoCode, LogoConnect, LoginText, ForgotPassword, PopupContainer, PopupContent,ForgotPasswordText, CloseButton, SubmitButton} from "./WelcomePage.styled"
import{ CreateAccountButton } from "./CreateAccountButton.styled"
import { Container } from "../../styles/Container"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authorization from './Authorization';

function WelcomePage(){

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');;
    const [error, setError] = useState('');
    const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleLogin = async () => {
      try {
        const response = await Authorization.login(username, password);
  
        if (response.success) {
          console.log('Login successful:', response.user);
          navigate('/CodeConnect/home');
        } else {
          setError(response.error);
        }
      } catch (error) {
        console.error('Login error:', error);
        setError('Unknown error has occured. Please try again.');
      }
    };

    const handleForgotPasswordSubmit = () => {
      // Simulate sending email (front-end only)
      event.preventDefault();
      setIsEmailSent(true);
    };

    const closeSuccessMessage = () => {
      setIsEmailSent(false);
    };

    const openForgotPasswordPopup = () => {
      event.preventDefault();
      setShowForgotPasswordPopup(true);
    };
  
    const closeForgotPasswordPopup = () => {
      setShowForgotPasswordPopup(false);
    };


    return (
        <Container>
            <PageContainer>     
                <LogoText>
                    <LogoCode>Code</LogoCode><LogoConnect>Connect</LogoConnect>
                </LogoText>
                <LoginForm>
                   <LoginText>Username:</LoginText>
                    <InputField 
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <LoginText>Password:</LoginText>
                    <InputField 
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <LogInButton type="button" onClick={handleLogin} >Login</LogInButton>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <ForgotPassword onClick={event => openForgotPasswordPopup(event)}>Forgot Password?</ForgotPassword>
                    {showForgotPasswordPopup && (
                      <PopupContainer>
                        <PopupContent>
                          <ForgotPasswordText>Enter your email to reset your password: </ForgotPasswordText>
                          <InputField
                            type="text"
                            placeholder="Email"
                          />
                          <SubmitButton onClick={handleForgotPasswordSubmit}>Submit</SubmitButton>
                          <CloseButton onClick={closeForgotPasswordPopup}>Close</CloseButton>
                        </PopupContent>
                      </PopupContainer>
                    )}
                    <ContinueLink to="/CodeConnect/guest-home">Continue As Guest</ContinueLink>
                </LoginForm>
                {/* Conditional rendering of success message popup */}
                {isEmailSent && (
                  <PopupContainer>
                    <PopupContent>
                      <ForgotPasswordText>Email successfully sent!</ForgotPasswordText>
                      <CloseButton onClick={closeSuccessMessage}>Close</CloseButton>
                    </PopupContent>
                  </PopupContainer>
                )}
                <CreateAccountButton >Create Account</CreateAccountButton>
            </PageContainer>
        </Container>
    )
}

export default WelcomePage