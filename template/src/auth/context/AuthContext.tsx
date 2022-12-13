import { createContext } from 'react';
import { AuthState } from './AuthProvider';

export interface AuthContextProps extends AuthState {
	signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);
