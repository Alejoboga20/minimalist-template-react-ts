import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from 'auth';
import { RoutePaths } from '.';

export const PrivateRouteProtector = ({ children }: RouteProtectorProps) => {
	const { isAuth } = useContext(AuthContext);

	return <>{isAuth ? children : <Navigate to={RoutePaths.SIGNIN} />}</>;
};

interface RouteProtectorProps {
	children: JSX.Element | JSX.Element[];
}
