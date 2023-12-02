import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import HomePage from './pages/Home/Homepage';
import GuestHomePage from './pages/GuestHome/GuestHomepage';
import GuestExplorePage from './pages/GuestExplore/GuestExplorePage';
import ExplorePage from './pages/Explore/ExplorePage';
import DMPage from './pages/DirectMessages/DMPage';
import UserPage from './pages/Account/UserPage';
import GlobalStyles from './styles/Global';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},

	{
		path: '/guest-home',
		element: <GuestHomePage />
	},

	{
		path: '/guest-explore',
		element: <GuestExplorePage />
	},

	{
		path: '/home',
		element: <HomePage />
	},

	{
		path: 'explore',
		element: <ExplorePage />
	},

	{
		path: 'direct-messages',
		element: <DMPage />
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
