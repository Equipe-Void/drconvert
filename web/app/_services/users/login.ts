import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

interface LoginRequest {
	email: string;
	password: string;
}

export const login = async ({ email, password }: LoginRequest) => {
	return await fetchWrapper<{ token: string }>("auth", {
		method: "POST",
		body: JSON.stringify({
			email: email.toString(),
			password: password.toString(),
		}),
		headers: new Headers({ "content-type": "application/json" }),
	});
};
