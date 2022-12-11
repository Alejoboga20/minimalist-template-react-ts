import { createBrowserRouter } from 'react-router-dom';
import { Error, Products, Root, Signin, Signup } from 'pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: '/products',
				element: <Products />,
			},
		],
	},
	{
		path: '/signin',
		element: <Signin />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
]);
