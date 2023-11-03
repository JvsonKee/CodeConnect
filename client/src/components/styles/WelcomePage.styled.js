import styled from "styled-components"

export const PageContainer = styled.div`
margin-left: 23vw;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
flex-direction: column;
gap: 10px;
`;

export const LoginForm = styled.form`
background-color: var(--blue-);
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
color: var(--white);
width: 70%;
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
margin-left: 15vw;
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

export const ContinueButton = styled.div`
margin-left: 15vw;
font-size: 12px;
width: 50%;
padding: 10px;
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
    color: var(--white);
`

export const LogoConnect = styled.div`
    font-weight: 900;
    font-size: 100px;
  color: var(--blue);
` 