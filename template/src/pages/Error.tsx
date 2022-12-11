import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Error = () => {
	const error = useRouteError();

	if (!isRouteErrorResponse(error)) return <div>Oops!</div>;

	return (
		<div>
			<h1>Oops!</h1>
			<h2>{error.status}</h2>
			<p>{error.statusText}</p>
			{error.data?.message && <p>{error.data.message}</p>}
		</div>
	);
};

export default Error;
