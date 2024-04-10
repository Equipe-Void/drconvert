import { User } from "@/app/_store/user-store";
import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

interface LoginRequest {
	email: string;
	password: string;
}

interface LoginResponse {
	token: string;
	user: User;
}

export const login = async ({ email, password }: LoginRequest) => {
	return await fetchWrapper<LoginResponse>("auth", {
		method: "POST",
		body: JSON.stringify({
			email: email.toString(),
			password: password.toString(),
		}),
		headers: new Headers({ "content-type": "application/json" }),
	});
};
