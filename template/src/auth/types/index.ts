export interface SignInResponse {
	user: User;
}

export interface User {
	id: number;
	email: string;
	first_name: null;
	last_name: null;
	name: string;
	username: string;
	gender: string;
	avatar: Avatar;
}

export interface Avatar {
	original_url: null;
	normal_url: null;
	small_thumb_url: null;
}
