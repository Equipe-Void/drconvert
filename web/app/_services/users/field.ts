import Cookies from "js-cookie";

import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

export interface Field {
	id?: number;
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

interface UpdateFieldRequest {
	field: Omit<Field, "project">;
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

export async function updateField({ field }: UpdateFieldRequest) {
	return await fetchWrapper(`fields/${field.id}`, {
		method: "PUT",
		body: JSON.stringify({
			name: field.name,
			type: field.type,
			isIdentifier: field.isIdentifier,
			isNullable: field.isNullable,
		}),
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}
