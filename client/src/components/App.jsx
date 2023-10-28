import HomePage from "./Homepage"
import NavBar from "./NavBar"
import { Container } from "./styles/Container"
import Normalizer from "./styles/Global"
function App() {

  return (
    <Container>
      <Normalizer />
      <NavBar />
      <HomePage />
    </Container>
  )
}

export default App
