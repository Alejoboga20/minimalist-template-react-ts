import { Button, InputField } from 'common';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

const Register = () => {
	const navigate = useNavigate();

	return (
		<>
			<form>
				<fieldset>
					<legend className="hidden">Signup</legend>
					<InputField
						label="Full Name"
						placeholder="Type your email"
						type="email"
						name="username"
					/>
					<InputField
						label="Email"
						placeholder="Type your email"
						type="text"
						name="email"
					/>
					<InputField
						label="Password"
						placeholder="Type your password"
						type="password"
						name="password"
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
