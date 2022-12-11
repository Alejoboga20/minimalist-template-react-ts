import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterFormData, RegisterSchema } from 'auth';
import { Button, InputField } from 'common';
import { Routes } from 'routes';

const Register = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: yupResolver(RegisterSchema),
	});

	const onSubmit = (data: RegisterFormData) => {
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<fieldset>
					<legend className="hidden">Signup</legend>
					<InputField
						label="Full Name"
						placeholder="Type your email"
						type="text"
						name="username"
						error={errors.username?.message}
						register={register}
					/>
					<InputField
						label="Email"
						placeholder="Type your email"
						type="text"
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
					<Button label="Sign up" fullWidth type="submit" />
				</fieldset>
			</form>

			<div className="mt-3 rounded-lg bg-white px-8 py-6 text-center text-black">
				<p>Already have an account?</p>
				<Button
					label="Sign in"
					variant="outline"
					fullWidth
					onClick={() => navigate(Routes.SIGNIN)}
				/>
			</div>
		</>
	);
};

export default Register;
