import { Container } from "./styles/Container";
import NavBar from "./NavBar";
import { ExploreResultsContainer, CustomCard } from "./styles/ExploreResultsContainer.styled";
import { Card } from "react-bootstrap";




function CreateAccount() {
    return (  
        <Container>
            <NavBar/>
            <ExploreResultsContainer>

                <CustomCard>
                    <Card.Header as = "h5"> Featured </Card.Header>
                    <Card.Body>
                        <Card.Title> Post title </Card.Title>
                        <Card.Text> Some sentence here blablabla. </Card.Text>
                    </Card.Body>
                </CustomCard>

                <CustomCard>
                    <Card.Header as = "h5"> Featured </Card.Header>
                    <Card.Body>
                        <Card.Title> Post title </Card.Title>
                        <Card.Text> Some sentence here blablabla. </Card.Text>
                    </Card.Body>
                </CustomCard>

                <CustomCard>
                    <Card.Header as = "h5"> Featured </Card.Header>
                    <Card.Body>
                        <Card.Title> Post title </Card.Title>
                        <Card.Text> Some sentence here blablabla. </Card.Text>
                    </Card.Body>
                </CustomCard>

                <CustomCard>
                    <Card.Header as = "h5"> Featured </Card.Header>
                    <Card.Body>
                        <Card.Title> Post title </Card.Title>
                        <Card.Text> Some sentence here blablabla. </Card.Text>
                    </Card.Body>
                </CustomCard>



            </ExploreResultsContainer>
        </Container>
    )
}

export default CreateAccount;