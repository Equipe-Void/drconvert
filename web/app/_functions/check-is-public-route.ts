import { APP_ROUTES } from "../_constants/app-routes";

export const checkIsPublicRoute = (asPath: string) => {
	const appPublicRoutes = Object.values(APP_ROUTES.public);

	return appPublicRoutes.includes(asPath);
};
