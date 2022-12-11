import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { SigninFormData, SigninSchema } from 'auth';
import { Button, InputField } from 'common';
import { Routes } from 'routes';

const Signin = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SigninFormData>({
		resolver: yupResolver(SigninSchema),
		mode: 'onTouched',
	});

	const onSubmit = (data: SigninFormData) => {
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
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
					<Button label="Log in" fullWidth type="submit" />
				</fieldset>
			</form>

			<div className="mt-3 rounded-lg bg-white px-8 py-6 text-center text-black">
				<p>Don't have an account?</p>
				<Button
					label="Sign up"
					variant="outline"
					fullWidth
					onClick={() => navigate(Routes.REGISTER)}
				/>
			</div>
		</>
	);
};

export default Signin;
