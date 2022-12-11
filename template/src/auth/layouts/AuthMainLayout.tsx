interface AuthMainLayoutProps {
	children: JSX.Element | JSX.Element[];
}

export const AuthMainLayout = ({ children }: AuthMainLayoutProps) => {
	return (
		<div className="h-screen w-screen">
			<div className="flex flex-col items-center px-4 pt-10">{children}</div>
		</div>
	);
};
