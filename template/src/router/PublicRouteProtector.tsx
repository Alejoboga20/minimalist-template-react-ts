import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'auth';
import { RoutePaths } from '.';

export const PublicRouteProtector = ({ children }: RouteProtectorProps) => {
	const { isAuth } = useContext(AuthContext);

	return <>{isAuth ? <Navigate to={RoutePaths.ROOT} /> : children}</>;
};

interface RouteProtectorProps {
	children: JSX.Element | JSX.Element[];
}
