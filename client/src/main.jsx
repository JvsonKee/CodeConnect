import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ExplorePage from './pages/Explore/ExplorePage';
import UserPage from './pages/Account/UserPage';
import GlobalStyles from './styles/Global';

const router = createHashRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: 'explore',
		element: <ExplorePage />
	},
	{
		path: 'account',
		element: <UserPage />
	}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<GlobalStyles />
		<RouterProvider router={router} />
	</div>

)
