import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ExplorePage from './pages/Explore/ExplorePage';
import UserPage from './pages/Account/UserPage';
import GlobalStyles from './styles/Global';
import HomePage from './pages/Home/Homepage';
import WelcomePage from "./pages/Welcome/WelcomePage"
import NewDMPage from "./pages/NewDM/NewDMPage"
import GuestHome from "./pages/GuestHome/GuestHomePage"
import DMPage from "./pages/DirectMessages/DMPage"
import PostThreadPage1 from "./pages/OpenedThread/PostThreadPage1"
import PostThreadPage2 from "./pages/OpenedThread/PostThreadPage2"
import PostThreadPage3 from "./pages/OpenedThread/PostThreadPage3"
import OpenedMessage from "./pages/OpenedMessage/Kirby/OpenedMessagePage"
import OpenedMessage2 from "./pages/OpenedMessage/Boo/OpenedMessagePage2"
import OpenedMessage3 from "./pages/OpenedMessage/Sonic/OpenedMessagePage3"

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
		path: '/CodeConnect/PixelPioneer/0',
		element: <PostThreadPage1 />
	},

	{
		path: '/CodeConnect/madscientist/1',
		element: <PostThreadPage2 />
	},

	{
		path: '/CodeConnect/supasonic/2',
		element: <PostThreadPage3 />
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
		path: '/CodeConnect/dm-kirby',
		element: <OpenedMessage />
	},

	{
		path: '/CodeConnect/dm-boo',
		element: <OpenedMessage2 />
	},

	{
		path: '/CodeConnect/dm-sonic',
		element: <OpenedMessage3 />
	},

	{
		path: '/CodeConnect/new-direct-message',
		element: <NewDMPage />
	},

	{
		path: '/CodeConnect/account',
		element: <UserPage />
	},

	{
		path: '/CodeConnect/guest-home',
		element: <GuestHome />
	},
	
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<GlobalStyles />
		<RouterProvider router={router} />
	</div>

)
