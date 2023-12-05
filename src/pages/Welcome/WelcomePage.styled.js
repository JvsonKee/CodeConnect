import styled from "styled-components"
import { Link } from 'react-router-dom';


export const PageContainer = styled.div`
margin-left: 29vw;
display: flex;
flex-direction: column;
justify-content: center;
//background-color: red;
align-items: center;
height: 100vh;
gap: 10px;
`;

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: var(--blue-);
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
color: var(--white);
width: 70%;
//gap: 5px;
`;

export const InputField = styled.input`
width: 90%;
padding: 10px;
margin: 5px 0;
border: 1px solid var(--light-black);
border-radius: 50px;
align-items: center;
color: var(--white);
background-color:var(--light-black);
`;

export const LogInButton = styled.button`
font-size: 15px;
width: 22%;
height: 17%;
padding: 10px;
background-color: var(--blue);
color: #fff;
border: none;
border-radius: 50px;
align-items: center;
margin-top: 2px;
cursor: pointer;
`;

export const ContinueLink = styled(Link)`
font-size: 11px;
text-decoration: underline; 
padding: 10px;
color: var(--grey);
border: none;
border-radius: 3px;

cursor: pointer;
`;

export const LogoText = styled.div`
    display: flex
`;

export const LogoCode = styled.div`
    font-weight: 800;
    font-size: 100px;
    color: var(--white);
`;

export const LogoConnect = styled.div`
    font-weight: 900;
    font-size: 100px;
  color: var(--blue);
`; 

export const LoginText = styled.label`
    margin-right: 21vw;
    font-size: 17px;
    color: var(--white);
`

export const ForgotPassword = styled(Link)`
font-size: 14px;
  color: var(--blue);
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  background: var(--black);
  width: 400px;
  height: 300px; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ForgotPasswordText = styled.label`
    font-size: 20px;
    color: black;
    text-align: center;
    color: white;
`

export const CloseButton = styled.div`
  background-color: var(--light-black); 
  color: white;
  padding: 5px 20px;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
`

export const SubmitButton = styled.button`
font-size: 15px;
width: 22%;
height: 17%;
padding: 10px;
background-color: var(--blue);
color: #fff;
border: none;
border-radius: 50px;
align-items: center;
cursor: pointer;
`;