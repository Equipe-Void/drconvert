import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { APP_ROUTES } from "../_constants/app-routes";
import { checkUserAuthenticated } from "../_functions/check-use-authenticated";

interface PrivateRouteProps {
	children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
	const { push } = useRouter();

	const isUserAuthenticated = checkUserAuthenticated();

	useEffect(() => {
		if (!isUserAuthenticated) {
			push(APP_ROUTES.public.login);
		}
	}, [isUserAuthenticated, push]);

	return (
		<>
			{!isUserAuthenticated && null}
			{isUserAuthenticated && children}
		</>
	);
}
