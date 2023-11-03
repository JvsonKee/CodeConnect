import ExplorePage from "./ExplorePage"
import HomePage from "./Homepage"
import WelcomePage from "./WelcomePage"
import DMPage from "./DMPage"
import OpenedMessagePage from "./OpenedMessagePage"
import NewDMPage from "./NewDMPage"
import { Container } from "./styles/Container"
import GlobalStyles from "./styles/Global"
function App() {

	return (
		<Container>
			<GlobalStyles />
			{/* <HomePage /> */}
			<WelcomePage />
		</Container>
	)
	
}

export default App
