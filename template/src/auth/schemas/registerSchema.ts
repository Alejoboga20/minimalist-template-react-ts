import * as yup from 'yup';

export type RegisterFormData = {
	username: string;
	email: string;
	password: string;
};

export const RegisterSchema = yup.object({
	username: yup.string().required(),
	email: yup.string().email().required(),
	password: yup.string().required(),
});
