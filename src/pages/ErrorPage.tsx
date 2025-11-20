import type { FC } from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export interface ErrorResponse {
	status: number;
	statusText: string;
	data: unknown;
	error?: Error;
	internal: boolean;
}

const ErrorResponseBoundary: FC<ErrorResponse> = (error: ErrorResponse) => {
	return (
		<div
			className="container w-100 d-flex flex-column justify-content-center"
			style={{ height: "100vh" }}
		>
			<h1>Oops!</h1>
			<p>Une erreur est survenue !!!</p>
			{error.status === 404 && (
				<p>La page que vous avez demandée n'existe pas.</p>
			)}
			<div>
				<Link to="/" className="btn btn-primary mt-3">
					Retour à l’accueil
				</Link>
			</div>
		</div>
	);
};
const GenericErrorBoundary: FC = () => {
	return (
		<div
			className="container w-100 d-flex flex-column justify-items-center"
			style={{ height: "100vh" }}
		>
			<h1>Oops!</h1>
			<p>Une erreur est survenue !!!</p>
			<div>
				<Link to="/" className="btn btn-primary mt-3">
					Retour à l’accueil
				</Link>
			</div>
		</div>
	);
};

export const ErrorPage: FC = () => {
	const error = useRouteError() as ErrorResponse;
	if (isRouteErrorResponse(error)) {
		return <ErrorResponseBoundary {...error} />;
	}

	return <GenericErrorBoundary />;
};

ErrorPage.displayName = "ErrorPage";
