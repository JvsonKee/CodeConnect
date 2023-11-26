import UserPage from "./pages/Account/UserPage"
import ExplorePage from "./pages/Explore/ExplorePage"
import HomePage from "./pages/Home/Homepage"
import { Container } from "./styles/Container"
import GlobalStyles from "./styles/Global"
function App() {
	return (
		<Container>
			<GlobalStyles />
			{/* <HomePage /> */}
      <UserPage/>
			{/* <ExplorePage /> */}
		</Container>
	)
}

export default App
