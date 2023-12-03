import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ExplorePage from './pages/Explore/ExplorePage';
import UserPage from './pages/Account/UserPage';
import GlobalStyles from './styles/Global';
import HomePage from './pages/Home/Homepage';
import WelcomePage from "./pages/Welcome/WelcomePage"
import GuestHome from "./pages/GuestHome/GuestHomePage"
import DMPage from "./pages/DirectMessages/DMPage"
import PostThreadPage from "./pages/PostThread/PostThreadPage"

const router = createBrowserRouter([
	{
		path: '/CodeConnect/',
		element: <App />
	},

	{
		path: '/CodeConnect/home',
		element: <HomePage />
	},

	{
		path: '/CodeConnect/explore',
		element: <ExplorePage />
	},

	{
		path: '/CodeConnect/direct-messages',
		element: <DMPage />
	},

	{
		path: '/CodeConnect/account',
		element: <UserPage />
	},

	{
		path: '/CodeConnect/guest-home',
		element: <GuestHome />
	},
	
	{
		path: '/CodeConnect/thread',
		element: <PostThreadPage />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<GlobalStyles />
		<RouterProvider router={router} />
	</div>

)
