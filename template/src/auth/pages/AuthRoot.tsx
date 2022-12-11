import { Outlet } from 'react-router-dom';
import { AuthMainLayout } from 'auth/layouts';

const AuthRoot = () => {
	return (
		<AuthMainLayout>
			<Outlet />
		</AuthMainLayout>
	);
};

export default AuthRoot;
