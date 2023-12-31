import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ExplorePage from './pages/Explore/ExplorePage';
import UserPage from './pages/Account/UserPage';
import GlobalStyles from './styles/Global';
import HomePage from './pages/Home/Homepage';
import NewDMPage from "./pages/NewDM/NewDMPage"
import GuestHome from "./pages/GuestHome/GuestHomePage"
import DMPage from "./pages/DirectMessages/DMPage"
import CreateAccount from "./pages/CreateAccount/CreateAccount"
import PostThreadPage from "./pages/PostThread/PostThreadPage"
import OpenedMessage from "./pages/OpenedMessage/Kirby/OpenedMessagePage"
import OpenedMessage2 from "./pages/OpenedMessage/Boo/OpenedMessagePage2"
import OpenedMessage3 from "./pages/OpenedMessage/Sonic/OpenedMessagePage3"
import ExploreResults from './pages/Explore/ExploreResults';

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
		element: <ExplorePage isGuestView={0} />
	},

	{
		path: '/CodeConnect/guest-explore',
		element: <ExplorePage isGuestView={1}/>
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
		path: '/CodeConnect/profile/:userName',
		element: <UserPage/>
	},

	{
		path: '/CodeConnect/guest-home',
		element: <GuestHome />
	},

	{
		path: '/CodeConnect/create-account',
		element: <CreateAccount />
	},

	{
		path: '/CodeConnect/:author/:id',
		element: <PostThreadPage isGuestView={0} />
	},

	{
		path: '/CodeConnect/guest-view/:author/:id',
		element: <PostThreadPage isGuestView={1} />
	},

	{
		path: '/CodeConnect/explore-results/:id',
		element: <ExploreResults />
	}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<GlobalStyles />
		<RouterProvider router={router} />
	</div>

)
