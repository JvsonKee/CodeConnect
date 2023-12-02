import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ExplorePage from './pages/Explore/ExplorePage';
import UserPage from './pages/Account/UserPage';
import GlobalStyles from './styles/Global';

const router = createBrowserRouter([
	{
		path: '/CodeConnect/',
		element: <App />
	},
	{
		path: '/CodeConnect/explore',
		element: <ExplorePage />
	},
	{
		path: '/CodeConnect/account',
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
