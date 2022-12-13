import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { SigninFormData, SigninSchema } from 'auth';
import { Button, InputField } from 'common';
import { RoutePaths } from 'router';
import { AuthContext } from 'auth';

const Signin = () => {
	const navigate = useNavigate();
	const { isLoading, signIn, error } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SigninFormData>({
		resolver: yupResolver(SigninSchema),
		mode: 'onTouched',
	});

	const onSubmit = async (data: SigninFormData) => {
		await signIn(data.email, data.password);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="w-1/4">
				<fieldset disabled={isLoading}>
					<legend className="hidden">Signin</legend>
					<InputField
						label="Email"
						placeholder="Type your email"
						name="email"
						error={errors.email?.message}
						register={register}
					/>
					<InputField
						label="Password"
						placeholder="Type your password"
						type="password"
						name="password"
						error={errors.password?.message}
						register={register}
					/>
					<Button label="Log in" fullWidth type="submit" disabled={isLoading} />
				</fieldset>

				{error && <p className="mt-2 text-center text-red-500">{error}</p>}
			</form>

			<div className="mt-3 rounded-lg bg-white px-8 py-6 text-center text-black">
				<p>Don't have an account?</p>
				<Button
					label="Sign up"
					variant="outline"
					fullWidth
					onClick={() => navigate(RoutePaths.REGISTER)}
				/>
			</div>
		</>
	);
};

export default Signin;
