import { useReducer } from 'react';
import { isAxiosError } from 'axios';

import { api } from 'api';
import { SignInResponse, AuthContext, AuthReducer, User } from 'auth';

export interface AuthState {
	isAuth: boolean;
	isLoading: boolean;
	user?: User;
	error?: any;
}

const AUTH_INITIAL_STATE: AuthState = {
	isAuth: false,
	isLoading: false,
	user: undefined,
	error: undefined,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [state, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE);

	const signIn = async (email: string, password: string) => {
		dispatch({ type: '[Auth] - Start Signin' });

		try {
			const { data } = await api.post<SignInResponse>('users/sign_in', {
				user: { email, password },
			});
			dispatch({ type: '[Auth] - Signin', payload: data.user });
		} catch (error) {
			if (isAxiosError(error)) {
				dispatch({
					type: '[Auth] - Signin Failure',
					payload: error.response?.data.error,
				});
			}
		}
	};

	return (
		<AuthContext.Provider value={{ ...state, signIn }}>
			{children}
		</AuthContext.Provider>
	);
};

interface AuthProviderProps {
	children: JSX.Element | JSX.Element[];
}
