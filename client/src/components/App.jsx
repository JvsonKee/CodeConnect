import ExplorePage from "./ExplorePage"
import ExploreResults from './ExploreResults'
import HomePage from "./Homepage"
import CreateAccount from './CreateAccount'
import { Container } from "./styles/Container"
import GlobalStyles from "./styles/Global"
function App() {

	return (
		<Container>
			<GlobalStyles />
			{/* <HomePage /> */}
			<CreateAccount/>
		</Container>
	)
	
}

export default App
