import {PageContainer, LoginForm, InputField, LogInButton, ContinueLink, LogoText, LogoCode, LogoConnect, UsernameText} from "./WelcomePage.styled"
import{ CreateAccountButton } from "./CreateAccountButton.styled"
import { Container } from "../../styles/Container"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authorization from './Authorization';

function WelcomePage(){

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await Authorization.login(username, password);
  
        if (response.success) {
          // Successful login
          console.log('Login successful:', response.user);
  
          // Redirect to the Home page
          navigate('/CodeConnect/home');
        } else {
          // Display an error message for unsuccessful login
          setError(response.error);
        }
      } catch (error) {
        console.error('Login error:', error);
        // Display a generic error message for unexpected errors
        setError('Unknown error has occured. Please try again.');
      }
    };

    return (
        <Container>
            <PageContainer>     
                <LogoText>
                    <LogoCode>Code</LogoCode><LogoConnect>Connect</LogoConnect>
                </LogoText>
                <LoginForm>
                    <label htmlFor="username">Username:</label>
                    <InputField 
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">Password:</label>
                    <InputField 
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <LogInButton type="button" onClick={handleLogin} >Login</LogInButton>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <ContinueLink to="/CodeConnect/guest-home">Continue As Guest</ContinueLink>
                </LoginForm>
                <CreateAccountButton>Create Account</CreateAccountButton>
            </PageContainer>
          
        </Container>
    )
}

export default WelcomePage