import { AuthState, User } from 'auth';

type AuthActionType =
	| {
			type: '[Auth] - Start Signin';
	  }
	| {
			type: '[Auth] - Signin';
			payload: User;
	  }
	| {
			type: '[Auth] - Signin Failure';
			payload: any;
	  };

export const AuthReducer = (
	state: AuthState,
	action: AuthActionType
): AuthState => {
	switch (action.type) {
		case '[Auth] - Start Signin':
			return {
				...state,
				isLoading: true,
			};
		case '[Auth] - Signin':
			return {
				...state,
				user: action.payload,
				isLoading: false,
				isAuth: true,
			};
		case '[Auth] - Signin Failure':
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};

		default:
			return state;
	}
};
