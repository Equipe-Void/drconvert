import Cookies from "js-cookie";

import { User } from "@/app/_store/user-store";
import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

export interface Classification {
	id?: number;
	name: string;
	user: User;
}

interface CreateClassificationRequest {
	name: string;
	userId: number;
}

export async function createClassification({
	name,
	userId,
}: CreateClassificationRequest) {
	return await fetchWrapper<Classification>("classifications", {
		method: "POST",
		body: JSON.stringify({
			name: name,
			userId: userId,
		}),
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}

interface CreateFromToRequest {
	input: string;
	output: string;
	classificationId: number;
}

interface FromTo {
	id: number;
	input: string;
	output: string;
}

export async function createFromTo({
	input,
	output,
	classificationId,
}: CreateFromToRequest) {
	return await fetchWrapper<FromTo>("fromto", {
		method: "POST",
		body: JSON.stringify({
			input: input,
			output: output,
			classificationId: classificationId,
		}),
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}
