import {PageContainer, LoginForm, InputField, LogInButton, ContinueButton, LogoText, LogoCode, LogoConnect} from "./styles/WelcomePage.styled"
import{ CreateAccountButton } from "./styles/CreateAccountButton.styled"
import { Container } from "./styles/Container";
function WelcomePage(){

    return (
        <Container>
            <PageContainer>     
                <LogoText>
                    <LogoCode>Code</LogoCode><LogoConnect>Connect</LogoConnect>
                </LogoText>
                <LoginForm>
                    <label for="username">Username:</label>
                    <InputField type="username" placeholder="Username" />
                    <label for="password">Password:</label>
                    <InputField type="password" placeholder="Password" />
                    <LogInButton type="submit">Login</LogInButton>
                </LoginForm>
                <ContinueButton>Continue As Guest</ContinueButton>
            </PageContainer>
            <CreateAccountButton>Create Account</CreateAccountButton>
        </Container>
    )
}

export default WelcomePage