import ExplorePage from "./ExplorePage"
import HomePage from "./Homepage"
import { Container } from "./styles/Container"
import GlobalStyles from "./styles/Global"
function App() {

  return (
    <Container>
      <GlobalStyles />
      {/* <HomePage /> */}
      <ExplorePage />
    </Container>
  )
}

export default App
