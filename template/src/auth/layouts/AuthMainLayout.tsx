interface AuthMainLayoutProps {
	children: JSX.Element | JSX.Element[];
}

export const AuthMainLayout = ({ children }: AuthMainLayoutProps) => {
	return (
		<div>
			<h1>Main Layout</h1>
			<div>{children}</div>
		</div>
	);
};
