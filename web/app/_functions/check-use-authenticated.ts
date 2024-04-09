import Cookies from "js-cookie";

export const checkUserAuthenticated = () => {
	const token = Cookies.get("token");

	return !!token;
};
