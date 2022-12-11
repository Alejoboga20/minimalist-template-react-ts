import { Button, InputField } from 'common';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routes';

const Signin = () => {
	const navigate = useNavigate();

	return (
		<>
			<form>
				<fieldset>
					<legend className="hidden">Signin</legend>
					<InputField
						label="Email"
						placeholder="Type your email"
						name="email"
					/>
					<InputField
						label="Password"
						placeholder="Type your password"
						type="password"
						name="password"
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
