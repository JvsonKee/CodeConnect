import UserPage from "../pages/UserPage"
import HomePage from "./Homepage"
import { Container } from "./styles/Container"
import Normalizer from "./styles/Global"
function App() {

  return (
    <Container>
      <Normalizer />
      <UserPage/>
    </Container>
  )
}

export default App
