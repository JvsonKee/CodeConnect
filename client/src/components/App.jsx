import ExplorePage from "./ExplorePage"
import HomePage from "./Homepage"
import DMPage from "./DMPage"
import WelcomePage from "./WelcomePage"
import OpenedMessagePage from "./OpenedMessagePage"
import NewDMPage from "./NewDMPage"
import { Container } from "./styles/Container"
import GlobalStyles from "./styles/Global"
function App() {

	return (
		<Container>
			<GlobalStyles />
			<HomePage />
			
		</Container>
	)
	
}

export default App
