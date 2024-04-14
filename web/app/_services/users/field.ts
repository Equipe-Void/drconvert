import Cookies from "js-cookie";

import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

export interface Field {
	name: string;
	type: string;
	isNullable: boolean;
	isIdentifier: boolean;
	project: {
		id: number;
		name: string;
	};
}

interface CreateFieldsRequest {
	fields: Field[];
}

export async function createFields({ fields }: CreateFieldsRequest) {
	return await fetchWrapper("fields/list", {
		method: "POST",
		body: JSON.stringify({
			fields: fields,
		}),
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}
