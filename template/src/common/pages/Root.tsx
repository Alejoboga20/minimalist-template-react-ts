import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div>
			<h1>Hello Router</h1>
			<h2>This is where your home page should be</h2>
			<p>This is also the place to implement a base layout</p>

			<div id="base layout">
				{/* Placeholder for nested routes sent as children */}
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
