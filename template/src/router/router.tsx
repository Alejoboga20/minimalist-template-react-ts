import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import { PublicRouteProtector, PrivateRouteProtector } from './';
import { AuthRoot, Signin, Register } from 'auth';
import { Error, Root } from 'common';

export enum RoutePaths {
	ROOT = '/',
	SIGNIN = '/signin',
	REGISTER = '/register',
}

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route
				path={RoutePaths.ROOT}
				element={
					<PrivateRouteProtector>
						<Root />
					</PrivateRouteProtector>
				}
				errorElement={<Error />}
			>
				{/* TODO: Include Root Children routes here, they are goind to be protected as well */}
				<Route path="/products" element={<div>Products Page</div>} />
				<Route path="/profule" element={<div>Profile Page</div>} />
			</Route>
			<Route
				element={
					<PublicRouteProtector>
						<AuthRoot />
					</PublicRouteProtector>
				}
			>
				<Route path={RoutePaths.SIGNIN} element={<Signin />} />
				<Route path={RoutePaths.REGISTER} element={<Register />} />
			</Route>
		</Route>
	)
);
