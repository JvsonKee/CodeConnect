import CreateAccount from "./CreateAccount"
import HomePage from "./Homepage"
import ExploreResults from "./ExploreResults"
import { Container } from "./styles/Container"
import Normalizer from "./styles/Global"
import NavBar from "./NavBar"
import ExplorePage from "./ExplorePage"
import SearchBar from "./SearchBar"

function App() {

  return (
    <Container>
      <Normalizer />
      <ExploreResults />
    </Container>
  )
}

export default App
