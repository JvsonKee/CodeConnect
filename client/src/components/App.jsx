import CreateAccount from "./CreateAccount"
import HomePage from "./Homepage"
import ExploreResults from "./ExploreResults"
import { Container } from "./styles/Container"
import Normalizer from "./styles/Global"
function App() {

  return (
    <Container>
      <Normalizer />
      <CreateAccount />
    </Container>
  )
}

export default App
