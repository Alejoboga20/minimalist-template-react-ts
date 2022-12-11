import { createBrowserRouter } from 'react-router-dom';
import { Error, Root } from 'common';
import { AuthRoot, Signin, Register } from 'auth';

export enum Routes {
	ROOT = '/',
	SIGNIN = '/signin',
	REGISTER = '/register',
}

export const router = createBrowserRouter([
	{
		path: Routes.ROOT,
		element: <Root />,
		errorElement: <Error />,
	},
	{
		element: <AuthRoot />,
		children: [
			{
				path: Routes.SIGNIN,
				element: <Signin />,
			},
			{
				path: Routes.REGISTER,
				element: <Register />,
			},
		],
	},
]);
