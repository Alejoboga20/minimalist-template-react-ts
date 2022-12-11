import { createBrowserRouter } from 'react-router-dom';
import { Error, Root } from 'common';
import { AuthRoot, Signin, Signup } from 'auth';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
	},
	{
		path: '/auth',
		element: <AuthRoot />,
		children: [
			{
				path: '/auth/signin',
				element: <Signin />,
			},
			{
				path: '/auth/register',
				element: <Signup />,
			},
		],
	},
]);
