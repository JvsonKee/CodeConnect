import { CreateAccountContainer, InputFields, TitleText } from "./styles/CreateAccount.styled";
import { Container } from "./styles/Container";

function CreateAccount() {
    return (  
        <Container>
            <CreateAccountContainer>
                <TitleText>
                    <h1>Create Account</h1>
                </TitleText>
                
                <InputFields>
                    <p>Email:</p>
                    <form>
                        <input type = "text"/>
                    </form>
                </InputFields>

                <InputFields>
                    <p>Username:</p>
                    <form>
                        <input type = "text"/>
                    </form>
                </InputFields>

                <InputFields>
                    <p>Password:</p>
                    <form>
                        <input type = "text"/>
                    </form>
                </InputFields>

                <InputFields>
                    <p>Confirm Password:</p>
                    <form>
                        <input type = "text"/>
                    </form>
                </InputFields>

                <InputFields>
                    <label>
                        <input type = "checkbox"/>
                        Agree to <a href = "https://youtu.be/dQw4w9WgXcQ?si=R9DEOM_xrrv_0aAM">Terms and Conditions</a>
                    </label>
                </InputFields>

                <InputFields>
                    <input type = "submit" value = "Create"/>
                </InputFields>
                

            </CreateAccountContainer>
        </Container>
    )
}

export default CreateAccount;