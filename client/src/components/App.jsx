import ExplorePage from "./ExplorePage"
import HomePage from "./Homepage"
import PostThreadPage from "./PostThreadPage"
import { Container } from "./styles/Container"
import GlobalStyles from "./styles/Global"
function App() {

  return (
    <Container>
      <GlobalStyles />
      <PostThreadPage/>
      {/* <HomePage /> */}
      {/* <ExplorePage /> */}
    </Container>
  )
}

export default App
