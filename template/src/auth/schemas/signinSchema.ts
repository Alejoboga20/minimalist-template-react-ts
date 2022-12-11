import * as yup from 'yup';

export type SigninFormData = {
	email: string;
	password: string;
};

export const SigninSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().required(),
});
