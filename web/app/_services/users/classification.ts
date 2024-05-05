import Cookies from "js-cookie";

import { fetchWrapper } from "@/app/_functions/fetch-wrapper";

export interface Classification {
	id: number;
	name: string;
	fromTo: [
		{
			id: number;
			input: string;
			output: string;
		},
	];
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

interface FindAllClassificationsRequest {
	userId: number;
}

export async function findAllClassifications({
	userId,
}: FindAllClassificationsRequest) {
	return await fetchWrapper<Classification[]>(
		`classifications/user/${userId}`,
		{
			method: "GET",
			headers: new Headers({
				"content-type": "application/json",
				Authorization: `Bearer ${Cookies.get("token")}`,
			}),
		},
	);
}

interface DeleteClassificationRequest {
	classificationId: number;
}

export async function deleteClassification({
	classificationId,
}: DeleteClassificationRequest) {
	return await fetchWrapper(`classifications/${classificationId}`, {
		method: "DELETE",
		headers: new Headers({
			"content-type": "application/json",
			Authorization: `Bearer ${Cookies.get("token")}`,
		}),
	});
}
