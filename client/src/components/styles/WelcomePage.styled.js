import styled from "styled-components"

export const PageContainer = styled.div`
margin-left: 25vw;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;
`;

export const LoginForm = styled.form`
background-color: var(--brown);
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
`;

export const InputField = styled.input`
width: 90%;
padding: 10px;
margin: 5px 0;
border: 1px solid #ccc;
border-radius: 3px;
align-items: center;
`;

export const LogInButton = styled.button`
margin-left: 12vw;
font-size: 15px;
width: 50%;
padding: 10px;
background-color: var(--green);
color: #fff;
border: none;
border-radius: 3px;
align-items: center;
cursor: pointer;
`;

export const ContinueButton = styled.button`
font-size: 15px;
width: 50%;
padding: 10px;
background-color: var(--green);
color: #fff;
border: none;
border-radius: 3px;
align-items: center;
cursor: pointer;
`;

export const LogoText = styled.div`
    display: flex

`;

export const LogoCode = styled.div`
    font-weight: 800;
    font-size: 100px;
`

export const LogoConnect = styled.div`
    font-weight: 900;
    font-size: 100px;
  color: var(--green);
  //padding-left: 150px;
` 